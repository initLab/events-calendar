import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    envPrefix: [
        'EVENTS_URL',
    ],
    plugins: [react()],
    publicDir: command === 'build' ? false : 'public',
    server: {
        open: true,
    },
}));
