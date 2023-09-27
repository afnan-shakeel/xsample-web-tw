<template>
    <div class="min-w-sreen">
        <div class="mb-6">
            <pat-filter-box @filter-patient="handlePatientFilter($event)"  @toggle-form="toggleForm($event)"></pat-filter-box>
        </div>
        <div class="mb-6">
            <PatTable ></PatTable>
        </div>
        <div v-if="openForm">
            
        </div>
    </div>
</template>
    
<script setup lang="ts">
import PatFilterBox from '../components/patient/PatFilterBox.vue';
import PatTable from '../components/patient/PatTable.vue';

import { ref } from 'vue'

const filterData = ref()
const child = ref()
const openForm = ref(false)
const handlePatientFilter = async (event: any) => {
    console.log('filter reached parent ', event)
    filterData.value = event
}
const onChildClick = () => {
    child.value.filterPatients(filterData.value)
}

const toggleForm = async (value: any) => {
    openForm.value = value
}
</script>
    
<style></style>