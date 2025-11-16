'use client'

import Modal from "@/components/Modal";
import {Dispatch, SetStateAction, useState} from "react";
import {useCharacterStore} from "@/store/character";
import Calculator from "@/components/Calculator";

type ModalHeaderType = {
    isOpen: boolean;
    setStateModal: Dispatch<SetStateAction<boolean>>;
}

export default function LevelModal({isOpen, setStateModal}: ModalHeaderType) {
    const {
        experience,
        updateExperience,
        updateExpirienceOnNewLevel,
        updateNextLevelExp,
        nextLevelExp,
        updateLevel,
        currentLevel
    } = useCharacterStore()

    const [newExp, setNewExp] = useState<string>('0')

    const addExperience = () => {
        updateExperience(Number(newExp));
        setNewExp('0');
    }

    const removeExperience = () => {
        updateExperience(-Number(newExp));
        setNewExp('0');
    }

    const levelUp = () => {
        const ostatokOpita = (experience + Number(newExp)) - nextLevelExp

        updateLevel(currentLevel + 1);
        updateNextLevelExp(nextLevelExp * 2)
        updateExpirienceOnNewLevel(ostatokOpita);
        setNewExp('0')
    }

    return (
        <Modal isOpen={isOpen} onClose={() => setStateModal(false)}>
            <Calculator
                value={newExp}
                setValue={setNewExp}
                valueForProgressBar={experience}
                maxValueForProgressBar={nextLevelExp}
            >
                <div className='flex flex-row gap-4 justify-center'>
                    <button disabled={experience + Number(newExp) < nextLevelExp} onClick={levelUp}>
                        Повысить уровень
                    </button>

                    <button onClick={addExperience}>
                        Добавить
                    </button>

                    <button onClick={removeExperience}>
                        Убрать
                    </button>
                </div>
            </Calculator>
        </Modal>
    )
}