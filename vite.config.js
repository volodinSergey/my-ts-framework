import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            /* Framework core aliases */
            '@core/router': '/core/router',
            '@core/compiler': '/core/compiler',
            '@core/querify': '/core/querify',
            '@core/app': '/core/app',
            '@core/component': '/core/component',
        },
    },
})