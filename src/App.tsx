import { useEffect, useMemo, useState } from 'react';
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
  const [statusMessage, setStatusMessage] = useState('Gameplay ready');

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
      'leaderboard-1': () => {
        setStatusMessage('Leaderboard selected');
        actions.navigate('leaderboard');
      },
      'pause-circle-2': () => {
        setStatusMessage('Mission paused');
        actions.pause();
      },
      'refresh-3': () => {
        setStatusMessage('Mission reset');
        actions.reset();
      },
      'resume-mission-4': () => {
        setStatusMessage('Mission resumed');
        actions.resume();
      },
      'abort-5': () => {
        setStatusMessage('Mission aborted');
        actions.reset();
      },
      'play-1': () => {
        setStatusMessage('Gameplay selected');
        actions.navigate('gameplay');
      },
      'leaderboard-2': () => {
        setStatusMessage('Leaderboard selected');
        actions.navigate('leaderboard');
      },
      'hardware-3': () => {
        setStatusMessage('Hardware selected');
        actions.navigate('hardware');
      },
      'settings-4': () => {
        setStatusMessage('Settings opened');
        actions.navigate('settings');
      },
      'eula-5': () => {
        setStatusMessage('EULA opened');
        actions.pause();
      },
      'system-status-6': () => {
        setStatusMessage('System status opened');
        actions.pause();
      },
      'support-7': () => {
        setStatusMessage('Support opened');
        actions.pause();
      },
    }),
    [actions],
  );

  const settingsActions = useMemo<Partial<Record<GameSettingsPrismpaddleLiteActionId, () => void>>>(
    () => ({
      'close-1': () => {
        setStatusMessage('Settings closed');
        actions.navigate('gameplay');
      },
      'reset-preferences-2': () => {
        setStatusMessage('Preferences reset');
        actions.resetPreferences();
      },
      'return-to-gameplay-3': () => {
        setStatusMessage('Gameplay selected');
        actions.navigate('gameplay');
      },
      'save-preferences-4': () => {
        setStatusMessage('Preferences saved');
        actions.savePreferences();
      },
      'play-1': () => {
        setStatusMessage('Gameplay selected');
        actions.navigate('gameplay');
      },
      'leaderboard-2': () => {
        setStatusMessage('Leaderboard selected');
        actions.navigate('leaderboard');
      },
      'hardware-3': () => {
        setStatusMessage('Hardware selected');
        actions.navigate('hardware');
      },
      'settings-4': () => {
        setStatusMessage('Settings opened');
        actions.navigate('settings');
      },
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
      <div className="fixed bottom-6 left-4 z-50 max-w-[calc(100vw-2rem)] rounded border border-primary/40 bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-surface-tint shadow-lg backdrop-blur" role="status" aria-live="polite" data-testid="setfarm-action-status">
        {statusMessage}
      </div>
      {state.activeScreen === 'settings' ? (
        <GameSettingsPrismpaddleLite actions={settingsActions} />
      ) : (
        <GameplayPrismpaddleLite actions={gameplayActions} runtime={state.runtime} />
      )}
    </div>
  );
}
