<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */
import { useActivityStore } from './stores/activityStore'

/* ----- Import Components ----- */
import DataTable from './components/DataTable.vue'
import ViewModal from './components/ViewModal.vue'

/* ----- Global variables ----- */

//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----
//#endregion ----- Stores -----

//#region ----- State -----
//#endregion ----- State -----

//#region ----- Composables -----
const activityStore = useActivityStore()
activityStore.resetUrlParams()
//#endregion ----- Composables -----

//#region ----- Variables -----
//#endregion ----- Variables -----

//#region ----- Functions -----
const onChangeFilter = useDebounceFn(() => {
  activityStore.onChangePage(1)
}, 500)
//#endregion ----- Functions -----

//#region ----- Hooks -----
onBeforeMount(async () => {
  await Promise.all([activityStore.fetchOptionUsers(), activityStore.fetchData()])
})
onUnmounted(() => {
  activityStore.$reset()
})
//#endregion ----- Hooks -----
</script>

<template>
  <div>
    <PageHeader title="Quản lý hoạt động" tooltip="Xem và quản lý hoạt động" />

    <div class="mt-5">
      <PageBlock class="mt-5">
        <!-- Filter -->
        <div
          class="mb-5 flex items-center gap-x-4 320-991:grid 767-991:grid-cols-[repeat(2,1fr)] 500-767:grid-cols-[repeat(2,1fr)] 320-500:grid-cols-[repeat(1,1fr)]"
        >
          <div class="w-[280px] 320-991:w-full">
            <div class="font-medium">Mô tả</div>
            <NInput
              v-model:value="activityStore.urlParams.description"
              placeholder="Tìm kiếm..."
              clearable
              @input="onChangeFilter"
            />
          </div>
          <div class="w-[280px] 320-991:w-full">
            <div class="font-medium">Người thao tác</div>
            <NSelect
              v-model:value="activityStore.urlParams.user_id"
              :options="activityStore.userOptions"
              :loading="activityStore.state.isFetchingUsers"
              clearable
              @update:value="onChangeFilter"
              @scroll="activityStore.onFetchMoreUsers"
            />
          </div>
          <div class="w-[280px] 320-991:w-full">
            <div class="font-medium">Từ ngày</div>
            <NDatePicker
              v-model:formatted-value="activityStore.urlParams.from"
              value-format="yyyy-MM-dd"
              type="date"
              clearable
              update-value-on-close
              @update:value="onChangeFilter"
            />
          </div>
          <div class="w-[280px] 320-991:w-full">
            <div class="font-medium">Đến ngày</div>
            <NDatePicker
              v-model:formatted-value="activityStore.urlParams.to"
              value-format="yyyy-MM-dd"
              type="date"
              clearable
              update-value-on-close
              @update:value="onChangeFilter"
            />
          </div>
        </div>
        <DataTable
          :is-fetching="activityStore.state.isFetching"
          :data="activityStore.listData"
          @change-page="activityStore.onChangePage"
          @change-page-size="activityStore.onChangePageSize"
        />
      </PageBlock>
    </div>

    <NModal v-model:show="activityStore.stateModal.isShowViewModal">
      <ViewModal v-model:show="activityStore.stateModal.isShowViewModal" />
    </NModal>
  </div>
</template>
