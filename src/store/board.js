// Utilities
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', {
  state: () => ({
    todo: [],
    doing: [],
    done: []
  }),
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
