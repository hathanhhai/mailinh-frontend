<script lang="ts" setup>
withDefaults(
  defineProps<{
    loading: boolean
  }>(),
  { loading: false }
)
</script>

<template>
  <div
    v-if="loading"
    class="flex items-center gap-2 animate-pulse rounded-sm bg-white dark:bg-black py-[14px] px-3"
  >
    <div class="block w-[37px] h-[37px] rounded-full bg-slate-200 dark:bg-gray-800"></div>
    <div class="flex flex-col justify-center gap-2">
      <div class="w-28 h-2.5 bg-slate-200 dark:bg-gray-800 rounded-full"></div>
      <div class="w-48 h-3 bg-slate-200 dark:bg-gray-800 rounded-full"></div>
    </div>
  </div>
  <slot v-else />
</template>
