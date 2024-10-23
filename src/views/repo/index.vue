<script lang="ts" setup>
import { showCard } from "@/views/mixin/mixins";
import { getRepoFav } from "@/api/trends";
const { infoCard, onMounted, card, reactive } = showCard();
const data = reactive({
  // languageId: "9",
  // order: 1,
  object: {},
  pageNum: 1,
  pageSize: 50
});
onMounted(() => {
  getCard();
});
const getCard = () => {
  getRepoFav(data).then(res => {
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
