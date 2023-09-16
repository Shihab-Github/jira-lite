import { useBoardStore } from '@/store/board'
import { ref } from 'vue'

export default function useEditCard(card = null, col = '') {
    const boardStore = useBoardStore()
    let originalCard = { ...card }
    const selectedCard = ref({...card})

    const fields = ref({
        title: false,
        desc: false
    })

    const isEditingTitle = ref(false)
    const isEditingDesc = ref(false)

    const editCard = (item) => {
        selectedCard.value = item
    }

    const update = (field) => {
        debugger
        let data ={
            ...selectedCard.value,
        }
        boardStore.updateCard(col, data)
        originalCard = {...data}
        fields.value[field] = false
    }

    const cancelTtitle = () => {
        selectedCard.value.title = originalCard.title
        fields.value.title = false
    } 

    const cancelDesc = () => {
        selectedCard.value.description = originalCard.description
        fields.value.desc = false
    }
 
    return {
        fields, 

        update,

        selectedCard,
        editCard,

        cancelTtitle,
        cancelDesc
    }
}