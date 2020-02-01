import React, { useState } from 'react'
import '../styles/topbar/topbar.css'

import SideBtnIcon from '../assets/topbar/sidebtn.js'
import BuscaIcon from '../assets/topbar/busca.js'
import MensagensIcon from '../assets/topbar/mensagens.js'
import NotificacoesIcon from '../assets/topbar/notificacoes.js'
import profile from '../assets/topbar/profile.png'


const grey_cp = "#778AC2"


function Topbar(props) {

    const [active, setActive] = useState(true)

    function translate() {
        if (active) {
            const icones = document.getElementById('icones')
            icones.style.transform = 'translateX(242px)'
            icones.style.transition = 'ease 0.6s'
            const sidebar = document.getElementById('sidebar')
            sidebar.style.transform = 'translateX(-242px)'
            sidebar.style.transition = 'ease 0.6s'
            const botao = document.getElementById('btn')
            botao.style.transform = 'rotate(-180deg)'
            botao.style.transition = 'ease .6s'
            const topbar = document.getElementById('topbar')
            topbar.style.transform = 'translateX(-242px)'
            topbar.style.transition = 'ease 0.6s'
            const main = document.getElementById('main')
            main.style.transform = 'translateX(-242px)'
            main.style.width = '100vw'
            main.style.transition = 'ease 0.6s'
            setActive(false)
        }
        else {
            const icones = document.getElementById('icones')
            icones.style.transform = 'translateX(0px)'
            icones.style.transition = 'ease 0.6s'
            const sidebar = document.getElementById('sidebar')
            sidebar.style.transform = 'translateX(0px)'
            sidebar.style.transition = 'ease 0.6s'
            const botao = document.getElementById('btn')
            botao.style.transform = 'rotate(0deg)'
            botao.style.transition = 'ease .6s'
            const topbar = document.getElementById('topbar')
            topbar.style.transform = 'translateX(0px)'
            topbar.style.transition = 'ease 0.6s'
            const main = document.getElementById('main')
            main.style.transform = 'translateX(0px)'
            main.style.width = 'calc(100vw - 242px)'
            main.style.transition = 'ease 0.6s'
            setActive(true)
        }

    }

    return (
        <div className="topbar-container" id='topbar'>
            <div className="items">
                <div className="conteudo">
                    <button className="botao" id='btn' onClick={() => translate()}>
                        <SideBtnIcon fill={grey_cp} />
                    </button>
                    <p className="texto">{props.name}</p>
                </div>
                <div className="icons" id="icones">
                    <div className="icon" id="search" >
                        <BuscaIcon fill={grey_cp} />
                    </div>
                    <div className="icon" id="messages" >
                        <MensagensIcon fill={grey_cp} />
                    </div>
                    <div className="icon" id="notifications" >
                        <NotificacoesIcon fill={grey_cp} />
                    </div>
                    <div className="perfil">
                        <img src={profile} alt="profile" id="profile"></img>
                        <p>João Marcos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar