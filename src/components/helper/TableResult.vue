<script lang="ts" setup>
const props = defineProps<{
  currentPage: number
  total: number
  perPage: number
}>()

const result = computed(() => {
  const { currentPage, perPage, total } = props

  let _result = {
    firstRow: 0,
    lastRow: 0,
    totalRow: total
  }
  if (!total) return _result
  _result.firstRow = (currentPage - 1) * perPage + 1
  _result.lastRow = Math.min(_result.firstRow + perPage - 1, total)

  if (_result.firstRow > _result.totalRow) {
    _result.firstRow = 0
    _result.lastRow = 0
  }

  return _result
})

function formatNumber(value: number) {
  return Intl.NumberFormat().format(value)
}
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex gap-1">
      <span>Hiển thị từ</span>
      <span>{{ formatNumber(result.firstRow) }}</span>
      <span>đến</span>
      <span>{{ formatNumber(result.lastRow) }}</span>
      <span>trong tổng số</span>
      <span>{{ formatNumber(result.totalRow) }}</span>
    </div>
    <slot />
  </div>
</template>
