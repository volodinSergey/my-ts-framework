import { BaseComponent } from '@core/component/base-component.abstract'

import { TProps } from '@core/component/base-component.abstract.interface'

import html from './header.component.html?raw'

export class Header extends BaseComponent {
	constructor(props: TProps) {
		super(props)
	}

	render(): HTMLElement {
		const { text } = this.props

		const element = this.compiler.compile(html, [])

		element.textContent = text
		
		return element
	}
}
