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
  isModalCreate: false
})

//#endregion ----- State -----

//#region ----- Composables -----

//#endregion ----- Composables -----
</script>

<template>
  <div>
    <div class="block">
      <PageHeader title="Quản lý nhân sự" tooltip="Quản lý nhân sự">
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

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Khu vực</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Phòng ban</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>


          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Giới tính</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Ngoại ngữ</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Bằng cấp</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Tìm kiếm</div>
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
              <th class="w-[100px]">MÃ NV</th>
              <th class="w-[250px] !text-left">Nhân sự</th>
              <th class="w-[240px] !text-center">Điện thoại</th>
              <th class="w-[240px] !text-center">Tài khoản</th>
              <th class="w-[150px]">Ngày bắt đầu</th>
              <th class="w-[150px]">Trạng thái</th>
              <th class="w-[100px]">Tùy Chỉnh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="!text-center">1</td>
              <td class="!text-center">1</td>
              <td class="!text-left">
                Huỳnh văn cao (Nam)
                <br>
                <NTag round type="success" size="small">Bình Dương</NTag>
              </td>
              <td class="!text-center">
                0399994534
              </td>
              <td class="!text-left">
                <strong>Vị trí:</strong> Tài xế <br>
                <strong>Khu vực:</strong> TP. HCM
              </td>
              <td class="!text-center">
                10/10/2023
              </td>

              <td class="!text-center">
                <NTag round size="small" type="primary">
                  Chính thức
                </NTag>
              </td>
              <td>
                <NTooltip trigger="hover">
                  <template #trigger>
                    <NButton quaternary circle type="warning" @click="state.isModalCreate = true">
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

  <NModal v-model:show="state.isModalCreate">
    <NSpace item-style="width: 850px" class="320-500:w-[320px]">
      <NCard title="Tạo nhân sự" closable @close="state.isModalCreate = false">
        <NGrid x-gap="12" :cols="4">
          <NGi>
            <strong>Họ: </strong>
            <NInput value="Nguyễn" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Tên: </strong>
            <NInput value="Văn A" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Điện thoại: </strong>
            <NInput value="0399994523" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Giới tính: </strong>
            <NInput value="Nam" type="text" placeholder="Basic Input" />
          </NGi>
        </NGrid>

        <NGrid x-gap="12" :cols="4" style="margin-top: 15px;">
          <NGi>
            <strong>CCCD: </strong>
            <NInput value="Nam" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Ngày cấp: </strong>
            <NInput value="Nam" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Email: </strong>
            <NInput value="nguyenvana@gmail.com" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Ngày sinh: </strong>
            <NInput value="12/12/1994" type="text" placeholder="Basic Input" />
          </NGi>
        </NGrid>

        <NGrid x-gap="12" :cols="4" style="margin-top: 15px;">
          <NGi>
            <strong>Bằng lái xe: </strong>
            <NInput value="Nam" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Trình độ ngoại ngữ: </strong>
            <NInput value="Nam" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Kinh nhiệm: </strong>
            <NInput value="nguyenvana@gmail.com" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Địa chỉ: </strong>
            <NInput value="12/12/1994" type="text" placeholder="Basic Input" />
          </NGi>
        </NGrid>

        <NGrid x-gap="12" :cols="4" style="margin-top: 15px;">
          <NGi>
            <strong>Tài khoản: </strong>
            <NInput value="Nam" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Mật khẩu: </strong>
            <NInput value="Nam" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Khu vực: </strong>
            <NInput value="Hồ Chí Minh" type="text" placeholder="Basic Input" />
          </NGi>
          <NGi>
            <strong>Phòng ban: </strong>
            <NInput value="Tài xế" type="text" placeholder="Basic Input" />
          </NGi>
        </NGrid>
        <NGrid x-gap="12" :cols="1" style="margin-top: 15px;">
          <NGi style="text-align: right;">
            <NButton type="default">
              <template #icon>
                <Icon icon="mdi:times" style="font-size: 25px;"></Icon>
              </template>
              Đóng
            </NButton>
            <NButton type="success" style="margin-left: 15px;">
              <template #icon>
                <Icon icon="mdi:content-save" style="font-size: 25px;"></Icon>
              </template>
              Cập nhật
            </NButton>
          </NGi>
        </NGrid>

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
