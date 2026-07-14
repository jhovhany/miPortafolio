import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      // Ensures the HMR WebSocket connects to the host machine's port
      clientPort: 5173,
    },
    watch: {
      // Use polling inside Docker (filesystem events don't propagate reliably)
      usePolling: true,
      interval: 300,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        curriculum: fileURLToPath(new URL('generic.html', import.meta.url))
      }
    }
  }
});
