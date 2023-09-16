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
    draggedTask: null,
    fixedLabels: ['#7F5F01', '#974F0C', '#AE2A19', '#5E4DB2', '#0055CC']
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
    updateCard(col, data) {
      const { id } = data
      const idx = this[col].findIndex(x => x.id === id)
      this[col][idx] = {
        ...data
      }
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
