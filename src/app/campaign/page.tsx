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
					<StatBlock name={'Сила'} value={'characterStrength'} />
					<StatBlock name={'Ловкость'} value={'characterAgility'} />
					<StatBlock name={'Телосложение'} value={'characterVitality'} />
					<StatBlock name={'Интелект'} value={'characterIntellect'} />
					<StatBlock name={'Мудрость'} value={'characterWisdom'} />
					<StatBlock name={'Харизма'} value={'characterCharisma'} />
				</div>
			</div>
		</div>
	)
}
