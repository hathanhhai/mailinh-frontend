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
  <div>Home</div>
</template>
