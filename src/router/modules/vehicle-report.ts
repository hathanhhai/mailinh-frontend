import type { RouteRecordRaw } from 'vue-router'

const { listUserWhitelist } = useValidUser()
const routes: RouteRecordRaw[] = [
  {
    path: '/vehicle-report',
    name: RouteName.vehicle.report.root,
    component: () => import('@/views/vehicle-report/IndexView.vue'),
    meta: {
      title: 'Báo cáo xe',
      users: []
    },
    beforeEnter(to, from, next) {
      const auth = useAuthStore()
      if (auth.isHasPermission(RouteName.vehicle.report.permissions)) next()
      else next({ replace: true, name: RouteName.errors[403] })
    }
  }
]

export default routes
