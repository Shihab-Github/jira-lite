import { useBoardStore } from '@/store/board'
import { ref } from 'vue'

export default function useComment(card, col) {
    const boardStore = useBoardStore()

    const comment = ref('')

    const cancelComment = () => {
        comment.value = ''
    }

    const addComment = () => {
        card.value.comments.push(comment.value)
        let data = {
            ...card.value,
        }
        boardStore.updateCard(col, data)
        comment.value = ''
    }

    return {
        comment,
        cancelComment,
        addComment
    }
}