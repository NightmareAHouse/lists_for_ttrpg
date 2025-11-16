import {create} from "zustand";
import {newExpression} from "@babel/types";

type diceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';

interface CharacterState {
    currentLevel: number;
    maxHp: number;
    currentHp: number;
    experience: number;
    nextLevelExp: number;
    bonusMastery: number;
    classArmory: number;
    speed: number;
    diceHeal?: diceType;
    diceHealCount?: number;

    updateLevel: (level: number) => void;
    updateMaxHp: (maxHp: number) => void;
    updateHp: (hp: number) => void;
    updateExperience: (newExperience: number) => void;
    updateExpirienceOnNewLevel: (newExperience: number) => void;
    updateNextLevelExp: (nextLevelExp: number) => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
    currentLevel: 1,
    bonusMastery: 2,
    maxHp: 10,
    currentHp: 10,
    experience: 150,
    nextLevelExp: 300,
    classArmory: 10,
    speed: 30,
    diceHeal: 'd6',
    diceHealCount: 2,

    updateLevel: (level) =>
        set({currentLevel: level}),

    updateBonusMastery: (bonusMastery: number) =>
        set({bonusMastery}),

    updateMaxHp: (maxHp) =>
        set({maxHp}),

    updateHp: (hp) =>
        set((state) => ({currentHp: state.currentHp + hp})),

    updateExperience: (newExperience) =>
        set((state) => ({experience: state.experience + newExperience})),

    updateExpirienceOnNewLevel: (newExperience) =>
        set({experience: newExperience}),

    updateNextLevelExp: (nextLevelExp) =>
        set({nextLevelExp}),

    updateClassArmory: (classArmory: number) =>
        set({classArmory}),

    updateSpeed: (speed: number) =>
        set({speed})
}));
