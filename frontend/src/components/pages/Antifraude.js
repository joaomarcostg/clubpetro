import React, { useState } from 'react'
import '../../styles/antifraude/antifraude.css'

import BottomBar from '../Bottombar.js';
import ArrowUpIcon from '../../assets/anti/arrowup.js'
import ArrowDownIcon from '../../assets/anti/arrowdown.js'
import MoreIcon from '../../assets/anti/more.js'
import FraudeIcon from '../../assets/anti/fraude.js'
import FielIcon from '../../assets/anti/fiel.js'

import creditochart from '../../assets/anti/creditochart.png'
import debitochart from '../../assets/anti/debitochart.png'
import fraudeschart from '../../assets/anti/fraudeschart.png'
import visalogo from '../../assets/anti/visa.png'
import masterlogo from '../../assets/anti/mastercard.png'

const green_cp = "#6DD230"
const yellow_cp = "#FFAB2B"
const pink_cp = "#FE4D97"
const grey_cp = "#778ca2"
const red_cp = "#FF2B2B"

function AntiFraudeComponent() {

    function showOptions(event) {
        console.log(event)
    }

    return (
        <div className="antifraude-container">
            <div className="vendas">
                <div className="vendaitem" id="debito">
                    <div className="valores">
                        <div className="valor">
                            <p className="quantia">R$124.800</p>
                            <ArrowUpIcon fill={green_cp} />
                        </div>
                        <p className="informacao">Vendas em débito</p>
                    </div>
                    <div className="grafico">
                        <img src={debitochart} alt="debito" />
                    </div>
                </div>
                <div className="vendaitem" id="credito">
                    <div className="valores">
                        <div className="valor">
                            <p className="quantia">R$56.400</p>
                            <ArrowUpIcon fill={yellow_cp} />
                        </div>
                        <p className="informacao">Vendas em crédito</p>
                    </div>
                    <div className="grafico">
                        <img src={creditochart} alt="credito" />
                    </div>
                </div>
                <div className="vendaitem" id="fraude">
                    <div className="valores">
                        <div className="valor">
                            <p className="quantia">R$1.800</p>
                            <ArrowDownIcon fill={pink_cp} />
                        </div>
                        <p className="informacao">Fraudes confirmadas</p>
                    </div>
                    <div className="grafico">
                        <img src={fraudeschart} alt="fraudes" />
                    </div>
                </div>
            </div>
            <div className="analise">
                <p className="conteudo">Analise de vendas</p>
                <div className="analise-container">
                    <div className="analiseitem">
                        <div className="bandeira">
                            <img className="logo" src={visalogo}></img>
                        </div>
                        <div className="cartao">
                            <p className="texto" id="numerocartao">3190 **** **** 3866</p>
                            <p className="informacao">Número do cartão</p>
                        </div>
                        <div className="valor">
                            <p className="texto" id="valor">R$127,20</p>
                            <p className="informacao">Valor da compra</p>
                        </div>
                        <div className="quantidade">
                            <p className="texto" id="qtd">26,500 L</p>
                            <p className="informacao" id="combustivel">Gasolina</p>
                        </div>
                        <div className="data">
                            <p className="texto" id="date">30/11</p>
                            <p className="informacao">Dia</p>
                        </div>
                        <div className="status">
                            <p className="texto" id="state">A validar</p>
                            <p className="informacao">Status</p>
                        </div>
                        <div className="more">
                            <MoreIcon fill={grey_cp} />
                        </div>
                    </div>
                    <div className="analiseitem">
                        <div className="bandeira">
                            <img className="logo" src={masterlogo}></img>
                        </div>
                        <div className="cartao">
                            <p className="texto" id="numerocartao">4155 **** **** 7864</p>
                            <p className="informacao">Número do cartão</p>
                        </div>
                        <div className="valor">
                            <p className="texto" id="valor">R$109,08</p>
                            <p className="informacao">Valor da compra</p>
                        </div>
                        <div className="quantidade">
                            <p className="texto" id="qtd">35,185 L</p>
                            <p className="informacao" id="combustivel">Diesel</p>
                        </div>
                        <div className="data">
                            <p className="texto" id="date">02/12</p>
                            <p className="informacao">Dia</p>
                        </div>
                        <div className="status">
                            <p className="texto" id="state">A validar</p>
                            <p className="informacao">Status</p>
                        </div>
                        <div className="more">
                            <MoreIcon fill={grey_cp} />
                        </div>
                    </div>
                    <div className="analiseitem">
                        <div className="bandeira">
                            <img className="logo" src={visalogo}></img>
                        </div>
                        <div className="cartao">
                            <p className="texto" id="numerocartao">3870 **** **** 8545</p>
                            <p className="informacao">Número do cartão</p>
                        </div>
                        <div className="valor">
                            <p className="texto" id="valor">R$45,90</p>
                            <p className="informacao">Valor da compra</p>
                        </div>
                        <div className="quantidade">
                            <p className="texto" id="qtd">12,750 L</p>
                            <p className="informacao" id="combustivel">Etanol</p>
                        </div>
                        <div className="data">
                            <p className="texto" id="date">04/12</p>
                            <p className="informacao">Dia</p>
                        </div>
                        <div className="status">
                            <p className="texto" id="state">A validar</p>
                            <p className="informacao">Status</p>
                        </div>
                        <div className="more">
                            <MoreIcon fill={grey_cp} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fraudulentas">
                <p className="conteudo">Vendas fraudulentas confirmadas</p>
                <div className="fraudulentas-container">
                    <div className="fraudulentasitem">
                        <div className="logofraude">
                            <FraudeIcon fill={red_cp} />
                        </div>
                        <div className="tipo">
                            <p className="texto" id="type">Venda Fraudulenta</p>
                            <p className="informacao" id="nome">Caio Bueno</p>
                        </div>
                        <div className="valor">
                            <p className="texto" id="valor">R$31,50</p>
                            <p className="informacao">Valor da compra</p>
                        </div>
                        <div className="quantidade">
                            <p className="texto" id="qtd">8,750 L</p>
                            <p className="informacao" id="combustivel">Etanol</p>
                        </div>
                        <div className="data">
                            <p className="texto" id="date">18/11</p>
                            <p className="informacao">Dia</p>
                        </div>
                        <div className="status">
                            <p className="texto" id="state">A validar</p>
                            <p className="informacao">Status</p>
                        </div>
                        <div className="more">
                            <MoreIcon fill={grey_cp} />
                        </div>
                    </div>
                    <div className="fraudulentasitem">
                        <div className="logofraude">
                            <FraudeIcon fill={red_cp} />
                        </div>
                        <div className="tipo">
                            <p className="texto" id="type">Venda Fraudulenta</p>
                            <p className="informacao" id="nome">Enzo Bergatti</p>
                        </div>
                        <div className="valor">
                            <p className="texto" id="valor">R$249,92</p>
                            <p className="informacao">Valor da compra</p>
                        </div>
                        <div className="quantidade">
                            <p className="texto" id="qtd">52,000 L</p>
                            <p className="informacao" id="combustivel">Gasolina</p>
                        </div>
                        <div className="data">
                            <p className="texto" id="date">22/11</p>
                            <p className="informacao">Dia</p>
                        </div>
                        <div className="status">
                            <p className="texto" id="state">A validar</p>
                            <p className="informacao">Status</p>
                        </div>
                        <div className="more">
                            <MoreIcon fill={grey_cp} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fieis">
                <p className="conteudo">Vendas validadas fiéis</p>
                <div className="fieis-container">
                    <div className="fieisitem">
                        <div className="logofiel">
                            <FielIcon fill={green_cp} />
                        </div>
                        <div className="tipo">
                            <p className="texto" id="type">Venda Fiel</p>
                            <p className="informacao" id="nome">Gabriel Domingues</p>
                        </div>
                        <div className="valor">
                            <p className="texto" id="valor">R$59,52</p>
                            <p className="informacao">Valor da compra</p>
                        </div>
                        <div className="quantidade">
                            <p className="texto" id="qtd">12,400 L</p>
                            <p className="informacao" id="combustivel">Gasolina</p>
                        </div>
                        <div className="data">
                            <p className="texto" id="date">20/11</p>
                            <p className="informacao">Dia</p>
                        </div>
                        <div className="status">
                            <p className="texto" id="state">A validar</p>
                            <p className="informacao">Status</p>
                        </div>
                        <div className="more">
                            <MoreIcon fill={grey_cp} />
                        </div>
                    </div>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}

export default AntiFraudeComponent;