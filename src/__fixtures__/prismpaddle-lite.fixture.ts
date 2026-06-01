import {
  PRISM_DEFAULT_PREFERENCES,
  PRISM_INITIAL_RUNTIME,
  type PrismRuntimePreferences,
  type PrismRuntimeState,
} from '../game/game-runtime';

export type PrismPaddleLiteFixture = {
  runtime: PrismRuntimeState;
  preferences: PrismRuntimePreferences;
  highScore: number;
};

export const prismPaddleLiteFixture: PrismPaddleLiteFixture = {
  runtime: PRISM_INITIAL_RUNTIME,
  preferences: PRISM_DEFAULT_PREFERENCES,
  highScore: 4200,
};
