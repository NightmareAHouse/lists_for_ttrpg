'use client'

import {useCharacterStore} from "@/store/character";
import React, {useState} from "react";

type StatRowType = {
    statValue: string | number;
    name?: string;
}

export default function StatRow({name = 'Спасбосок', statValue}: StatRowType) {
    const [isButtonClick, setIsButtonClick] = useState(false);
    const [isRaiseByTwo, setIsRaiseByTwo] = useState(false);

    const {bonusMastery} = useCharacterStore()

    const resultStatValue = () => {
        if(isButtonClick) return Number(statValue) + bonusMastery;

        if(isRaiseByTwo) return Number(statValue) + bonusMastery * 2;

        return statValue;
    }

    const onClickButton = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isRaiseByTwo) return setIsRaiseByTwo(false);

        if (!isButtonClick) return setIsButtonClick(true);

        setIsRaiseByTwo(true);
        setIsButtonClick(false);
    }

    return (
        <div className='flex flex-row gap-3'>
            <div onClick={onClickButton} className='flex justify-center items-center circle-button'>
                {isButtonClick && <div className='insert-circle'/>}
                {isRaiseByTwo && <div className='fill-circle' />}
            </div>
            <span>{name}: {resultStatValue()}</span>
        </div>
    )
}