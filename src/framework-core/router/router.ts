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
		this.#handlePopstateBehavior()
	}

	/**
	 * @title Method [ #handleUrlChanging]
	 * @description Allows to detect url changing, find current path and set current route
	 */
	#handleUrlChanging(): void {
		const currentRoutePath = this.#getCurrentPath() || '/'

		let route = this.#routes.find((route: IRoute) => route.path === currentRoutePath)

		if (route) this.#currentRoute = route

		this.#render()
	}

	/**
	 * @title Method [ #handlePopstateBehavior]
	 * @description Allows to handle popstateBehavior(it means when user visit app links)
	 */
	#handlePopstateBehavior(): void {
		window.addEventListener('popstate', () => this.#handleUrlChanging())
	}

	/**
	 * @title Method [ #render]
	 * @description Render function. Allows to render actual layout or page in current route
	 */
	#render(): void {
		const view = new this.#currentRoute.component()
		const viewContent = view.render()

		const layout = this.#currentRoute.layout ? new this.#currentRoute.layout() : null

		if (layout) {
			const layoutContent = layout.render()
			const contentSlot = layoutContent.querySelector('main') as HTMLElement
			
			contentSlot.append(viewContent)

			this.#rootElement.innerHTML = ''
			this.#rootElement.append(layoutContent)

			return
		}

		this.#rootElement.innerHTML = ''
		this.#rootElement.append(viewContent)
	}

	/**
	 * @title Method [ #normalizeLinksBehavior ]
	 * @description Allows to cancel default link behavior to prevent page reload and visit link content without page reload
	 */
	#normalizeLinksBehavior(): void {
		document.addEventListener('click', (event: Event) => {
			const target = event.target

			if (target instanceof HTMLAnchorElement) {
				event.preventDefault()

				this.#navigate(target.href)
			}
		})
	}

	/**
	 * @title Method [ #navigate]
	 * @description Navigates through the link and trigger handleUrlChanging what allows us change url and run rendering actual laytout or page
	 * @param path Where to go when click the link
	 */
	#navigate(path: string): void {
		if (path !== this.#getCurrentPath()) {
			window.history.pushState({}, '', path)

			this.#handleUrlChanging()
		}
	}

	/**
	 * @title Method [ #getCurrentpath ]
	 * @description Allows to get current url path ('/' ,'/about', '/ingo' etc...)
	 * @returns  Current url path
	 */
	#getCurrentPath(): string {
		return window.location.pathname
	}
}
