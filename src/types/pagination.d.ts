interface Pagination<T = any> {
  data: T[]
  paginate: {
    current_page: number
    from: number | null
    last_page: number
    path: string
    per_page: number
    to: number | null
    total: number
  }
}

interface PaginationAndSummaries<T = any> {
  data: T[]
  paginate: {
    current_page: number
    from: number | null
    last_page: number
    path: string
    per_page: number
    to: number | null
    total: number
  }
  total: {
    total_brand?: number
    total_group?: number
    total_keyword?: number
    total_page?: number
    total_domain?: number
  }
}

interface QueryPagination {
  per_page?: number
  page?: number
  // q?: string | null
  // sort?: string
  // order?: 'asc' | 'desc'
}
