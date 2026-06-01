import { PRISM_DEFAULT_PREFERENCES, type PrismRuntimePreferences } from '../../game/game-runtime';

export type PrismPaddleLitePersisted = {
  preferences: PrismRuntimePreferences;
  highScore: number;
};

export type PrismPaddleLiteLoadResult =
  | { status: 'ready'; data: PrismPaddleLitePersisted }
  | { status: 'recovered'; data: PrismPaddleLitePersisted; error: string };

const storageKey = 'prismpaddle-lite:v1';

const defaultPersisted: PrismPaddleLitePersisted = {
  preferences: PRISM_DEFAULT_PREFERENCES,
  highScore: 0,
};

function isPersisted(value: unknown): value is PrismPaddleLitePersisted {
  if (!value || typeof value !== 'object') return false;

  const candidate = value as Partial<PrismPaddleLitePersisted>;
  const preferences = candidate.preferences as Partial<PrismRuntimePreferences> | undefined;

  return (
    typeof candidate.highScore === 'number' &&
    !!preferences &&
    (preferences.difficulty === 'relaxed' ||
      preferences.difficulty === 'standard' ||
      preferences.difficulty === 'expert') &&
    typeof preferences.sound === 'boolean' &&
    typeof preferences.motion === 'boolean'
  );
}

export function loadPrismPaddleLite(storage: Storage | undefined = globalThis.localStorage): PrismPaddleLiteLoadResult {
  if (!storage) {
    return { status: 'ready', data: defaultPersisted };
  }

  const raw = storage.getItem(storageKey);

  if (!raw) {
    return { status: 'ready', data: defaultPersisted };
  }

  try {
    const parsed = JSON.parse(raw) as unknown;

    if (isPersisted(parsed)) {
      return {
        status: 'ready',
        data: {
          preferences: parsed.preferences,
          highScore: Math.max(0, Math.floor(parsed.highScore)),
        },
      };
    }
  } catch {
    // Fall through to the shared recovery path below.
  }

  storage.removeItem(storageKey);

  return {
    status: 'recovered',
    data: defaultPersisted,
    error: 'Saved PrismPaddle Lite data was reset because it could not be loaded.',
  };
}

export function savePrismPaddleLite(
  data: PrismPaddleLitePersisted,
  storage: Storage | undefined = globalThis.localStorage,
): void {
  if (!storage) return;

  storage.setItem(storageKey, JSON.stringify(data));
}

export function clearPrismPaddleLite(storage: Storage | undefined = globalThis.localStorage): void {
  storage?.removeItem(storageKey);
}
