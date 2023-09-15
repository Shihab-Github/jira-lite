// Utilities
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', {
  state: () => ({
    todo: [],
    doing: [],
    done: []
  }),
  getters: {
    todos: (state) => state.todo,
    doings: (state) => state.doing,
    dones: (state) => state.done
  },
  actions: {
    addCard(col, data) {
      this[col].push({
        ...data
      })
    },
    deleteCard(col, index) {
      this[col].splice(index,1)
    }
  }
})
