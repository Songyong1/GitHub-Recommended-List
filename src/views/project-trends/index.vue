<script setup lang="ts">
import { ref, reactive, onMounted, defineComponent } from "vue";
import { getTrendsInfo, getLanguages, getInfo } from "@/api/trends";
import card from "@/views/public-components/card.vue";

type list = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  repoUrl: string;
  bio: string;
};

type info = {
  htmlUrl: string;
  name: string;
  image: string;
  ownerName: string;
  desc: string;
  language: string;
  stargazersCount: number;
};

const infoCard = ref<info[]>([]);
const languageList = ref<list[]>([]);
const isActive = ref<boolean>(false);
const selectedLanguage = ref<string>("");
const total = ref<number>(0);
const currentPage = ref(1);
const data = reactive({
  object: {},
  languageId: 0,
  pageNum: 1,
  pageSize: 50,
  order: 1
});
const selectLanguage = (language, id) => {
  isActive.value = !isActive.value;
  selectedLanguage.value = language;
  data.languageId = id;
  data.pageNum = 1;
  currentPage.value = 1;
  getInfo(data).then(res => {
    infoCard.value = res.data.repos;
    total.value = Number(res.data.total);
  });
};
const search = () => {
  getTrendsInfo(data).then(res => {
    infoCard.value = res.data.repos;
    total.value = Number(res.data.total);
  });
};
const getAll = () => {
  try {
    data.languageId = 0;
    data.pageNum = 1;
    currentPage.value = 1;
    selectedLanguage.value = "";
    search();
  } catch (err) {
    console.log(err);
  }
};
onMounted(() => {
  getcard();
});
const getcard = async () => {
  try {
    data.languageId = 0;
    search();
  } catch (err) {
    console.log(err);
  }
};

const currentChange = (val: number) => {
  currentPage.value = val;
  data.pageNum = val;
  try {
    search();
  } catch (err) {
    console.log(err);
  }
};

getLanguages(data).then(res => {
  languageList.value = res.data.languages;
});
</script>

<template>
  <div>
    <div
      class="h-28 bg-white flex flex-col justify-center items-center rounded-md head-card"
    >
      <div class="text-2xl font-bold">趋势</div>
      <div>浏览当下 GitHub 上最热门的开源项目</div>
    </div>
    <div class="h-12 flex justify-center items-center">
      <span
        v-for="(v, idx) in languageList"
        :key="idx"
        class="change-language-btn mr-3 px-3 text-center rounded h-7 leading-7 border border-solid border-green-400 text-green-400 shadow-md"
        :class="[selectedLanguage === v.name && 'active']"
        @click="selectLanguage(v.name, v.id)"
        >{{ v.name }}</span
      >
      <el-button
        type="primary"
        class="shadow-md"
        style="height: 28px"
        @click="getAll"
        >全部</el-button
      >
    </div>
    <card :info-card="infoCard" @refresh="search" />
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

<style scoped lang="scss">
.head-card {
  box-shadow: 0px 0px 8px 0px #e0e0e0;
}
.change-language-btn {
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  &:active {
    background-color: rgb(74 222 128);
    color: #fff;
  }
}
.active {
  background-color: rgb(74 222 128);
  color: #fff;
}

.pagination-container {
  position: fixed;
  bottom: 10px;
  right: 20px;
}
</style>
