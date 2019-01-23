<template>
  <div>companylist
    <div>
      <router-link :to="{name:'companyDetail',params:{companyId:0}}">google companyDetail</router-link>
    </div>
    <div>
      <router-link :to="{name:'companyDetail',params:{companyId:1}}">apple companyDetail</router-link>
    </div>
    <div>
      <router-link :to="{name:'companyDetail',params:{companyId:2}}">aws companyDetail</router-link>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "CompanyList"
})
export default class CompanyList extends Vue {}
</script>

<style scoped>
</style>
