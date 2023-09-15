// Utilities
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', {
  state: () => ({
    todo: [],
    doing: [],
    done: [],
    direction: {
      from: '',
      to: ''
    },
    draggedTask: null
  }),
  getters: {
    todos: (state) => state.todo,
    doings: (state) => state.doing,
    dones: (state) => state.done,
  },
  actions: {
    addCard(col, data) {
      this[col].push({
        ...data
      })
    },
    moveCard() {
      const { from, to } = this.direction
      const data = {...this.draggedTask}
      const { id } = data
      const idx = this[from].findIndex(x => x.id === id)
      this.deleteCard(from, idx)
      this.addCard(to, data)
    }, 
    deleteCard(col, index) {
      this[col].splice(index,1)
    },
    setDirection(from = '', to = '') {
      this.direction.from = from
      this.direction.to = to
    }
  }
})
