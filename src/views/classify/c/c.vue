<script lang="ts" setup>
import { showCard } from "../mixin/mixins";
const { infoCard, onMounted, card, getTrendsInfo } = showCard();
const data = {
  languageId: "7",
  order: 1,
  pageNum: 1,
  pageSize: 50
};
onMounted(() => {
  getCard();
});
const getCard = () => {
  getTrendsInfo(data).then(res => {
    infoCard.value = res.data.repos;
    // total.value = Number(res.data.total);
  });
};
</script>
<template>
  <div>
    <card :info-card="infoCard" />
  </div>
</template>
