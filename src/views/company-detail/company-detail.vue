<template>
  <div>companyDetail
    <div>
      <div>company id {{$route.params.companyId}}</div>
      <router-link :to="{name:'NewsList'}">NewsList</router-link>
      <div>
        <router-link :to="{name:'companyDetail',params:{companyId:0}}">google companyDetail</router-link>
        <br>
        <router-link :to="{name:'companyDetail',params:{companyId:1}}">apple companyDetail</router-link>
        <br>
        <router-link :to="{name:'companyDetail',params:{companyId:2}}">aws companyDetail</router-link>
      </div>
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
