// Utilities
import { defineStore } from "pinia";

export const useBoardStore = defineStore("board", {
  state: () => ({
    todo: [],
    doing: [],
    done: [],
    direction: {
      from: "",
      to: "",
    },
    fromDate: null,
    toDate: null,
    draggedTask: null,
    fixedLabels: ["#7F5F01", "#974F0C", "#AE2A19", "#5E4DB2", "#0055CC"],
    unfilteredTodos: [],
    unfilteredDoings: [],
    unfilteredDones: []
  }),
  persist: true,
  getters: {
    todos: (state) => state.todo,
    doings: (state) => state.doing,
    dones: (state) => state.done,
  },
  actions: {
    addCard(col, data) {
      this[col].push({
        ...data,
      });
    },
    updateCard(col, data) {
      const { id } = data;
      const idx = this[col].findIndex((x) => x.id === id);
      this[col][idx] = {
        ...data,
      };
    },
    moveCard() {
      const { from, to } = this.direction;
      const data = { ...this.draggedTask };
      const { id } = data;
      const idx = this[from].findIndex((x) => x.id === id);
      this.deleteCard(from, idx);
      this.addCard(to, data);
    },
    deleteCard(col, index) {
      this[col].splice(index, 1);
    },
    setDirection(from = "", to = "") {
      this.direction.from = from;
      this.direction.to = to;
    },
    findCard(id, col) {
      const task = this[col].find((x) => x.id === id);
      return task;
    },
    keepCopy() {
      this.unfilteredTodos = [...this.todo]
      this.unfilteredDoings = [...this.doing]
      this.unfilteredDones = [...this.done]
    }, 
    reset() {
      this.todo = [...this.unfilteredTodos]
      this.doing = [...this.unfilteredDoings]
      this.done = [...this.unfilteredDones]
    }, 
    setDates(from, to) {
      this.fromDate = new Date(from)
      this.toDate = new Date(to)
    }, 
    applyFilters() {
      const filteredTodos = this.todo.filter(item => {
        const date = new Date(item.estimatedDate);
        return date >= this.fromDate && date <= this.toDate;
      });

      const filteredDoings = this.doing.filter(item => {
        const date = new Date(item.estimatedDate);
        return date >= this.fromDate && date <= this.toDate;
      });

      const filteredDones = this.done.filter(item => {
        const date = new Date(item.estimatedDate);
        return date >= this.fromDate && date <= this.toDate;
      });

      this.todo = [...filteredTodos]
      this.doing = [...filteredDoings]
      this.done = [...filteredDones]
    }
  },
});
