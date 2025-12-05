type ButtonWithOutputType = {
	data: string
	label: string
}

export default function ButtonWithOutput({ data, label }: ButtonWithOutputType) {
	const ifDataExist = !data ? '!h-6' : ''

	return (
		<div className='flex flex-col w-[97px] text-center gap-2'>
			<div className={ifDataExist + ` button-with-output`}>
				<span>{data}</span>
			</div>

			<div className='text-sm'>
				<span>{label}</span>
			</div>
		</div>
	)
}
