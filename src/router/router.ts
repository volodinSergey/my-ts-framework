import { IRoute } from '@core/router/router.interface'
import { AboutView } from '@views/about/about.view.module'
import { HomeView } from '@views/home/home.view.module'

export const routes: IRoute[] = [
	{ path: '/', component: HomeView },
	{ path: '/about', component: AboutView }
]
