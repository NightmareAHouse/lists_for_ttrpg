export const characterRaceValue = ['Человек', 'Дворф', 'Эльф', 'Тифлинг'] as const
export type characterRaceType = (typeof characterRaceValue)[number]

export const characterClassValue = ['Воин', 'Паладин', 'Волшебник', 'Колдун'] as const
export type characterClassType = (typeof characterClassValue)[number]

export type diceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20'
