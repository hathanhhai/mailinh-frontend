import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: RouteName.index,
    component: () => import('@/views/home/indexView.vue'),
    meta: {
      title: i18nRaw.t('menus.home')
    }
  }
]

export default routes
