import { Group } from '@/types';
import { atom } from 'jotai';

export const selectedGroupAtom = atom<Group | null>(null);