<script lang="ts" setup>
import { showCard } from "@/views/mixin/mixins";
import { getRepoFav } from "@/api/trends";
const { infoCard, onMounted, card, reactive, total, currentPage } = showCard();
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
.pagination-container {
  position: fixed;
  bottom: 10px;
  right: 20px;
}
</style>
