import {Dispatch, SetStateAction} from "react";
import {useCharacterStore} from "@/store/character";
import LevelHeaderBlock from "@/components/Header/LevelHeaderBlock";
import Rest from "@/components/Header/Rest";
import Health from "@/components/Header/Health";

type HeaderStatType = {
    isFullView: boolean;
    setIsFullView: Dispatch<SetStateAction<boolean>>;
};

export default function HeaderStat({isFullView, setIsFullView}: HeaderStatType) {
    const {classArmory, speed} = useCharacterStore();

    const onChangeView = () => setIsFullView(prev => !prev);

    return (
        <div className='max-h-[150px]'>
            <div
                className={`
                    overflow-hidden transition-all duration-300
                    ${isFullView ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className="first-block p-3">
                    <div className="flex flex-col text-center justify-center w-full gap-1">
                        <span>Таумиэль</span>
                        <div>Человек - Воин</div>
                    </div>

                    <LevelHeaderBlock />
                </div>
            </div>

            <div className="second-block transition-all duration-300 relative px-3 py-2 border-y border-[#364153]">
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <span>КБ: {classArmory}</span>
                        <span>Скорость: {speed} фут</span>
                    </div>

                    <div className='flex flex-row gap-2'>
                        <Rest />
                        <Health />
                    </div>
                </div>

                <div className='show-more-button' onClick={onChangeView}>
                    Кнопка
                </div>
            </div>
        </div>
    );
}
