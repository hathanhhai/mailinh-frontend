<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */
import { format } from 'date-fns'
import type { number } from 'zod';
const router = useRouter()

/* ----- Import Components ----- */

/* ----- Global variables ----- */
const urlParams = useUrlSearchParams<{
  date: string
}>()
urlParams.date = urlParams.date || format(new Date(), 'yyyy-MM-dd')
//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----

//#endregion ----- Stores -----

//#region ----- State -----
const state = reactive({
  isModalCreate: false
})

//#endregion ----- State -----

//#region ----- Composables -----
const { showMessageError } = useHelper()

const redirectToHistory = (id: number) => {
  router.push({
    name: RouteName.customer.history.root,
    params: { id: id }
  })
}

//#endregion ----- Composables -----
</script>

<template>
  <div>
    <div class="block">
      <PageHeader title="Quản lý dịch vụ" tooltip="Quản lý dịch vụ">
        <div class="flex gap-2">
          <NButton type="primary" @click="state.isModalCreate = true">
            <Icon icon="ic:round-plus" />
            {{ $t('buttons.create') }}
          </NButton>
        </div>
      </PageHeader>

      <PageBlock class="mt-5">
        <!-- Filter -->
        <div
          class="mb-5 flex items-center gap-x-4 320-991:grid 767-991:grid-cols-[repeat(2,1fr)] 500-767:grid-cols-[repeat(2,1fr)] 320-500:grid-cols-[repeat(1,1fr)]">
          <div class="w-[280px] flex flex-col gap-x-2 320-991:w-full">
            <div class="font-medium">Tên</div>
            <NInput placeholder="Tìm kiếm..." clearable />
          </div>
          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Loại khách hàng</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>
          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Khu vực</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>
          <div class="w-[240px] 320-991:w-full">
            <NButton type="primary" style="margin-top: 22px;">Tìm kiếm</NButton>
          </div>
        </div>

        <table class="table-auto border w-full">
          <thead>
            <tr>
              <th class="w-[70px]">STT</th>
              <th class="w-[100px]">Phân loại</th>
              <th class="w-[300px] !text-left">Tên dịch vụ</th>
              <th class="!text-center w-[150px]">Đơn vị</th>
              <th class="!text-center w-[200px]">Giá</th>
              <th class="!text-center">Trạng thái</th>
              <th class="w-[150px]">Ngày tạo </th>
              <th class="w-[120px]">Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="!text-center">1</td>
              <td class="!text-center">
                <NTag size="small" type="success">
                  Xe
                </NTag>
              </td>
              <td class="!text-left">
                Dịch vụ thuê xe 7 chỗ
              </td>
              <td class="!text-center">
                Chiếc
              </td>
              <td class="!text-right">
                5,000,000 VNĐ
              </td>
              <td class="!text-center">
                Hoạt động
              </td>
              <td class="!text-left">
                Nguyễn văn hân <br>
                01-02-2024 06:00
              </td>
              <td>
                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle type="warning">
                      <Icon icon="mdi:circle-edit-outline" height="20px" />
                    </NButton>
                  </template>
                  Chỉnh sửa
                </NTooltip>
              </td>
            </tr>
            <tr>
              <td class="!text-center">2</td>
              <td class="!text-center">
                <NTag size="small" type="primary">
                  Chi phí
                </NTag>
              </td>
              <td class="!text-left">
                Phí giữ xe
              </td>
              <td class="!text-center">
                Thẻ
              </td>
              <td class="!text-right">
                50,000 VNĐ
              </td>
              <td class="!text-center">
                Hoạt động
              </td>
              <td class="!text-left">
                Nguyễn văn hân <br>
                <small>01-02-2024 06:00</small>
              </td>
              <td>
                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle type="warning">
                      <Icon icon="mdi:circle-edit-outline" height="20px" />
                    </NButton>
                  </template>
                  Chỉnh sửa
                </NTooltip>
              </td>
            </tr>
            <tr>
              <td class="!text-center">3</td>
              <td class="!text-center">
                <NTag size="small" type="primary">
                  Chi phí
                </NTag>
              </td>
              <td class="!text-left">
                Phí cao tốc
              </td>
              <td class="!text-center">
                vé
              </td>
              <td class="!text-right">
                200,000 VNĐ
              </td>
              <td class="!text-center">
                Hoạt động
              </td>
              <td class="!text-left">
                Nguyễn văn hân <br>
                <small>01-02-2024 06:00</small>
              </td>
              <td>
                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle type="warning">
                      <Icon icon="mdi:circle-edit-outline" height="20px" />
                    </NButton>
                  </template>
                  Chỉnh sửa
                </NTooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </PageBlock>
    </div>
  </div>
</template>


<style scoped>
table {
  @apply border border-[#efeff5] dark:border-gray-700;
}

table th {
  @apply bg-[#fafafc] dark:bg-gray-800;
}

table th:not(:last-child),
table td:not(:last-child) {
  @apply border-r border-r-[#efeff5] dark:border-r-gray-700;
}

table th,
table td {
  @apply text-center;
  @apply p-3;
}

table td {
  @apply border-t border-t-[#efeff5] dark:border-t-gray-700;
}
</style>
