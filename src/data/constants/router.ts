export const ROUTE_NAME = {
  index: 'index',
  login: 'login',
  page_1: {
    root: 'page_1',
    index: 'page_1.index',
    detail: {
      root: 'page_1.detail',
      index: 'page_1.detail.index',
      child: 'page_1.detail.child'
    }
  },
  users: {
    root: 'users',
    index: 'users.index',
    permissions: ['UserView']
  },
  activities: {
    root: 'activities',
    index: 'activities.index',
    permissions: ['LogControllerView']
  },
  errors: {
    404: 'notFound',
    403: 'forbidden'
  },

  vehicle: {
    list: {
      root: 'vehicle',
      index: 'vehicle.index',
      permissions: ['DomainView']
    },
    schedule: {
      root: 'vehicle_schedule',
      index: 'vehicle_schedule.index',
      permissions: ['DomainView']
    },
    report: {
      root: 'vehicle_report',
      index: 'vehicle_report.index',
      permissions: ['DomainView']
    },
    driver: {
      root: 'vehicle_driver',
      index: 'vehicle_driver.index',
      permissions: ['DomainView']
    }
  },
  customer: {
    list: {
      root: 'customer',
      index: 'customer.index',
      permissions: ['DomainView']
    },
    history: {
      root: 'customer_history',
      index: 'customer_history.index',
      permissions: ['DomainView']
    }
  },
  service: {
    list: {
      root: 'service',
      index: 'service.index',
      permissions: ['DomainView']
    }
  },
  invoice: {
    list: {
      root: 'invoice',
      index: 'invoice.index',
      permissions: ['DomainView']
    },
    cou: {
      root: 'invoice-cou',
      index: 'invoice-cou.index',
      permissions: ['DomainView']
    }
  },
  user: {
    list: {
      root: 'user-list',
      index: 'user-list.index',
      permissions: ['UserView']
    }
  }
}
