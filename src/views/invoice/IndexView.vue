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
  page: 1,
  isModalRent: false,
  isModalCar: false,
  isModalUser: false,
  valueStatus: 1,
  range: ref<[number, number]>([1183135260000, Date.now()]),
  optionsStatus: [
    {
      label: 'Vừa tạo',
      value: 1,
    },
    {
      label: 'Đang di chuyển',
      value: 2
    },
    {
      label: 'Hoàn tất chuyến đi',
      value: 3
    },
    {
      label: 'Hoàn tất lệnh',
      value: 4
    }
  ],
  options: [
    {
      label: 'Chỉnh sửa',
      key: 1
    },
    {
      label: 'Nhân bản',
      key: 2
    },
    {
      label: 'Hủy báo giá',
      key: 3
    }
  ],
})

//#endregion ----- State -----

//#region ----- Composables -----
const { showMessageError } = useHelper()

const redirectTocreate = (id: number) => {
  router.push({
    name: RouteName.invoice.cou.root,
    params: { id: 0 },
  })
}

const handleSelect = (key: number) => {
  if (key == 1 || key == 2) {
    redirectTocreate(1);
  }
}

//#endregion ----- Composables -----
</script>

<template>
  <div>
    <div class="block">
      <PageHeader title="Danh sách báo giá" tooltip="Danh sách báo giá">
        <div class="flex gap-2">
          <NButton type="primary" @click="redirectTocreate(0)">
            <Icon icon="ic:round-plus" />
            {{ $t('buttons.create') }}
          </NButton>
        </div>
      </PageHeader>

      <PageBlock class="mt-5">
        <!-- Filter -->
        <div
          class="mb-5 flex items-center gap-x-4 320-991:grid 767-991:grid-cols-[repeat(2,1fr)] 500-767:grid-cols-[repeat(2,1fr)] 320-500:grid-cols-[repeat(1,1fr)]">

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Khu vực</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[280px] flex flex-col gap-x-2 320-991:w-full">
            <div class="font-medium">Thời gian</div>
            <NDatePicker v-model:value="state.range" type="daterange" clearable />
          </div>

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Loại khách hàng</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Tìm kiếm theo xe và tài xế</div>
            <NInput type="text" placeholder="Basic Input" />
          </div>
          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Tìm kiếm khách hàng</div>
            <NInput type="text" placeholder="Basic Input" />
          </div>
          <div class="w-[240px] 320-991:w-full">
            <NButton type="primary" style="margin-top: 22px;">Tìm kiếm</NButton>
          </div>
        </div>

        <NTabs type="line" animated>
          <NTabPane name="Tất cả" tab="Tất cả (100)">
          </NTabPane>
          <NTabPane name="Bản nháp" tab="Bản nháp (10)">
          </NTabPane>
          <NTabPane name="Đã xác nhận" tab="Đã xác nhận (20)">
          </NTabPane>
          <NTabPane name="Chờ di chuyển" tab="Chờ di chuyển (20)">
          </NTabPane>
          <NTabPane name="Đang di chuyển" tab="Đang di chuyển (10)">
          </NTabPane>
          <NTabPane name="Hoàn tất chuyến đi" tab="Hoàn tất chuyến đi (10)">
          </NTabPane>
          <NTabPane name="Hoàn tất lệnh" tab="Hoàn tất lệnh (10)">
          </NTabPane>
        </NTabs>

        <table class="table-auto border w-full">
          <thead>
            <tr>
              <th class="w-[40px]">STT</th>
              <th class="w-[120px]">Ngày bắt đầu</th>
              <th class="w-[180px] !text-left">Khách hàng</th>
              <th class="!text-center w-[250px]">Xe và tài xế</th>
              <th class="w-[250px] !text-center">Thông tin </th>
              <th class="w-[200px] !text-center">Thông tin báo giá </th>
              <th class="w-[120px] !text-center">Trạng thái </th>
              <th class="w-[80px] !text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="!text-center">1</td>
              <td class="!text-center">
                12/12/2024 (2)
                <br>
                <NTag type="success" size="small" round>
                  Doanh Nghiệp
                </NTag>
              </td>

              <td class="!text-left">
                <strong>Công ty TNHH AN BINH</strong>
                <br>
                +84 912 345 *** <br>
                <NTag type="warning" size="small">
                  TP. Hồ Chí Minh
                </NTag>

              </td>
              <td class="!text-left">
                <strong>[47B-2345] - TOYOTA 7 - Trắng</strong> <br>
                Hoàng văn tùng (Chính)
                <br>
                <strong>[52B-2685] - HUYNDAI 4 - Trắng</strong> <br>
                Đỗ Trung Minh (Chính)
              </td>

              <td class="!text-left">

                <NTag size="small" round>
                  Ngoại ngữ
                </NTag>
                <NTag size="small" round>
                  1 xe 14 chỗ
                </NTag>
                <NTag size="small" round>
                  1 xe 7 chỗ
                </NTag>
                <NTag size="small" round>
                  500KM
                </NTag>
                <NTag size="small" round>
                  Vui vẽ nhiệt tình
                </NTag>
              </td>
            
              <td class="!text-center">
                <strong>12,000,000 VNĐ</strong>
                <br>
                Nguyễn thị Linh <br>
                <small>12/12/2024 09:52</small>
              </td>
              <td>
                <NTag type="success" size="small" round>
                  Bản nháp
                </NTag>
              </td>
              <td>
                <NDropdown
placement="bottom-end" trigger="click" size="small" :options="state.options"
                  @select="handleSelect">
                  <NButton size="small">
                    <template #icon>
                      <Icon icon="mdi:dots-vertical" style="font-size: 25px;"></Icon>
                    </template>
                  </NButton>
                </NDropdown>
              </td>
            </tr>

            <tr>
              <td class="!text-center">1</td>
              <td class="!text-center">
                12/12/2024 (2)
                <br>
                <NTag type="success" size="small" round>
                  Doanh Nghiệp
                </NTag>
              </td>

              <td class="!text-left">
                <strong>Công ty TNHH AN BINH</strong>
                <br>
                +84 912 345 *** <br>
                <NTag type="warning" size="small">
                  TP. Hồ Chí Minh
                </NTag>

              </td>
              <td class="!text-left">
                <strong>[47B-2345] - TOYOTA 7 - Trắng</strong> <br>
                Hoàng văn tùng (Chính)
                <br>
                <strong>[52B-2685] - HUYNDAI 4 - Trắng</strong> <br>
                Đỗ Trung Minh (Chính)
              </td>

              <td class="!text-left">

                <NTag size="small" round>
                  Ngoại ngữ
                </NTag>
                <NTag size="small" round>
                  1 xe 14 chỗ
                </NTag>
                <NTag size="small" round>
                  1 xe 7 chỗ
                </NTag>
                <NTag size="small" round>
                  500KM
                </NTag>
                <NTag size="small" round>
                  Vui vẽ nhiệt tình
                </NTag>
              </td>
              <td class="!text-center">
                <strong>12,000,000 VNĐ</strong>
                <br>
                Nguyễn thị Linh <br>
                <small>12/12/2024 09:52</small>
              </td>
              <td>
                <NTag type="info" size="small" round>
                  Đang di chuyển
                </NTag>
              </td>
              <td>
                <NDropdown
placement="bottom-end" trigger="click" size="small" :options="state.options"
                  @select="handleSelect">
                  <NButton size="small">
                    <template #icon>
                      <Icon icon="mdi:dots-vertical" style="font-size: 25px;"></Icon>
                    </template>
                  </NButton>
                </NDropdown>
              </td>
            </tr>

            <tr>
              <td class="!text-center">1</td>
              <td class="!text-center">
                12/12/2024 (2)
                <br>
                <NTag type="success" size="small" round>
                  Doanh Nghiệp
                </NTag>
              </td>

              <td class="!text-left">
                <strong>Công ty TNHH AN BINH</strong>
                <br>
                +84 912 345 *** <br>
                <NTag type="warning" size="small">
                  TP. Hồ Chí Minh
                </NTag>

              </td>
              <td class="!text-center">
                <strong class="text-danger">Chưa gắn tài xế</strong>
              </td>

              <td class="!text-left">

                <NTag size="small" round>
                  Ngoại ngữ
                </NTag>
                <NTag size="small" round>
                  1 xe 14 chỗ
                </NTag>
                <NTag size="small" round>
                  1 xe 7 chỗ
                </NTag>
                <NTag size="small" round>
                  500KM
                </NTag>
                <NTag size="small" round>
                  Vui vẽ nhiệt tình
                </NTag>
              </td>
              <td class="!text-center">
                <strong>12,000,000 VNĐ</strong>
                <br>
                Nguyễn thị Linh <br>
                <small>12/12/2024 09:52</small>
              </td>
              <td>
                <NTag type="primary" size="small" round>
                  Đã xác nhận
                </NTag>
              </td>
              <td>
                <NDropdown
placement="bottom-end" trigger="click" size="small" :options="state.options"
                  @select="handleSelect">
                  <NButton size="small">
                    <template #icon>
                      <Icon icon="mdi:dots-vertical" style="font-size: 25px;"></Icon>
                    </template>
                  </NButton>
                </NDropdown>
              </td>
            </tr>
            <tr>
              <td class="!text-center">1</td>
              <td class="!text-center">
                12/12/2024 (2)
                <br>
                <NTag type="info" size="small" round>
                  Cá nhân
                </NTag>
              </td>

              <td class="!text-left">
                <strong>Hoàng Văn Lương</strong>
                <br>
                +84 912 345 *** <br>
                <NTag type="warning" size="small">
                  Đà Nẵng
                </NTag>
              </td>
              <td class="!text-left">
                <strong>[47B-2345] - TOYOTA 7 - Trắng</strong> <br>
                Đỗ Văn Nam (Chính)
              </td>
              <td class="!text-left">

                <NTag size="small" round>
                  Ngoại ngữ
                </NTag>
                <NTag size="small" round>
                  1 xe 7 chỗ
                </NTag>
                <NTag size="small" round>
                  500KM
                </NTag>
                <NTag size="small" round>
                  Vui vẽ nhiệt tình
                </NTag>
              </td>
              <td class="!text-center">
                <strong>12,000,000 VNĐ</strong>
                <br>
                Nguyễn thị châu <br>
                <small>23/12/2024 09:52</small>
              </td>
              <td>
                <NTag type="warning" size="small" round>
                  Hoàn tất chuyến đi
                </NTag>
              </td>
              <td>
                <NDropdown
placement="bottom-end" trigger="click" size="small" :options="state.options"
                  @select="handleSelect">
                  <NButton>
                    <template #icon size="small">
                      <Icon icon="mdi:dots-vertical" style="font-size: 25px;"></Icon>
                    </template>
                  </NButton>
                </NDropdown>
              </td>
            </tr>

            <tr>
              <td class="!text-center">1</td>
              <td class="!text-center">
                12/12/2024 (2)
                <br>
                <NTag type="info" size="small" round>
                  Cá nhân
                </NTag>
              </td>

              <td class="!text-left">
                <strong>Hoàng Văn Lương</strong>
                <br>
                +84 912 345 *** <br>
                <NTag type="warning" size="small">
                  Đà Nẵng
                </NTag>
              </td>
              <td class="!text-left">
                <strong>[47B-2345] - TOYOTA 7 - Trắng</strong> <br>
                Đỗ Văn Nam (Chính)
                <br>
              </td>
              <td class="!text-left">

                <NTag size="small" round>
                  Ngoại ngữ
                </NTag>
                <NTag size="small" round>
                  1 xe 7 chỗ
                </NTag>
                <NTag size="small" round>
                  500KM
                </NTag>
                <NTag size="small" round>
                  Vui vẽ nhiệt tình
                </NTag>
              </td>
              <td class="!text-center">
                <strong>12,000,000 VNĐ</strong>
                <br>
                Nguyễn thị châu <br>
                <small>23/12/2024 09:52</small>
              </td>
              <td>
                <NTag type="error" size="small" round>
                  Hoàn tất hóa đơn
                </NTag>
              </td>
              <td>
                <NDropdown
placement="bottom-end" trigger="click" size="small" :options="state.options"
                  @select="handleSelect">
                  <NButton size="small">
                    <template #icon>
                      <Icon icon="mdi:dots-vertical" style="font-size: 25px;"></Icon>
                    </template>
                  </NButton>
                </NDropdown>
              </td>
            </tr>
          </tbody>
        </table>
        <NPagination v-model:page="state.page" style="margin-top: 10px;float : right;" :page-count="100" />
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

.schedule {
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 7px;
  cursor: pointer;
}
</style>
