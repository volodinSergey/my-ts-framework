import { IRouterOptions } from './router.interface'

export class Router {
	#rootElement: HTMLElement

	constructor({ rootElement }: IRouterOptions) {
		this.#rootElement = rootElement
	}

	init() {
		console.log('ROOT ROUTER ELEMENT:')
		console.log(this.#rootElement)
	}
}
