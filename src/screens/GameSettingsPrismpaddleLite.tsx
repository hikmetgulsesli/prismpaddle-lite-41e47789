// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - PrismPaddle Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bolt, Gamepad2, Gauge, Save, Settings, SlidersHorizontal, Trophy, User, Volume2, X } from "lucide-react";


export type GameSettingsPrismpaddleLiteActionId = "close-1" | "reset-preferences-2" | "return-to-gameplay-3" | "save-preferences-4" | "play-1" | "leaderboard-2" | "hardware-3" | "settings-4";

export interface GameSettingsPrismpaddleLiteProps {
  actions?: Partial<Record<GameSettingsPrismpaddleLiteActionId, () => void>>;

}

export function GameSettingsPrismpaddleLite({ actions }: GameSettingsPrismpaddleLiteProps) {
  return (
    <>
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
      {/* SideNavBar (Settings Active) */}
      <nav className="hidden md:flex bg-surface-container-low/30 dark:bg-surface-container-low/30 backdrop-blur-xl font-label-caps text-label-caps docked left-0 h-full w-64 border-r border-primary/20 shadow-[5px_0_15px_rgba(0,219,231,0.1)] fixed left-0 top-0 z-40 flex-col pt-24 pb-8">
      <div className="px-6 mb-12">
      <div className="flex items-center gap-4 mb-2">
      <div className="w-10 h-10 rounded-full bg-surface-tint/20 border border-surface-tint flex items-center justify-center neon-glow">
      <User  style={{fontVariationSettings: "'FILL' 1"}} className="text-surface-tint" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg text-surface-tint text-sm leading-tight">OPERATOR_01</div>
      <div className="text-[10px] text-tertiary-container mt-1 flex items-center gap-1">
      <div className="w-1.5 h-1.5 rounded-full bg-tertiary-container pulse-dot"></div>
                              RANK: ELITE
                          </div>
      </div>
      </div>
      </div>
      <ul className="flex-1 px-4 space-y-2">
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant/70 hover:text-surface-tint hover:bg-primary/10 transition-colors duration-200" href="#" data-action-id="play-1" onClick={(event) => { event.preventDefault(); actions?.["play-1"]?.(); }}>
      <Gamepad2 aria-hidden={true} focusable="false" />
                          Play
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant/70 hover:text-surface-tint hover:bg-primary/10 transition-colors duration-200" href="#" data-action-id="leaderboard-2" onClick={(event) => { event.preventDefault(); actions?.["leaderboard-2"]?.(); }}>
      <Trophy aria-hidden={true} focusable="false" />
                          Leaderboard
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant/70 hover:text-surface-tint hover:bg-primary/10 transition-colors duration-200" href="#" data-action-id="hardware-3" onClick={(event) => { event.preventDefault(); actions?.["hardware-3"]?.(); }}>
      <SlidersHorizontal aria-hidden={true} focusable="false" />
                          Hardware
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 rounded text-surface-tint border-r-2 border-surface-tint bg-primary/5 transition-colors duration-200" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      </li>
      </ul>
      </nav>
      {/* Main Canvas Content (Blurred Gameplay Background Simulation) */}
      <main className="flex-1 ml-0 md:ml-64 relative min-h-screen flex items-center justify-center p-gutter z-10">
      {/* Simulated Blurred Gameplay Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-surface-dim">
      {/* Simulated Gameplay Elements */}
      <div className="absolute top-[20%] left-[30%] w-32 h-32 bg-secondary-container/20 rounded-full blur-3xl mix-blend-screen"></div>
      <div className="absolute bottom-[20%] right-[30%] w-48 h-48 bg-primary-container/20 rounded-full blur-3xl mix-blend-screen"></div>
      {/* Contextual Overlay Blur */}
      <div className="absolute inset-0 backdrop-blur-md bg-background/60"></div>
      </div>
      {/* Settings Modal */}
      <div className="glass-modal w-full max-w-2xl rounded-xl relative z-20 flex flex-col max-h-[921px]">
      {/* Modal Header */}
      <div className="p-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
      <Settings className="text-surface-tint text-3xl" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-lg text-headline-lg-mobile text-surface-tint drop-shadow-[0_0_10px_rgba(0,219,231,0.3)] m-0">GAME SETTINGS</h1>
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-surface-tint/30 text-on-surface-variant hover:bg-surface-tint/20 hover:text-surface-tint hover:border-surface-tint transition-colors duration-300" type="button" aria-label="Close" data-action-id="close-1" onClick={actions?.["close-1"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="prism-divider"></div>
      {/* Modal Body (Scrollable) */}
      <div className="p-6 overflow-y-auto flex-1 space-y-8">
      {/* Section: Difficulty */}
      <section>
      <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-4 flex items-center gap-2">
      <Gauge className="text-[16px]" aria-hidden={true} focusable="false" />
                              DIFFICULTY LEVEL
                          </h2>
      <div className="grid grid-cols-3 gap-4">
      <label className="cursor-pointer">
      <input className="peer sr-only" name="difficulty" type="radio" defaultValue="easy" />
      <div className="glass-panel p-4 text-center rounded peer-checked:bg-primary/20 peer-checked:border-surface-tint peer-checked:neon-glow transition-colors duration-300">
      <span className="font-stat-value text-stat-value text-on-surface peer-checked:text-surface-tint text-lg block">EASY</span>
      <span className="font-body-md text-body-md text-on-surface-variant/70 text-sm">Casual Pace</span>
      </div>
      </label>
      <label className="cursor-pointer">
      <input defaultChecked={true} className="peer sr-only" name="difficulty" type="radio" defaultValue="medium" />
      <div className="glass-panel p-4 text-center rounded peer-checked:bg-primary/20 peer-checked:border-surface-tint peer-checked:neon-glow transition-colors duration-300">
      <span className="font-stat-value text-stat-value text-on-surface peer-checked:text-surface-tint text-lg block">MEDIUM</span>
      <span className="font-body-md text-body-md text-on-surface-variant/70 text-sm">Standard</span>
      </div>
      </label>
      <label className="cursor-pointer">
      <input className="peer sr-only" name="difficulty" type="radio" defaultValue="hard" />
      <div className="glass-panel p-4 text-center rounded peer-checked:bg-secondary-container/20 peer-checked:border-secondary-container peer-checked:neon-glow-secondary transition-colors duration-300">
      <span className="font-stat-value text-stat-value text-on-surface peer-checked:text-secondary-container text-lg block">HARD</span>
      <span className="font-body-md text-body-md text-on-surface-variant/70 text-sm">Elite Only</span>
      </div>
      </label>
      </div>
      </section>
      {/* Section: Gameplay Speed */}
      <section>
      <div className="flex justify-between items-center mb-4">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
      <Bolt className="text-[16px]" aria-hidden={true} focusable="false" />
                                  BASE SPEED MODIFIER
                              </h2>
      <span className="font-stat-value text-stat-value text-surface-tint text-xl" id="speedValue">1.0x</span>
      </div>
      <div className="glass-panel p-6 rounded">
      <input className="w-full" max="2.0" min="0.5" step="0.1" type="range" defaultValue="1.0" />
      <div className="flex justify-between text-on-surface-variant/50 font-label-caps text-label-caps mt-2 text-[10px]">
      <span>SLOW</span>
      <span>NORMAL</span>
      <span>FAST</span>
      </div>
      </div>
      </section>
      {/* Section: Audio */}
      <section>
      <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-4 flex items-center gap-2">
      <Volume2 className="text-[16px]" aria-hidden={true} focusable="false" />
                              AUDIO MIX
                          </h2>
      <div className="glass-panel rounded divide-y divide-primary/10">
      <div className="p-4 flex justify-between items-center hover:bg-white/5 transition-colors">
      <div>
      <div className="font-stat-value text-stat-value text-on-surface text-base">Master Volume</div>
      <div className="font-body-md text-body-md text-on-surface-variant/70 text-sm">Global sound output</div>
      </div>
      <label className="neon-toggle">
      <input defaultChecked={true} type="checkbox" />
      <span className="toggle-slider"></span>
      </label>
      </div>
      <div className="p-4 flex justify-between items-center hover:bg-white/5 transition-colors">
      <div>
      <div className="font-stat-value text-stat-value text-on-surface text-base">Synthwave Soundtrack</div>
      <div className="font-body-md text-body-md text-on-surface-variant/70 text-sm">Background music during gameplay</div>
      </div>
      <label className="neon-toggle">
      <input defaultChecked={true} type="checkbox" />
      <span className="toggle-slider"></span>
      </label>
      </div>
      <div className="p-4 flex justify-between items-center hover:bg-white/5 transition-colors">
      <div>
      <div className="font-stat-value text-stat-value text-on-surface text-base">Hit Effects</div>
      <div className="font-body-md text-body-md text-on-surface-variant/70 text-sm">Paddle collision sounds</div>
      </div>
      <label className="neon-toggle">
      <input defaultChecked={true} type="checkbox" />
      <span className="toggle-slider"></span>
      </label>
      </div>
      </div>
      </section>
      </div>
      <div className="prism-divider"></div>
      {/* Modal Footer (Actions) */}
      <div className="p-6 bg-surface-container-highest/50 rounded-b-xl flex flex-col sm:flex-row justify-between items-center gap-4">
      <button className="font-label-caps text-label-caps text-outline hover:text-error transition-colors duration-200 order-3 sm:order-1" type="button" data-action-id="reset-preferences-2" onClick={actions?.["reset-preferences-2"]}>
                          RESET PREFERENCES
                      </button>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 order-1 sm:order-2">
      <button className="font-label-caps text-label-caps bg-white/5 border border-surface-tint/50 text-surface-tint px-6 py-3 rounded hover:bg-surface-tint/10 hover:border-surface-tint transition-colors duration-300 w-full sm:w-auto text-center" type="button" data-action-id="return-to-gameplay-3" onClick={actions?.["return-to-gameplay-3"]}>
                              RETURN TO GAMEPLAY
                          </button>
      <button className="font-label-caps text-label-caps bg-surface-tint/10 border border-surface-tint text-surface-tint px-6 py-3 rounded neon-glow hover:bg-surface-tint/20 active:scale-95 transition-colors duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2" type="button" data-action-id="save-preferences-4" onClick={actions?.["save-preferences-4"]}>
                              SAVE PREFERENCES
                              <Save className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
