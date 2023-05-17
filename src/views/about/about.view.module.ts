import html from './about.component.html?raw'
import { BaseComponent } from '@core/component/base-component.abstract'

export class AboutView extends BaseComponent {
	render(): HTMLElement {
		const element = this.compiler.compile(html, [])

		return element
	}
}
