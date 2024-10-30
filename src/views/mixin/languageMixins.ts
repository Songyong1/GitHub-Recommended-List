import { ref } from "vue";
import { onMounted, reactive } from "vue";
import card from "@/views/public-components/card.vue";
import { getTrendsInfo } from "@/api/trends";
export const showCard = () => {
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
  const total = ref<number>(0);
  const currentPage = ref(1);
  return {
    infoCard,
    onMounted,
    card,
    getTrendsInfo,
    reactive,
    total,
    currentPage
  };
};
