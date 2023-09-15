import { ref } from "vue";

export default function useAddCard() {
  const addingCard = ref(false);

  const toggleAddCard = () => {
    if (addingCard.value) {
      addingCard.value = false;
    } else {
      addingCard.value = true;
    }
  };

  return {
    addingCard,
    toggleAddCard,
  };
}
