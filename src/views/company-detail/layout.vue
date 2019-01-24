<template>
  <router-view/>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import bus from "../../utils/bus";
import { getCompanyNameById } from "./service";
let originBreadcrumbs = "";
function handelRouterChange(router, breadcrumbsText) {
  const matchedRoute = router.matched.find(
    item => item.name === "companyDetail"
  );
  if (matchedRoute) {
    if (!originBreadcrumbs) originBreadcrumbs = matchedRoute.meta.breadcrumbs;
    matchedRoute.meta.breadcrumbs = breadcrumbsText;
    bus.$emit("updateBreadcrumbs");
  }
}

@Component({
  name: "CompanyDetailLayout",
  beforeRouteEnter(to, from, next) {
    getCompanyNameById(to.params.companyId).then(companyName => {
      handelRouterChange(to, companyName);
    });
    next();
  },
  beforeRouteUpdate(to, from, next) {
    getCompanyNameById(to.params.companyId).then(companyName => {
      handelRouterChange(to, companyName);
    });
    next();
  },
  beforeRouteLeave(to, from, next) {
    handelRouterChange(from, originBreadcrumbs);
    next();
  }
})
export default class CompanyDetailLayout extends Vue {}
</script>

<style scoped>
</style>
