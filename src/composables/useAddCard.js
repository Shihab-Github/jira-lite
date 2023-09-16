import { ref } from "vue";
import { useBoardStore } from '../store/board'

export default function useAddCard(name) {
  const store = useBoardStore()
  const addingCard = ref(false);
  const card = ref({
    id: '',
    title: '',
    description: '',
    status: '',
    labels: [],
    comments: [],
    estimatedDate: null
  })

  const toggleAddCard = () => {
    if (addingCard.value) {
      addingCard.value = false;
    } else {
      addingCard.value = true;
    }
  };

  const addCard = () => {
    let newCard = {
      ...card.value,
      id: crypto.randomUUID(),
      status: name,
    }
    store.addCard(name, newCard)
    card.value.title = ''
    addingCard.value = false
  }

  return {
    tasks: store[`${name}s`],
    card,
    addingCard,
    toggleAddCard,
    addCard
  };
}
