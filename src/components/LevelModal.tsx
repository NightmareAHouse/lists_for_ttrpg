'use client'

import Modal from '@/components/Modal'
import {Dispatch, SetStateAction, useState} from 'react'
import {useCharacterStore} from '@/store/character'
import Calculator from '@/components/Calculator'

type ModalHeaderType = {
	isOpen: boolean
	setStateModal: Dispatch<SetStateAction<boolean>>
}

export default function LevelModal({isOpen, setStateModal}: ModalHeaderType) {
	const {
		experience,
		updateExperience,
		updateExpirienceOnNewLevel,
		updateNextLevelExp,
		nextLevelExp,
		updateNewLevelCount,
		updateLevel,
		currentLevel,
	} = useCharacterStore()

	const [newExp, setNewExp] = useState<string>('0')

	const addExperience = () => {
		updateExperience(Number(newExp))
		setNewExp('0')
	}

	const removeExperience = () => {
		updateExperience(-Number(newExp))
		setNewExp('0')
	}

	const levelUp = () => {
		const ostatokOpita = experience + Number(newExp) - nextLevelExp

		updateLevel(currentLevel + 1)
		updateNextLevelExp(nextLevelExp * 2)
		updateNewLevelCount()
		updateExpirienceOnNewLevel(ostatokOpita)
		setNewExp('0')
	}

	return (
		<Modal isOpen={isOpen} onClose={() => setStateModal(false)}>
			<Calculator value={newExp} setValue={setNewExp} currentValue={experience} maxCurrentValue={nextLevelExp}>
				<div className='flex flex-row gap-4 justify-center'>
					<button
						className='bg-[#50459587] hover:bg-[#504595b0] active:bg-[#504595cc]
                                text-white font-semibold px-4 py-2 rounded-xl shadow-md
                                transition-all active:scale-95
                                disabled:bg-[#50459540] disabled:text-white/40
                                disabled:cursor-not-allowed disabled:shadow-none
                                disabled:hover:bg-[#50459540] disabled:active:scale-100
                            '
						disabled={experience < nextLevelExp}
						onClick={levelUp}
					>
						Повысить уровень
					</button>

					<button
						className='bg-[#50459587] hover:bg-[#504595b0] active:bg-[#504595cc]
                                text-white font-semibold px-4 py-2 rounded-xl shadow-md
                                transition-all active:scale-95
                                disabled:bg-[#50459540] disabled:text-white/40
                                disabled:cursor-not-allowed disabled:shadow-none
                                disabled:hover:bg-[#50459540] disabled:active:scale-100
                            '
						onClick={addExperience}
					>
						Добавить
					</button>

					<button
						className='bg-[#50459587] hover:bg-[#504595b0] active:bg-[#504595cc]
                                text-white font-semibold px-4 py-2 rounded-xl shadow-md
                                transition-all active:scale-95
                                disabled:bg-[#50459540] disabled:text-white/40
                                disabled:cursor-not-allowed disabled:shadow-none
                                disabled:hover:bg-[#50459540] disabled:active:scale-100
                            '
						onClick={removeExperience}
					>
						Убрать
					</button>
				</div>
			</Calculator>
		</Modal>
	)
}
