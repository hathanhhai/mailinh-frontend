import type { RouteRecordRaw } from 'vue-router'

const { listUserWhitelist } = useValidUser()
const routes: RouteRecordRaw[] = [
  {
    path: '/vehicle-schedule',
    name: RouteName.vehicle.schedule.root,
    component: () => import('@/views/vehicle-schedule/IndexView.vue'),
    meta: {
      title: 'Lịch trình xe',
      users: []
    },
    beforeEnter(to, from, next) {
      const auth = useAuthStore()
      if (auth.isHasPermission(RouteName.vehicle.list.permissions)) next()
      else next({ replace: true, name: RouteName.errors[403] })
    }
  }
]

export default routes
