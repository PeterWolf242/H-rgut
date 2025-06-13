import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		sourcemap: true,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: false,
				drop_debugger: true
			}
		},
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom', 'react-router-dom'],
					helmet: ['react-helmet-async']
				}
			}
		}
	},
	server: {
		port: 3000,
		open: true
	}
})
