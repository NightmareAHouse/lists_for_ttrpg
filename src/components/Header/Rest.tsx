'use client'

import Modal from '@/components/Modal'
import {useState} from 'react'

export default function Rest() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const onClick = () => setIsModalOpen(true)
	const onClose = () => setIsModalOpen(false)

	return (
		<div>
			<div onClick={onClick}>Отдых</div>

			<Modal isOpen={isModalOpen} onClose={onClose}>
				<div className='flex flex-col text-center justify-center'>
					<span>Текст на будущее.</span>
					<span>Сделать систему отдыха!</span>
				</div>
			</Modal>
		</div>
	)
}
