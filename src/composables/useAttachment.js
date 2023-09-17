export default function useAttachment(card) {

  const previewFile = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        const attachment = {
            id: crypto.randomUUID(),
            type: 'img',
            name: file.name,
            previewUrl: reader.result
        }
        card.value.attachments.push(attachment)
      };

      reader.readAsDataURL(file);
    }
  };

  const deleteFile = (id) => {
    const idx = card.value.attachments.findIndex(x => x.id === id)
    card.value.attachments.splice(idx,1)
  }

  return {
    previewFile,
    deleteFile
  }
}
