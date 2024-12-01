<script lang="ts" setup>
import type { NLocale, NDateLocale } from 'naive-ui'
import { NConfigProvider, viVN, dateViVN, enUS, dateEnUS, darkTheme, lightTheme } from 'naive-ui'
import AppProvider from '@/components/common/AppProvider.vue'
import { DarkTheme, LightTheme } from '@/configs/theme'

import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import { useDark } from '@vueuse/core'

hljs.registerLanguage('json', json)

const appStore = useAppStore()

const localeCurrent = computed<{ locale: NLocale; date: NDateLocale }>(() => {
  switch (appStore.localeCurrent?.key) {
    case 'vi-VN':
      return {
        locale: viVN,
        date: dateViVN
      }
    case 'en-US':
      return {
        locale: enUS,
        date: dateEnUS
      }
  }
  return {
    locale: viVN,
    date: dateViVN
  }
})

const isDark = useDark()
</script>

<template>
  <NConfigProvider
    :hljs="hljs"
    :locale="localeCurrent.locale"
    :date-locale="localeCurrent.date"
    :theme-overrides="isDark ? DarkTheme : LightTheme"
    :theme="isDark ? darkTheme : lightTheme"
    inline-theme-disabled
  >
    <NGlobalStyle />
    <Transition name="fade" mode="out-in" appear>
      <div v-if="appStore.isLoadingWebsite" id="loading-website">
        <div class="loading">
          <svg viewBox="0 0 187.3 93.7" height="200px" width="300px" class="svgbox">
            <defs>
              <linearGradient id="gradient" y2="0%" x2="100%" y1="0%" x1="0%">
                <stop stop-color="pink" offset="0%"></stop>

                <stop stop-color="blue" offset="100%"></stop>
              </linearGradient>
            </defs>

            <path
              stroke="url(#gradient)"
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
            ></path>
          </svg>
        </div>
      </div>
    </Transition>
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<style>
.n-base-selection .n-base-selection__border,
.n-base-selection .n-base-selection__state-border,
.popup-create-new-keyword .n-card .n-card__content .n-form .n-form-item-blank .n-input,
.popup-create-new-keyword .n-card .n-card__content .n-form .n-form-item-blank .n-select {
  @apply !border-[#e0e0e6] dark:!border-gray-700;
}
.n-card > .n-card-header {
  @apply dark:!border-b-gray-800;
}

.n-table {
  @apply dark:!bg-gray-800;
}
.n-table th {
  @apply dark:!bg-gray-800;
}
.n-table td {
  @apply dark:!bg-gray-950;
}
.n-table th,
.n-table td {
  @apply dark:!border-b-gray-800;
}
</style>
