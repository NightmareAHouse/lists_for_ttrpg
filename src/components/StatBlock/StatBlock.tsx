'use client'

import { useState } from 'react'
import ModalStatBlock from '@/components/StatBlock/ModalStatBlock'
import StatRow from '@/components/StatBlock/StatRow'

const secondStat: Record<string, string[]> = {
	Сила: ['Атлетика'],
	Ловкость: ['Акробатика', 'Ловкость рук', 'Скрытность'],
	Интелект: ['Анализ', 'Магия', 'История', 'Природа', 'Религия'],
	Мудрость: ['Медицина', 'Внимательность', 'Выживание', 'Проницательность', 'Уход за животными'],
	Харизма: ['Обман', 'Запугивание', 'Выступление', 'Убеждение'],
}

type StatBlock = {
	name: string
}

export default function StatBlock({ name }: StatBlock) {
	const [mainStatValue, setMainStatValue] = useState(10)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const calculateStatValue = Math.floor((mainStatValue - 10) / 2)
	const statValue = calculateStatValue > 0 ? `+${calculateStatValue}` : calculateStatValue

	const onClick = () => {
		setIsModalOpen(true)
	}

	return (
		<>
			<div className='flex text-md gap-2 p-3 flex-col border-style' onClick={onClick}>
				<span>
					{name}: {mainStatValue} ({statValue})
				</span>

				<div className='flex flex-col gap-2'>
					<StatRow statValue={statValue} />

					<div className='flex flex-col gap-2'>
						{secondStat[name]?.map((skill) => (
							<StatRow key={skill} name={skill} statValue={statValue} />
						))}
					</div>
				</div>
			</div>

			<ModalStatBlock
				isModalOpen={isModalOpen}
				mainStatValue={mainStatValue}
				StatName={name}
				setIsModalOpen={setIsModalOpen}
				setMainStatValue={setMainStatValue}
			/>
		</>
	)
}
