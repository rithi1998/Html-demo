class newElement extends HTMLElement{
    constructor(){
        super();
        const shadowRoot=this.attachShadow({mode:closed});
        let div=document.createElement('div');
        div.textcontent='Custom Elements';
        shadowRoot.append(div);

    }
}






customElements.define("my-element",newElement)





