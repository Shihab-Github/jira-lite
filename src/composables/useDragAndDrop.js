export default function useDragAndDrop(col) {
  const dragStart = (task) => {
    console.log('start: ', task)
  };

  const dragEnd = () => {
    console.log('drag end', col)
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (event, col) => {
    console.log('drag enter: ', event)
    console.log('col: ', col)
  }

  return {
    dragStart,
    dragEnd,
    dragOver,
    dragEnter
  }
}
