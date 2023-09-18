import { ref, onMounted } from "vue";
import { useBoardStore } from "@/store/board";

export default function useFilter() {
  const boardStore = useBoardStore();
  const date = ref();

  onMounted(() => {
    let startDate = undefined;
    let endDate = undefined;
    if (boardStore.fromDate) {
      startDate = new Date(boardStore.fromDate);
    }
    if (boardStore.toDate) {
      endDate = new Date(boardStore.toDate);
    }
    date.value = [startDate, endDate];
  });

  const filterByDateRange = () => {
    if (!date) return;
    const [fromDate, toDate] = date.value;
    boardStore.keepCopy();
    boardStore.setDates(fromDate, toDate);
    boardStore.applyFilters();
  };

  const highlight = (list, searchStr) => {
    if (searchStr.trim() === "") return;
    if (searchStr.length < 3) return;
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const { title, labels } = item;
      if (title.toLowerCase().includes(searchStr.toLowerCase())) {
        item.highlighted = true;
      }
      const includes = labels.some(label => 
        label.value.toLowerCase().includes(searchStr.toLowerCase())
      );
      if(includes){
        item.highlighted = true
      }
    }
  };

  const unhighlight = (list) => {
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      item.highlighted = false;
    }
  };

  const searchByKeyword = (e) => {
    const str = e.target.value;
    if(str.trim().length > 2) {
        highlight(boardStore.todos, str);
        highlight(boardStore.doings, str);
        highlight(boardStore.dones, str);
    }
    if(str.trim() === '') {
        unhighlight(boardStore.todos);
        unhighlight(boardStore.doings);
        unhighlight(boardStore.dones);
    }
  };

  const clearDates = () => {
    date.value = undefined;
    boardStore.setDates(undefined, undefined);
    boardStore.reset();
  };

  return {
    date,
    clearDates,
    filterByDateRange,
    searchByKeyword,
  };
}
