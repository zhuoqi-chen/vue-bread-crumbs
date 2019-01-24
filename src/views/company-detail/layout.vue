<template>
  <router-view/>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import bus from "../../utils/bus";
const companyMap = ["google", "apple", "aws"];
@Component({
  name: "CompanyDetailLayout",
  beforeRouteEnter(to, from, next) {
    const matchedRoute = to.matched.find(item => item.name === "companyDetail");
    if (matchedRoute) {
      setTimeout(() => {
        matchedRoute.meta.breadcrumbs = companyMap[to.params.companyId];
        bus.$emit("updateBreadcrumbs");
      }, 200);
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    const matchedRoute = from.matched.find(
      item => item.name === "companyDetail"
    );
    if (matchedRoute) {
      matchedRoute.meta.breadcrumbs = `...`;
      bus.$emit("updateBreadcrumbs");
    }
    next();
  }
})
export default class CompanyDetailLayout extends Vue {}
</script>

<style scoped>
</style>
