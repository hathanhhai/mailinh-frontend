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
  isPending: false
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
      <PageHeader title="Danh sách khách hàng" tooltip="Danh sách khách hàng">
        <!-- <div class="flex gap-2">
          <NButton type="primary">
            <Icon icon="ic:round-plus" />
            {{ $t('buttons.create') }}
          </NButton>
        </div> -->
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
              <th class="w-[150px]">Phân loại</th>
              <th class="w-[300px] !text-left">Khách hàng</th>
              <th class="!text-center w-[150px]">Điện thoại</th>
              <th class="!text-center">Khu vực</th>
              <th class="w-[150px]">Ngày tạo </th>
              <th class="w-[120px]">Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="!text-center">1</td>
              <td class="!text-center">
                <NTag type="success" size="small" round>
                  Doanh Nghiệp
                </NTag>
              </td>
              <td class="!text-left">
                Công ty TNHH AN BINH
              </td>
              <td class="!text-center">
                +84 912 345 ***
              </td>
              <td class="!text-center">
                TP. Hồ Chí Minh
              </td>
              <td class="!text-center">
                01-02-2024
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

                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle @click="redirectToHistory(1)">
                      <Icon icon="mdi:history" height="20px" />
                    </NButton>
                  </template>
                  Chi tiết và lịch sử
                </NTooltip>
              </td>
            </tr>
            <tr>
              <td class="!text-center">2</td>
              <td class="!text-center">
                <NTag type="success" size="small" round>
                  Doanh Nghiệp
                </NTag>
              </td>
              <td class="!text-left">
                Công ty TNHH AN BINH
              </td>
              <td class="!text-center">
                +84 912 345 ***
              </td>
              <td class="!text-center">
                TP. Hồ Chí Minh
              </td>
              <td class="!text-center">
                01-02-2024
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

                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle @click="redirectToHistory(2)">
                      <Icon icon="mdi:history" height="20px" />
                    </NButton>
                  </template>
                  Chi tiết và lịch sử
                </NTooltip>
              </td>
            </tr>
            <tr>
              <td class="!text-center">3</td>
              <td class="!text-center">
                <NTag type="success" size="small" round>
                  Doanh Nghiệp
                </NTag>
              </td>
              <td class="!text-left">
                Công ty CP Hoa Lan
              </td>
              <td class="!text-center">
                +84 912 345 ***
              </td>
              <td class="!text-center">
                Bình dương
              </td>
              <td class="!text-center">
                05-09-2024
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

                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle @click="redirectToHistory(3)">
                      <Icon icon="mdi:history" height="20px" />
                    </NButton>
                  </template>
                  Chi tiết và lịch sử
                </NTooltip>
              </td>
            </tr>
            <tr>
              <td class="!text-center">4</td>
              <td class="!text-center">
                <NTag type="info" size="small" round>
                  Khách lẻ
                </NTag>
              </td>
              <td class="!text-left">
                Hoàng Tùng
              </td>
              <td class="!text-center">
                +84 456 345 ***
              </td>
              <td class="!text-center">
                TP. Hà Nội
              </td>
              <td class="!text-center">
                09-12-2024
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

                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle @click="redirectToHistory(4)">
                      <Icon icon="mdi:history" height="20px" />
                    </NButton>
                  </template>
                  Chi tiết và lịch sử
                </NTooltip>
              </td>
            </tr>
            <tr>
              <td class="!text-center">5</td>
              <td class="!text-center">
                <NTag type="info" size="small" round>
                  Khách lẻ
                </NTag>
              </td>
              <td class="!text-left">
                Đặng thị hương
              </td>
              <td class="!text-center">
                +84 987 345 ***
              </td>
              <td class="!text-center">
                TP. Đà nẵng
              </td>
              <td class="!text-center">
                09-05-2024
              </td>
              <td>
                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle type="warning">
                      <Icon icon="mdi:circle-edit-outline" height="20px" @click="redirectToHistory(5)" />
                    </NButton>
                  </template>
                  Chỉnh sửa
                </NTooltip>

                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle>
                      <Icon icon="mdi:history" height="20px" />
                    </NButton>
                  </template>
                  Chi tiết và lịch sử
                </NTooltip>
              </td>
            </tr>
            <tr>
              <td class="!text-center">6</td>
              <td class="!text-center">
                <NTag type="success" size="small" round>
                  Doanh Nghiệp
                </NTag>
              </td>
              <td class="!text-left">
                CT TNHH ĐẦU TƯ BẢO PHƯƠNG
              </td>
              <td class="!text-center">
                +84 912 345 ***
              </td>
              <td class="!text-center">
                TP. Hồ Chí Minh
              </td>
              <td class="!text-center">
                12-09-2024
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

                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle @click="redirectToHistory(6)">
                      <Icon icon="mdi:history" height="20px" />
                    </NButton>
                  </template>
                  Chi tiết và lịch sử
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
