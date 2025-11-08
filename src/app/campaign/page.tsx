import StatBlock from "@/components/StatBlock/StatBlock";

export default function CampaignPage() {
    return (
        <div className='p-3 calc-height-100-vh w-full'>
            <div className='h-full overflow-y-scroll overflow-x-hidden flex flex-col gap-2'>
                <StatBlock name={'Сила'}/>
                <StatBlock name={'Ловкость'}/>
                <StatBlock name={'Телосложение'}/>
                <StatBlock name={'Интелект'}/>
                <StatBlock name={'Мудрость'}/>
                <StatBlock name={'Харизма'}/>
            </div>
        </div>
    )
}