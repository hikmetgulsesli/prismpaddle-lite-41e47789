import { useSyncExternalStore } from 'react';
import {
  PRISM_DEFAULT_PREFERENCES,
  type PrismRuntimePreferences,
  type PrismRuntimeState,
  movePlayer,
  resetRuntime,
  setPaused,
  stepRuntime,
} from '../../game/game-runtime';
import {
  clearPrismPaddleLite,
  loadPrismPaddleLite,
  savePrismPaddleLite,
} from './prismpaddle-lite.repo';

export type PrismPaddleLiteScreen = 'gameplay' | 'settings' | 'leaderboard' | 'hardware';

export type PrismPaddleLiteState = {
  activeScreen: PrismPaddleLiteScreen;
  runtime: PrismRuntimeState;
  preferences: PrismRuntimePreferences;
  highScore: number;
  storageStatus: 'ready' | 'recovered' | 'saved' | 'reset';
  lastError: string | null;
};

export type PrismPaddleLiteActions = {
  navigate: (screen: PrismPaddleLiteScreen) => void;
  tick: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  savePreferences: (preferences?: Partial<PrismRuntimePreferences>) => void;
  resetPreferences: () => void;
  snapshot: () => PrismPaddleLiteState;
};

type Listener = () => void;

const loaded = loadPrismPaddleLite();

let state: PrismPaddleLiteState = {
  activeScreen: 'gameplay',
  runtime: resetRuntime(),
  preferences: loaded.data.preferences,
  highScore: loaded.data.highScore,
  storageStatus: loaded.status,
  lastError: loaded.status === 'recovered' ? loaded.error : null,
};

const listeners = new Set<Listener>();

function emit() {
  for (const listener of listeners) listener();
}

function update(next: PrismPaddleLiteState) {
  state = next;
  emit();
}

function persist(partial: Pick<PrismPaddleLiteState, 'preferences' | 'highScore'>) {
  savePrismPaddleLite({
    preferences: partial.preferences,
    highScore: partial.highScore,
  });
}

export const prismPaddleLiteStore = {
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot() {
    return state;
  },
  actions: {
    navigate(screen) {
      update({
        ...state,
        activeScreen: screen,
      });
    },
    tick() {
      const runtime = stepRuntime(state.runtime, state.preferences);
      const highScore = Math.max(state.highScore, runtime.score);

      if (highScore !== state.highScore) {
        persist({ preferences: state.preferences, highScore });
      }

      update({
        ...state,
        runtime,
        highScore,
      });
    },
    pause() {
      update({
        ...state,
        runtime: setPaused(state.runtime, true),
      });
    },
    resume() {
      update({
        ...state,
        activeScreen: 'gameplay',
        runtime: setPaused(state.runtime, false),
      });
    },
    reset() {
      update({
        ...state,
        activeScreen: 'gameplay',
        runtime: resetRuntime(),
      });
    },
    moveLeft() {
      update({
        ...state,
        runtime: movePlayer(state.runtime, -1),
      });
    },
    moveRight() {
      update({
        ...state,
        runtime: movePlayer(state.runtime, 1),
      });
    },
    savePreferences(preferences = {}) {
      const nextPreferences = {
        ...state.preferences,
        ...preferences,
      };

      persist({ preferences: nextPreferences, highScore: state.highScore });

      update({
        ...state,
        preferences: nextPreferences,
        storageStatus: 'saved',
        lastError: null,
      });
    },
    resetPreferences() {
      clearPrismPaddleLite();

      update({
        ...state,
        preferences: PRISM_DEFAULT_PREFERENCES,
        highScore: 0,
        storageStatus: 'reset',
        lastError: null,
      });
    },
    snapshot() {
      return state;
    },
  } satisfies PrismPaddleLiteActions,
};

export function usePrismPaddleLiteStore(): PrismPaddleLiteState {
  return useSyncExternalStore(
    prismPaddleLiteStore.subscribe,
    prismPaddleLiteStore.getSnapshot,
    prismPaddleLiteStore.getSnapshot,
  );
}
