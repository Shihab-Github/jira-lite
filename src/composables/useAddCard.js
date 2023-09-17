import { ref } from "vue";
import { useBoardStore } from "../store/board";
import useLabels from "./useLabels";

export default function useAddCard(name = "") {
  const store = useBoardStore();
  const { fixedLabels } = useLabels()
  const addingCard = ref(false);
  const card = ref({
    id: "",
    title: "",
    description: "",
    status: null,
    labels: [],
    comments: [],
    estimatedDate: null,
    attachments: [],
    highlighted: false
  });

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
    };
    store.addCard(name, newCard);
    card.value.title = "";
    addingCard.value = false;
  };

  const createTask = () => {
    const labels = []
    if(card.value.labels.length > 0) {
      for (let i = 0; i < card.value.labels.length; i++) {
        const item = card.value.labels[i];
        const label = fixedLabels.value.find(x => x.value === item)
        labels.push(label)
      }
    }
    let newTask = {
      ...card.value,
      id: crypto.randomUUID(),
      labels
    };
    store.addCard(card.value.status, newTask);
    card.value = {
      id: "",
      title: "",
      description: "",
      status: null,
      labels: [],
      comments: [],
      estimatedDate: null,
      attachments: []
    };
  };

  return {
    card,
    addingCard,
    toggleAddCard,
    addCard,
    createTask,
  };
}
