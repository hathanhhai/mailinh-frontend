import { User, type Auth } from '@/types'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    authToken: null as Auth.AuthToken | null,
    profile: null as Auth.UserProfile | null
  }),
  actions: {
    async login(data: { phoneOrEmail: string; password: string }) {
      try {
        const timeNow = new Date().getTime()

        const res = await apiAuth.login(data)
        const dataRes = res.data.data

        dataRes.expires_in = timeNow + dataRes.expires_in * 1000
        this.authToken = dataRes
        return Promise.resolve(res)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getMe() {
      try {
        if (!this.authToken) {
          return Promise.reject('Token is not found')
        }
        // Gọi API lấy thông tin user
        const res = await apiAuth.getMe()
        const dataRes = res.data.data

        this.profile = dataRes ?? null
        return Promise.resolve(res)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout() {
      this.authToken = null
      this.$router.push({ name: 'login' })
      this.profile = null
    },

    async refreshToken() {
      // try {
      //   if (!this.authToken) throw new Error('Token is not found')

      //   const timeNow = new Date().getTime()

      //   const res = await apiAuth.refreshToken({
      //     refreshToken: this.authToken.refresh_token
      //   })
      //   const dataRes = res.data.data

      //   dataRes.expires_in = timeNow + dataRes.expires_in * 1000
      //   this.authToken = dataRes
      //   return Promise.resolve(res)
      // } catch (error) {
      //   return Promise.reject(error)
      // }
    },

    isHasPermission(permissions: string[] = []) {
      if (this.profile && useCheckRoles([User.Role.Admin])) return true
      if (!permissions.length) return true
      if (!this.profile) return false
      const permissionValue = new Set(permissions)
      const check = [...permissionValue].every((value) => this.permissionStore.has(value))

      return check
    }
  },
  getters: {
    permissionStore: (state) => {
      return new Set(state.profile?.permissions ?? [])
    }
  },
  persist: {
    paths: ['authToken']
  }
})
