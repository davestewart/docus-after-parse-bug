# Docus Content Hook Bug

Demonstrates a hook bug with Nuxt Content

## Overview

Run the demo:

```bash
git clone https://github.com/davestewart/docus-content-hook-bug.git
cd docus-content-hook-bug
npm i
npm run dev
```

Edit any markdown file and note the `content:file:afterParse` hook being fired multiple times:

```
After Parse: content:1.guide:0.index.md
After Parse: content:1.guide:0.index.md
After Parse: content:1.guide:0.index.md
```
