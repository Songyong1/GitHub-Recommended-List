<script lang="ts" setup>
import { showCard } from "../../mixin/mixins";
const { infoCard, onMounted, card, getTrendsInfo, total, currentPage } =
  showCard();
const data = {
  languageId: "2",
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
    total.value = Number(res.data.total);
  });
};
const currentChange = (val: number) => {
  currentPage.value = val;
  data.pageNum = val;
  try {
    getCard();
  } catch (err) {
    console.log(err);
  }
};
</script>
<template>
  <div>
    <card :info-card="infoCard" @refresh="getCard" />
    <div class="pagination-container">
      <el-pagination
        background
        :current-page="currentPage"
        :page-size="data.pageSize"
        layout="total, prev, pager, next"
        :total="total"
        @current-change="currentChange"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../pagination.scss";
</style>
