import { createRouter, createWebHistory } from 'vue-router'
import SessionLayoutVue from '@/layouts/SessionLayout.vue'
import LoginLayoutVue from '@/layouts/LoginLayout.vue'

import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import UserView from '../views/UserView.vue'
import EmployeeView from '@/views/EmployeeView.vue'
import PatientView from '@/views/PatientView.vue'
import BookVisit from '@/components/booking/BookVisit.vue'
import DiagnoseViewVue from '@/views/DiagnoseView.vue'
// import DiagForm from '../components/diagnose/DiagForm.vue'
// import Queue from '../components/diagnose/Queue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/temp',
      name: 'temp',
      component: BookVisit,
      meta: { layout: SessionLayoutVue, title: 'Temp', }
    },
    {
      path: '/login',
      name: 'login',

      component: LoginView,
      meta: { layout: LoginLayoutVue, title: 'Login', }
    },
    {
      path: '/user',
      name: 'user',

      component: UserView,
      meta: { layout: SessionLayoutVue, title: 'User', }
    },
    {
      path: '/dashboard',
      name: 'dashboard',

      component: DashboardView,
      meta: { layout: SessionLayoutVue, title: 'Dashboard', }
    },
    {
      path: '/employee',
      name: 'employee',

      component: EmployeeView,
      meta: { layout: SessionLayoutVue, title: 'Employee Management', }
    },
    {
      path: '/patient',
      name: 'patient',

      component: PatientView,
      meta: { layout: SessionLayoutVue, title: 'Patient Management', }
    },
    {
      path: '/diagnose',
      name: 'diagnose',

      component: DiagnoseViewVue,
      children: [
        { path: 'form', name: 'diagnose-form', component: () => import('../components/diagnose/DiagForm.vue') },
        { path: 'queue', name: 'diagnose-queue', component: () => import('../components/diagnose/Queue.vue') }
      ],
      meta: { layout: SessionLayoutVue, title: 'Diagnosis', }
    },

  ]
})

export default router
