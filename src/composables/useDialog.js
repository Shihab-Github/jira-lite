import { ref } from 'vue'

export default function useDialog() {
    const showEditDialog = ref(false)

    const toggleDialog = () => {
        showEditDialog.value = !showEditDialog.value
    }
 
    return {
        showEditDialog,
        toggleDialog
    }
}