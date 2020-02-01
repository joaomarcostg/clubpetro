import React from 'react'
import '../styles/main/main.css'

import AntiFraudePage from './pages/Antifraude.js'
import BlankPage from './pages/Blank.js'

function Main(props) {


    return (
        <div className="main-container" id="main">
            {props.content === 'antifraude' ?
                <AntiFraudePage /> :
                <BlankPage />
            }
        </div>
    )
}

export default Main;