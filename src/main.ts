import { App } from '@core/app/app'
import { routes } from '@router/router'

import './app/styles/main.scss'

const app = new App({
	rootElement: '#app'
})

app.useRoutes(routes).run()
