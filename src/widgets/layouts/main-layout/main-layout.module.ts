import { BaseComponent } from '@core/component/base-component.abstract'
import { IBaseComponent } from '@core/component/base-component.abstract.interface'

import html from './main-layout.component.html?raw'
import './main-layout.styles.scss'
export class MainLayout extends BaseComponent {
	#componentsList: IBaseComponent[] = []

	constructor() {
		super()
	}

	render(): HTMLElement {
		const element = this.compiler.compile(html, this.#componentsList)

		return element
	}
}
