'use client'

type ProgressBarType = {
	value: number
	maxValue: number
	isSmallView?: boolean
}

export default function ProgressBar({value, maxValue, isSmallView = false}: ProgressBarType) {
	const percent = (value / maxValue) * 100

	const normalProgressBarView = () => (
		<div className='relative w-full h-6 bg-main rounded-r-lg overflow-hidden'>
			<div
				className={'h-full bg-progress-line transition-all duration-300' + (percent >= 100 ? 'rounded-r-lg' : '')}
				style={{
					width: `${percent}%`,
				}}
			/>

			<span className='absolute inset-0 flex justify-center test-sm'>
				{value} / {maxValue}
			</span>
		</div>
	)

	const smallProgressBarView = () => (
		<div className='flex flex-col text-end w-full'>
			<span className='test-sm pr-5'>
				{value} / {maxValue}
			</span>

			<div className='relative w-full h-1 bg-main overflow-hidden'>
				<div
					className={
						'bg-progress-line rounded-r-lg h-full transition-all duration-300' +
						(percent >= 100 ? 'rounded-r-lg' : '')
					}
					style={{
						width: `${percent}%`,
					}}
				/>
			</div>
		</div>
	)

	return isSmallView ? smallProgressBarView() : normalProgressBarView()
}
