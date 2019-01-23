<template>
  <div>companyDetail
    <div>
      <div>company id {{$route.params.companyId}}</div>
      <router-link :to="{name:'NewsList'}">NewsList</router-link>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "companyDetail"
})
export default class companyDetail extends Vue {}
</script>

<style scoped>
</style>
