<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to x-sample
                Health Management
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required
                            v-model="loginInput.username"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-sky-700 hover:text-sky-600">Forgot password?</a>
                        </div>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            v-model="loginInput.passcode"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="button" @click="signIn()"
                        class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 bg-sky-600 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Sign
                        in</button>
                </div>

            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                <a href="#" class="font-semibold leading-6 text-sky-700 hover:text-sky-600">register your mail </a>
                or
                <a href="#" class="font-semibold leading-6 text-sky-700 hover:text-sky-600">sign in using Google</a>
            </p>
        </div>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { authAxios } from '@/services/axios.service'

const router = useRouter()
const loginInput = ref({
    username: null,
    passcode: null
})

const signIn = async () => {
    if (!loginInput.value.username || !loginInput.value.passcode) return
    const res: any = await authAxios.post('/auth/login', { username: loginInput.value.username, passcode: loginInput.value.passcode }).catch((err) => {
        console.error(err.response.data, err.response.data.message)
    })
    console.log(res.data)
    if(res.data && res.data.statuscode!==200){
        console.error('Response Failed')
        return
    }
    window.sessionStorage.setItem('token', res.data.data.access_token)
}


const sessionStore = (data: any) => {
    window.sessionStorage.clear()
    if (data.authProvider) window.sessionStorage.setItem('auth', data.authProvider)
    if (data.token) window.sessionStorage.setItem('token', data.token)
    if (data.isAnonymous) window.sessionStorage.setItem('isAnonymous', data.isAnonymous)
}


</script>
<style></style>