<template>
    <div class="min-w-sreen">
        <div class="mb-6">
            <emp-filter-box @filter-employee="handleEmployeeFilter($event)"  @toggle-form="toggleForm($event)"></emp-filter-box>
        </div>
        <div class="mb-6">
            <EmpTable ></EmpTable>
        </div>
        <div v-if="openForm">
            
        </div>
    </div>
</template>
    
<script setup lang="ts">
import EmpFilterBox from '../components/employee/EmpFilterBox.vue';
import EmpTable from '../components/employee/EmpTable.vue';
import { ref } from 'vue'

const filterData = ref()
const child = ref()
const openForm = ref(false)
const handleEmployeeFilter = async (event: any) => {
    console.log('filter reached parent ', event)
    filterData.value = event
}
const onChildClick = () => {
    child.value.filterUser(filterData.value)
}

const toggleForm = async (value: any) => {
    openForm.value = value
}
</script>
    
<style></style>