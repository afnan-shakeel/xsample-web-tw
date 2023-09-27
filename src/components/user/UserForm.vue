<template>
    <TransitionRoot appear :show="true" as="template">
        <Dialog as="div" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-semibold leading-6 text-gray-900">
                                {{ 'User Form' }}
                            </DialogTitle>
                            <div class="mt-2">
                                <form>
                                    <div class="space-y-12">
                                        <div class="border-b border-gray-900/10 pb-12">
                                            <!-- <h2 class="text-base font-semibold leading-7 text-gray-900">User Form</h2> -->
                                            <p class="mt-1 text-sm leading-6 text-gray-600">Register User Here !</p>

                                            <div class="mt-10 grid grid-cols-1 gap-y-2 sm:grid-cols-6 justify-items-center">

                                                <div class="sm:col-span-4">
                                                    <label for="country"
                                                        class="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                                                    <div class="mt-2">
                                                        <input type="text" v-model="userForm.mobile"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-4">
                                                    <div class="">
                                                        <div class="sm:col-span-3">
                                                            <label for="user name"
                                                                class="block text-sm font-medium leading-6 text-gray-900">User
                                                                Name</label>
                                                            <div class="mt-2">
                                                                <input type="text" v-model="userForm.username"
                                                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-4">
                                                    <div class="">
                                                        <div class="sm:col-span-3">
                                                            <label for="passcode"
                                                                class="block text-sm font-medium leading-6 text-gray-900">Passcode</label>
                                                            <div class="mt-2">
                                                                <input type="password" v-model="userForm.passcode"
                                                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-6 flex items-center justify-end gap-x-6">
                                        <button type="button" @click="closeModal()"
                                            class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                                        <button type="button" @click="submit()"
                                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                                    </div>
                                </form>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import {axios, authAxios} from '@/services/axios.service.ts'
import { ref } from 'vue'

const userForm = ref({
    username: null,
    passcode: null,
    mobile: null,
    email: null
})
const emits = defineEmits(['close-form','submit-form'])
const submit = async () => {
    let obj = { username: userForm.value.username, passcode: userForm.value.passcode, mobile: userForm.value.mobile }
    const res: any = await authAxios.post('/auth/register', obj).catch((err)=>{ console.error(err); return; })
    console.log(res.data)
    if(res.data && res.data.statuscode !== 200){
        return
    }

}
const closeModal = async () => {
    emits('close-form', false)
}
</script>

<style></style>