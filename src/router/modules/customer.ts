import type { RouteRecordRaw } from 'vue-router'

const { listUserWhitelist } = useValidUser()
const routes: RouteRecordRaw[] = [
  {
    path: '/customer',
    name: RouteName.customer.list.root,
    component: () => import('@/views/customer/IndexView.vue'),
    meta: {
      title: 'Quản lý khách hàng',
      users: []
    },
    beforeEnter(to, from, next) {
      const auth = useAuthStore()
      if (auth.isHasPermission(RouteName.customer.list.permissions)) next()
      else next({ replace: true, name: RouteName.errors[403] })
    }
  }
]

export default routes
