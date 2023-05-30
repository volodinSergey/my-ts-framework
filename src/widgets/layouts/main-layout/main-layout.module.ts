
import { BaseComponent } from '@core/component/base-component.abstract'

import html from './main-layout.component.html?raw'
import './main-layout.styles.scss'
import { Header } from '@widgets/header/header.widget.module'


export class MainLayout extends BaseComponent {

	render(): HTMLElement {
		const element = this.compiler.compile(html, [
			new Header({ text: 'Something text' })
		])

		return element
	}
}
