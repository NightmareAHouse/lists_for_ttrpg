'use client'

import {Dispatch, SetStateAction, useState} from "react";
import ProgressBar from "@/components/ProgressBar";
import ModalHeader from "@/components/ModalHeader";
import {useCharacterStore} from "@/store/character";

type HeaderStatType = {
    isFullView: boolean;
    setIsFullView: Dispatch<SetStateAction<boolean>>;
};

export default function HeaderStat({isFullView, setIsFullView}: HeaderStatType) {
    const {currentLevel, experience, nextLevelExp, classArmory, speed, currentHp, maxHp} = useCharacterStore();
    const [levelModalOpen, setLevelModalOpen] = useState(false);

    const onChangeView = () => setIsFullView(prev => !prev);
    const onClick = () => setLevelModalOpen(!levelModalOpen);

    return (
        <div className='max-h-[150px]'>
            <div
                className={`
                    overflow-hidden transition-all duration-300
                    ${isFullView ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className="first-block p-3">
                    <div className="flex flex-col text-center justify-center w-full gap-1">
                        <span>Таумиэль</span>
                        <div>Человек - Воин</div>
                    </div>

                    <div className='flex flex-row header-border items-center' onClick={onClick}>
                        <div className='text-sm text-center border-right min-w-[80px] p-1'>
                            <span>Уровень: {currentLevel}</span>
                        </div>

                        <ProgressBar value={experience} maxValue={nextLevelExp}/>
                    </div>
                </div>
            </div>

            <div className="second-block transition-all duration-300 relative px-3 py-2 border-y border-[#364153]">
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <span>КБ: {classArmory}</span>
                        <span>Скорость: {speed} фут</span>
                    </div>

                    <div className='flex flex-row gap-2'>
                        <span>Отдых</span>
                        <span>Здоровье: {currentHp}/{maxHp}</span>
                    </div>
                </div>

                <div className='show-more-button' onClick={onChangeView}>
                    Кнопка
                </div>
            </div>

            <ModalHeader isOpen={levelModalOpen} setStateModal={setLevelModalOpen}/>
        </div>
    );
}
