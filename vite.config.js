import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
			"@components": path.resolve(__dirname, "src/components"),
			"@images": path.resolve(__dirname, "src/images"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@skeleton": path.resolve(__dirname, "src/skeleton"),
			"@test": path.resolve(__dirname, "src/test"),
			"@layouts": path.resolve(__dirname, "src/layouts"),
			"@lottie": path.resolve(__dirname, "src/lottie"),
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.js",
	},
});