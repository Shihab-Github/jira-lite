import { ref } from 'vue'

export default function useDialog() {
    const showEditDialog = ref(false)

    const toggleDialog = (event, cb) => {
        if(cb && cb instanceof Function){
            cb()
        }
        showEditDialog.value = !showEditDialog.value
    }
 
    return {
        showEditDialog,
        toggleDialog
    }
}