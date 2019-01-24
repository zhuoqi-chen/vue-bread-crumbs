<template>
  <div>
    <span v-for="item in breadcrumbs" :key="item.name">
      <router-link
        v-if="$route.name!=item.routerName+'Index' && $route.name!=item.routerName"
        :to="{name:item.routerName,params:$route.params,query:item.query}"
      >{{item.title}} ></router-link>
      <span v-else>{{item.title}}</span>
    </span>
    <hr>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import bus from "@/utils/bus";
@Component({
  name: "Breadcrumbs",
  data() {
    return {
      breadcrumbs: []
    };
  },
  watch: {
    "$route.matched": {
      async handler(value) {
        this.handelChange();
      },
      // deep: true,
      immediate: true
    }
  },
  created() {
    bus.$on("updateBreadcrumbs", () => {
      this.handelChange();
    });
  },
  methods: {
    handelChange() {
      this.breadcrumbs = this.$route.matched
        .filter(item => item.name && item.meta.breadcrumbs)
        .map(item => {
          const route = {
            routerName: item.name,
            title: item.meta.breadcrumbs,
            query: {}
          };
          try {
            let query = "";
            const queryStr = window.sessionStorage.getItem(item.path + "/");
            if (queryStr) {
              route.query = JSON.parse(queryStr);
            }
          } catch (error) {
            console.log(error);
          }
          return route;
        });
    }
  }
})
export default class Breadcrumbs extends Vue {}
</script>

<style scoped>
</style>
