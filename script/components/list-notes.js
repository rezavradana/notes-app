class ListNotes extends HTMLElement{
    _shadowRoot = null;
    _style = null;
    _note = {
        id: null,
        title: null,
        body: null, 
        createdAt: null,
        archived: false
    }

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._style = document.createElement('style');
    }

    connectedCallback(){
        this.render();
    }

    set note(value){
        this._note = value;        
        this.render();
    }

    get note(){
        return this._note;
    }

    _updateStyle(){
        this._style.textContent = `
            :host{                               
                background-color: #9290C3;
                border-radius: 10px;
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);                
            }

            div{
                display: flex;
                flex-flow: column nowrap;
                padding: 10px;                                       
            }

            div h3{
                margin-block: 5px;
            }

            div p{
                margin-block: 5px;
            }

            div hr{
                height: 2px;
                background-color: #F8E559;   
                width: 100%;
                border: none;
                border-radius: 5px;
            }
            
            div span{                
                text-align: end;                
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
        const body = document.createElement('p');
        body.innerText = `${this._note.body}`;
        this._shadowRoot.innerHTML += `
            <div>            
                <h3>${this._note.title}</h3>
                <hr>
                <p>${body.innerHTML}</p>
                <span>${this._note.createdAt}</span>
            </div>
        `;
    }
}

customElements.define('list-notes', ListNotes);