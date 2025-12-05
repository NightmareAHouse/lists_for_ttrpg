'use client'

import { FocusEventHandler, forwardRef, InputHTMLAttributes, useState } from 'react'

type InputType = {
	label: string
	onSelectFromDropdown?: (value: string) => void
	withDropdown?: boolean
	dropdownValue?: readonly string[]
	isNumeric?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputType>((props, ref) => {
	const { label, withDropdown, dropdownValue, onSelectFromDropdown, isNumeric, ...restProps } = props
	const { value } = restProps

	const [isShowDropdown, setIsShowDropdown] = useState(false)
	const [isLocked, setIsLocked] = useState(false)

	const isEmpty = value === ''

	const onClickDropdown = (val: string) => {
		if (!val) return

		onSelectFromDropdown?.(val)
		setIsShowDropdown(false)
		setIsLocked(true)
	}

	const handleBlur = () => {
		setIsShowDropdown(false)
	}

	const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
		if (isLocked) {
			setIsLocked(false)
		}
		setIsShowDropdown(true)

		if (restProps.onFocus) {
			restProps.onFocus(event)
		}
	}

	return (
		<div className='relative flex flex-col w-full pt-5'>
			<label
				className={`
					absolute left-1 transition-all duration-200 pointer-events-none font-semibold uppercase tracking-wide
					${isEmpty ? 'text-[14px] text-white/70' : 'top-[45px] text-[12px] text-white/50'}
				`}
			>
				{label}
			</label>

			<input
				ref={ref}
				type={isNumeric ? 'number' : 'text'}
				readOnly={isLocked}
				onFocus={handleFocus}
				onBlur={handleBlur}
				className='bg-transparent outline-none text-white text-[14px] px-1'
				{...restProps}
			/>

			<div className='w-full h-[2px] mt-1 bg-[#4e4cb7]' />

			{withDropdown && dropdownValue && isShowDropdown && (
				<div className='w-full h-18 rounded-xl absolute z-10 top-12 overflow-y-scroll touch-pan-y overscroll-none bg-[#9290e2]'>
					{dropdownValue.map((e) => (
						<div
							key={e}
							onMouseDown={() => onClickDropdown(e)}
							className='flex justify-center items-center bg-[#3f3a85] w-full h-9 cursor-pointer'
						>
							{e}
						</div>
					))}
				</div>
			)}
		</div>
	)
})

Input.displayName = 'Input'
export default Input
