<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */

/* ----- Import Components ----- */

/* ----- Global variables ----- */
defineProps<{
  title?: string
  tooltip?: string
}>()

//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----
//#endregion ----- Stores -----

//#region ----- State -----
const state = reactive({
  isFetching: true,
  isPending: false,
  isError404: false
})
//#endregion ----- State -----

//#region ----- Composables -----
//#endregion ----- Composables -----

//#region ----- Variables -----
//#endregion ----- Variables -----

//#region ----- Functions -----
//#endregion ----- Functions -----

//#region ----- Hooks -----
//#endregion ----- Hooks -----
</script>

<template>
  <div class="flex items-center justify-between">
    <div v-if="!$slots.title" class="flex items-center gap-x-2">
      <h1 class="font-semibold text-h3 text-primary-dark">{{ $props.title }}</h1>
      <NTooltip v-if="$props.tooltip" trigger="hover" :keep-alive-on-hover="false">
        <template #trigger>
          <Icon icon="healthicons:info" size="16" class="text-warning outline-none" />
        </template>
        {{ $props.tooltip }}
      </NTooltip>
    </div>
    <slot name="title" />

    <div class="flex items-center gap-x-2">
      <slot />
    </div>
  </div>
</template>
