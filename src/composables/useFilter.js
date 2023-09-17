import { ref, onMounted } from 'vue'
import { useBoardStore } from "@/store/board";

export default function useFilter() {
  const boardStore = useBoardStore();
  const date = ref();

  onMounted(() => {
    let startDate = undefined
    let endDate = undefined
    if(boardStore.fromDate){
        startDate = new Date(boardStore.fromDate)
    }
    if(boardStore.endDate){
        endDate = new Date(boardStore.fromDate)
    }
    date.value = [startDate, endDate];
  })

  const filterByDateRange = () => {
    if (!date) return;
    const [fromDate, toDate] = date.value;
    boardStore.keepCopy()
    boardStore.setDates(fromDate, toDate)
    boardStore.applyFilters()
  };

  const clearDates = () => {
    boardStore.setDates(undefined, undefined)
    boardStore.reset()
  };

  return {
    date,
    clearDates,
    filterByDateRange,
  };
}
