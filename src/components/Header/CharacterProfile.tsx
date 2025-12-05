import Modal from '@/components/Modal'
import Input from '@/components/Input'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { characterClassType, characterClassValue, characterRaceType, characterRaceValue } from '@/store/type/store.type'
import { useState } from 'react'
import { useCharacterInfoStore } from '@/store/characterInfo'
import { useCharacterStore } from '@/store/character'

interface IInputForm {
	characterName: string
	characterClass: characterClassType
	characterSubClass: string
	characterRace: characterRaceType
}

export default function CharacterProfile() {
	const { currentLevel } = useCharacterStore()
	const { characterName, characterClass, characterSubClass, characterRace, updateCharacterData } =
		useCharacterInfoStore()

	const { control, handleSubmit } = useForm<IInputForm>({
		defaultValues: {
			characterName: characterName,
			characterClass: characterClass,
			characterSubClass: characterSubClass,
			characterRace: characterRace,
		},
	})

	const [isModalOpen, setIsModalOpen] = useState(false)

	const onSubmit: SubmitHandler<IInputForm> = (data) => {
		updateCharacterData(data)

		setIsModalOpen(false)
	}

	return (
		<>
			<div onClick={() => setIsModalOpen(true)} className='w-[20px] h-[20px] bg-white' />

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<form className='flex flex-col gap-6'>
					<div className='grid grid-rows-2 grid-cols-2 gap-4'>
						<Controller
							name='characterName'
							control={control}
							render={({ field }) => (
								<Input
									label='Имя'
									value={field.value}
									onChange={field.onChange}
									onBlur={field.onBlur}
									ref={field.ref}
								/>
							)}
						/>

						<Controller
							name='characterClass'
							control={control}
							render={({ field }) => (
								<Input
									label='Класс'
									withDropdown
									value={field.value}
									onChange={field.onChange}
									onBlur={field.onBlur}
									ref={field.ref}
									dropdownValue={characterClassValue}
									onSelectFromDropdown={(val) => field.onChange(val)}
								/>
							)}
						/>

						<Controller
							name='characterSubClass'
							control={control}
							render={({ field }) => (
								<Input
									label='Подкласс'
									value={field.value}
									disabled={currentLevel < 3}
									onChange={field.onChange}
									onBlur={field.onBlur}
									ref={field.ref}
								/>
							)}
						/>

						<Controller
							name='characterRace'
							control={control}
							render={({ field }) => (
								<Input
									label='Раса'
									value={field.value}
									onChange={field.onChange}
									onBlur={field.onBlur}
									ref={field.ref}
									withDropdown
									dropdownValue={characterRaceValue}
									onSelectFromDropdown={(val) => field.onChange(val)}
								/>
							)}
						/>
					</div>

					<div className='flex justify-center'>
						<div className='text-center rounded-xl w-[120px] h-[20px] bg-[#4e4cb7]' onClick={handleSubmit(onSubmit)}>
							Отправить
						</div>
					</div>
				</form>
			</Modal>
		</>
	)
}
