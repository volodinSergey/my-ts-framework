import { IApp, IAppOptions } from './app.interface'
import { Router } from '@core/router/router'
import { IRouter } from '@core/router/router.interface'

export class App implements IApp {
	readonly #rootElement: HTMLElement
	readonly #router: IRouter

	constructor({ rootElement }: IAppOptions) {
		this.#rootElement = document.querySelector(rootElement) as HTMLElement

		this.#router = new Router({
			rootElement: this.#rootElement
		})
	}

	run() {
		this.#useRouter()
	}

	#useRouter() {
		this.#router.init()
	}
}
