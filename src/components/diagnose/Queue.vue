<template>
    <div>
        <div class="flex justify-end mb-4">
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1 ">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Current Employee</label>
                <div class="mt-1">
                    <select id="country" name="country" autocomplete="country-name" placeholder="select status"
                        class="block w-full rounded-md border-0 py-1 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option value="active">One</option>
                        <option value="inactive">Two</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            No
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Patient Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Code
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Mobile
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Waiting Time
                        </th>
                        <th v-if="true" scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ 'NA' }}
                        </th>
                        <td class="px-6 py-4">
                            {{ "na" }}
                        </td>
                        <td class="px-6 py-4">
                            {{ 'NA' }}
                        </td>
                        <td class="px-6 py-4">
                            {{ 'NA' }}
                        </td>
                        <td class="px-6 py-4">
                            {{ 'NA' }}
                        </td>
                        <td v-if="true" class="px-6 py-4 ">
                            <button class="py-1 px-2 bg-red-900 rounded text-white text-xs">Ignore</button>
                            <button class="py-1 px-2 bg-blue-950 rounded text-white text-xs ">
                                <router-link :to="{name:'diagnose-form'}">Admit</router-link>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style></style>