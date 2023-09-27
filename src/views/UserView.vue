<template>
    <div class="min-w-sreen">
        <div class="mb-6">
            <user-filter-box @filter-user="handleUserFilter($event); onChildClick();"
                @toggle-form="toggleForm($event)"></user-filter-box>
        </div>
        <div class="mb-6">
            <UserTable ref="child"></UserTable>
        </div>
        <div v-if="openForm">
            <UserForm @close-form="toggleForm($event)"></UserForm>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import UserFilterBox from '../components/user/UserFilterBox.vue';
import UserTable from '../components/user/UserTable.vue';
import UserForm from '@/components/user/UserForm.vue';
import { ref } from 'vue'
const filterData = ref()
const child = ref()
const openForm = ref(false)
const handleUserFilter = async (event: any) => {
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