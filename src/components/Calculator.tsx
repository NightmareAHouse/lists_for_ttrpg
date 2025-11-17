'use client'

import { createContext, Dispatch, SetStateAction, ReactNode } from 'react'
import ProgressBar from '@/components/ProgressBar'

type CalculatorContextType = {
	value: string
	setValue: Dispatch<SetStateAction<string>>
	currentValue: number
	maxCurrentValue: number
	clear: () => void
	updateStateExperience: (num: string) => void
	isShowProgressBar?: boolean
}

const CalculatorContext = createContext<CalculatorContextType | null>(null)

type CalculatorProps = {
	value: string
	setValue: Dispatch<SetStateAction<string>>
	currentValue: number
	maxCurrentValue: number
	isShowProgressBar?: boolean
	children: ReactNode
}

export default function Calculator({
	value,
	setValue,
	currentValue,
	maxCurrentValue,
	isShowProgressBar = true,
	children,
}: CalculatorProps) {
	const updateStateExperience = (number: string) => {
		if (value === '0') return setValue(number)
		setValue((prev) => prev + number)
	}

	const clear = () => setValue('0')

	return (
		<CalculatorContext.Provider
			value={{
				value,
				setValue,
				currentValue,
				maxCurrentValue,
				isShowProgressBar,
				clear,
				updateStateExperience,
			}}
		>
			<div className='flex flex-col gap-3 items-center justify-center'>
				<div className='w-full text-center grid-rows-text-and-button'>
					<div>{value}</div>
					<div onClick={clear}>Очистить</div>
				</div>

				{isShowProgressBar ? (
					<ProgressBar value={currentValue} maxValue={maxCurrentValue} isSmallView />
				) : (
					<div className='font-bold w-full flex justify-center'>
						{currentValue} / {maxCurrentValue}
					</div>
				)}

				<div className='flex flex-col gap-4 w-full'>
					<div className='flex flex-col gap-4 w-full'>
						<div className='grid grid-cols-3 text-center grid-rows-3 w-full gap-4'>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
								<div
									key={n}
									className='className="flex items-center justify-center
                       bg-[#50459587] hover:bg-[#504595b0] active:bg-[#504595cc]
                       transition-all cursor-pointer select-none
                       text-white text-xl font-semibold
                       rounded-xl py-3 shadow-md active:scale-95"'
									onClick={() => updateStateExperience(String(n))}
								>
									{n}
								</div>
							))}
						</div>

						<div
							className='flex items-center justify-center
                        bg-[#50459587] hover:bg-[#504595b0] active:bg-[#504595cc]
               transition-all cursor-pointer select-none
               text-white text-xl font-semibold
               rounded-xl py-3 shadow-md active:scale-95'
							onClick={() => updateStateExperience('0')}
						>
							0
						</div>
					</div>

					{children}
				</div>
			</div>
		</CalculatorContext.Provider>
	)
}
