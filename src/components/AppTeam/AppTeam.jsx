import React from 'react';
import "./AppTeam.css"
import team1 from "../../assets/team1.jpg"
const AppTeam = () => {
    return (
        <div className="team">
            <div className="container">
                <h2 className="text-center text-secondary font-bold text-4xl mt-36 mb-20">Команда</h2>
                <div className="flex flex-wrap gap-8 justify-between">
                    <div className="flex w-1/4 p-4 flex-col">
                        <img src={team1} alt=""/>
                        <h6 className="font-bold">Лёша</h6>
                        <p>руководитель поддержки, планирование задач</p>

                    </div>
                    <div className="flex w-1/4 p-4 flex-col">
                        <img src={team1} alt=""/>
                        <h6 className="font-bold">Лёша</h6>
                        <p>руководитель поддержки, планирование задач</p>

                    </div>
                    <div className="flex w-1/4 p-4 flex-col">
                        <img src={team1} alt=""/>
                        <h6 className="font-bold">Лёша</h6>
                        <p>руководитель поддержки, планирование задач</p>

                    </div>
                    <div className="flex w-1/4 p-4 flex-col">
                        <img src={team1} alt=""/>
                        <h6 className="font-bold">Лёша</h6>
                        <p>руководитель поддержки, планирование задач</p>

                    </div>
                    <div className="flex w-1/4 p-4 flex-col">
                        <img src={team1} alt=""/>
                        <h6 className="font-bold">Лёша</h6>
                        <p>руководитель поддержки, планирование задач</p>

                    </div>
                    <div className="flex w-1/4 p-4 flex-col">
                        <img src={team1} alt=""/>
                        <h6 className="font-bold">Лёша</h6>
                        <p>руководитель поддержки, планирование задач</p>

                    </div>
                </div>
            </div>
        </div>
)}

export default AppTeam;

  