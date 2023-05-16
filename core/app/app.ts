import { IApp, IAppOptions } from './app.interface';
import { Router } from '@core/router/router';
import { IRoute, IRouter } from '@core/router/router.interface';


export class App implements IApp {
	readonly #rootElement: HTMLElement
	#router: IRouter
	#routes: IRoute[]

	constructor({ rootElement }: IAppOptions) {
		this.#rootElement = document.querySelector(rootElement) as HTMLElement
	}

	run(): void {
		this.#initRouter()
	}

	/**
	 * @title Method [ useRoutes ]
	 * @description Takes a list of routes, saves and then routen can get this routes list during initialization
	 * @param routes Routes list
	 */
	useRoutes(routes: IRoute[]): IApp {
		this.#routes = routes

		return this
	}

	/**
	 * @title Method [ #initRouter ]
	 * @description Creates router instance with router options and init router during application runs
	 */
	#initRouter(): void {
		this.#router = new Router({
			rootElement: this.#rootElement,
			routes: this.#routes
		})

		this.#router.init()
	}
}