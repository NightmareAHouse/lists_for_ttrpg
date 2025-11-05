'use client'

import React, {useState} from "react";
import ProgressBar from "@/components/ProgressBar";
import ModalHeader from "@/components/ModalHeader";
import {useCharacterStore} from "@/store/character";

export default function CampaignLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    const {currentLevel, experience, nextLevelExp} = useCharacterStore()
    const [levelModalOpen, setLevelModalOpen] = useState(false);

    const onClick = () => setLevelModalOpen(!levelModalOpen);

    return (
        <div>
            <header className="flex flex-col gap-2 p-3 border-b border-gray-700">
                <div className="flex flex-col text-center justify-center w-full gap-1">
                    <span>Таумиэль</span>
                    <div>Человек - Воин</div>
                </div>

                <div className='flex flex-row header-border items-center' onClick={onClick}>
                    <div className='text-sm border-right min-w-[80px] p-1'>
                        <span>Уровень: {currentLevel}</span>
                    </div>

                    <ProgressBar value={experience} maxValue={nextLevelExp}/>
                </div>
            </header>

            <ModalHeader isOpen={levelModalOpen} setStateModal={setLevelModalOpen} />

            <main>
                {children}
            </main>
        </div>
    );
}
