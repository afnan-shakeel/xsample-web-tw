<template>
    <div class="min-w-screen bg-white rounded p-2">
        <div class="flex justify-between mb-4 ">
            <!-- <p class="text-black font-semibold text-lg">Search Patient</p> -->
            <!-- <button @click="openForm()"  -->
             <!-- class="rounded-md ring-2 py-1 px-4 ring-indigo-600 bg-white text-indigo-600 text-sm hover:bg-indigo-600 hover:text-white mb-4">Add New Patient</button> -->
        </div>
        <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">ID</label>
                <div class="mt-1">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" v-model="filterForm.id" placeholder="user ID"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Patient Name</label>
                <div class="mt-1">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="username"
                        v-model="filterForm.username"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div class="mt-1">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="email address"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                <div class="mt-1">
                    <input type="number" name="first-name" id="first-name" autocomplete="given-name" placeholder="mobile no"
                        v-model="filterForm.mobile"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Status</label>
                <div class="mt-1">
                    <select id="country" name="country" autocomplete="country-name" v-model="filterForm.status" placeholder="select status"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">From</label>

                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input datepicker datepicker-autohide type="text"
                        class="block w-full rounded-md border-0  pl-10 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        placeholder="Select from date">
                </div>
            </div>
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">To</label>

                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input datepicker datepicker-autohide type="text"
                        class="block w-full rounded-md border-0  pl-10 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        placeholder="Select to date">
                </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Reset</button>
                <button type="submit" @click="submit()"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const filterForm = ref({
    id: null,
    username: null,
    status: null,
    mobile: null,
    created_at: null,
})

const emits = defineEmits(['filter-patient', 'toggle-form'])

const submit = () => {
    console.log(filterForm.value)
    emits('filter-patient', filterForm.value)
}
const openForm =async () => {
    emits('toggle-form', true)
}
</script>

<style></style>