import { IRoute, IRouter, IRouterOptions } from './router.interface'

export class Router implements IRouter {
	readonly #rootElement: HTMLElement
	readonly #routes: IRoute[]
	#currentRoute: IRoute

	constructor({ rootElement, routes }: IRouterOptions) {
		this.#rootElement = rootElement
		this.#routes = routes
		this.#normalizeLinksBehavior()
	}

	init(): void {
		this.#handleUrlChanging()
	}

	#handleUrlChanging(): void {
		const currentRoutePath = this.#getCurrentPath() || '/'

		let route = this.#routes.find(
			(route: IRoute) => route.path === currentRoutePath
		)

		if (route) {
			this.#currentRoute = route
		}

		this.#render()
	}

	#render(): void {
		const view = new this.#currentRoute.component()

		this.#rootElement.innerHTML = view.render()

		console.log('rendered')
	}

	#normalizeLinksBehavior(): void {
		document.addEventListener('click', (event: Event) => {
			const target = event.target

			if (target instanceof HTMLAnchorElement) {
				event.preventDefault()

				this.#navigate(target.href)
			}
		})
	}

	#navigate(path: string): void {
		if (path !== this.#getCurrentPath()) {
			window.history.pushState({}, '', path)

			this.#handleUrlChanging()
		}
	}

	#getCurrentPath(): string {
		return window.location.pathname
	}
}
