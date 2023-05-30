import { IRoute } from 'src/framework-core/router/router.interface'
import { AboutView } from '@views/about/about.view.module'
import { HomeView } from '@views/home/home.view.module'
import { MainLayout } from '@widgets/layouts/main-layout/main-layout.module'

export const routes: IRoute[] = [
	{
		path: '/',
		component: HomeView,
		layout: MainLayout
	},

	{
		path: '/about',
		component: AboutView
	}
]
