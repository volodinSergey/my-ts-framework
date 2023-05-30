import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            /* Framework core aliases */
            '@core/router': '/src/framework-core/router',
            '@core/compiler': '/src/framework-core/compiler',
            '@core/querify': '/src/framework-core/querify',
            '@core/store': '/src/framework-core/store',
            '@core/services': '/src/framework-core/services',
            '@core/app': '/src/framework-core/app',
            '@core/component': '/src/framework-core/component',

            /* Application aliases */
            '@entities': '/src/entities',
            '@features': '/src/features',
            '@widgets': '/src/widgets',
            '@views': '/src/views',
            '@router': '/src/router',
            '@app': '/src/app',
            '@shared': '/src/shared',
        },
    },
})