<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */
import { format } from 'date-fns'

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
//#endregion ----- Composables -----
</script>

<template>
  <PageHeader title="Tổng quan khách hàng" tooltip="Tổng quan khách hàng">

  </PageHeader>

  <NCard class="mgt-3" style="margin-top: 10px;" title="Thông tin khách hàng" size="small">
    <NGrid x-gap="12" :cols="3">
      <NGi>
        <div>
          <span class="block text-gray-800 font-medium">Tên khách hàng</span>
          <span class="text-gray-800">Nguyễn Văn A</span>
        </div>
      </NGi>
      <NGi>
        <div>
          <span class="block text-gray-800 font-medium">Số điện thoại</span>
          <span class="text-gray-800">0123 456 789</span>
        </div>
      </NGi>
      <NGi>
        <div>
          <span class="block text-gray-800 font-medium">Loại khách hàng</span>
          <NTag type="success" size="small" round>
            Doanh Nghiệp
          </NTag>
        </div>
      </NGi>
    </NGrid>

    <NGrid x-gap="12" :cols="3">
      <NGi>
        <div>
          <span class="block text-gray-800 font-medium">Email</span>
          <span class="text-gray-800">demo@gmail.com</span>
        </div>
      </NGi>
      <NGi>
        <div>
          <span class="block text-gray-800 font-medium">Khu vực</span>
          <span class="text-gray-800">TP. HCM</span>
        </div>
      </NGi>
      <NGi>
        <div>
          <span class="block text-gray-800 font-medium">Địa chỉ</span>
          Tân bình - HCM
        </div>
      </NGi>
    </NGrid>

    <NGrid x-gap="12" :cols="3">
      <NGi>
        <div>
          <span class="block text-gray-800 font-medium">Ghi chú</span>
          <span class="text-gray-800">Khách hàng tháng</span>
        </div>
      </NGi>
    </NGrid>
  </NCard>

  <NGrid class="report !gap-6" gap="12" :cols="3">
    <NGi>
      <div class="box-report">
        <img src="@/assets/images/icon/keyicon.png" alt="Icon" />
        <div class="box-b">
          <p class="box-t">Tổng hóa đơn</p>
          <div class="box-c">
            <p class="text-primary">
              10
            </p>
          </div>
        </div>
      </div>

    </NGi>
    <NGi>
      <div class="box-report">
        <img src="@/assets/images/icon/groupicon.png" alt="Icon" />
        <div class="box-b">
          <p class="box-t">Tổng tiền</p>
          <div class="box-c">
            <p class="text-primary">
              56,000,000 VNĐ
            </p>
          </div>
        </div>
      </div>
    </NGi>
    <NGi>
      <div class="box-report">
        <img src="@/assets/images/icon/brandicon.png" alt="Icon" />
        <div class="box-b">
          <p class="box-t">Tổng KM</p>
          <div class="box-c">
            <p class="text-primary">
              1,200 KM
            </p>
          </div>
        </div>
      </div>
    </NGi>
  </NGrid>
  <PageBlock style="margin-top: 12px">
    <div class="flex items-center gap-x-4 ">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-10 320-767:gap-2 320-500:flex-col 320-500:items-start">
          <div class="font-bold uppercase text-base w-[200px] pointer 320-767:w-[120px]">
            <div class="expand-icon-div">
              <Icon class="expand-icon" icon="mdi:expand-more" />
            </div>
            <div class="320-767:text-[12px]">12/09/2024</div>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số ngày:

            <span class="text-xs text-[#845ADF] font-bold ml-1">
              2
            </span>

          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số xe:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              1
            </span>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số KM:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              500KM
            </span>
          </div>

          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Tổng tiền :
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              12,000,000 VNĐ
            </span>
          </div>
        </div>
      </div>
    </div>
  </PageBlock>

  <PageBlock style="margin-top: 12px">
    <div class="flex items-center gap-x-4 ">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-10 320-767:gap-2 320-500:flex-col 320-500:items-start">
          <div class="font-bold uppercase text-base w-[200px] pointer 320-767:w-[120px]">
            <div class="expand-icon-div">
              <Icon class="expand-icon" icon="mdi:expand-more" />
            </div>
            <div class="320-767:text-[12px]">12/09/2024</div>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số ngày:

            <span class="text-xs text-[#845ADF] font-bold ml-1">
              2
            </span>

          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số xe:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              1
            </span>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số KM:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              500KM
            </span>
          </div>

          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Tổng tiền :
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              12,000,000 VNĐ
            </span>
          </div>
        </div>
      </div>
    </div>
  </PageBlock>

  <PageBlock style="margin-top: 12px">
    <div class="flex items-center gap-x-4 ">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-10 320-767:gap-2 320-500:flex-col 320-500:items-start">
          <div class="font-bold uppercase text-base w-[200px] pointer 320-767:w-[120px]">
            <div class="expand-icon-div">
              <Icon class="expand-icon" icon="mdi:expand-more" />
            </div>
            <div class="320-767:text-[12px]">12/09/2024</div>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số ngày:

            <span class="text-xs text-[#845ADF] font-bold ml-1">
              2
            </span>

          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số xe:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              1
            </span>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số KM:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              500KM
            </span>
          </div>

          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Tổng tiền :
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              12,000,000 VNĐ
            </span>
          </div>
        </div>
      </div>
    </div>
  </PageBlock>

  <PageBlock style="margin-top: 12px">
    <div class="flex items-center gap-x-4 ">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-10 320-767:gap-2 320-500:flex-col 320-500:items-start">
          <div class="font-bold uppercase text-base w-[200px] pointer 320-767:w-[120px]">
            <div class="expand-icon-div">
              <Icon class="expand-icon" icon="mdi:expand-more" />
            </div>
            <div class="320-767:text-[12px]">12/09/2024</div>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số ngày:

            <span class="text-xs text-[#845ADF] font-bold ml-1">
              2
            </span>

          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số xe:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              1
            </span>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số KM:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              500KM
            </span>
          </div>

          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Tổng tiền :
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              12,000,000 VNĐ
            </span>
          </div>
        </div>
      </div>
    </div>
  </PageBlock>

  <PageBlock style="margin-top: 12px">
    <div class="flex items-center gap-x-4 ">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-10 320-767:gap-2 320-500:flex-col 320-500:items-start">
          <div class="font-bold uppercase text-base w-[200px] pointer 320-767:w-[120px]">
            <div class="expand-icon-div">
              <Icon class="expand-icon" icon="mdi:expand-more" />
            </div>
            <div class="320-767:text-[12px]">12/09/2024</div>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số ngày:

            <span class="text-xs text-[#845ADF] font-bold ml-1">
              2
            </span>

          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số xe:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              1
            </span>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số KM:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              500KM
            </span>
          </div>

          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Tổng tiền :
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              12,000,000 VNĐ
            </span>
          </div>
        </div>
      </div>
    </div>
  </PageBlock>

  <PageBlock style="margin-top: 12px">
    <div class="flex items-center gap-x-4 ">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-10 320-767:gap-2 320-500:flex-col 320-500:items-start">
          <div class="font-bold uppercase text-base w-[200px] pointer 320-767:w-[120px]">
            <div class="expand-icon-div">
              <Icon class="expand-icon" icon="mdi:expand-more" />
            </div>
            <div class="320-767:text-[12px]">12/09/2024</div>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số ngày:

            <span class="text-xs text-[#845ADF] font-bold ml-1">
              2
            </span>

          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số xe:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              1
            </span>
          </div>
          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Số KM:
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              500KM
            </span>
          </div>

          <div class="min-w-[200px]">
            <span class="retangle 320-500:hidden">|</span>Tổng tiền :
            <span class="text-xs text-[#845ADF] font-bold ml-1">
              12,000,000 VNĐ
            </span>
          </div>
        </div>
      </div>
    </div>
  </PageBlock>


</template>

<style scoped>
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

.block {
  font-weight: bold;
  margin-top: 20px;
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
