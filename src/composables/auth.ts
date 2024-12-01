import type { User } from '@/types'

export enum AccessPermission {}

export const useCheckRoles = (roles: User.Role[]) => {
  const authStore = useAuthStore()
  return authStore.profile?.roles.some((role) => roles.includes(role)) ?? false
}

export const actionWithPermission = (
  permissions: string[],
  callback?: Function,
  options: { errors?: string; info?: string; warning?: string; success?: string } = {}
) => {
  const authStore = useAuthStore()
  if (!authStore.isHasPermission(permissions)) {
    return window.$message.error(options.errors ? options.errors : 'Không có quyền truy cập')
  }
  if (options.info) window.$message.info(options.info)
  if (options.warning) window.$message.warning(options.warning)
  if (options.success) window.$message.success(options.success)

  if (callback) callback()
}

export function useValidUser() {
  const listUserBlacklist = useEnv<string[]>('VITE_BLACKLIST_USERS') ?? []
  const listUserWhitelist = useEnv<string[]>('VITE_WHITELIST_USERS') ?? []

  function isUserBlackListed() {
    const { profile } = useAuthStore()
    return (
      listUserBlacklist.includes(profile?.email || '') ||
      listUserBlacklist.includes(profile?.username || '')
    )
  }

  function isUserWhiteListed() {
    const { profile } = useAuthStore()
    return (
      listUserWhitelist.includes(profile?.email || '') ||
      listUserWhitelist.includes(profile?.username || '')
    )
  }

  return {
    listUserBlacklist,
    listUserWhitelist,
    isUserBlackListed,
    isUserWhiteListed
  }
}
