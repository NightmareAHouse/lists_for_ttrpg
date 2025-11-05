'use client'

import {useState} from "react";

type ProgressBarType = {
    value: number;
    maxValue: number;
}

export default function ProgressBar({value, maxValue}: ProgressBarType) {
    const percent = (value / maxValue) * 100;

    return (
        <>
            <div className='relative w-full h-[24px] bg-main rounded-r-lg overflow-hidden'>
                <div
                    className={'h-full bg-progress-line transition-all duration-300' + (percent >= 100 ? 'rounded-r-lg' : '')}
                    style={{
                        width: `${percent}%`,
                    }}/>

                <span className='absolute inset-0 flex justify-center test-sm'>{value} / {maxValue}</span>
            </div>
        </>
    )
}