import type { RouteRecordRaw } from 'vue-router'

const { listUserWhitelist } = useValidUser()
const routes: RouteRecordRaw[] = [
  {
    path: '/customer/:id',
    name: RouteName.customer.history.root,
    component: () => import('@/views/customer-history/IndexView.vue'),
    meta: {
      title: 'Lịch sử khách hàng',
      users: []
    },
    beforeEnter(to, from, next) {
      const auth = useAuthStore()
      if (auth.isHasPermission(RouteName.customer.history.permissions)) next()
      else next({ replace: true, name: RouteName.errors[403] })
    }
  }
]

export default routes
