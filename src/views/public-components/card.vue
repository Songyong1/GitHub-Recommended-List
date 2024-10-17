<script lang="ts" setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import pentagram from "@/assets/svg/pentagram.svg?component";

const props = defineProps({
  infoCard: []
});

const router = useRouter();

const toGithub = (url: string) => {
  window.open(url, "_blank");
};
const toOwner = (name: string) => {
  router.push({ path: "/project-ower/index", query: { name: name } });
};
const toLanguage = () => {
  window.open("https://www.baidu.com/", "_black");
};
</script>
<template>
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
</template>
<style lang="scss">
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
</style>
