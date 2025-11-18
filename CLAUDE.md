# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sipal UI** is a professional React component library (v1.0.0) for building administrative interfaces and dashboards. It provides 56 production-ready components built with React 18, TypeScript, Tailwind CSS 4.1, Radix UI, TanStack Table, and Chart.js.

Published as `@sipal/ui` on npm.

## Common Commands

### Development
```bash
npm run dev          # Watch mode - rebuilds on file changes
npm run build        # Build library for production (outputs to dist/)
npm run type-check   # Run TypeScript type checking without emitting
npm run lint         # Lint source files with ESLint
npm run clean        # Remove dist directory
```

### Testing Components
Since this is a library (not an application), test changes by:
1. Running `npm run build` or `npm run dev` (watch mode)
2. Using the library in a consumer project via local linking or by publishing

## Architecture

### Build System
- **Bundler:** tsup (builds both CJS and ESM formats)
- **Outputs:**
  - `dist/index.js` (CommonJS)
  - `dist/index.mjs` (ES Modules)
  - `dist/index.d.ts` (TypeScript declarations)
  - `dist/styles/theme.css` (exported as `@sipal/ui/styles`)
- **Note:** All builds include `'use client';` banner for Next.js compatibility

### Component Structure
- **Location:** All UI components in `src/components/ui/`
- **Pattern:** Components use class-variance-authority (CVA) for variant management
- **Composition:** Built on Radix UI primitives for accessibility (WAI-ARIA compliant)
- **Styling:** Tailwind CSS utility classes with semantic color tokens

### Theme System (Tailwind CSS 4.1)
The library uses CSS variables for theming, defined in `src/styles/theme.css`:

**Key Pattern:**
```css
@theme {
  --color-primary: var(--primary);
  --radius-lg: var(--radius);
}

:root {
  --primary: 222.2 47.4% 11.2%;  /* HSL without hsl() */
}

.dark {
  --primary: 210 40% 98%;
}
```

**Color Format:** All colors use HSL values in format `H S% L%` (no `hsl()` wrapper)

### Utilities (`src/lib/utils.ts`)
- `cn()` - Combines Tailwind classes (clsx + tailwind-merge)
- `getThemeColor()` - Converts CSS variables to hex for Chart.js
- `hslToHex()` - HSL to hex conversion for canvas rendering
- `formatCurrency()`, `formatNumber()`, `generateId()` - Formatting helpers

### Chart Architecture
Charts (`src/components/ui/chart.tsx`) integrate Chart.js with the Tailwind theme:
- Auto-sync colors from CSS variables to Chart.js defaults
- Support `loading` prop for skeleton states
- Wrapper components: `SipalChart`, `BarChart`, `LineChart`, `AreaChart`, `PieChart`, `ScatterChart`, `MixedChart`

### Export Pattern
Components are categorized in `src/index.ts`:
- Fundamentos (7 components)
- Formulários (15 components)
- Visualização de Dados (11 components)
- Charts (7 types)
- Navegação (8 components)
- Feedback & Overlays (8 components)

## Component Development Guidelines

### When Adding/Modifying Components

1. **Import Path Alias:** Use `@/lib/utils` and `@/components/ui/*` (configured in tsconfig.json)

2. **Styling Requirements:**
   - Use semantic color tokens: `bg-primary`, `text-muted-foreground`, `border-border`
   - Never hardcode colors like `bg-blue-500`
   - Support dark mode via CSS variable system (no manual dark: variants needed)

3. **Variants with CVA:**
   ```tsx
   const variants = cva('base-classes', {
     variants: {
       variant: { default: 'classes', ... },
       size: { sm: 'classes', ... }
     },
     defaultVariants: { variant: 'default' }
   })
   ```

4. **TypeScript:**
   - Export component props interfaces
   - Use `React.forwardRef` for ref forwarding
   - Extend HTML element props appropriately

5. **Exports:**
   - Add new components to `src/index.ts` in the correct category
   - Export both component and types/interfaces

### Chart Components
When working with charts:
- Theme colors sync automatically via `getThemeColor()`
- Use `hslToHex()` for converting theme colors to Chart.js format
- Support SSR (check `typeof window !== 'undefined'`)

### Form Components
Forms integrate with react-hook-form:
- See `src/components/ui/form.tsx` for the Form wrapper pattern
- Use Radix UI primitives for accessibility

## TypeScript Configuration

- **Module Resolution:** bundler mode (for tsup)
- **Path Alias:** `@/*` maps to `./src/*`
- **Strict Mode:** Enabled with unused locals/parameters checks
- **JSX:** react-jsx transform

## Peer Dependencies

Components expect consumers to provide:
- `react` ^18.0.0
- `react-dom` ^18.0.0
- `tailwindcss` (for styling)

Consumer projects must:
1. Configure Tailwind to scan `node_modules/@sipal/ui/dist/**/*.{js,mjs}`
2. Import `@sipal/ui/styles` in their CSS entry point
3. Use `darkMode: 'class'` in tailwind.config
4. Install `tailwindcss-animate` plugin

## Documentation

Comprehensive docs in `docs/` directory:
- `docs/README.md` - Documentation portal
- `docs/components-guide.md` (Parts 1-4) - All 56 components
- `docs/architecture.md` - Implementation patterns
- `docs/theming.md` - Theme customization
- `docs/charts.md` - Chart system deep dive
- `COMPONENT_INDEX.md` - Quick visual reference

## Important Notes

- **No Tests Yet:** There is no test suite configured. Manual testing in consumer projects required.
- **Library Focus:** This is not a runnable app - no dev server or preview environment
- **Windows Paths:** Project uses Windows paths; `clean` script uses `rm -rf` (may need Git Bash/WSL)
- **Radix Primitives:** Many components wrap Radix UI - check Radix docs for advanced composition patterns
