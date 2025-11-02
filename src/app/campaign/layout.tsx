import React from "react";

export default function CampaignLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <header className="p-3 flex justify-between border-b border-gray-700">
                <div className="flex flex-col flex-wrap gap-1">
                    <div>
                        <span>Уровень: 1</span>
                    </div>

                    <div className='flex gap-3'>
                        <span>Имя: Таумиэль</span>
                        <span>Раса: Человек</span>
                        <span>Класс: Воин</span>
                    </div>
                </div>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}
