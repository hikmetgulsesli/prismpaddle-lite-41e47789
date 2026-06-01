import type { PrismPaddleLiteActions, PrismPaddleLiteState } from '../features/prismpaddle-lite/prismpaddle-lite.store';

export type PrismPaddleLiteTestBridge = {
  state: PrismPaddleLiteState;
  actions: PrismPaddleLiteActions;
};

declare global {
  interface Window {
    app?: PrismPaddleLiteTestBridge;
  }
}

export function installPrismPaddleLiteBridge(
  state: PrismPaddleLiteState,
  actions: PrismPaddleLiteActions,
): void {
  if (typeof window === 'undefined') return;

  window.app = {
    state,
    actions,
  };
}
