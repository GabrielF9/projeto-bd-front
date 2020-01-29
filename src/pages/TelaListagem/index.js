import React from 'react';
import CabecalhoVoltar from '../../components/CabecalhoVoltar';

import './styles.css';

const CorpoTelaListagem = () => (
  <div className="corpoTelaListagem">
    <div id="telaListagem">
      <h1>Aqui temos planetas</h1>
    </div>
  </div>
);

const TelaListagem = () => (
  <div className="telaListagem">
    <CabecalhoVoltar />
    <CorpoTelaListagem />
  </div>
);

export default TelaListagem;