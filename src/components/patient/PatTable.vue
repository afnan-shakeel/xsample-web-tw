<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        CODE
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Patient Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Mobile
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Insurance
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Department
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                    <th v-if="showActions" scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item of empList" :key="item.id" @click="selectRecord(item)"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.emp_code }}
                    </th>
                    <td class="px-6 py-4">
                        {{ item.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.mobile }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.email }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.emp_type }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.department }}
                    </td>
                    <td class="px-4 py-4">
                        <span v-if="!showActions">{{ item.status }}</span>
                        <select v-if="showActions" id="status" name="status" autocomplete="pat-status" v-model="item.status"
                            placeholder="select status"
                            class="block rounded-md border-0 px-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                            <option value="CLOSED">Closed</option>
                        </select>
                    </td>
                    <td v-if="showActions" class="px-6 py-4 flex">
                        <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                            <svg class="w-4 h-4 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </a>
                        <a @click="setIsBookingOpen(true)"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                            </svg>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        <Pagination :pagination="pagination" ></Pagination>
        <TransitionRoot appear :show="isBookingOpen" as="template">
            <Dialog as="div" @close="setIsBookingOpen" class="relative z-10">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="fixed inset-0 bg-black bg-opacity-25" />
              </TransitionChild>
        
              <div class="fixed inset-0 overflow-y-auto">
                <div
                  class="flex min-h-full items-center justify-center p-4 text-center"
                >
                  <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                  >
                    <DialogPanel
                      class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                    >
                      <DialogTitle
                        as="h3"
                        class="text-lg font-medium leading-6 text-gray-900"
                      >
                        Schedule Appointment
                      </DialogTitle>
                      <div class="mt-2">
                        <BookVisit></BookVisit>
                      </div>
        
                      <div class="mt-4">
                        <button
                          type="button"
                          class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          @click="setIsBookingOpen(false)"
                        >
                          Proceed
                        </button>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </TransitionRoot>
        
    </div>
</template>
    
<script setup lang="ts">
import { ref, onMounted, defineExpose } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
} from '@headlessui/vue'
import { axios } from '../../services/axios.service';
import BookVisit from '../booking/BookVisit.vue';

import Pagination from '../ext/Pagination.vue'

const empList = ref()
const isBookingOpen = ref(false)

function setIsBookingOpen(value: boolean) {
  isBookingOpen.value = value
}

const pagination = ref({
    pageMode: 'cursor',
    total_records: 0,
    page_limit: 10,
    total_pages: 0,
    next_cursor: 0,
    prev_cursor: [],
    cursor: 2
})
 
var filterData: any;
const filterPatients = (data: any) => {
    console.log('prop', data)
    filterData = data
    // fetchPatients(filterData)
}
defineExpose({ filterPatients })
const emits = defineEmits(['selected-record'])
const props = defineProps(['showActions'])
onMounted(() => {
    fetchPatients()
})
const fetchPatients = async (filter = null) => {
    const res: any = await axios.post(`/employee?${pagination.value.pageMode}=${pagination.value.cursor}&limit=${pagination.value.page_limit}`, filter).catch((err) => {
        console.error(err.response)
        return
    })
    if (res.data && res.data.statuscode !== 200) {
        console.error("ERROR", res.data)
    }
    empList.value = res.data.data.employees
    console.log(empList.value)
    let meta = res.data.data.meta
    pagination.value.total_records = meta.cursor.total_record
    pagination.value.page_limit = meta.cursor.limit || 10
    pagination.value.total_pages = Math.ceil(pagination.value.total_records / Number(pagination.value.page_limit))
    pagination.value.next_cursor = meta.cursor.next_cursor
    if (!pagination.value.prev_cursor.includes(meta.cursor.prev_cursor)) pagination.value.prev_cursor.push(meta.cursor.prev_cursor)
}
const selectRecord = (data: any)=>{
    console.log(data)
    emits('selected-record', data)
}
const openBookingModal = async (item: any) => {
    console.log(item)
}
</script>
    
<style></style>