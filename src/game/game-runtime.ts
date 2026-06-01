export type PrismLane = 0 | 1 | 2;

export type PrismEntity = {
  id: string;
  lane: PrismLane;
  position: number;
};

export type PrismRuntimeState = {
  player: {
    lane: PrismLane;
    position: number;
  };
  obstacles: PrismEntity[];
  shards: PrismEntity[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  gameOver: boolean;
  tick: number;
};

export type PrismDifficulty = 'relaxed' | 'standard' | 'expert';

export type PrismRuntimePreferences = {
  difficulty: PrismDifficulty;
  sound: boolean;
  motion: boolean;
};

export const PRISM_INITIAL_RUNTIME: PrismRuntimeState = {
  player: {
    lane: 1,
    position: 12,
  },
  obstacles: [
    { id: 'obs-1', lane: 0, position: 72 },
    { id: 'obs-2', lane: 2, position: 104 },
  ],
  shards: [
    { id: 'shard-1', lane: 1, position: 46 },
    { id: 'shard-2', lane: 0, position: 118 },
  ],
  score: 0,
  energy: 100,
  lives: 3,
  paused: false,
  gameOver: false,
  tick: 0,
};

export const PRISM_DEFAULT_PREFERENCES: PrismRuntimePreferences = {
  difficulty: 'standard',
  sound: true,
  motion: true,
};

const laneCount = 3;
const trackLimit = 128;

const difficultySpeed: Record<PrismDifficulty, number> = {
  relaxed: 4,
  standard: 6,
  expert: 8,
};

export function cloneRuntime(runtime: PrismRuntimeState): PrismRuntimeState {
  return {
    ...runtime,
    player: { ...runtime.player },
    obstacles: runtime.obstacles.map((obstacle) => ({ ...obstacle })),
    shards: runtime.shards.map((shard) => ({ ...shard })),
  };
}

export function movePlayer(runtime: PrismRuntimeState, direction: -1 | 1): PrismRuntimeState {
  if (runtime.gameOver) return cloneRuntime(runtime);

  const nextLane = Math.min(laneCount - 1, Math.max(0, runtime.player.lane + direction)) as PrismLane;

  return {
    ...cloneRuntime(runtime),
    player: {
      ...runtime.player,
      lane: nextLane,
    },
  };
}

export function setPaused(runtime: PrismRuntimeState, paused: boolean): PrismRuntimeState {
  return {
    ...cloneRuntime(runtime),
    paused,
  };
}

export function resetRuntime(): PrismRuntimeState {
  return cloneRuntime(PRISM_INITIAL_RUNTIME);
}

export function stepRuntime(
  runtime: PrismRuntimeState,
  preferences: PrismRuntimePreferences = PRISM_DEFAULT_PREFERENCES,
): PrismRuntimeState {
  if (runtime.paused || runtime.gameOver) return cloneRuntime(runtime);

  const speed = difficultySpeed[preferences.difficulty];
  const nextTick = runtime.tick + 1;
  const playerLane = runtime.player.lane;
  let scoreDelta = 1;
  let energyDelta = -1;
  let lives = runtime.lives;

  const advance = (entity: PrismEntity, offset: number): PrismEntity => {
    const nextPosition = entity.position - speed;

    if (nextPosition < -8) {
      return {
        ...entity,
        lane: ((nextTick + offset) % laneCount) as PrismLane,
        position: trackLimit + offset * 14,
      };
    }

    return {
      ...entity,
      position: nextPosition,
    };
  };

  const obstacles = runtime.obstacles.map((obstacle, index) => advance(obstacle, index + 1));
  const shards = runtime.shards.map((shard, index) => advance(shard, index + 3));

  for (const obstacle of obstacles) {
    if (obstacle.lane === playerLane && obstacle.position >= 8 && obstacle.position <= 16) {
      lives -= 1;
      energyDelta -= 15;
    }
  }

  for (const shard of shards) {
    if (shard.lane === playerLane && shard.position >= 8 && shard.position <= 16) {
      scoreDelta += 25;
      energyDelta += 8;
    }
  }

  const energy = Math.max(0, Math.min(100, runtime.energy + energyDelta));
  const gameOver = lives <= 0 || energy <= 0;

  return {
    player: { ...runtime.player },
    obstacles,
    shards,
    score: runtime.score + scoreDelta,
    energy,
    lives: Math.max(0, lives),
    paused: gameOver ? true : runtime.paused,
    gameOver,
    tick: nextTick,
  };
}
