<template>
    <nav class="flex items-center justify-between p-2" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span
                class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span
                class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul class="inline-flex -space-x-px text-sm h-8">
            <li>
                <a class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    :disabled="pagination.prev_cursor.length == 1" @click="paginationMode('cursor', -1)">Previous</a>
            </li>
            <li v-for="i in pagination.total_pages" :key="i">
                <a class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    @click="paginationMode('page', i)">{{ i }}</a>
            </li>
            <li>
                <a class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    @click="paginationMode('cursor', 1)">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const pagination = ref({
    total_pages: 0,
    prev_cursor : [],
    
})
function paginationMode(mode, value){

}
</script>

<style>

</style>