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
  ]
})

//#endregion ----- State -----

//#region ----- Composables -----
const { showMessageError } = useHelper()

const redirectToHistory = (id: number) => {
  router.push({
    name: RouteName.customer.history.root,
    params: { id: id },
  })
}

//#endregion ----- Composables -----
</script>

<template>
  <div>
    <div class="block">
      <PageHeader title="Lịch trình chuyến đi" tooltip="Lịch trình chuyến đi">
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

          <div class="w-[240px] 320-991:w-full">
            <div class="font-medium whitespace-nowrap">Khu vực</div>
            <NSelect clearable value-field="value" label-field="label" />
          </div>

          <div class="w-[280px] flex flex-col gap-x-2 320-991:w-full">
            <div class="font-medium">Thời gian</div>
            <NDatePicker type="daterange" clearable />
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
          <NTabPane name="Cần xác nhận" tab="Cần xác nhận (20)">
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
                  <th class="w-[150px] !text-center">Người tạo </th>
                  <th class="w-[120px] !text-center">Trạng thái </th>
                  <th class="w-[80px] !text-center">Tùy chọn</th>
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
                  <td class="!text-left">
                    Nguyễn thị Linh <br>
                    <small>12/12/2024 09:52</small>
                  </td>
                  <td>
                    <NTag type="success" size="small" round>
                      Hoàn tất lệnh
                    </NTag>
                  </td>
                  <td>
                    <NTooltip trigger="hover">
                      <template #trigger>
                        <NButton quaternary circle type="warning" @click="state.isModalRent = true">
                          <Icon icon="mdi:circle-edit-outline" height="20px" />
                        </NButton>
                      </template>
                      Chỉnh sửa
                    </NTooltip>
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
                  <td class="!text-left">
                    Nguyễn thị Linh <br>
                    <small>12/12/2024 09:52</small>
                  </td>
                  <td>
                    <NTag type="info" size="small" round>
                      Đang di chuyển
                    </NTag>
                  </td>
                  <td>
                    <NTooltip trigger="hover">
                      <template #trigger>
                        <NButton quaternary circle type="warning" @click="state.isModalRent = true">
                          <Icon icon="mdi:circle-edit-outline" height="20px" />
                        </NButton>
                      </template>
                      Chỉnh sửa
                    </NTooltip>
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
                  <td class="!text-left">
                    Nguyễn thị Linh <br>
                    <small>12/12/2024 09:52</small>
                  </td>
                  <td>
                    <NTag type="primary" size="small" round>
                      Hoàn tất chuyến đi
                    </NTag>
                  </td>
                  <td>
                    <NTooltip trigger="hover">
                      <template #trigger>
                        <NButton quaternary circle type="warning" @click="state.isModalRent = true">
                          <Icon icon="mdi:circle-edit-outline" height="20px" />
                        </NButton>
                      </template>
                      Chỉnh sửa
                    </NTooltip>
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
                  <td class="!text-left">
                    Nguyễn thị châu <br>
                    <small>23/12/2024 09:52</small>
                  </td>
                  <td>
                    <NTag type="warning" size="small" round>
                      Chuyển bị di chuyển
                    </NTag>
                  </td>
                  <td>
                    <NTooltip trigger="hover">
                      <template #trigger>
                        <NButton quaternary circle type="warning" @click="state.isModalRent = true">
                          <Icon icon="mdi:circle-edit-outline" height="20px" />
                        </NButton>
                      </template>
                      Cập nhật
                    </NTooltip>
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
                  <td class="!text-left">
                    Nguyễn thị châu <br>
                    <small>23/12/2024 09:52</small>
                  </td>
                  <td>
                    <NTag type="error" size="small" round>
                      Chờ gắn tài xế
                    </NTag>
                  </td>
                  <td>
                    <NTooltip trigger="hover">
                      <template #trigger>
                        <NButton quaternary circle type="warning" @click="state.isModalRent = true">
                          <Icon icon="mdi:circle-edit-outline" height="20px" />
                        </NButton>
                      </template>
                      Cập nhật
                    </NTooltip>
                  </td>
                </tr>
              </tbody>
            </table>
            <NPagination v-model:page="state.page" style="margin-top: 10px;float: right;" :page-count="100" />

        <!-- <NTabs type="line" animated>
          <NTabPane name="Hiển thị lịch" tab="Hiển thị lịch">
            <table class="table-auto border w-full">
              <thead>
                <tr>
                  <th class="w-[250px] !text-center">T2 31/10/24</th>
                  <th class="w-[250px] !text-center">T2 31/10/24</th>
                  <th class="w-[250px] !text-center">T2 31/10/24</th>
                  <th class="w-[250px] !text-center">T2 31/10/24</th>
                  <th class="w-[250px] !text-center">T2 31/10/24</th>
                  <th class="w-[250px] !text-center">T2 31/10/24</th>
                  <th class="w-[250px] !text-center">T2 31/10/24</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="!text-left" colspan="2" @click="state.isModalRent = true">
                    <div style="background-color: #E6F4EA; border: 1px solid #A3D3B3 " class="schedule shadow-lg">
                      Nguyễn Văn Linh(500KM)<br>
                      TP.HCM->TV->TP.HCM <br>
                      <NTag size="small" type="primary">
                        [47E-5678] TOYOTA - XÁM - 7
                      </NTag> <br>
                      <NTag size="small" type="primary" style="margin-top: 5px;">
                        [52B-5678] HUYNDAI - XANH - 5
                      </NTag>
                    </div>
                  </td>
                  <td></td>
                  <td class="!text-left" @click="state.isModalRent = true">
                    <div class="schedule shadow-lg" style="background-color: #FFF9E6;border: 1px solid #FFD699  ;">
                      Hoàng Tùng (500KM)<br>
                      TP.HCM->TV->TP.HCM <br>
                      <NTag size="small" type="error">
                        Chưa gắn xe
                      </NTag>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td class="!text-left" @click="state.isModalRent = true">
                    <div class="schedule shadow-lg" style="background-color: #FFF9E6;border: 1px solid #FFD699  ;">
                      Chí Dũng (500KM)<br>
                      TP.HCM->TV->TP.HCM <br>
                      <NTag size="small" type="error">
                        Chưa gắn xe
                      </NTag>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </NTabPane>
          <NTabPane name="Hiển thị danh sách" tab="Hiển thị danh sách">
            
          </NTabPane>
        </NTabs> -->
      </PageBlock>
    </div>
  </div>

  <NModal v-model:show="state.isModalRent" @close="state.isModalRent = false">
    <NSpace item-style="width: 1050px" class="320-500:w-[320px]">

      <NCard title="Cập nhật tài xế cho lịch trình" closable @close="state.isModalRent = false">

        <NGrid x-gap="12" :cols="2">
          <NGi>
          </NGi>
          <NGi>
            <strong>Trạng thái</strong>
            <NSelect v-model:value="state.valueStatus" :options="state.optionsStatus" />
          </NGi>
        </NGrid>
        <NGrid x-gap="12" :cols="2" style="margin-top: 10px;">

          <NGi>
            <NCard size="small" title="Yêu cầu chuyến đi" hoverable style="height: 170px;">
              <NGrid x-gap="12" :cols="2">
                <NGi>
                  <p>
                    <strong>Bắt đầu: </strong> <span class="text-primary">22/12/2024 06:00</span>
                  </p>
                </NGi>
                <NGi>
                  <p>
                    <strong>Kết thúc: </strong><span class="text-primary">23/12/2024 20:00</span>
                  </p>
                </NGi>
              </NGrid>
              <NGrid x-gap="12" :cols="2">
                <NGi>
                  <p>
                    <strong>Số ngày: </strong> 2
                  </p>
                </NGi>
                <NGi>
                  <p>
                    <strong>Ngoại ngữ: </strong> có
                  </p>
                </NGi>
              </NGrid>
              <NGrid x-gap="12" :cols="1">
                <NGi>
                  <p>
                    <strong>Điểm đón: </strong> 22 Ni Sư Huỳnh liên, P 10, Q Tân bình, TP: HCM
                  </p>
                </NGi>
              </NGrid>
              <NGrid x-gap="12" :cols="1">
                <NGi>
                  <p>
                    <strong>Đi chuyển: </strong> TP.HCM -> Vũng tàu -> TP.HCM
                  </p>
                </NGi>
              </NGrid>
            </NCard>
          </NGi>

          <NGi>
            <NCard size="small" title="Thông tin khách hàng" hoverable style="height: 170px;">

              <NGrid x-gap="12" :cols="2">
                <NGi>
                  <p>
                    <strong>Khách hàng: </strong> Nguyễn Văn A
                  </p>
                </NGi>
                <NGi>
                  <p>
                    <strong>Điện thoại: </strong> 0399994523
                  </p>
                </NGi>
              </NGrid>
              <NGrid x-gap="12" :cols="2">
                <NGi>
                  <p>
                    <strong> Hình thức:</strong>
                    <NTag type="info" size="small" round>
                      Cá nhân
                    </NTag>
                  </p>
                </NGi>
                <NGi>
                  <strong>Khu vực</strong>: TP. HCM
                </NGi>
              </NGrid>
              <NGrid x-gap="12" :cols="1">
                <NGi>
                  <strong>Ghi chú</strong> : Không
                </NGi>
              </NGrid>
            </NCard>
          </NGi>

        </NGrid>

        <NCard size="small" title="Xe 7 chỗ, Tự lái" hoverable style="min-height: 150px;margin-top: 10px;">
          <NGrid x-gap="12" :cols="2">
            <NGi>
              <NAlert title="Thông tin xe" type="info">
                <template #icon>
                  <NIcon>
                    <IosAirplane />
                  </NIcon>
                </template>
                <NTag type="info">XE TOYOTA ĐỜI 2024</NTag>
                <NTag style="margin-left: 5px;" type="success">Biển số [47E-53757]</NTag>
                <NTag style="margin-left: 5px;cursor: pointer;" type="warning" @click="state.isModalCar = true">Thay đổi
                </NTag>
                <div style="margin-top: 10px;">
                  <NSwitch /> Thuê ngoài
                </div>
              </NAlert>
            </NGi>

            <NGi>
              <NAlert title="Thông tin tài xế" type="info">
                <template #icon>
                  <NIcon>
                    <IosAirplane />
                  </NIcon>
                </template>
                <NTag type="info">Nguyễn Văn Linh</NTag>
                <NTag style="margin-left: 5px;" type="success">0399994523</NTag>
                <NTag style="margin-left: 5px;" type="success">Ngoại ngữ tốt</NTag>
                <NTag style="margin-left: 5px;cursor: pointer;" type="warning" @click="state.isModalUser = true">Thay
                  đổi
                </NTag>
                <br>
                <div style="margin-top: 10px;">
                  <NSwitch /> Thuê ngoài
                </div>
              </NAlert>
            </NGi>

          </NGrid>
        </NCard>

        <NGrid x-gap="12" :cols="1" style="margin-top: 10px;">
          <NGi>
            <NCard size="small" title="Xe limousine, thuê xe và tài xế" hoverable style="height: 150px;">
              <NGrid x-gap="12" :cols="1" style="margin-top: 10px;text-align: center;">
                <NGi>
                  <NButton strong secondary type="info" @click="state.isModalCar = true">
                    Tìm kiếm và gắn xe
                    <template #icon>
                      <Icon icon="mdi:car-search"></Icon>
                    </template>
                  </NButton>
                </NGi>
              </NGrid>
            </NCard>
          </NGi>
        </NGrid>

        <NGrid v-if="state.valueStatus == 3" x-gap="12" :cols="1" style="margin-top: 10px;">
          <NGi>
            <NCard size="small" title="Cập nhật thông tin hoàn tất lệnh" hoverable>
              <NGrid x-gap="12" :cols="4">
                <NGi>
                  <strong>Số KM khởi hành</strong>
                  <NInput type="text" placeholder="Nhập thông tin" clearable />
                </NGi>
                <NGi>
                  <strong>Số KM kết thúc</strong>
                  <NInput type="text" placeholder="Nhập thông tin" clearable />
                </NGi>
                <NGi>
                  <strong>Số KM đón</strong>
                  <NInput type="text" placeholder="Nhập thông tin" clearable />
                </NGi>
                <NGi>
                  <strong>Số KM trả</strong>
                  <NInput type="text" placeholder="Nhập thông tin" clearable />
                </NGi>
              </NGrid>

              <NGrid x-gap="12" :cols="2" style="margin-top: 15px;">
                <NGi>
                  <strong>Số đêm: </strong>
                  <NInput type="text" placeholder="Nhập thông tin" clearable value="1" />
                </NGi>
                <NGi>
                  <strong>Số giờ OT: </strong>
                  <NInput type="text" placeholder="Nhập thông tin" clearable value="4" />
                </NGi>
              </NGrid>

              <NGrid x-gap="12" :cols="2" style="margin-top: 15px;">
                <NGi>
                  <strong>Di chuyển thực tế: </strong>
                  <NInput type="text" placeholder="Nhập thông tin" clearable value="TP.HCM -> Vũng tàu -> TP.HCM" />
                </NGi>
                <NGi>
                  <strong>Ghi chú: </strong>
                  <NInput type="text" placeholder="Nhập thông tin" clearable />
                </NGi>
              </NGrid>
            </NCard>
          </NGi>
        </NGrid>

        <NSpace style="float: right;margin-top: 30px;">
          <NButton type="tertiary" @click="state.isModalRent = false">
            Đóng
          </NButton>
          <NButton type="primary">
            Cập nhật lịch trình
          </NButton>
        </NSpace>
      </NCard>
    </NSpace>
  </NModal>

  <NModal v-model:show="state.isModalCar" @close="state.isModalCar = false">
    <NSpace item-style="width: 850px" class="320-500:w-[320px]">
      <NCard title="Tìm kiếm xe trống từ 22/10/2024 đến 23/10/2024" closable @close="state.isModalCar = false">
        <NGrid x-gap="12" :cols="1">
          <NGi>
            <div
              class="mb-5 flex items-center gap-x-4 320-991:grid 767-991:grid-cols-[repeat(2,1fr)] 500-767:grid-cols-[repeat(2,1fr)] 320-500:grid-cols-[repeat(1,1fr)]">


              <div class="w-[240px] 320-991:w-full">
                <div class="font-medium whitespace-nowrap">Loại xe</div>
                <NSelect clearable value-field="value" label-field="label" />
              </div>

              <div class="w-[240px] 320-991:w-full">
                <div class="font-medium whitespace-nowrap">Số Ghế thấp nhất</div>
                <NInput placeholder="Tìm kiếm..." clearable />
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
          </NGi>
          <NGi>
            <table class="table-auto border w-full">
              <thead>
                <tr>
                  <th class="w-[50px]">STT</th>
                  <th class="w-[120px]">Biển số</th>
                  <th class="w-[180px] !text-left">Thông tin xe</th>
                  <th class="w-[120px] !text-center">Số chuyến</th>
                  <th class="w-[80px] !text-center">Số KM</th>
                  <th class="w-[80px] !text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="!text-center">1</td>
                  <td class="!text-center">
                    <NTag type="success" size="small"><strong>47E-45678</strong></NTag>
                    <br>
                    TP. HCM
                  </td>
                  <td class="!text-left">
                    <strong>Toyota - 7 chỗ - Trắng</strong>
                    <br>
                    Hoàn Văn Tùng - TP.HCM
                  </td>
                  <td class="!text-center">
                    8/Tháng
                  </td>
                  <td class="!text-center">
                    2,000 KM
                  </td>
                  <td>
                    <NButton type="success">
                      Chọn xe
                    </NButton>
                  </td>
                </tr>
                <tr>
                  <td class="!text-center">1</td>
                  <td class="!text-center">
                    <NTag type="success" size="small"><strong>47E-45678</strong></NTag>
                    <br>
                    TP. HCM
                  </td>
                  <td class="!text-left">
                    <strong>Toyota - 7 chỗ - Trắng</strong>
                    <br>
                    Hoàn Văn Tùng - TP.HCM
                  </td>
                  <td class="!text-center">
                    10/Tháng
                  </td>
                  <td class="!text-center">
                    1,500 KM
                  </td>
                  <td>
                    <NButton type="success">
                      Chọn xe
                    </NButton>
                  </td>
                </tr>
                <tr>
                  <td class="!text-center">1</td>
                  <td class="!text-center">
                    <NTag type="success" size="small"><strong>47E-45678</strong></NTag>
                    <br>
                    TP. HCM
                  </td>
                  <td class="!text-left">
                    <strong>Toyota - 7 chỗ - Trắng</strong>
                    <br>
                    Hoàn Văn Tùng - TP.HCM
                  </td>
                  <td class="!text-center">
                    15/Tháng
                  </td>
                  <td class="!text-center">
                    3,000 KM
                  </td>
                  <td>
                    <NButton type="success">
                      Chọn xe
                    </NButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </NGi>
        </NGrid>
        <NSpace style="float: right;margin-top: 30px;">
          <NButton type="tertiary" @click="state.isModalCar = false">
            Đóng
          </NButton>
        </NSpace>
      </NCard>
    </NSpace>
  </NModal>

  <NModal v-model:show="state.isModalUser">
    <NSpace item-style="width: 850px" class="320-500:w-[320px]">
      <NCard title="Tìm kiếm tài xế rảnh từ 22/10/2024 đến 23/10/2024" closable>
        <NGrid x-gap="12" :cols="1">
          <NGi>
            <div
              class="mb-5 flex items-center gap-x-4 320-991:grid 767-991:grid-cols-[repeat(2,1fr)] 500-767:grid-cols-[repeat(2,1fr)] 320-500:grid-cols-[repeat(1,1fr)]">
              <div class="w-[240px] 320-991:w-full">
                <div class="font-medium whitespace-nowrap">Khu vực</div>
                <NSelect clearable value-field="value" label-field="label" />
              </div>

              <div class="w-[240px] 320-991:w-full">
                <div class="font-medium whitespace-nowrap">Bằng</div>
                <NInput placeholder="Tìm kiếm..." clearable />
              </div>

              <div class="w-[240px] 320-991:w-full">
                <div class="font-medium whitespace-nowrap">Ngoại ngữ</div>
                <NInput placeholder="Tìm kiếm..." clearable />
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
          </NGi>
          <NGi>
            <table class="table-auto border w-full">
              <thead>
                <tr>
                  <th class="w-[50px]">STT</th>
                  <th class="w-[120px] !text-left">Tài xế</th>
                  <th class="w-[120px] !text-center">Số chuyến</th>
                  <th class="w-[80px] !text-center">Số KM</th>
                  <th class="w-[80px] !text-center">Ngoại ngữ</th>
                  <th class="w-[80px] !text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="!text-center">1</td>
                  <td class="!text-left">
                    <strong>Nguyễn hồng Lĩnh</strong> <br>
                    TP. HCM
                  </td>
                  <td class="!text-center">
                    15/Tháng
                  </td>
                  <td class="!text-center">
                    2,000 KM
                  </td>
                  <td class="!text-center">
                    <NTag type="warning" style="width: 70px;text-align: center;">Khá</NTag>
                  </td>
                  <td>
                    <NButton type="success">
                      Chọn tài xế
                    </NButton>
                  </td>
                </tr>
                <tr>
                  <td class="!text-center">1</td>
                  <td class="!text-left">
                    <strong>Nguyễn hồng Lĩnh</strong> <br>
                    TP. HCM
                  </td>
                  <td class="!text-center">
                    15/Tháng
                  </td>
                  <td class="!text-center">
                    2,000 KM
                  </td>
                  <td class="!text-center">
                    <NTag type="success" style="width: 70px;text-align: center;">Tốt</NTag>
                  </td>
                  <td>
                    <NButton type="success">
                      Chọn tài xế
                    </NButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </NGi>
        </NGrid>
        <NSpace style="float: right;margin-top: 30px;">
          <NButton type="tertiary">
            Đóng
          </NButton>
        </NSpace>
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
