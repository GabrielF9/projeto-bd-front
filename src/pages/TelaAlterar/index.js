import React, { Component } from 'react';
import CabecalhoVoltar from '../../components/CabecalhoVoltar';

import './styles.css';

class CorpoTelaAlterar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check1: true,
            check2: false
        }
    }

    render() {
        return (
            <div className="corpoTelaAlterar">
                <div id="alterar">
                    <div className="forms">
                        <label id="lbl_nome">Nome:</label>
                        <input id="txt_nome" type="text"></input>
                    </div>
                    <div className="forms">
                        <label id="lbl_tamanho">Tamanho:</label>
                        <input id="txt_tamanho" type="text"></input>
                    </div>
                    <div className="forms">
                        <label id="lbl_composicao">Composição:</label>
                        <input id="txt_composicao" type="text"></input>
                    </div>
                    <div className="forms">
                        <label id="lbl_massa">Massa:</label>
                        <input id="txt_massa" type="text"></input>
                    </div>
                    <div className="check">
                        <label id="lbl_satelite">Satélite:</label>
                        <input type="checkbox" name='check1' onChange={this.onCheckChange} />SIM<br />
                        <input type="checkbox" name='check2' onChange={this.onCheckChange} />NÃO<br />
                    </div>
                    <div className="forms">
                        <a href="/inicio">Alterar</a>
                    </div>
                </div>
            </div>
        );
    }
}

const TelaAlterar = () => (
    <div className="telaLogin">
        <CabecalhoVoltar />
        <CorpoTelaAlterar />
    </div>
);

export default TelaAlterar;