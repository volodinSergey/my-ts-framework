import html from './header.component.html?raw'
import { BaseComponent } from '@core/component/base-component.abstract'

export class Header extends BaseComponent {
	render(): HTMLElement {
		const element = this.compiler.compile(html, [])

		return element
	}
}
