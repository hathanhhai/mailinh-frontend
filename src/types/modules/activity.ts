export namespace Activity {
  export interface Item {
    id: number
    description: string
    causer: string
    properties: object
    created_at: Date
  }
  export interface Json {
    name: {
      new: string
    }
    value: {
      new: JsonDataNew[]
    }
  }

  interface JsonDataNew {
    can_edit: boolean
    key: string
    name: string
    note: string
    required: boolean
    type: string
    value: string
  }
}
