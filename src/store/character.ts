import {create} from "zustand";

interface CharacterState {
    currentLevel: number;
    maxHp: number;
    currentHp: number;
    experience: number;
    nextLevelExp: number;
    bonusMastery: number;

    updateLevel: (level: number) => void;
    updateMaxHp: (maxHp: number) => void;
    updateHp: (hp: number) => void;
    updateExperience: (newExperience: number) => void;
    updateNextLevelExp: (nextLevelExp: number) => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
    currentLevel: 1,
    bonusMastery: 2,
    maxHp: 10,
    currentHp: 10,
    experience: 150,
    nextLevelExp: 300,

    updateLevel: (level) =>
        set({currentLevel: level}),

    updateBonusMastery: (bonusMastery: number) =>
        set({bonusMastery}),

    updateMaxHp: (maxHp) =>
        set({maxHp}),

    updateHp: (hp) =>
        set({currentHp: hp}),

    updateExperience: (newExperience) =>
        set((state) => ({experience: state.experience + newExperience})),

    updateNextLevelExp: (nextLevelExp) =>
        set({nextLevelExp})
}));
