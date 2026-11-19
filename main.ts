// Entry program for make.fun's "Post a GTA 6 meme on X" bounty (gta6-meme-x-01).
//
// The entry itself is the X post: a GTA VI meme with make.fun's ghost in the
// picture, posted from a public account with make.fun and the entrant's play
// code in its text. This program's only job is to hand POST.json — which names
// the post's address — to the gate by copying it into the output directory.
//
// Locally, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
