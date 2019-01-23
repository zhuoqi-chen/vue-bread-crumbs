<template>
  <div>
    <breadcrumbs/>
    <router-view/>
  </div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "MainLayout",
  components: {
    Breadcrumbs
  }
})
export default class MainLayout extends Vue {}
</script>

<style scoped>
</style>
