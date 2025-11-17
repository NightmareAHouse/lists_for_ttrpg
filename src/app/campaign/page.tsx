'use client'

import StatBlock from '@/components/StatBlock/StatBlock'
import HeaderStat from '@/components/Header/HeaderStat'
import { useState } from 'react'

export default function CampaignPage() {
	const [isFullView, setIsFullView] = useState(true)

	const fullViewClass = isFullView ? 'full-height-view' : 'small-height-view '

	return (
		<div>
			<HeaderStat isFullView={isFullView} setIsFullView={setIsFullView} />

			<div className={'p-3 w-full ' + fullViewClass}>
				<div className='h-full overflow-y-scroll overflow-x-hidden flex flex-col gap-2'>
					<StatBlock name={'Сила'} />
					<StatBlock name={'Ловкость'} />
					<StatBlock name={'Телосложение'} />
					<StatBlock name={'Интелект'} />
					<StatBlock name={'Мудрость'} />
					<StatBlock name={'Харизма'} />
				</div>
			</div>
		</div>
	)
}
