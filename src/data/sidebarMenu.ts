import type { MenuMixedOption } from 'naive-ui/es/menu/src/interface'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import { NEllipsis } from 'naive-ui'
import type { RendererNode } from 'vue'
import { User } from '@/types'

function renderIcon(icon: string) {
  return () => h(Icon, { icon })
}

function renderRoute(data: { label: string; name: string }) {
  return renderLabel(h(RouterLink, { to: { name: data.name } }, { default: () => data.label }))
}

function renderLabel(label: string | RendererNode) {
  const { sideBarCollapsed } = useAppStore()
  if (sideBarCollapsed) {
    return () => h(() => label)
  }
  return () => h(NEllipsis, { tooltip: { keepAliveOnHover: false } }, { default: () => label })
}

computed(() => {
  return []
})

export const menuOptions = computed<MenuMixedOption[]>(() => {
  const menu: MenuMixedOption[] = [
    {
      label: renderRoute({
        label: $t('menus.home'),
        name: RouteName.index
      }),
      key: RouteName.index,
      icon: renderIcon('fluent:home-16-regular'),
      props: {}
    },
    {
      label: 'Quản lý xe',
      key: 'vehicle',
      icon: renderIcon('mdi:car-multiple'),
      children: [
        {
          label: renderRoute({
            label: 'Lịch trình',
            name: RouteName.vehicle.schedule.root
          }),
          key: RouteName.vehicle.schedule.root,
          icon: renderIcon('mdi:book-clock-outline'),
          props: {}
        },
        {
          label: renderRoute({
            label: 'Danh sách xe',
            name: RouteName.vehicle.list.root
          }),
          key: RouteName.vehicle.list.root,
          icon: renderIcon('codicon:symbol-keyword'),
          props: {}
        },
        {
          label: renderRoute({
            label: 'Báo cáo xe',
            name: RouteName.vehicle.report.root
          }),
          key: RouteName.vehicle.report.root,
          icon: renderIcon('mdi:chart-tree'),
          props: {}
        },
        {
          label: renderRoute({
            label: 'Báo cáo tài xế',
            name: RouteName.vehicle.driver.root
          }),
          key: RouteName.vehicle.driver.root,
          icon: renderIcon('mdi:file-account'),
          props: {}
        }
      ]
    },
    {
      label: 'Khách hàng',
      key: 'customer-management',
      icon: renderIcon('mdi:face-agent'),
      children: [
        {
          label: renderRoute({
            label: 'Danh sách',
            name: RouteName.customer.list.root
          }),
          key: RouteName.customer.list.root,
          icon: renderIcon('mdi:view-list'),
          props: {}
        }
      ]
    },
    {
      label: 'Dịch vụ',
      key: 'service-management',
      icon: renderIcon('mdi:alpha-s-circle'),
      children: [
        {
          label: renderRoute({
            label: 'Danh sách dịch vụ',
            name: RouteName.service.list.root
          }),
          key: RouteName.service.list.root,
          icon: renderIcon('mdi:view-list-outline'),
          props: {}
        }
      ]
    },

    {
      label: 'Hóa đơn',
      key: 'invoice-management',
      icon: renderIcon('carbon:report-data'),
      children: [
        {
          label: renderRoute({
            label: 'Tạo báo giá',
            name: RouteName.invoice.cou.root
          }),
          key: RouteName.invoice.cou.root,
          icon: renderIcon('mdi:invoice-text-plus'),
          props: {}
        },
        {
          label: renderRoute({
            label: 'Danh sách',
            name: RouteName.invoice.list.root
          }),
          key: RouteName.invoice.list.root,
          icon: renderIcon('mdi:invoice-text-multiple'),
          props: {}
        }
      ]
    },
    {
      label: 'Nhân sự',
      key: 'user',
      icon: renderIcon('carbon:report-data'),
      roles: [User.Role.Admin],
      children: [
        {
          label: renderRoute({
            label: 'Quản trị nhân sự',
            name: RouteName.user.list.root
          }),
          key: RouteName.user.list.root,
          icon: renderIcon('majesticons:users-line'),
          props: {},
          roles: [User.Role.Admin]
        },
        {
          label: renderRoute({
            label: 'Tài khoản',
            name: RouteName.users.root
          }),
          key: RouteName.users.root,
          icon: renderIcon('majesticons:users-line'),
          props: {},
          roles: [User.Role.Admin]
        },
        {
          label: renderRoute({
            label: 'Hoạt động',
            name: RouteName.activities.root
          }),
          key: RouteName.activities.root,
          icon: renderIcon('icon-park-outline:log'),
          props: {},
          roles: [User.Role.Admin]
        }
      ]
    }
  ]

  // check permission
  const authStore = useAuthStore()
  return menu.filter((item) => {
    const permissions = item.roles as User.Role[]
    if (permissions && permissions.length) {
      return useCheckRoles(permissions)
    }
    const users = item.users as string[]
    if (users && users.length && authStore.profile) {
      return users.includes(authStore.profile.email)
    }
    return true
  })
})
