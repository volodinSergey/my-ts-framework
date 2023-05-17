import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            /* Framework core aliases */
            '@core/router': '/core/router',
            '@core/compiler': '/core/compiler',
            '@core/querify': '/core/querify',
            '@core/services': '/core/services',
            '@core/app': '/core/app',
            '@core/component': '/core/component',

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