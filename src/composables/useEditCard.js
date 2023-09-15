import { ref } from 'vue'

export default function useEditCard() {
    const selectedCard = ref(null)

    const editCard = (item) => {
        selectedCard.value = item
    }
 
    return {
        selectedCard,
        editCard
    }
}