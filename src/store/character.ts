import { create } from 'zustand'
import { diceType } from '@/store/type/store.type'

interface CharacterState {
	currentLevel: number
	maxHp: number
	currentHp: number
	tempHp: number
	experience: number
	nextLevelExp: number
	bonusMastery: number
	classArmory: number
	speed: number
	newLevelCount: number
	diceHeal?: diceType
	diceHealCount?: number

	updateLevel: (level: number) => void
	updateMaxHp: (maxHp: number) => void
	updateHp: (hp: number) => void
	updateTempHp: (tempHp: number) => void
	updateNewLevelCount: () => void
	updateExperience: (newExperience: number) => void
	updateExpirienceOnNewLevel: (newExperience: number) => void
	updateNextLevelExp: (nextLevelExp: number) => void
}

export const useCharacterStore = create<CharacterState>((set) => ({
	currentLevel: 1,
	bonusMastery: 2,
	maxHp: 10,
	currentHp: 10,
	tempHp: 0,
	experience: 150,
	nextLevelExp: 300,
	classArmory: 10,
	speed: 30,
	diceHeal: 'd6',
	diceHealCount: 2,
	newLevelCount: 0,

	updateLevel: (level) => set({ currentLevel: level }),

	updateNewLevelCount: () => set((state) => ({ newLevelCount: state.newLevelCount + 1 })),

	updateBonusMastery: (bonusMastery: number) => set({ bonusMastery }),

	updateMaxHp: (maxHp) => set({ maxHp }),

	updateHp: (hp) => set((state) => ({ currentHp: state.currentHp + hp })),

	updateTempHp: (tempHp) => set((state) => ({ tempHp: state.tempHp + tempHp })),

	updateExperience: (newExperience) => set((state) => ({ experience: state.experience + newExperience })),

	updateExpirienceOnNewLevel: (newExperience) => set({ experience: newExperience }),

	updateNextLevelExp: (nextLevelExp) => set({ nextLevelExp }),

	updateClassArmory: (classArmory: number) => set({ classArmory }),

	updateSpeed: (speed: number) => set({ speed }),
}))
