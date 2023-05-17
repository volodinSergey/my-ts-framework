import html from './main-layout.component.html?raw'
import './main-layout.styles.scss'
import { BaseComponent } from '@core/component/base-component.abstract'
import { Header } from '@widgets/header/header.widget.module'

export class MainLayout extends BaseComponent {
	#state = {}

	constructor() {
		super()

		this.#state = this.useState({
			counter: Number(localStorage.getItem('counter')) || 0
		})
	}

	onButtonClick() {
		this.#state.counter += 1
		localStorage.setItem('counter', this.#state.counter )

		const heading = document.querySelector('.header') as HTMLElement
		heading.textContent = this.#state.counter

		this.render()
	}

	render(): HTMLElement {
		const element = this.compiler.compile(html, [new Header(this.#state.counter)])

		const button = element.querySelector('.button') as HTMLButtonElement

		button.addEventListener('click', () => this.onButtonClick())

		return element
	}
}
