<template>
  <router-view/>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import bus from "../../utils/bus";
const companyMap = ["google", "apple", "aws"];
@Component({
  name: "CompanyDetailLayout",
  created() {
    const matchedRoute = this.$route.matched.find(
      item => item.name === "companyDetail"
    );
    if (matchedRoute) {
      setTimeout(() => {
        matchedRoute.meta.breadcrumbs =
          companyMap[this.$route.params.companyId];
        bus.$emit("updateBreadcrumbs");
      }, 500);
    }
  },
  beforeRouteLeave(to, from, next) {
    const matchedRoute = this.$route.matched.find(
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
