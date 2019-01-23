<template>
  <div>Overview page
    <router-link :to="{name:'companyList'}">companyList</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Overview"
})
export default class Overview extends Vue {}
</script>
