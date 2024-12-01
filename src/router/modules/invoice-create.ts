import type { RouteRecordRaw } from 'vue-router'

const { listUserWhitelist } = useValidUser()
const routes: RouteRecordRaw[] = [
  {
    path: '/invoice-cou',
    name: RouteName.invoice.cou.root,
    component: () => import('@/views/invoice-cou/IndexView.vue'),
    meta: {
      title: 'Tạo báo giá',
      users: []
    },
    beforeEnter(to, from, next) {
      const auth = useAuthStore()
      if (auth.isHasPermission(RouteName.invoice.cou.permissions)) next()
      else next({ replace: true, name: RouteName.errors[403] })
    }
  }
]

export default routes
