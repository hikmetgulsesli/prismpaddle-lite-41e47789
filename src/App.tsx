import { useEffect, useMemo } from 'react';
import {
  GameSettingsPrismpaddleLite,
  type GameSettingsPrismpaddleLiteActionId,
  GameplayPrismpaddleLite,
  type GameplayPrismpaddleLiteActionId,
} from './screens';
import { prismPaddleLiteStore, usePrismPaddleLiteStore } from './features/prismpaddle-lite/prismpaddle-lite.store';
import { installPrismPaddleLiteBridge } from './test/bridge';

export default function App() {
  const state = usePrismPaddleLiteStore();
  const actions = prismPaddleLiteStore.actions;

  useEffect(() => {
    installPrismPaddleLiteBridge(state, actions);
  }, [state, actions]);

  useEffect(() => {
    const interval = window.setInterval(() => actions.tick(), 900);

    return () => window.clearInterval(interval);
  }, [actions]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') actions.moveLeft();
      if (event.key === 'ArrowRight') actions.moveRight();
      if (event.key === ' ') actions.pause();
      if (event.key === 'Enter') actions.resume();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [actions]);

  const gameplayActions = useMemo<Partial<Record<GameplayPrismpaddleLiteActionId, () => void>>>(
    () => ({
      'leaderboard-1': () => actions.navigate('leaderboard'),
      'pause-circle-2': actions.pause,
      'refresh-3': actions.reset,
      'resume-mission-4': actions.resume,
      'abort-5': actions.reset,
      'play-1': () => actions.navigate('gameplay'),
      'leaderboard-2': () => actions.navigate('leaderboard'),
      'hardware-3': () => actions.navigate('hardware'),
      'settings-4': () => actions.navigate('settings'),
      'eula-5': () => actions.pause(),
      'system-status-6': () => actions.pause(),
      'support-7': () => actions.pause(),
    }),
    [actions],
  );

  const settingsActions = useMemo<Partial<Record<GameSettingsPrismpaddleLiteActionId, () => void>>>(
    () => ({
      'close-1': () => actions.navigate('gameplay'),
      'reset-preferences-2': actions.resetPreferences,
      'return-to-gameplay-3': () => actions.navigate('gameplay'),
      'save-preferences-4': () => actions.savePreferences(),
      'play-1': () => actions.navigate('gameplay'),
      'leaderboard-2': () => actions.navigate('leaderboard'),
      'hardware-3': () => actions.navigate('hardware'),
      'settings-4': () => actions.navigate('settings'),
    }),
    [actions],
  );

  return (
    <div data-setfarm-root="prismpaddle-lite" data-testid="setfarm-app-root">
      {state.lastError ? (
        <div className="fixed left-4 top-4 z-50 max-w-sm rounded border border-error bg-background px-4 py-3 text-sm text-error shadow-lg" role="alert">
          {state.lastError}
        </div>
      ) : null}
      {state.activeScreen === 'settings' ? (
        <GameSettingsPrismpaddleLite actions={settingsActions} />
      ) : (
        <GameplayPrismpaddleLite actions={gameplayActions} runtime={state.runtime} />
      )}
    </div>
  );
}
