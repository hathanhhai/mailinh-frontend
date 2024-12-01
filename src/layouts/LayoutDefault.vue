<script setup lang="ts">
/* ----- Import Type ----- */
import type { LayoutInst } from 'naive-ui'

/* ----- Import Variables ----- */

/* ----- Import Components ----- */
import SideBar from './components/SidebarMenu.vue'
import HeaderBar from './components/HeaderBar.vue'

/* ----- Global variables ----- */
const route = useRoute()

watch(
  () => route.path,
  () => {
    layoutContentRef?.value?.scrollTo(0, 0)
  }
)

//#region ----- Element Ref -----
const layoutContentRef = ref<LayoutInst | null>(null)
//#endregion ----- Element Ref -----

//#region ----- Stores -----
const appStore = useAppStore()
//#endregion ----- Stores -----

//#region ----- State -----
//#endregion ----- State -----

//#region ----- Composables -----

//#endregion ----- Composables -----

//#region ----- Variables -----
//#endregion ----- Variables -----

//#region ----- Functions -----
//#endregion ----- Functions -----

//#region ----- Hooks -----
onMounted(() => {
  nextTick(() => {
    appStore.isLoadingWebsite = false
  })
})

onBeforeUnmount(() => {
  appStore.isLoadingWebsite = true
})
//#endregion ----- Hooks -----
</script>

<template>
  <NLayout has-sider class="h-screen">
    <!-- Side bar -->
    <SideBar />

    <NLayout>
      <!-- navbar -->
      <HeaderBar class="sticky top-0 z-10" />

      <NLayoutContent
        ref="layoutContentRef"
        content-style="padding: 24px 30px;"
        position="absolute"
        :native-scrollbar="false"
        :scrollbar-props="{}"
        class="[&.n-layout]:!bg-[#F6F8FF] dark:[&.n-layout]:!bg-gray-800"
      >
        <RouterView v-slot="{ Component, route }">
          <Transition name="fade-transform" mode="out-in" appear>
            <div :key="route.name">
              <component :is="Component" :key="route.path" class="flex-1" />
            </div>
          </Transition>
        </RouterView>
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

<style lang="scss">
$header-height: 60px;
.n-layout-header {
  height: $header-height;
  padding-left: 1.5rem !important;
}
.n-layout-content {
  top: $header-height !important;
}

body {
  overflow: hidden;
}
</style>
