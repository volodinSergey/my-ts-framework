import { BaseComponent } from '@core/component/base-component.abstract'
import { Header } from '@widgets/header/header.widget.module'

import { counterStore } from '@entities/counter/counter.store'

import html from './main-layout.component.html?raw'
import './main-layout.styles.scss'

export class MainLayout extends BaseComponent {

	constructor() {
		super()

		counterStore.addObserver(this)
	}

	onCLickButton(): void {
		counterStore.state.increaseCounter()
	}

	update(): void {
		const counter = document.querySelector('.header') as HTMLElement

		counter.textContent = String(counterStore.state.counter)
	}

	render(): HTMLElement {
		const element = this.compiler.compile(html, [
			new Header({ text: counterStore.state.counter })
		])

		const button = element.querySelector('.button') as HTMLElement

		button.addEventListener('click', this.onCLickButton)

		return element
	}
}
