import html from './main-layout.component.html?raw'
import './main-layout.styles.scss'
import { BaseComponent } from '@core/component/base-component.abstract'
import { Header } from '@widgets/header/header.widget.module'

export class MainLayout extends BaseComponent {
	#state = {}

	constructor() {
		super()

		this.#state = this.useState({
			counter: 0
		})
	}

	onButtonClick() {
		this.#state.counter +=1
			const heading = document.querySelector('.header') as HTMLElement
			heading.textContent = this.#state.counter

		this.render()
	}

	render(): HTMLElement {
		const element = this.compiler.compile(html, [new Header(this.#state.counter)])

		const button = element.querySelector('.button') as HTMLButtonElement

		button.addEventListener('click', () => {
			const heading = element.querySelector('.header') as HTMLElement

			this.onButtonClick()
		})

		return element
	}
}
