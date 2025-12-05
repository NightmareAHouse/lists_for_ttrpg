import { create } from 'zustand'
import { characterClassType, characterRaceType } from '@/store/type/store.type'

interface CharacterState {
	characterName: string
	characterClass: characterClassType
	characterSubClass: string
	characterRace: characterRaceType

	updateCharacterData: (data: Partial<CharacterState>) => void
}

export const useCharacterInfoStore = create<CharacterState>((set) => ({
	characterName: 'Таумиэль',
	characterClass: 'Воин',
	characterSubClass: '',
	characterRace: 'Человек',

	updateCharacterData: (data) => set(() => ({ ...data })),
}))
