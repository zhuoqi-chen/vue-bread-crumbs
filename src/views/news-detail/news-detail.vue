<template>
  <div>NewsDetail
    <div>news id {{$route.params.newId}}</div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "NewsDetail"
})
export default class NewsDetail extends Vue {}
</script>

<style scoped>
</style>
