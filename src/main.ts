import { App } from '@core/app/app'
import { routes } from '@router/router'

const app = new App({
	rootElement: '#app'
})

app.useRoutes(routes).run()
