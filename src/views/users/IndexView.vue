<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */
import { useUserStore } from './stores/userStore'

/* ----- Import Components ----- */
import DataTable from './components/DataTable.vue'
import CreateModal from './components/CreateModal.vue'
import UpdateModal from './components/UpdateModal.vue'
import ChangePasswordModal from '@/views/users/components/ChangePasswordModal.vue'

/* ----- Global variables ----- */

//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----
//#endregion ----- Stores -----

//#region ----- State -----
//#endregion ----- State -----

//#region ----- Composables -----
const userStore = useUserStore()
userStore.resetUrlParams()
//#endregion ----- Composables -----

//#region ----- Variables -----
//#endregion ----- Variables -----

//#region ----- Functions -----
const onChangeFilter = useDebounceFn(() => {
  userStore.onChangePage(1)
}, 500)
//#endregion ----- Functions -----

//#region ----- Hooks -----
onBeforeMount(() => {
  userStore.fetchData()
})
onUnmounted(() => {
  userStore.$reset()
})
//#endregion ----- Hooks -----
</script>

<template>
  <div>
    <PageHeader
      :title="$t('pages.users.title.root')"
      tooltip="Tạo và quản lý tài khoản người dùng"
    />

    <div class="mt-5">
      <div class="flex items-center justify-between 320-500:flex-col 320-500:items-start">
        <div class="text-xl font-semibold"></div>
        <NButton
          type="primary"
          @click="
            actionWithPermission(
              ['UserCreate'],
              () => (userStore.stateModal.isShowCreateModal = true)
            )
          "
        >
          <Icon icon="ic:round-plus" />
          {{ $t('buttons.create') }}
        </NButton>
      </div>

      <PageBlock class="mt-5">
        <!-- Filter -->
        <div
          class="mb-5 flex items-center gap-x-4 320-991:grid 767-991:grid-cols-[repeat(2,1fr)] 500-767:grid-cols-[repeat(2,1fr)] 320-500:grid-cols-[repeat(1,1fr)]"
        >
          <div class="w-[280] 320-991:w-full">
            <div class="font-medium">{{ $t('pages.users.table.name') }}</div>
            <NInput
              v-model:value="userStore.urlParams.name"
              placeholder="Tìm kiếm..."
              clearable
              @input="onChangeFilter"
            />
          </div>
          <div class="w-[280] 320-991:w-full">
            <div class="font-medium">{{ $t('pages.users.table.email') }}</div>
            <NInput
              v-model:value="userStore.urlParams.email"
              placeholder="Tìm kiếm..."
              clearable
              @input="onChangeFilter"
            />
          </div>
          <div class="w-[280] 320-991:w-full">
            <div class="font-medium">{{ $t('pages.users.table.username') }}</div>
            <NInput
              v-model:value="userStore.urlParams.username"
              placeholder="Tìm kiếm..."
              clearable
              @input="onChangeFilter"
            />
          </div>
          <div class="w-[150px] 320-991:w-full">
            <div class="font-medium">Trạng thái</div>
            <NSelect
              v-model:value="userStore.urlParams.is_active"
              :options="userStore.statusOptions"
              clearable
              @update:value="onChangeFilter"
            />
          </div>
        </div>
        <DataTable
          :is-fetching="userStore.state.isFetching"
          :data="userStore.listData"
          @change-page="userStore.onChangePage"
          @change-page-size="userStore.onChangePageSize"
        />
      </PageBlock>
    </div>

    <!-- Modals -->
    <NModal v-model:show="userStore.stateModal.isShowCreateModal">
      <CreateModal
        v-model:show="userStore.stateModal.isShowCreateModal"
        @success="userStore.fetchData"
      />
    </NModal>

    <NModal v-model:show="userStore.stateModal.isShowUpdateModal">
      <UpdateModal
        :id="userStore.editId"
        v-model:show="userStore.stateModal.isShowUpdateModal"
        @success="userStore.fetchData"
      />
    </NModal>

    <NModal v-model:show="userStore.stateModal.isShowChangePasswordModal">
      <ChangePasswordModal
        :id="userStore.editId"
        v-model:show="userStore.stateModal.isShowChangePasswordModal"
        @success="userStore.fetchData"
      />
    </NModal>
  </div>
</template>
