import React from 'react'
import '../styles/bottombar/bottombar.css'


function BottomBar(){
    return(
        <div className="bottombar-container">
            <div className="direitos">© 2019 - ClubPetro - Todos os direitos reservados.</div>
            <a className="sobre" href="https://clubpetro.com/" target="_blank">Sobre ClubPetro</a>
        </div>
    )
}

export default BottomBar;