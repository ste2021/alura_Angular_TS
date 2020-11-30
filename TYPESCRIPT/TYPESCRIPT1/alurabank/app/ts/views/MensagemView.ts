class MensagemView {

    private _elemento: Element

    constructor(seletor: string) {
        
        this._elemento = document.querySelector(seletor);
    }

    udapte(model: string){
        
        this._elemento.innerHTML = this.template(model);
    }

    template(model: string) {

        return `
        <p class="alert alert-info">${model}</p>`
    }
}