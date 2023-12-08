<template>
    <div class="min-w-sreen">
        <div class="mb-6">
            <emp-filter-box @filter-employee="handleEmployeeFilter($event)"  :showActions="true"></emp-filter-box>
        </div>
        <div class="mb-6">
            <EmpTable ></EmpTable>
        </div>
        <div v-if="isFormOpen">
            <TransitionRoot appear :show="isFormOpen" as="template">
                <Dialog as="div" class="relative z-10">
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
                        <!-- <div class="flex justify-end font-bold">x</div> -->
                          <DialogTitle
                            as="h3"
                            class="text-lg font-medium leading-6 text-gray-900"
                          >
                            Patient Search Form 
                        </DialogTitle>
                          <div class="mt-2">
                          </div>
            
                          <div class="mt-4">
                            <!-- <button
                              type="button"
                              class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              @click="setPatFilterOpen(false)"
                            >
                              Proceed
                            </button> -->
                          </div>
                        </DialogPanel>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
              </TransitionRoot>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import EmpFilterBox from '../components/employee/EmpFilterBox.vue';
import EmpTable from '../components/employee/EmpTable.vue';
import { ref } from 'vue'

const filterData = ref()
const child = ref()
const isFormOpen = ref(false)
const handleEmployeeFilter = async (event: any) => {
    console.log('filter reached parent ', event)
    filterData.value = event
}
const onChildClick = () => {
    child.value.filterUser(filterData.value)
}

const setFormOpen = async (value: any) => {
    isFormOpen.value = value
}
</script>
    
<style></style>