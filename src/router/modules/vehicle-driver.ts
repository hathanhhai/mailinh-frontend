import type { RouteRecordRaw } from 'vue-router'

const { listUserWhitelist } = useValidUser()
const routes: RouteRecordRaw[] = [
  {
    path: '/vehicle-driver',
    name: RouteName.vehicle.driver.root,
    component: () => import('@/views/vehicle-driver/IndexView.vue'),
    meta: {
      title: 'Báo cáo tài xế',
      users: []
    },
    beforeEnter(to, from, next) {
      const auth = useAuthStore()
      if (auth.isHasPermission(RouteName.vehicle.driver.permissions)) next()
      else next({ replace: true, name: RouteName.errors[403] })
    }
  }
]

export default routes
