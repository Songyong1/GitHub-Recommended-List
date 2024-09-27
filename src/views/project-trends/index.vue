<script setup lang="ts">
import { ref, reactive, onMounted, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { getTrendsInfo, getLanguages, getInfo } from "@/api/trends";
import pentagram from "@/assets/svg/pentagram.svg?component";

const infoCard = ref([]);
const languageList = ref([]);
const isActive = ref(false);
const selectedLanguage = ref("");
const router = useRouter();
const total = ref(0);
const currentPage = ref(1);
const data = reactive({
  object: {},
  languageId: 0,
  pageNum: 1,
  pageSize: 50
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
  gitcard();
});
const gitcard = async () => {
  try {
    data.languageId = 0;
    search();
  } catch (err) {
    console.log(err);
  }
};
const toGithub = (url: string) => {
  window.open(url, "_blank");
};
const toLanguage = () => {
  window.open("https://www.baidu.com/", "_black");
};
const toOwner = (name: string) => {
  router.push({ path: "/project-ower/index", query: { name: name } });
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
        :class="{ active: selectedLanguage === v.name }"
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
    <div class="w-3/4 h-48 m-auto">
      <el-row :gutter="20" class="overflow-y-auto overflow-hidden">
        <el-col
          v-for="(item, idx) in infoCard"
          :key="idx"
          :span="12"
          class="mb-5 cursor-pointer"
          @click.prevent="toGithub(item.htmlUrl)"
        >
          <div class="h-48 bg-white rounded-md shadow-md card">
            <div class="pt-4 ml-5 flex">
              <div class="w-9">
                <img class="rounded-md w-9 h-9" :src="item.image" alt="" />
              </div>
              <div class="flex flex-col ml-4" style="margin-top: -4px">
                <span class="text-base text-black font-semibold">{{
                  item.name
                }}</span>
                <span
                  class="inline-block w-max text-sm text-slate-400 bottom-line"
                  @click.stop="toOwner(item.ownerName)"
                  >{{ item.ownerName }}</span
                >
              </div>
            </div>
            <div>
              <el-tooltip
                v-if="item.desc.length > 180"
                effect="dark"
                :content="item.desc"
                placement="top"
              >
                <div
                  class="h-10 m-4 break-words line-clamp-2 text-sm text-slate-400"
                >
                  {{ item.desc }}
                </div>
              </el-tooltip>
              <div
                v-else
                class="h-10 m-4 break-words line-clamp-2 text-sm text-slate-400"
              >
                {{ item.desc }}
              </div>
            </div>
            <div class="pt-5 pl-5 text-slate-500 text-xs flex">
              <span class="bottom-line" @click.stop="toLanguage">
                {{ item.language }}
              </span>
              <span class="pl-4 flex">
                <pentagram width="14" height="14" />
                {{ (item.stargazersCount / 1000).toFixed(2) }}&nbsp;k
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
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
.card {
  &:hover {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
  .bottom-line {
    &:hover {
      border-bottom: 1px solid rgb(100 116 139);
    }
  }
}
.pagination-container {
  position: fixed;
  bottom: 10px;
  right: 20px;
}
</style>
