import { Dispatch, SetStateAction } from 'react'
import { useCharacterStore } from '@/store/character'
import LevelHeaderBlock from '@/components/Header/LevelHeaderBlock'
import Rest from '@/components/Header/Rest'
import Health from '@/components/Header/Health'
import CharacterProfile from '@/components/Header/CharacterProfile'
import { useCharacterInfoStore } from '@/store/characterInfo'
import ShieldSVG from '@/svg/shield'
import ButtonWithOutput from '@/components/ButtonWithOutput'

type HeaderStatType = {
	isFullView: boolean
	setIsFullView: Dispatch<SetStateAction<boolean>>
}

export default function HeaderStat({ isFullView, setIsFullView }: HeaderStatType) {
	const { speed } = useCharacterStore()
	const { characterName, characterClass, characterSubClass, characterRace } = useCharacterInfoStore()

	const onChangeView = () => setIsFullView((prev) => !prev)

	return (
		<div className='max-h-[250px]'>
			<div
				className={`
                    overflow-hidden transition-all duration-300
                    ${isFullView ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}
                `}
			>
				<div className='first-block p-3'>
					<div className='flex flex-row justify-between'>
						<div className='w-[20px] h-[20px] bg-red-600' />

						<div className='flex flex-col text-center justify-center w-full gap-1'>
							<span>{characterName}</span>

							<div>
								{characterRace} - {characterClass} {characterSubClass && `(${characterSubClass})`}
							</div>
						</div>

						<CharacterProfile />
					</div>

					<LevelHeaderBlock />
				</div>
			</div>

			<div className='relative'>
				<div className='second-block transition-all duration-300 relative px-3 py-2 border-y border-[#364153]'>
					<div className='flex justify-between'>
						<div className='flex items-center gap-2'>
							<ShieldSVG />
							<div className='text-sm text-center'>
								<div>{speed} фут</div>
								<div>Скорость</div>
							</div>
						</div>

						<div className='flex flex-row items-center gap-2'>
							<Rest />
							<Health />
						</div>
					</div>
				</div>

				<div
					className={`third-block ${isFullView ? 'open' : ''} transition-all duration-300 border-y border-[#364153] px-3 py-2`}
				>
					<div className='flex justify-between'>
						<ButtonWithOutput data={''} label={'Вдохновление'} />
						<ButtonWithOutput data={''} label={'Состояния'} />
						<ButtonWithOutput data={''} label={'Инициатива'} />
						<ButtonWithOutput data={''} label={'Смерть'} />
					</div>
				</div>

				<div className={`show-more-button ${!isFullView && '!bottom-[4px]'}`} onClick={onChangeView}>
					Кнопка
				</div>
			</div>
		</div>
	)
}
