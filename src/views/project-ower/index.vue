<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { owerInfo } from "@/api/ower";

let ownerInfo = reactive({
  avatarUrl: "",
  bio: "",
  createdAt: "",
  email: "",
  followers: "",
  following: "",
  htmlUrl: "",
  id: null,
  login: "",
  name: "",
  publicRepos: "",
  publicGists: "",
  type: "",
  updatedAt: ""
});
const router = useRouter();
const name = ref<string | string[]>("");
const data = reactive({
  pageNum: 1,
  pageSize: 50,
  name: ""
});

watch(
  () => router.currentRoute.value.path,
  topath => {
    name.value = router.currentRoute.value.query.name;
  },
  { immediate: true, deep: true }
);
const getOwerInfo = async data => {
  try {
    data.name = name.value as string;
    const res = await owerInfo(data);
    ownerInfo = res.data.owners[0];
    console.log(ownerInfo, "ownerInfo");
  } catch (err) {
    console.log(err, "err");
  }
};
onMounted(() => {
  getOwerInfo(data);
});
</script>
<template>
  <div class="owerw-area bg-white">
    <div class="left-area border-green-400 mt-10">
      <div class="w-72 h-72 bg-slate-50">
        <img class="rounded-full" :src="ownerInfo.avatarUrl" />
      </div>
      <div>
        <div class="text-2xl font-semibold">
          {{ ownerInfo.login }}
        </div>
        <div>
          {{ ownerInfo.name }}
        </div>
      </div>
    </div>
    <div class="right-area border-green-400 mt-10 ml-5">asfads</div>
  </div>
</template>
<style lang="scss" scoped>
.owerw-area {
  display: grid;
  grid-template-columns: 300px 900px;
  justify-content: center;
}
</style>
