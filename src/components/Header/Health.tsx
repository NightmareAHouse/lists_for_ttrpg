'use client'

import { useCharacterStore } from '@/store/character'
import { useState } from 'react'
import Modal from '@/components/Modal'
import Calculator from '@/components/Calculator'

export default function Health() {
	const { currentHp, maxHp, updateHp, updateMaxHp, tempHp, updateTempHp } = useCharacterStore()

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [newHpValue, setNewHpValue] = useState<string>('0')

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => {
		setIsModalOpen(false)
		setNewHpValue('0')
	}

	const clear = () => setNewHpValue('0')

	const parsedAmount = Math.max(0, Number(newHpValue) || 0)

	const addTempHp = () => {
		updateTempHp(Number(newHpValue))
		clear()
	}

	const addHp = () => {
		if (parsedAmount <= 0) return

		const remainingToMax = maxHp - currentHp
		if (remainingToMax <= 0) return

		const delta = Math.min(parsedAmount, remainingToMax)
		updateHp(delta)
		clear()
	}

	const removeHp = () => {
		if (parsedAmount <= 0) return

		const minHp = -maxHp
		const remainingToMin = currentHp - minHp
		if (remainingToMin <= 0) return

		const delta = Math.min(parsedAmount, remainingToMin)

		if (tempHp) {
			const estLiRaznicaVUrone = delta >= tempHp

			if (!estLiRaznicaVUrone) {
				updateTempHp(-delta)
			} else {
				const raznicaVUrone = delta - tempHp
				updateTempHp(-(delta - raznicaVUrone))
				updateHp(-raznicaVUrone)
			}

			clear()
			return
		}

		updateHp(-delta)
		clear()
	}

	const isAddDisabled = currentHp >= maxHp || parsedAmount <= 0

	const isRemoveDisabled = currentHp <= -maxHp || parsedAmount <= 0

	const buttonStyle = `bg-[#50459587] hover:bg-[#504595b0] active:bg-[#504595cc]
	text-white font-semibold px-4 py-2 rounded-xl shadow-md
	transition-all active:scale-95 w-full
	disabled:bg-[#50459540] disabled:text-white/40
	disabled:cursor-not-allowed disabled:shadow-none
	disabled:hover:bg-[#50459540] disabled:active:scale-100`

	return (
		<div>
			<span onClick={openModal} className='cursor-pointer'>
				Здоровье: {tempHp > 0 ? `(${tempHp + currentHp})` : currentHp} / {maxHp}
			</span>

			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<Calculator
					value={newHpValue}
					setValue={setNewHpValue}
					currentValue={tempHp ? tempHp + currentHp : currentHp}
					maxCurrentValue={maxHp}
					isShowProgressBar={false}
				>
					<div className='flex flex-col items-center w-full mt-2 gap-2'>
						<div className='w-full'>
							<button onClick={addTempHp} disabled={parsedAmount <= 0} className={buttonStyle}>
								Добавить Временное HP
							</button>
						</div>

						<div className='flex flex-row gap-6 justify-center w-full'>
							<button disabled={isAddDisabled} onClick={addHp} className={buttonStyle}>
								Добавить HP
							</button>

							<button disabled={isRemoveDisabled} onClick={removeHp} className={buttonStyle}>
								Убрать HP
							</button>
						</div>
					</div>
				</Calculator>
			</Modal>
		</div>
	)
}
