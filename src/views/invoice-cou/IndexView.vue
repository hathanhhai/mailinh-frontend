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
  isModalCustomer: false,
  isModalService: false,
  value: 1,
  page: 1,
  optionsType: [
    {
      label: 'Cá nhân',
      value: 1,
    },
    {
      label: 'Doanh nghiệp',
      value: 2,
    }
  ],
  qty: 1
})

//#endregion ----- State -----

//#region ----- Composables -----
const { showMessageError } = useHelper()
//#endregion ----- Composables -----
</script>

<template>
  <div>
    <NGrid x-gap="12" :cols="2" style="margin-top: 10px;">
      <NGi>
        <NCard size="small" title="Thông tin khách hàng" hoverable style="height: 340px;">
          <template #header-extra>
            <NButton strong secondary type="primary" size="small" @click="state.isModalCustomer = true">
              <Icon icon="mdi:circle-edit-outline"></Icon> Tìm khách hàng
            </NButton>
          </template>
          <NGrid x-gap="12" :cols="2">
            <NGi>
              <strong>Khách hàng: </strong>
              <NInput value="Hoàn Hương" type="text" placeholder="Basic Input" />
            </NGi>
            <NGi>
              <strong>Điện thoại: </strong>
              <NInput value="0399994523" type="text" placeholder="Basic Input" />
            </NGi>
          </NGrid>
          <NGrid x-gap="12" :cols="2" style="margin-top: 10px;">
            <NGi>
              <p>
                <strong> Hình thức:</strong>
                <NSelect v-model:value="state.value" :options="state.optionsType" />
              </p>
            </NGi>
            <NGi>
              <strong> Khu vực:</strong>
              <NSelect v-model:value="state.value" :options="state.optionsType" />
            </NGi>
          </NGrid>
          <NGrid x-gap="12" :cols="1" style="margin-top: 10px;">
            <NGi>
              <strong>Ghi chú</strong>
              <NInput type="textarea" placeholder="Basic Textarea" />
            </NGi>
          </NGrid>
        </NCard>
      </NGi>

      <NGi>
        <NCard size="small" title="Thông tin lịch trình" hoverable style="height: 340px;">
          <NGrid x-gap="12" :cols="2">
            <NGi>
              <strong>Ngày bắt đầu: </strong>
              <NDatePicker type="date" />
            </NGi>
            <NGi>
              <strong>Giờ khởi hành: </strong>
              <NTimePicker default-formatted-value="00:12:13" />
            </NGi>
          </NGrid>

          <NGrid x-gap="12" :cols="2" style="margin-top: 10px;">
            <NGi>
              <strong>Ngày kết thúc: </strong>
              <NDatePicker type="date" />
            </NGi>
            <NGi>
              <strong>Giờ kết thúc: </strong>
              <NTimePicker default-formatted-value="00:12:13" />
            </NGi>
          </NGrid>

          <NGrid x-gap="12" :cols="2" style="margin-top: 10px;">
            <NGi>
              <strong>Điểm đón: </strong>
              <NInput type="text" placeholder="Basic Input" />
            </NGi>
            <NGi>
              <strong>Yêu cầu ngoại ngữ: </strong>
              <NInput type="text" placeholder="Có" />
            </NGi>
          </NGrid>
          <NGrid x-gap="12" :cols="2" style="margin-top: 10px;">
            <NGi>
              <strong>Lịch trình: </strong>
              <NInput type="text" placeholder="Basic Input" />
            </NGi>
            <NGi>
              <strong>Tổng KM di chuyển: </strong>
              <NInput type="text" placeholder="Basic Input" />
            </NGi>
          </NGrid>
        </NCard>
      </NGi>
    </NGrid>

    <NGrid x-gap="12" :cols="1" style="margin-top: 10px;">
      <NGi>
        <NCard size="small" title="Thông tin Dịch vụ" hoverable style="padding-bottom: 30px;">

          <template #header-extra>
            <NButton strong secondary type="primary" size="small" @click="state.isModalService=true">
              <Icon icon="mdi:car-search"></Icon> Thêm dịch vụ
            </NButton>
          </template>
          <table class="table-auto border w-full">
            <thead>
              <tr>
                <th class="w-[70px]">STT</th>
                <th class="w-[280px] !text-left">Dịch vụ</th>
                <th class="w-[150px] !text-center">Đơn vị</th>
                <th class="!text-center w-[200px]">Giá</th>
                <th class="w-[150px] !text-left">Số lượng</th>
                <th class="w-[150px] !text-center">Giảm giá </th>
                <th class="!text-center">Tổng</th>
                <th class="!text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="!text-center">1</td>
                <td class="!text-left">Xe Limousine</td>
                <td class="!text-center">Chiếc</td>
                <td class="!text-center">
                  <NInputNumber :default-value="1000000" />
                </td>
                <td class="!text-center">
                  <NInputNumber v-model:value="state.qty" clearable />
                </td>
                <td class="!text-center">
                  <NInputNumber :default-value="0" />
                </td>
                <td class="!text-right">
                  <strong>50,000,000</strong>
                </td>
                <td class="!text-center">
                  <NButton strong secondary circle type="error">
                    <template #icon>
                      <Icon icon="mdi:delete-circle" style="font-size: 25px;"></Icon>
                    </template>
                  </NButton>
                </td>
              </tr>
              <tr>
                <td class="!text-center">2</td>
                <td class="!text-left">Chi phí cao tốc</td>
                <td class="!text-center">vé</td>
                <td class="!text-center">
                  <NInputNumber :default-value="20000" />
                </td>
                <td class="!text-center">
                  <NInputNumber :default-value="2" clearable />
                </td>
                <td class="!text-center">
                  <NInputNumber :default-value="0" />
                </td>
                <td class="!text-right">
                  <strong>200,000</strong>
                </td>
                <td class="!text-center">
                  <NButton strong secondary circle type="error">
                    <template #icon>
                      <Icon icon="mdi:delete-circle" style="font-size: 25px;"></Icon>
                    </template>
                  </NButton>
                </td>
              </tr>
              <tr>
                <td class="!text-center">3</td>
                <td class="!text-left">Chi phí gửi xe</td>
                <td class="!text-center">vé</td>
                <td class="!text-center">
                  <NInputNumber :default-value="20000" />
                </td>
                <td class="!text-center">
                  <NInputNumber :default-value="2" clearable />
                </td>
                <td class="!text-center">
                  <NInputNumber :default-value="0" />
                </td>
                <td class="!text-right">
                  <strong>200,000</strong>
                </td>
                <td class="!text-center">
                  <NButton strong secondary circle type="error">
                    <template #icon>
                      <Icon icon="mdi:delete-circle" style="font-size: 25px;"></Icon>
                    </template>
                  </NButton>
                </td>
              </tr>

            </tbody>
          </table>

          <NGrid x-gap="12" :cols="2" style="margin-top: 10px;">
            <NGi>
              <NCard size="small" title="Tình trạng báo giá" hoverable>
                <NGrid x-gap="12" :cols="2">
                  <NGi>
                    <strong>Người tạo: </strong>
                    <NInput value="Nguyễn Thị Hương" type="text" placeholder="Basic Input" />
                  </NGi>
                  <NGi>
                    <strong>Trạng thái: </strong>
                    <NInput value="Bản nháp" type="text" placeholder="Basic Input" />
                  </NGi>
                </NGrid>
                <NGrid x-gap="12" :cols="1" style="margin-top: 10px;">
                  <NGi>
                    <strong>Ghi chú In</strong>
                    <NInput type="textarea" placeholder="Basic Textarea" />
                  </NGi>
                </NGrid>
              </NCard>
            </NGi>
            <NGi>
              <table class="table-auto border w-full">
                <tbody>
                  <tr>
                    <td class="!text-right">
                      <strong>TẠM TÍNH</strong>
                    </td>
                    <td class="!text-right" style="width: 300px;">
                      <strong>52,000,000 VNĐ</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!text-right">
                      <span class="text-primary">Giảm giá chung</span>
                    </td>
                    <td class="!text-right">
                      <NInput type="text" placeholder="Basic Input" />
                    </td>
                  </tr>
                  <tr>
                    <td class="!text-right">
                      <span class="text-primary">Giá trước thuế</span>
                    </td>
                    <td class="!text-right">
                      <strong>50,000,000 VNĐ</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!text-right">
                      <span class="text-primary">Thuế</span>
                    </td>
                    <td class="!text-right">
                      <NInput type="text" placeholder="Basic Input" />
                    </td>
                  </tr>
                  <tr>
                    <td class="!text-right">
                      <strong class="text-warning">TỔNG CỘNG</strong>
                    </td>
                    <td class="!text-right bg-warning">
                      <strong>50,000,000 VNĐ</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </NGi>
          </NGrid>

          <NGrid x-gap="12" :cols="1" style="margin-top: 20px;border-top: 1px solid #D3D3D3	;">
            <NGi class="text-right" style="margin-top: 20px">
              <NButton type="success">
                <template #icon>
                  <Icon icon="mdi:content-save" style="font-size: 25px;"></Icon>
                </template>
                Lưu báo giá
              </NButton>
              <NButton type="primary" style="margin-left: 20px;">
                <template #icon>
                  <Icon icon="mdi:download" style="font-size: 25px;"></Icon>
                </template>
                Lưu và in
              </NButton>
            </NGi>
          </NGrid>
        </NCard>
      </NGi>
    </NGrid>
  </div>

  <NModal v-model:show="state.isModalCustomer">
    <NSpace item-style="width: 850px" class="320-500:w-[320px]">
      <NCard title="Tìm kiếm khách hàng" closable>

        <NGrid x-gap="12" :cols="3">
          <NGi>
            <strong>Khu vực</strong>
            <NInput placeholder="Tìm kiếm..." clearable />
          </NGi>
          <NGi>
            <strong>Khách hàng, điện thoại ...</strong>
            <NInput placeholder="Tìm kiếm..." clearable />
          </NGi>
          <NGi>
            <NButton type="primary" style="margin-top: 22px;">
              Tìm kiếm
            </NButton>
          </NGi>
        </NGrid>

        <table class="table-auto border w-full" style="margin-top: 10px;">
          <thead>
            <tr>
              <th class="w-[70px] ">STT</th>
              <th class="w-[300px] !text-left">Khách hàng</th>
              <th class="w-[200px] ">SĐT</th>
              <th class="w-[200px]">Khu vực</th>
              <th class="w-[200px]">Phân loại</th>
              <th class="w-[150px]"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class="!text-left">Hoàng Văn Thành</td>
              <td>0377072339</td>
              <td>TP. HCM</td>
              <td>
                <NTag size="small" round type="primary">Cá nhân</NTag>
              </td>
              <td>
                <NButton tertiary type="success">
                  Chọn khách
                </NButton>
              </td>

            </tr>
            <tr>
              <td>2</td>
              <td class="!text-left">CTY TNHH MAI LINH</td>
              <td>0377072339</td>
              <td>Tp.HCM</td>
              <td>
                <NTag size="small" round type="success">Doanh Nghiệp</NTag>
              </td>
              <td>
                <NButton tertiary type="success">
                  Chọn khách
                </NButton>
              </td>
            </tr>
          </tbody>
        </table>
        <NPagination v-model:page="state.page" style="float: right;margin-top: 10px;" :page-count="100" />
      </NCard>
    </NSpace>
  </NModal>

  <NModal v-model:show="state.isModalService">
    <NSpace item-style="width: 850px" class="320-500:w-[320px]">
      <NCard title="Tìm kiếm khách hàng" closable>

        <NGrid x-gap="12" :cols="3">
          <NGi>
            <strong>Khu vực</strong>
            <NInput placeholder="Tìm kiếm..." clearable />
          </NGi>
          <NGi>
            <strong>Khách hàng, điện thoại ...</strong>
            <NInput placeholder="Tìm kiếm..." clearable />
          </NGi>
          <NGi>
            <NButton type="primary" style="margin-top: 22px;">
              Tìm kiếm
            </NButton>
          </NGi>
        </NGrid>

        <table class="table-auto border w-full">
          <thead>
            <tr>
              <th class="w-[70px]">STT</th>
              <th class="w-[100px]">Phân loại</th>
              <th class="w-[300px] !text-left">Tên dịch vụ</th>
              <th class="!text-center w-[150px]">Đơn vị</th>
              <th class="!text-center w-[200px]">Giá</th>
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

.schedule {
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 7px;
  cursor: pointer;
}
</style>
