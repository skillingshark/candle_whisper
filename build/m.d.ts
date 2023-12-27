/* tslint:disable */
/* eslint-disable */
/**
*/
export class Decoder {
  free(): void;
/**
* @param {Uint8Array} weights
* @param {Uint8Array} tokenizer
* @param {Uint8Array} mel_filters
* @param {Uint8Array} config
* @param {boolean} quantized
* @param {boolean} is_multilingual
* @param {boolean} timestamps
* @param {string | undefined} task
* @param {string | undefined} language
*/
  constructor(weights: Uint8Array, tokenizer: Uint8Array, mel_filters: Uint8Array, config: Uint8Array, quantized: boolean, is_multilingual: boolean, timestamps: boolean, task?: string, language?: string);
/**
* @param {Uint8Array} wav_input
* @returns {string}
*/
  decode(wav_input: Uint8Array): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_decoder_free: (a: number) => void;
  readonly decoder_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number) => void;
  readonly decoder_decode: (a: number, b: number, c: number, d: number) => void;
  readonly main: (a: number, b: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
