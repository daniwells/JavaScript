class MyCircle extends HTMLElement{

    contruct(){
        super()

        const shadow = this.attachShadow({mode: 'open'})

        const raiz = document.createElement('span')
        raiz.setAttribute('class', 'raiz')
        
        const text = document.createElement('span')
        text.setAttribute('class', 'text')
        text.textContent= this.getAttribute("text")

        raiz.appendChild(text)

        
        const style = document.createElement('style')
        style.textContent = `
        .raiz {
            background-color: ${this.getAttribute('cor') || 'red'};
            width: 200px;
            height: 200px;
            border-radius:100px
        }

        .text {
            font-size: 2rem;
            color: white;
        }

        `
        shadow.appendChild(style)
        shadow.appendChild(raiz)
    }
}

customElements.define('my-circle', MyCircle)