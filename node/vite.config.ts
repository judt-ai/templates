import * as path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

const isSSR = process.env.BUILD_SSR === 'true';

// Build timing reporter - remove after profiling
function buildTimingPlugin(): Plugin {
	const timings: Record<string, number> = {};
	let buildStart: number;
	return {
		name: 'build-timing',
		buildStart() {
			buildStart = performance.now();
		},
		buildEnd() {
			timings['total'] = performance.now() - buildStart;
		},
		closeBundle() {
			console.log('\n⏱️  Build Timing Report:');
			console.log(`   Total build: ${timings['total']?.toFixed(0)}ms`);
		},
	};
}

export default defineConfig({
	plugins: [buildTimingPlugin(), react(), tailwindcss()],
	// optimizeDeps: 
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	publicDir: 'public',
	build: isSSR ? {
		// SSR build configuration
		ssr: 'src/entry-server.tsx',
		outDir: 'dist/server',
		rollupOptions: {
			input: 'src/entry-server.tsx',
		},
	} : {
		// Client build configuration
		outDir: 'dist/client',
	},
});
