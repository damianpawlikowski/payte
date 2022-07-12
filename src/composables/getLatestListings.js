import axios from "@/plugins/axios";
import { ref } from "vue";

const useGetLatestListings = () => {
  const isLoading = ref(null);
  const data = ref(null);

  const getLatestListings = async (count = 10) => {
    isLoading.value = true;
    const response = (
      await axios.get("/cryptocurrency/listings/latest/" + count.toString())
    ).data;

    if (response) {
      data.value = response.data;
      console.log(response.data);
    }

    isLoading.value = false;
  };

  return { getLatestListings, isLoading, data };
};

export default useGetLatestListings;
