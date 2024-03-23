class SectionShowNotes extends HTMLElement{
    _shadowRoot = null;
    _style = null;

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._style = document.createElement('style');
    }

    connectedCallback(){
        this.render();
    }

    _updateStyle(){
        this._style.textContent = `
        :host{            
            width: 100%;
        }

        div{
            padding: 10px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            column-gap: 1rem; 
            row-gap: 1rem;     
        }

        @media screen and (max-width: 650px) {            
            div{
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }  
        }
        `;
    }

    _emptyContent(){
        this._shadowRoot.innerHTML = '';
    };

    render(){
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.append(this._style);
        this._shadowRoot.innerHTML += `
            <div>
                <slot></slot>
            </div>
        `;

    }
}

customElements.define('section-show-notes', SectionShowNotes);