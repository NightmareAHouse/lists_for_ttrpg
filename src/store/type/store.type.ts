export const characterRaceValue = ['Человек', 'Дворф', 'Эльф', 'Тифлинг'] as const
export type characterRaceType = (typeof characterRaceValue)[number]

export const characterClassValue = ['Воин', 'Паладин', 'Волшебник', 'Колдун'] as const
export type characterClassType = (typeof characterClassValue)[number]

export type diceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20'

export const CHARACTER_STAT_KEYS = [
	'characterStrength',
	'characterAgility',
	'characterVitality',
	'characterIntellect',
	'characterWisdom',
	'characterCharisma',
] as const

export type CharacterStatKey = (typeof CHARACTER_STAT_KEYS)[number]

export interface CharacterState {
	characterName: string
	characterClass: characterClassType
	characterSubClass: string
	characterRace: characterRaceType

	characterStrength: string
	characterAgility: string
	characterVitality: string
	characterIntellect: string
	characterWisdom: string
	characterCharisma: string

	updateCharacterData: (data: Partial<CharacterState>) => void

	updateCharacterStat: (key: CharacterStatKey, value: string) => void

	getCharacterStat: (key: CharacterStatKey) => string
}
