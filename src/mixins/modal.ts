export const ModalMixin = {
  mounted(this: { inputId: string }) {
    const input = document.getElementById(this.inputId)
    if (input !== null) {
      input.focus()
    }
  },
}
