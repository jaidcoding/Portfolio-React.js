import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import structuredClone from '@ungap/structured-clone';

if (typeof globalThis.structuredClone === 'undefined') {
  globalThis.structuredClone = structuredClone;
}

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio-React.js/', // Ensure this matches your repository name
  plugins: [react()],
});
