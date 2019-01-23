<template>
  <div>NewsList
    <div>
      <router-link :to="{name:'newsDetail',params:{newId:1}}">newsDetail1</router-link>
    </div>
    <div>
      <router-link :to="{name:'newsDetail',params:{newId:2}}">newsDetail2</router-link>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "NewsList"
})
export default class NewsList extends Vue {}
</script>

<style scoped>
</style>
