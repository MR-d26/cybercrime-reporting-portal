import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { Plugin } from 'vite';

function sarvamApiPlugin(): Plugin {
  return {
    name: 'sarvam-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/sarvam/transcribe', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 455;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        try {
          const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
          const apiKey = env.SARVAM_API_KEY || process.env.SARVAM_API_KEY;

          // Collect body stream
          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
          }
          const bodyBuffer = Buffer.concat(chunks);

          // Get content type
          const contentType = req.headers['content-type'] || '';

          if (!apiKey) {
            console.warn('[Sarvam Proxy] Warning: SARVAM_API_KEY environment variable is not set.');
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              error: 'SARVAM_API_KEY environment variable is not set in backend server.',
              message: 'Please add SARVAM_API_KEY=your_key in .env file.'
            }));
            return;
          }

          // Forward to Sarvam STT API endpoint
          const response = await fetch('https://api.sarvam.ai/speech-to-text', {
            method: 'POST',
            headers: {
              'api-subscription-key': apiKey,
              'api-key': apiKey,
              'content-type': contentType
            },
            body: bodyBuffer
          });

          const responseText = await response.text();
          res.statusCode = response.status;
          res.setHeader('Content-Type', 'application/json');
          res.end(responseText);
        } catch (error: any) {
          console.error('[Sarvam Proxy Error]:', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            error: 'Failed to communicate with Sarvam API',
            details: error?.message || String(error)
          }));
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), sarvamApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5173,
      open: false
    }
  };
});
