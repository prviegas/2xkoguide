// Individual character data imports
import { ahri } from './ahri.js';
import { braum } from './braum.js';
import { darius } from './darius.js';
import { ekko } from './ekko.js';
import { illaoi } from './illaoi.js';
import { jinx } from './jinx.js';
import { vi } from './vi.js';
import { yasuo } from './yasuo.js';

// Re-export individual characters for direct imports
export { ahri, braum, darius, ekko, illaoi, jinx, vi, yasuo };

// Export the combined array for backwards compatibility
export const charactersData = [
  ahri,
  braum,
  darius,
  ekko,
  illaoi,
  jinx,
  vi,
  yasuo
];
