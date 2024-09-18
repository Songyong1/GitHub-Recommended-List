<script setup lang="ts">
import { ref } from "vue";
import { getTrendsInfo } from "@/api/trends";
const data = {
  page: 1,
  pageSize: 100
};
getTrendsInfo(data).then(res => {
  console.log(res, "ressss");
});
</script>

<template>
  <div class="w-full h-20 bg-slate-300"></div>
</template>

<style scoped></style>
