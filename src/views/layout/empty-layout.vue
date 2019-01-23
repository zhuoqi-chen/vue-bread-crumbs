<template>
  <router-view/>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "EmptyLayout"
})
export default class EmptyLayout extends Vue {}
</script>

<style scoped>
</style>
