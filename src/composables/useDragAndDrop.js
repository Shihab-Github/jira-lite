import { ref } from 'vue'
import { useBoardStore } from "@/store/board";

export default function useDragAndDrop() {
  const boardStore = useBoardStore();

  const dragStart = (event, task, col) => { 
    boardStore.setDirection(col)
    boardStore.draggedTask = task
  };

  const dragEnd = () => {
    
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (event, col) => {
    const { from } = boardStore.direction
    boardStore.setDirection(from, col)
    boardStore.moveCard()
  };

  return {
    dragStart,
    dragEnd,
    dragOver,
    dragEnter,
  };
}
