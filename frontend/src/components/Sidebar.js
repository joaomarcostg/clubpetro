import React from 'react'
import '../styles/sidebar/sidebar.css'

import logo from '../assets/sidebar/logo.png'
import DashIcon from '../assets/sidebar/dashboard.js'
import ResgateIcon from '../assets/sidebar/resgates.js'
import AntiIcon from '../assets/sidebar/antifraude.js'
import VendasIcon from '../assets/sidebar/vendas.js'
import RelatoriosIcon from '../assets/sidebar/relatorios.js'
import PerfilIcon from '../assets/sidebar/perfil.js'
import CampanhasIcon from '../assets/sidebar/campanhas.js'

const grey_cp = "#778AC2"


function Sidebar(props) {

    return (
        <div className="sidebar-container" id="sidebar">
            <div className="titulo">
                <div className="logo">
                    <img src={logo} alt="clubpetro" />
                </div>
            </div>
            <div className="menu">
                <div className="menuitem" id="dashboard" onClick={() => props.setName('dashboard')} >
                    <div className="icon">
                        <DashIcon fill={grey_cp} />
                    </div>
                    <div className="text">DASHBOARD</div>
                </div>
                <div className="menuitem" id="resgates" onClick={() => props.setName('resgates')}>
                    <div className="icon">
                        <ResgateIcon fill={grey_cp} />
                    </div>
                    <div className="text">RESGATES</div>
                </div>
                <div className="menuitem" id="antifraude" onClick={() => props.setName('antifraude')}>
                    <div className="icon">
                        <AntiIcon fill={grey_cp} />
                    </div>
                    <div className="text">ANTI FRAUDE</div>
                </div>
                <div className="menuitem" id="vendas" onClick={() => props.setName('vendas')}>
                    <div className="icon">
                        <VendasIcon fill={grey_cp} />
                    </div>
                    <div className="text">VENDAS</div>
                </div>
                <div className="menuitem" id="relatorios" onClick={() => props.setName('relatorios')}>
                    <div className="icon">
                        <RelatoriosIcon fill={grey_cp} />
                    </div>
                    <div className="text">RELATÓRIOS</div>
                </div>
                <div className="menuitem" id="perfil" onClick={() => props.setName('perfil')}>
                    <div className="icon">
                        <PerfilIcon fill={grey_cp} />
                    </div>
                    <div className="text">PERFIL</div>
                </div>
                <div className="menuitem" id="campanhas" onClick={() => props.setName('campanhas')}>
                    <div className="icon">
                        <CampanhasIcon fill={grey_cp} />
                    </div>
                    <div className="text">CAMPANHAS</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;