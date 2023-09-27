
import type PatFilterBoxVue from '../patient/PatFilterBox.vue';

import type PatFilterBoxVue from '../patient/PatFilterBox.vue';
<template>
  <div class="p-2 py-2">
    <form>
        <div class="grid mb-4">
            <div class="col">
                <label class="block text-sm font-medium leading-6 text-gray-900">Appointment Date</label>
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
                        placeholder="Select date">
                </div>
            </div>
        </div>
        <div class="grid grid-cols-6 mb-4">
            <div class="col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Select Patient</label>
                <div class="mt-1">
                    <input type="text" name="patient" id="patient" autocomplete="given-name" placeholder="click to select patient" readonly @click="setPatFilterOpen(true)"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="col-span-2 px-6 pt-8">
                <div class="font-semibold text-green-900">ACTIVE</div>
            </div>
            <div class="col-span-2 pt-8">            
                <button 
                class="rounded-md ring-2 py-0.9 px-3 ring-indigo-600 bg-white text-indigo-600 text-sm hover:bg-indigo-600 hover:text-white mb-4">New Registration</button>   
            </div>
        </div>
        <div class="grid grid-cols-6">
            <div class="col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Select Employee</label>
                <div class="mt-1">
                    <input type="text" name="employee" id="employee" autocomplete="employee" placeholder="click to select employee" readonly @click="setPatTableOpen(true)"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="col-span-2 px-6 pt-8">
                <a data-tooltip-target="tooltip-default" class="font-semibold text-red-900">UNAVAILABLE</a>
                <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip content
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>
    </form>
  </div>
  <TransitionRoot appear :show="isPatFilterOpen" as="template">
    <Dialog as="div" @close="setPatFilterOpen" class="relative z-10">
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
              class="w-full max-w-8xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Patient filter
              </DialogTitle>
              <div class="mt-2">
                <PatFilterBox @filter-patient="handlePatientFilter($event)"></PatFilterBox>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="setPatFilterOpen(false)"
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
  <TransitionRoot appear :show="isPatTableOpen" as="template">
    <Dialog as="div" @close="setPatTableOpen" class="relative z-10">
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
              class="w-full max-w-8xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Patient filter
              </DialogTitle>
              <div class="mt-2">
                <PatTable @filter-patient="handlePatientFilter($event)"></PatTable>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="setPatTableOpen(false)"
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
} from '@headlessui/vue'
import PatFilterBox from '../patient/PatFilterBox.vue'
import PatTable from '../patient/PatTable.vue'
import EmpFilterBox from '../employee/EmpFilterBox.vue'
import EmpTable from '../employee/EmpTable.vue'

const isPatFilterOpen = ref(false)
const filterData = ref()
function setPatFilterOpen(value: boolean) {
    isPatFilterOpen.value = value
}

const handlePatientFilter = async (data: any) => {
    console.log('filter reached parent ', data)
    filterData.value = data
}
</script>

<style>

</style>