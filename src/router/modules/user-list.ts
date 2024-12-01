import { User } from '@/types'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/user-list',
    name: RouteName.user.list.root,
    component: () => import('@/views/user-list/IndexView.vue'),
    meta: {
      title: i18nRaw.t('menus.users.root'),
      roles: [User.Role.Admin]
    },
    beforeEnter(to, from, next) {
      const auth = useAuthStore()
      if (auth.isHasPermission(RouteName.user.list.permissions)) next()
      else next({ replace: true, name: RouteName.errors[403] })
    }
  }
]

export default routes
