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
  isModalCog: false,
  page: 10,
  isModalHistory: false
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
      <PageHeader title="Quản lý xe" tooltip="Quản lý xe">
        <div class="flex gap-2">
          <NButton type="primary">
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

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Loại xe</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Tài xế</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[280px] flex flex-col gap-x-2 320-991:w-full">
            <div class="font-medium">Biển số</div>
            <NInput placeholder="Tìm kiếm..." clearable />
          </div>


          <div class="w-[240px] 320-991:w-full">
            <NButton type="primary" style="margin-top: 22px;">Tìm kiếm</NButton>
          </div>
        </div>

        <table class="table-auto border w-full">
          <thead>
            <tr>
              <th class="w-[70px]">STT</th>
              <th class="w-[250px] !text-left">Thông tin xe</th>
              <th class="w-[240px] !text-left">Tài xế</th>
              <th class="w-[200px]">Hạn đăng kiểm</th>
              <th class="w-[150px]">Tổng chuyến</th>
              <th class="w-[120px]">Tổng KM</th>
              <th class="w-[120px]">Trạng thái</th>
              <th class="w-[150px]">Tùy Chỉnh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="!text-center">1</td>
              <td class="!text-left">
                <NTag type="success" size="small"><strong>32E-45678</strong></NTag> Đà Nẵng
                <br>
                <strong>huyndai - 5 chỗ - Trắng</strong>
              </td>
              <td class="!text-left">
                <NTag type="error" size="small">Chưa có tài xế</NTag>
              </td>
              <td class="!text-center">
                22/12/2024 <br>
                <NTag size="small" type="error">
                  Sắp hết hạn
                </NTag>
              </td>
              <td class="!text-center">
                70
              </td>
              <td class="!text-center">
                50,000
              </td>
              <td class="!text-center">
                <NTag round type="success" size="small">
                  Hoạt động
                  <template #icon>
                    <Icon icon="mdi:check-circle" />
                  </template>
                </NTag>
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
                    <NButton quaternary circle type="info" @click="state.isModalCog = true">
                      <Icon icon="mdi:cog" height="20px" />
                    </NButton>
                  </template>
                  Cài đặt
                </NTooltip>

                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle @click="state.isModalHistory = true">
                      <Icon icon="mdi:history" height="20px" />
                    </NButton>
                  </template>
                  Lịch sử chuyến đi
                </NTooltip>
              </td>
            </tr>
            <tr>
              <td class="!text-center">2</td>
              <td class="!text-left">
                <NTag type="success" size="small"><strong>32E-45678</strong></NTag> Đà Nẵng
                <br>
                <strong>huyndai - 5 chỗ - Trắng</strong>
              </td>
              <td class="!text-left">
                Mai văn thành <br>
                039999468
              </td>
              <td>
                22/12/2024 <br>
                <NTag size="small" type="warning">
                  Còn 3 tháng
                </NTag>
              </td>
              <td class="!text-center">
                70
              </td>
              <td class="!text-center">
                50,000
              </td>
              <td class="!text-center">
                <NTag round type="success" size="small">
                  Hoạt động
                  <template #icon>
                    <Icon icon="mdi:check-circle" />
                  </template>
                </NTag>
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
                    <NButton quaternary circle type="info" @click="state.isModalCog = true">
                      <Icon icon="mdi:cog" height="20px" />
                    </NButton>
                  </template>
                  Cài đặt
                </NTooltip>

                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle @click="state.isModalHistory = true">
                      <Icon icon="mdi:history" height="20px" />
                    </NButton>
                  </template>
                  Lịch sử chuyến đi
                </NTooltip>
              </td>
            </tr>
            <tr>
              <td class="!text-center">3</td>
              <td class="!text-left">
                <NTag type="success" size="small"><strong>32E-45678</strong></NTag> Đà Nẵng
                <br>
                <strong>huyndai - 5 chỗ - Trắng</strong>
              </td>
              <td class="!text-left">
                Mai văn thành <br>
                039999468
              </td>
              <td>
                22/12/2024<br>
                <NTag size="small" type="warning">
                  Còn 12 tháng
                </NTag>
              </td>
              <td class="!text-center">
                70
              </td>
              <td class="!text-center">
                50,000
              </td>
              <td class="!text-center">
                <NTag round type="success" size="small">
                  Hoạt động
                  <template #icon>
                    <Icon icon="mdi:check-circle" />
                  </template>
                </NTag>
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
                    <NButton quaternary circle type="info" @click="state.isModalCog = true">
                      <Icon icon="mdi:cog" height="20px" />
                    </NButton>
                  </template>
                  Cài đặt
                </NTooltip>

                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle @click="state.isModalHistory = true">
                      <Icon icon="mdi:history" height="20px" />
                    </NButton>
                  </template>
                  Lịch sử chuyến đi
                </NTooltip>
              </td>
            </tr>
            <tr>
              <td class="!text-center">4</td>
              <td class="!text-left">
                <NTag type="success" size="small"><strong>32E-45678</strong></NTag> Đà Nẵng
                <br>
                <strong>huyndai - 5 chỗ - Trắng</strong>
              </td>
              <td class="!text-left">
                Mai văn thành <br>
                039999468
              </td>
              <td>
                22/12/2024 <br>
                <NTag size="small" type="warning">
                  Còn 24 tháng
                </NTag>
              </td>
              <td class="!text-center">
                70
              </td>
              <td class="!text-center">
                50,000
              </td>
              <td class="!text-center">
                <NTag round type="success" size="small">
                  Hoạt động
                  <template #icon>
                    <Icon icon="mdi:check-circle" />
                  </template>
                </NTag>
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
                    <NButton quaternary circle type="info" @click="state.isModalCog = true">
                      <Icon icon="mdi:cog" height="20px" />
                    </NButton>
                  </template>
                  Cài đặt
                </NTooltip>

                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle @click="state.isModalHistory = true">
                      <Icon icon="mdi:history" height="20px" />
                    </NButton>
                  </template>
                  Lịch sử chuyến đi
                </NTooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </PageBlock>
    </div>
  </div>

  <NModal v-model:show="state.isModalCog" @close="state.isModalCog = false">
    <NSpace item-style="width: 850px" class="320-500:w-[320px]">
      <NCard title="Thông tin cài đặt xe" closable @close="state.isModalCog = false">

        <NTabs type="line" animated>
          <NTabPane name="Cài đặt tài xế" tab="Cài đặt tài xế">
            <NSpace vertical>
              <NGrid x-gap="12" :cols="2">
                <NGi>
                  <strong>Thay đổi tài xế:</strong>
                  <NSelect />
                </NGi>
                <NGi>
                  <NButton type="primary" style="margin-top: 22px;">
                    <Icon icon="mdi:content-save-outline" height="20px" />
                    Xác nhận
                  </NButton>
                </NGi>
              </NGrid>
            </NSpace>



            <NSpace vertical style="margin-top: 20px;margin-bottom: 50px;">
              <strong>Lịch sử thay đổi:</strong>

              <table class="table-auto border w-full">
                <thead>
                  <tr>
                    <th class="w-[70px] ">STT</th>
                    <th class="w-[250px] !text-left">Tài xế</th>
                    <th class="w-[200px] ">Khu vực</th>
                    <th class="w-[250px]">Ngày</th>
                    <th class="w-[200px]">Người thay đổi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td class="!text-left">Hoàng Văn Thành</td>
                    <td>Tp.HCM</td>
                    <td>12/10/2024</td>
                    <td>Dương văn Minh</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td class="!text-left">Nguyễn Văn A</td>
                    <td>Tp.HCM</td>
                    <td>12/06/2024</td>
                    <td>Dương văn Minh</td>
                  </tr>
                </tbody>
              </table>
              <NPagination v-model:page="state.page" style="float: right;" :page-count="100" simple />
            </NSpace>
          </NTabPane>
          <NTabPane name="Cài đặt đăng kiểm" tab="Cài đặt đăng kiểm">
            <NSpace vertical>
              <NGrid x-gap="12" :cols="3">
                <NGi>
                  <strong>Ngày bắt đầu đăng kiếm:</strong>
                  <NDatePicker type="date" />
                </NGi>
                <NGi>
                  <strong>Ngày kết thúc</strong>
                  <NDatePicker type="date" />
                </NGi>
                <NGi>
                  <NButton type="primary" style="margin-top: 22px;">
                    <Icon icon="mdi:content-save-outline" height="20px" />
                    Xác nhận
                  </NButton>
                </NGi>
              </NGrid>
            </NSpace>

            <NSpace vertical style="margin-top: 20px;margin-bottom: 50px;">
              <strong>Lịch sử đăng kiểm:</strong>

              <table class="table-auto border w-full">
                <thead>
                  <tr>
                    <th class="w-[70px] ">STT</th>
                    <th class="w-[250px] text-left">Ngày bắn đầu</th>
                    <th class="w-[200px] ">Ngày kết thúc</th>
                    <th class="w-[200px]">Người thay đổi</th>
                    <th class="w-[200px]">Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td class="text-left">12/10/2024</td>
                    <td>12/10/2024</td>
                    <td>Dương văn Minh</td>
                    <td>12/10/2024 12:00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td class="text-left">12/10/2024</td>
                    <td>12/10/2024</td>
                    <td>Dương văn Minh</td>
                    <td>12/10/2024 12:00</td>
                  </tr>
                </tbody>
              </table>
              <NPagination v-model:page="state.page" style="float: right;" :page-count="100" simple />
            </NSpace>

          </NTabPane>
        </NTabs>
      </NCard>
    </NSpace>
  </NModal>

  <NModal v-model:show="state.isModalHistory" @close="state.isModalHistory = false">
    <NSpace item-style="width: 1050px" class="320-500:w-[320px]">
      <NCard title="Lịch trình xe" closable @close="state.isModalHistory = false">
        <div
          class="mb-5 flex items-center gap-x-4 320-991:grid 767-991:grid-cols-[repeat(2,1fr)] 500-767:grid-cols-[repeat(2,1fr)] 320-500:grid-cols-[repeat(1,1fr)]">
          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Ngày</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[280px] flex flex-col gap-x-2 320-991:w-full">
            <div class="font-medium">Biển số</div>
            <NInput placeholder="Tìm kiếm..." clearable />
          </div>

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Tài xế</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>


          <div class="w-[240px] 320-991:w-full">
            <NButton type="primary" style="margin-top: 22px;">Tìm kiếm</NButton>
          </div>
        </div>

        <table class="table-auto border w-full">
          <thead>
            <tr>
              <th class="w-[70px] ">STT</th>
              <th class="w-[200px]">Bắt đầu</th>
              <th class="w-[200px]">Kết thúc</th>
              <th class="w-[150px]">Số KM</th>
              <th class="w-[300px] !text-left">Địa điểm</th>
              <th class="w-[250px] !text-left">Tài xế</th>
              <th class="w-[200px]">Trạng thái</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>1</td>
              <td>12/10/2024 6:00</td>
              <td>13/10/2024 6:00</td>
              <td>600</td>
              <td class="!text-left">HCM -> Vĩnh Long -> HCM</td>
              <td class="!text-left">Dương văn Minh</td>
              <td>
                <NTag type="error">
                  Đã hủy
                </NTag>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>12/10/2024 6:00</td>
              <td>13/10/2024 6:00</td>
              <td>600</td>
              <td class="!text-left">HCM -> Vĩnh Long -> HCM</td>
              <td class="!text-left">Dương văn Minh</td>
              <td>
                <NTag type="info">
                  Đang chờ
                </NTag>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>12/10/2024 6:00</td>
              <td>13/10/2024 6:00</td>
              <td>600</td>
              <td class="!text-left">HCM -> Vĩnh Long -> HCM</td>
              <td class="!text-left">Dương văn Minh</td>
              <td>
                <NTag type="warning">
                  Đang chạy
                </NTag>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>12/10/2024 6:00</td>
              <td>13/10/2024 6:00</td>
              <td>600</td>
              <td class="!text-left">HCM -> Vĩnh Long -> HCM</td>
              <td class="!text-left">Dương văn Minh</td>
              <td>
                <NTag type="success">
                  Hoàn tất
                </NTag>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>12/10/2024 6:00</td>
              <td>13/10/2024 6:00</td>
              <td>600</td>
              <td class="!text-left">HCM -> Vĩnh Long -> HCM</td>
              <td class="!text-left">Dương văn Minh</td>
              <td>
                <NTag type="success">
                  Hoàn tất
                </NTag>
              </td>
            </tr>
          </tbody>
        </table>
        <NPagination v-model:page="state.page" style="float: right;margin-top: 10px;" :page-count="100" simple />
      </NCard>
    </NSpace>
  </NModal>
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
