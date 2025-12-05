import Modal from '@/components/Modal'
import { Dispatch, SetStateAction, useState } from 'react'
import { CharacterStatKey } from '@/store/type/store.type'
import { useCharacterInfoStore } from '@/store/characterInfo'

type ModalStatBlockType = {
	statValue: CharacterStatKey
	isModalOpen: boolean
	mainStatValue: number
	statName: string
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function ModalStatBlock({
	statValue,
	isModalOpen,
	mainStatValue,
	statName,
	setIsModalOpen,
}: ModalStatBlockType) {
	const { updateCharacterStat } = useCharacterInfoStore()

	const [updatedStatValue, setUpdatedStatValue] = useState(mainStatValue)

	const minus = () => {
		setUpdatedStatValue(updatedStatValue - 1)
	}

	const plus = () => {
		setUpdatedStatValue(updatedStatValue + 1)
	}

	const confirm = () => {
		setIsModalOpen(false)
		updateCharacterStat(statValue, updatedStatValue.toString())
	}

	const cancel = () => {
		setUpdatedStatValue(mainStatValue)
		setIsModalOpen(false)
	}

	return (
		<Modal
			isOpen={isModalOpen}
			onClose={() => {
				setUpdatedStatValue(mainStatValue)
				setIsModalOpen(false)
			}}
		>
			<div className='flex flex-col text-center justify-center gap-5'>
				<span>{statName}</span>

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
	)
}
