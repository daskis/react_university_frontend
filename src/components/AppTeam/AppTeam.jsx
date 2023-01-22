import React from 'react';
import "./AppTeam.css"
import chel1 from "../../assets/chel1.png"
import chel2 from "../../assets/chel2.png"
import chel3 from "../../assets/chel3.png"

const AppTeam = () => {
    return (
        
        <div class="pt-20 grid grid-flow-row auto-rows-max md:auto-rows-min grid-cols-3 gap-8">
            <div class="col-span-3 text-center block text-3xl leading-tight font-medium text-black font-extrabold">Команда</div>
            <div class="transform scale-75"><img src={chel1} alt="chel1"/></div>
            <div class="transform scale-75"><img src={chel2} alt="chel2"/></div>
            <div class="transform scale-75"><img src={chel3} alt="chel3"/></div>
            <div class="transform scale-75"><img src={chel1} alt="chel1"/></div>
            <div class="transform scale-75"><img src={chel2} alt="chel2"/></div>
            <div class="transform scale-75"><img src={chel3} alt="chel3"/></div>
            <div class="col-span-3 text-center block text-3xl leading-tight font-medium text-black font-extrabold">Отзывы</div>
        </div>
)}

export default AppTeam;

  