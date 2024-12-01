<script setup lang="ts">
/* ----- Import Type ----- */

import { useActivityStore } from '../stores/activityStore'

const store = useActivityStore()
const handleClick = () => {
  store.stateModal.isShowViewModal = false
}
</script>

<template>
  <NSpace item-style="width: 700px;" class="500-767:w-[450px] 320-500:w-[320px]">
    <NCard :title="$t('pages.users.title.describe')" closable @close="handleClick">
      <div style="overflow: overlay">
        <NCode :code="JSON.stringify(store.listJson, null, 2)" language="json" />
      </div>
    </NCard>
  </NSpace>
</template>
