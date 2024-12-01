import type { RouteRecordRaw } from 'vue-router'

const { listUserWhitelist } = useValidUser()
const routes: RouteRecordRaw[] = [
  {
    path: '/vehicle',
    name: RouteName.vehicle.list.root,
    component: () => import('@/views/vehicle/IndexView.vue'),
    meta: {
      title: 'Quản lý xe',
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
