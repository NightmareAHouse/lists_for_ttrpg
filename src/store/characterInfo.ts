import { create } from 'zustand'
import { CharacterState } from '@/store/type/store.type'

export const useCharacterInfoStore = create<CharacterState>((set, get) => ({
	characterName: 'Таумиэль',
	characterClass: 'Воин',
	characterSubClass: '',
	characterRace: 'Человек',

	characterStrength: '10',
	characterAgility: '10',
	characterVitality: '10',
	characterIntellect: '10',
	characterWisdom: '10',
	characterCharisma: '10',

	updateCharacterData: (data) => set(() => ({ ...data })),
	updateCharacterStat: (key, value) =>
		set((state) => ({
			...state,
			[key]: value, // НОВЫЙ объект, без мутаций
		})),
	getCharacterStat: (key) => get()[key],
}))
