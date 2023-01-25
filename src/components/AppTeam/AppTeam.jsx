import React from 'react';
import "./AppTeam.css"
import team1 from "../../assets/team1.jpg"
import team3 from "../../assets/team3.jpg"
import team2 from "../../assets/team2.jpg"

const AppTeam = () => {
    return (
        <div className="team">
            <div className="container">
                <h2 className="text-center text-secondary font-bold text-4xl mt-36 mb-20">Команда</h2>
                <div className="flex flex-wrap justify-between">
                    <div className="flex w-full sm-:w-2/5 md:w-1/3 p-4 flex-col">
                        <img src={team1} alt=""/>
                        <h6 className="font-bold pt-8 ">Лёша</h6>
                        <p>руководитель поддержки, планирование задач</p>

                    </div>
                    <div className="flex w-full sm-:w-2/5 md:w-1/3 p-4 flex-col">
                        <img src={team2} alt=""/>
                        <h6 className="font-bold pt-8">Роман</h6>
                        <p>инфраструктура веб-проектов</p>

                    </div>
                    <div className="flex w-full sm-:w-2/5 md:w-1/3 p-4 flex-col">
                        <img src={team3} alt=""/>
                        <h6 className="font-bold pt-8">Ирина</h6>
                        <p>менеджер по работе с клинетами, организация оказания услуг</p>

                    </div>
                    <div className="flex w-full sm-:w-2/5 md:w-1/3 p-4 flex-col">
                        <img src={team3} alt=""/>
                        <h6 className="font-bold pt-8">Даша</h6>
                        <p>руководитель поддержки, планирование задач</p>

                    </div>
                    <div className="flex w-full sm-:w-2/5 md:w-1/3 p-4 flex-col">
                        <img src={team2} alt=""/>
                        <h6 className="font-bold pt-8">Сергей</h6>
                        <p>руководитель поддержки, планирование задач</p>

                    </div>
                    <div className="flex w-full sm-:w-2/5 md:w-1/3 p-4 flex-col">
                        <img src={team1} alt=""/>
                        <h6 className="font-bold pt-8">Вадим</h6>
                        <p>UX/UI дизайн</p>

                    </div>
                </div>
            </div>
        </div>
)}

export default AppTeam;

  