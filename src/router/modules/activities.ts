import { User } from '@/types'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/activities',
    name: RouteName.activities.root,
    component: () => import('@/views/activities/IndexView.vue'),
    meta: {
      title: 'Quản lý hoạt động',
      roles: [User.Role.Admin]
    },
    beforeEnter(to, from, next) {
      const auth = useAuthStore()
      if (auth.isHasPermission(RouteName.activities.permissions)) next()
      else next({ replace: true, name: RouteName.errors[403] })
    }
  }
]

export default routes
