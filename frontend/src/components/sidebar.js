import React, { useState } from 'react'
import '../styles/sidebar/sidebar.css'

import logo from '../assets/logo.png'
import DashIcon from '../assets/dashboard.js'
import ResgateIcon from '../assets/resgates.js'
import AntiIcon from '../assets/antifraude.js'
import VendasIcon from '../assets/vendas.js'
import RelatoriosIcon from '../assets/relatorios.js'
import PerfilIcon from '../assets/perfil.js'
import CampanhasIcon from '../assets/campanhas.js'

const grey_cp = "#778AC2"
const orange_cp = "#f26522"


function Sidebar() {
    const [color, setColor] = useState(grey_cp)

    return (
        <div className="sidebar-container">
            <div className="titulo">
                <div className="logo">
                    <img src={logo} alt="clubpetro" />
                </div>
            </div>
            <div className="menu">
                <div className="menuitem" id="dashboard" onMouseOver={() => { setColor(orange_cp) }} onMouseLeave={() => setColor(grey_cp)}>
                    <div className="icon">
                        <DashIcon fill={color} />
                    </div>
                    <div className="text">DASHBOARD</div>
                </div>
                <div className="menuitem" id="resgates" onMouseOver={() => { setColor(orange_cp) }} onMouseLeave={() => setColor(grey_cp)}>
                    <div className="icon">
                        <ResgateIcon fill={color} />
                    </div>
                    <div className="text">RESGATES</div>

                </div>
                <div className="menuitem" id="anti-fraude" onMouseOver={() => { setColor(orange_cp) }} onMouseLeave={() => setColor(grey_cp)}>
                    <div className="icon">
                        <AntiIcon fill={color} />
                    </div>
                    <div className="text">ANTI FRAUDE</div>
                </div>
                <div className="menuitem" id="vendas" onMouseOver={() => { setColor(orange_cp) }} onMouseLeave={() => setColor(grey_cp)}>
                    <div className="icon">
                        <VendasIcon fill={color} />
                    </div>
                    <div className="text">VENDAS</div>
                </div>
                <div className="menuitem" id="relatorios" onMouseOver={() => { setColor(orange_cp) }} onMouseLeave={() => setColor(grey_cp)}>
                    <div className="icon">
                        <RelatoriosIcon fill={color} />
                    </div>
                    <div className="text">RELATÓRIOS</div>
                </div>
                <div className="menuitem" id="perfil" onMouseOver={() => { setColor(orange_cp) }} onMouseLeave={() => setColor(grey_cp)} >
                    <div className="icon">
                        <PerfilIcon fill={color} />
                    </div>
                    <div className="text">PERFIL</div>
                </div>
                <div className="menuitem" id="campanhas" onMouseOver={() => { setColor(orange_cp) }} onMouseLeave={() => setColor(grey_cp)}>
                    <div className="icon">
                        <CampanhasIcon fill={color} />
                    </div>
                    <div className="text">CAMPANHAS</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;