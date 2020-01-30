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
    // const [color, setColor] = useState(grey_cp)
    const [id, setId] = useState(null)

    return (
        <div className="sidebar-container">
            <div className="titulo">
                <div className="logo">
                    <img src={logo} alt="clubpetro" />
                </div>
            </div>
            <div className="menu">
                <div className="menuitem" id="dashboard" onMouseEnter={(e) => setId(e.target.id)}

                    onMouseOut={() => setId(null)}>
                    <div className="icon">
                        {id === 'dashboard' ?
                            <DashIcon fill={orange_cp} />
                            :
                            <DashIcon fill={grey_cp} />
                        }
                    </div>
                    <div className="text">DASHBOARD</div>
                </div>
                <div className="menuitem" id="resgates" onMouseEnter={(e) => setId(e.target.id)}

                    onMouseOut={() => setId(null)}>
                    <div className="icon">
                        {id === 'resgates' ?
                            <ResgateIcon fill={orange_cp} />
                            :
                            <ResgateIcon fill={grey_cp} />
                        }
                    </div>
                    <div className="text">RESGATES</div>

                </div>
                <div className="menuitem" id="anti-fraude" onMouseEnter={(e) => setId(e.target.id)}

                    onMouseOut={() => setId(null)}>
                    <div className="icon">
                        {id === 'anti-fraude' ?
                            <AntiIcon fill={orange_cp} />
                            :
                            <AntiIcon fill={grey_cp} />
                        }
                    </div>
                    <div className="text">ANTI FRAUDE</div>
                </div>
                <div className="menuitem" id="vendas" onMouseEnter={(e) => setId(e.target.id)}

                    onMouseOut={() => setId(null)}>
                    <div className="icon">
                        {id === 'vendas' ?
                            <VendasIcon fill={orange_cp} />
                            :
                            <VendasIcon fill={grey_cp} />
                        }
                    </div>
                    <div className="text">VENDAS</div>
                </div>
                <div className="menuitem" id="relatorios" onMouseEnter={(e) => setId(e.target.id)}

                    onMouseOut={() => setId(null)}>
                    <div className="icon">
                        {id === 'relatorios' ?
                            <RelatoriosIcon fill={orange_cp} />
                            :
                            <RelatoriosIcon fill={grey_cp} />
                        }
                    </div>
                    <div className="text">RELATÓRIOS</div>
                </div>
                <div className="menuitem" id="perfil" onMouseEnter={(e) => setId(e.target.id)}

                    onMouseOut={() => setId(null)}>
                    <div className="icon">
                        {id === 'perfil' ?
                            <PerfilIcon fill={orange_cp} />
                            :
                            <PerfilIcon fill={grey_cp} />
                        }
                    </div>
                    <div className="text">PERFIL</div>
                </div>
                <div className="menuitem" id="campanhas" onMouseEnter={(e) => setId(e.target.id)}

                    onMouseOut={() => setId(null)}>
                    <div className="icon">
                        {id === 'campanhas' ?
                            <CampanhasIcon fill={orange_cp} />
                            :
                            <CampanhasIcon fill={grey_cp} />
                        }
                    </div>
                    <div className="text">CAMPANHAS</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;