<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        User Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Mobile
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item of userList" :key="item.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.id }}
                    </th>
                    <td class="px-6 py-4">
                        {{ item.username }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.mobile }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.email }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.status }}
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav class="flex items-center justify-between p-2" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span
                    class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span
                    class="font-semibold text-gray-900 dark:text-white">1000</span></span>
            <ul class="inline-flex -space-x-px text-sm h-8">
                <li>
                    <a class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :disabled="prev_cursor.length == 1" @click="paginationMode('cursor', -1)">Previous</a>
                </li>
                <li v-for="i in total_pages" :key="i">
                    <a class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        @click="paginationMode('page', i)">{{ i }}</a>
                </li>
                <li>
                    <a class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        @click="paginationMode('cursor', 1)">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
    
<script setup lang="ts">
import { ref, onMounted, defineExpose } from 'vue'
import { axios } from '@/services/axios.service';
const userList = ref()
const pageMode = ref('cursor')
const total_records = ref()
const page_limit = ref(10)
const total_pages = ref()
const cursor = ref(2)
const next_cursor = ref(2)
const prev_cursor = ref([])
var filterData: any;
const filterUser = (data: any) => {
    console.log('prop', data)
    filterData = data
    fetchUser(filterData)
}
defineExpose({ filterUser })

onMounted(() => {
    fetchUser()
})
const fetchUser = async (filter = null) => {
    const res: any = await axios.post(`/user?${pageMode.value}=${cursor.value}&limit=${page_limit.value}`, filter).catch((err) => {
        console.error(err.response)
        return
    })
    if (res.data && res.data.statuscode !== 200) {
        console.error("ERROR", res.data)
    }
    userList.value = res.data.data.users
    let meta = res.data.data.meta
    total_records.value = meta.cursor.total_record
    page_limit.value = meta.cursor.limit || 10
    total_pages.value = Math.ceil(total_records.value / Number(page_limit.value))
    next_cursor.value = meta.cursor.next_cursor
    if (!prev_cursor.value.includes(meta.cursor.prev_cursor)) prev_cursor.value.push(meta.cursor.prev_cursor)
}
const paginationMode = async (mode: string, value: number) => {
    console.log(mode, value)
    if (mode == 'cursor' && value == 1) {
        // if(next_cursor.value == )
        pageMode.value = mode
        cursor.value = next_cursor.value
        await fetchUser()
    }
    if (mode == 'cursor' && value == -1) {
        if (prev_cursor.value.length == 1) return
        pageMode.value = 'cursor'
        cursor.value = prev_cursor.value[prev_cursor.value.length - 2]
        prev_cursor.value.splice(prev_cursor.value.length - 2)
        await fetchUser()
    }
    if (mode == 'page') {
        pageMode.value = mode
        cursor.value = value
        await fetchUser()
    }
}
</script>
    
<style></style>