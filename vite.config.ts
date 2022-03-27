import { VitePWA } from 'vite-plugin-pwa';

export default {
  server: {
    host: '0.0.0.0',
  },
  plugins: [VitePWA()],
};
