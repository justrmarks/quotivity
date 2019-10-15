class Icon {
  constructor(icon) {
    this.name = icon.name
  }

  render() {
    return `<div id="${this.id}">${this.name}</div>`
  }

}
