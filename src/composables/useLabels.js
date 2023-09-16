import { ref } from 'vue'

export default function useLabels(card) {
    const selectedLabels = ref([])
    const showLabel = ref(false)

    const fixedLabels = ref([
        {
            value: 'Important',
            color: '#7F5F01',
            checked: false
        },
        {
            value: 'Backlog',
            color: '#974F0C',
            checked: false
        },
        {
            value: 'Priority',
            color: '#AE2A19',
            checked: false
        },
        {
            value: 'Hard',
            color: '#5E4DB2',
            checked: false
        },
        {
            value: 'Medium',
            color: '#0055CC',
            checked: false
        }
    ])

    const saveLabels = () => {
        selectedLabels.value = fixedLabels.value.filter(x => x.checked)
        card.value.labels = fixedLabels.value.filter(x => x.checked)
        showLabel.value = false
    }

    return {
        showLabel,
        fixedLabels, 
        saveLabels
    }
}