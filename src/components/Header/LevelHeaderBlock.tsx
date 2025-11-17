'use client'

import ProgressBar from '@/components/ProgressBar'
import LevelModal from '@/components/LevelModal'
import {useCharacterStore} from '@/store/character'
import {useState} from 'react'

export default function LevelHeaderBlock() {
	const {currentLevel, experience, nextLevelExp} = useCharacterStore()
	const [levelModalOpen, setLevelModalOpen] = useState(false)

	const onClick = () => setLevelModalOpen(!levelModalOpen)

	return (
		<div>
			<div className='flex flex-row header-border items-center' onClick={onClick}>
				<div className='text-sm text-center border-right min-w-[80px] p-1'>
					<span>Уровень: {currentLevel}</span>
				</div>

				<ProgressBar value={experience} maxValue={nextLevelExp} />
			</div>

			<LevelModal isOpen={levelModalOpen} setStateModal={setLevelModalOpen} />
		</div>
	)
}
