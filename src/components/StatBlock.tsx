'use client'

import {useState} from 'react';
import Modal from "@/components/Modal";

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

    const minus = () => {
        setUpdatedStatValue(updatedStatValue - 1);
    }

    const plus = () => {
        setUpdatedStatValue(updatedStatValue + 1);
    }

    const confirm = () => {
        setMainStatValue(updatedStatValue)
        setIsModalOpen(false)
    }

    const cancel = () => {
        setUpdatedStatValue(mainStatValue)
        setIsModalOpen(false)
    }

    const onClick = () => {
        setIsModalOpen(true)
    };

    return (
        <>
            <div className="flex gap-2 p-3 flex-col border-style" onClick={onClick}>
                <span>{name}: {mainStatValue}</span>

                <div className="flex flex-wrap gap-2">
                    <div>Спасбросок: {calculateStatValue}</div>

                    {secondStat[name]?.map((skill) => (
                        <div key={skill}>{skill}: {calculateStatValue}</div>
                    ))}
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => {
                setUpdatedStatValue(mainStatValue)
                setIsModalOpen(false)
            }}>
                <div className='flex flex-col text-center justify-center gap-5'>
                    <span>{name}</span>

                    <div className='flex gap-5 text-center justify-center'>
                        <div onClick={minus}>Minus</div>

                        <div>{updatedStatValue}</div>

                        <div onClick={plus}>Plus</div>
                    </div>

                    <div className='flex gap-10 justify-center'>
                        <div onClick={confirm}>Accept</div>

                        <div onClick={cancel}>Cancel</div>
                    </div>
                </div>
            </Modal>
        </>
    )
}