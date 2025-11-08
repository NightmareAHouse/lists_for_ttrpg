'use client'

import Modal from "@/components/Modal";
import ProgressBar from "@/components/ProgressBar";
import {Dispatch, SetStateAction, useState} from "react";
import {useCharacterStore} from "@/store/character";

type ModalHeaderType = {
    isOpen: boolean;
    setStateModal: Dispatch<SetStateAction<boolean>>;
}

export default function ModalHeader({isOpen, setStateModal}: ModalHeaderType) {
    const {experience, updateExperience, nextLevelExp} = useCharacterStore()

    const [newExp, setNewExp] = useState<string>('0')

    const onClose = () => {
        setStateModal(false);
        setNewExp('0');
    }

    const clear = () => {
        setNewExp('0')
    }

    const addExperience = () => {
        updateExperience(Number(newExp));
        clear()
    }

    const removeExperience = () => {
        updateExperience(-Number(newExp));
        clear()
    }

    const updateStateExperience = (number: string) => {
        if (newExp === '0') return setNewExp(number);

        setNewExp(newExp + number);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <div className='w-full text-center grid-rows-text-and-button'>
                    <div>{newExp}</div>

                    <div onClick={clear}>Очистить</div>
                </div>

                <ProgressBar value={experience} maxValue={nextLevelExp} isSmallView />

                <div className='grid grid-cols-3 text-center grid-rows-4 w-full gap-4'>
                    <div onClick={() => updateStateExperience('1')}>1</div>
                    <div onClick={() => updateStateExperience('2')}>2</div>
                    <div onClick={() => updateStateExperience('3')}>3</div>

                    <div onClick={() => updateStateExperience('4')}>4</div>
                    <div onClick={() => updateStateExperience('5')}>5</div>
                    <div onClick={() => updateStateExperience('6')}>6</div>

                    <div onClick={() => updateStateExperience('7')}>7</div>
                    <div onClick={() => updateStateExperience('8')}>8</div>
                    <div onClick={() => updateStateExperience('9')}>9</div>

                    <div onClick={() => updateStateExperience('0')}>0</div>
                    <div>+</div>
                    <div>-</div>

                    <div>Повысить уровень</div>
                    <div onClick={addExperience}>Добавить</div>
                    <div onClick={removeExperience}>Отнять</div>
                </div>
            </div>
        </Modal>
    )
}