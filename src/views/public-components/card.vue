<script lang="ts" setup>
import { defineProps, toRefs, ref, defineEmits } from "vue";
import { useRouter } from "vue-router";
import pentagram from "@/assets/svg/pentagram.svg?component";
import add_fav from "@/components/svgComponents/src/add_fav.vue";
import { addFavApi, cancelAddFavApi } from "@/api/trends";
import { ElMessage } from "element-plus";
import { useNav } from "@/layout/hooks/useNav";

const props = defineProps({
  infoCard: Array as () => any[]
});

const router = useRouter();
const { infoCard } = toRefs(props);
const { logout } = useNav();
const emit = defineEmits(["refresh"]);

const toGithub = (url: string) => {
  window.open(url, "_blank");
};
const toOwner = (name: string) => {
  router.push({ path: "/project-ower/index", query: { name: name } });
};
const toLanguage = () => {
  window.open("https://www.baidu.com/", "_black");
};

const reLogin = message => {
  if (message == "Token is invalid") {
    ElMessage({
      message: "登录已过期，请重新登录",
      type: "warning"
    });
    logout();
    return;
  }
};
const addFav = async (key, id, isFav) => {
  let data = {
    repoIds: [id],
    isFav: isFav ? 1 : 0
  };
  console.log(JSON.stringify(data), "dataaa");

  if (isFav) {
    try {
      await cancelAddFavApi(data);
      emit("refresh");
      ElMessage({
        message: "已取消收藏",
        type: "success"
      });
    } catch (error) {
      reLogin(error.response.data.message);
    }
  } else {
    try {
      console.log(data, "dataaaaa");
      await addFavApi(data);
      emit("refresh");
      ElMessage({
        message: "收藏成功",
        type: "success"
      });
    } catch (error) {
      reLogin(error.response.data.message);
    }
  }
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
            <el-tooltip
              class="box-item"
              effect="dark"
              :content="item.isFav ? '取消收藏' : '收藏'"
              placement="top"
            >
              <div
                class="add-fav ml-auto mr-8"
                @click.stop="addFav(idx, item.id, item.isFav)"
              >
                <add_fav
                  :fillColor="item.isFav ? 'red' : 'black'"
                  width="20"
                  height="20"
                />
              </div>
            </el-tooltip>
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
