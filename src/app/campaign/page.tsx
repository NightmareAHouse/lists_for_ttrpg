import StatBlock from "@/components/StatBlock/StatBlock";

export default function CampaignPage() {
    return (
        <div className="p-3 flex justify-between">
            <div className='flex flex-col'>
                <div className='flex flex-col gap-2 w-full'>
                    <StatBlock name={'Сила'}/>
                    <StatBlock name={'Ловкость'}/>
                    <StatBlock name={'Телосложение'}/>
                    <StatBlock name={'Интелект'}/>
                    <StatBlock name={'Мудрость'}/>
                    <StatBlock name={'Харизма'}/>
                </div>
            </div>
        </div>
    )
}