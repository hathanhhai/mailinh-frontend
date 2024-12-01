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

//#endregion ----- Composables -----
</script>

<template>
  <div>
    <div class="block">
      <PageHeader title="Báo cáo tài xế hôm nay" tooltip="Báo cáo tài xế hôm nay">
      </PageHeader>


      <NGrid class="report !gap-6" gap="12" :cols="3">
        <NGi>
          <div class="box-report">
            <img src="@/assets/images/icon/keyicon.png" alt="Icon" />
            <div class="box-b">
              <p class="box-t">Tài xế rảnh</p>
              <div class="box-c">
                <p class="text-primary">
                  20
                </p>
              </div>
            </div>
          </div>

        </NGi>
        <NGi>
          <div class="box-report">
            <img src="@/assets/images/icon/groupicon.png" alt="Icon" />
            <div class="box-b">
              <p class="box-t">Tài xế đang di chuyển</p>
              <div class="box-c">
                <p class="text-primary">
                  100
                </p>
              </div>
            </div>
          </div>
        </NGi>
        <NGi>
          <div class="box-report">
            <img src="@/assets/images/icon/brandicon.png" alt="Icon" />
            <div class="box-b">
              <p class="box-t">Tổng tài xế</p>
              <div class="box-c">
                <p class="text-primary">
                  5
                </p>
              </div>
            </div>
          </div>
        </NGi>
      </NGrid>

      <PageBlock class="mt-5">
        <!-- Filter -->
        <div
          class="mb-5 flex items-center gap-x-4 320-991:grid 767-991:grid-cols-[repeat(2,1fr)] 500-767:grid-cols-[repeat(2,1fr)] 320-500:grid-cols-[repeat(1,1fr)]">

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Khu vực</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Ngày</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>
          

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Tài xế</div>
            <NInput placeholder="Tìm kiếm..." clearable />
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
              <th class="w-[250px]">Tài xế</th>
              <th class="w-[240px] !text-left">Thông tin xe</th>
              <th class="w-[150px]">Bằng</th>
              <th class="w-[150px]">Ngoại ngữ</th>
              <th class="w-[150px]">Tổng chuyến</th>
              <th class="w-[150px]">Tổng KM</th>
              <th class="w-[120px]">Trạng thái</th>
              <th class="w-[100px]">Tùy Chỉnh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="!text-center">1</td>
              <td class="!text-left">
                Huỳnh văn cao
                <br>
                <NTag round type="success" size="small">Bình Dương</NTag>
              </td>
              <td class="!text-left">
                <strong>Toyota - 7 chỗ</strong> <br>
                Màu Trắng
              </td>
              <td class="!text-center">
                B2 <br>
                <NTag size="small" type="error">
                  Sắp hết hạn
                </NTag>
              </td>
              <td class="!text-center">
                <NTag round size="small" type="primary">
                  Khá
                </NTag>
              </td>
              <td class="!text-center">
                10
              </td>
              <td class="!text-center">
                50,000
              </td>
              <td class="!text-center">
                <NTag round :bordered="false" size="small" type="success">
                  Đang di chuyển
                </NTag>
              </td>
              <td>
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
                Hoàn văn Tùng
                <br>
                <NTag round type="success" size="small">TP.HCM</NTag>
              </td>
              <td class="!text-left">
                <strong>Toyota - 7 chỗ</strong> <br>
                Màu Xanh
              </td>
              <td class="!text-center">
                B2 <br>
                <NTag size="small" type="error">
                  Sắp hết hạn
                </NTag>
              </td>
              <td class="!text-center">
                <NTag round size="small" type="success">
                  Tốt
                </NTag>
              </td>
              <td class="!text-center">
                5
              </td>
              <td class="!text-center">
                2,000
              </td>
              <td class="!text-center">
                <NTag round :bordered="false" size="small" type="success">
                  Đang di chuyển
                </NTag>
              </td>
              <td>
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
              <td class="!text-center">1</td>
              <td class="!text-left">
                Dương Thị Mỹ Linh
                <br>
                <NTag round type="success" size="small">Bình Dương</NTag>
              </td>
              <td class="!text-left">
                <NTag  type="error" size="small">
                  Chưa có xe
                </NTag>
              </td>
              <td class="!text-center">
                B2 <br>
                <NTag size="small" type="error">
                  Sắp hết hạn
                </NTag>
              </td>
              <td class="!text-center">
                <NTag round size="small" type="primary">
                  Khá
                </NTag>
              </td>
              <td class="!text-center">
                10
              </td>
              <td class="!text-center">
                50,000
              </td>
              <td class="!text-center">
                <NTag round :bordered="false" size="small" type="success">
                  Đang di chuyển
                </NTag>
              </td>
              <td>
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

.timees {
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
}

.process-time {
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #241143;
}

.report {
  margin-top: 16px;
}

.box-report {
  height: 67px;
  height: Fixed (67px) px;
  padding: 4px 12px 4px 12px;
  border-radius: 4.43px;
  opacity: 0px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 0px #00000026;
  display: flex;
  @apply bg-white dark:bg-gray-900;
}

.box-report img {
  float: left;
  width: 38px;
  height: 38px;
  margin-top: 10px;
  margin-right: 12px;
}

.box-report .box-b {
  margin-top: 8px;
}

.box-report .box-t {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px !important;
}

.box-report .box-c {
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
}

.expand-icon-div {
  width: 30px;
  float: left;
}

.expand-icon-div .expand-icon {
  font-size: 20px;
}

.pointer {
  cursor: pointer;
}

.expand-icon-div icon .filter {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  align-self: stretch;
}

.select-box {
  border-radius: 4px;
  border: 1px solid rgba(132, 90, 223, 0.3);
  background: #fff;
  height: 30px;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
}

.title-filter {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  min-width: 63px;
  @apply text-[#333] dark:text-white;
}

.select-filter {
  min-width: 196px;
}

.retangle {
  width: 1px;
  height: 18px;
  color: #d9d9d9;
  margin-right: 10px;
}

.w-200 {
  width: 200px;
}

.__layout-dark-alll5o .dark-header {
  background: #191a1b;
}

.btn {
  @apply bg-[#9747FF] text-white;
  @apply font-semibold;
  @apply py-2 px-4 !important;
  @apply h-[38px] !important;
}

.btn-outlined {
  @apply bg-transparent text-[#9747FF];
}

.btn-item {
  margin-top: 10px;
  display: flex;
  justify-content: end;
}

.pop-up-add-success {
  background-color: #ffffff;
  max-width: 774px;
  width: 100%;
  border: 1px solid #bda4f6;
  box-shadow: 0px 8.64px 12.96px -2.59px #0000001a;
  height: 327px;
  border-radius: 8px;
  padding: 16px;

  img {
    width: 203px;
    height: 152px;
    display: block;
    margin: auto;
  }

  .add-success-text {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    text-align: center;
    margin-top: 14px;
    margin-bottom: 8px;
  }

  .add-success-des {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    text-align: center;
  }

  .add-success-btn-group {
    margin-top: 20px;
  }
}


.timees {
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
}

.process-time {
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #241143;
}

.report {
  margin-top: 16px;
}

.box-report {
  height: 67px;
  height: Fixed (67px) px;
  padding: 4px 12px 4px 12px;
  border-radius: 4.43px;
  opacity: 0px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 0px #00000026;
  display: flex;
  @apply bg-white dark:bg-gray-900;
}

.box-report img {
  float: left;
  width: 38px;
  height: 38px;
  margin-top: 10px;
  margin-right: 12px;
}

.box-report .box-b {
  margin-top: 8px;
}

.box-report .box-t {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px !important;
}

.box-report .box-c {
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
}

.expand-icon-div {
  width: 30px;
  float: left;
}

.expand-icon-div .expand-icon {
  font-size: 20px;
}

.pointer {
  cursor: pointer;
}

.expand-icon-div icon .filter {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  align-self: stretch;
}

.select-box {
  border-radius: 4px;
  border: 1px solid rgba(132, 90, 223, 0.3);
  background: #fff;
  height: 30px;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
}

.title-filter {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  min-width: 63px;
  @apply text-[#333] dark:text-white;
}

.select-filter {
  min-width: 196px;
}

.retangle {
  width: 1px;
  height: 18px;
  color: #d9d9d9;
  margin-right: 10px;
}

.w-200 {
  width: 200px;
}

.__layout-dark-alll5o .dark-header {
  background: #191a1b;
}

.btn {
  @apply bg-[#9747FF] text-white;
  @apply font-semibold;
  @apply py-2 px-4 !important;
  @apply h-[38px] !important;
}

.btn-outlined {
  @apply bg-transparent text-[#9747FF];
}

.btn-item {
  margin-top: 10px;
  display: flex;
  justify-content: end;
}

.pop-up-add-success {
  background-color: #ffffff;
  max-width: 774px;
  width: 100%;
  border: 1px solid #bda4f6;
  box-shadow: 0px 8.64px 12.96px -2.59px #0000001a;
  height: 327px;
  border-radius: 8px;
  padding: 16px;

  img {
    width: 203px;
    height: 152px;
    display: block;
    margin: auto;
  }

  .add-success-text {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    text-align: center;
    margin-top: 14px;
    margin-bottom: 8px;
  }

  .add-success-des {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    text-align: center;
  }

  .add-success-btn-group {
    margin-top: 20px;
  }
}
</style>
