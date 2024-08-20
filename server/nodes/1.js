

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DlN6e5h7.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.C-tz4xCP.js","_app/immutable/chunks/entry.CnFl8Yrt.js"];
export const stylesheets = [];
export const fonts = [];
