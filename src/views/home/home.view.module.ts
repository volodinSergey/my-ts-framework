import { BaseComponent } from '@core/component/base-component.abstract'

import html from './home.component.html?raw'

export class HomeView extends BaseComponent {

	render(): HTMLElement {
		const element = this.compiler.compile(html, [])

		return element
	}
}