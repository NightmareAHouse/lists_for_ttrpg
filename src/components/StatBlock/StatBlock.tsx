'use client'

import {useState} from 'react';
import Modal from "@/components/Modal";
import ModalStatBlock from "@/components/StatBlock/ModalStatBlock";

const secondStat: Record<string, string[]> = {
    'Сила': ['Атлетика'],
    'Ловкость': ['Акробатика', 'Ловкость рук', 'Скрытность'],
    'Интелект': ['Анализ', 'Магия', 'История', 'Природа', 'Религия'],
    'Мудрость': ['Медицина', 'Внимательность', 'Выживание', 'Проницательность', 'Уход за животными'],
    'Харизма': ['Обман', 'Запугивание', 'Выступление', 'Убеждение']
}

type StatBlock = {
    name: string,
}

export default function StatBlock({name}: StatBlock) {
    const [mainStatValue, setMainStatValue] = useState(10)
    const [updatedStatValue, setUpdatedStatValue] = useState(mainStatValue)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const calculateStatValue = Math.floor((mainStatValue - 10) / 2)

    const onClick = () => {
        setIsModalOpen(true)
    };

    return (
        <>
            <div className="flex gap-2 p-3 flex-col border-style" onClick={onClick}>
                <span>{name}: {mainStatValue}</span>

                <div className="flex flex-col gap-2">
                    <div>Спасбросок: {calculateStatValue}</div>

                    <div className='flex flex-wrap gap-2'>
                        {secondStat[name]?.map((skill) => (
                            <div key={skill}>{skill}: {calculateStatValue}</div>
                        ))}
                    </div>
                </div>
            </div>

            <ModalStatBlock isModalOpen={isModalOpen} mainStatValue={mainStatValue} StatName={name}
                            setIsModalOpen={setIsModalOpen} setMainStatValue={setMainStatValue}/>
        </>
    )
}