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
  return {
    infoCard,
    onMounted,
    card,
    getTrendsInfo,
    reactive
  };
};
