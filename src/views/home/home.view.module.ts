import { BaseComponent } from '@core/component/base-component.abstract';


export class HomeView extends BaseComponent {
	state = {}

	constructor(props) {
		super(props)

		this.state = this.useState({
			counter: 1
		})
	}

	update() {
		const heading = document.querySelector('h1') as HTMLHeadingElement

		heading.textContent = `Counter is: ${this.state.counter}`
	}

	onClickCounter() {

		this.state.counter += 1
		

	}

	override render(): HTMLElement {
		const div = document.createElement('div') as HTMLElement

		const button = document.createElement('button') as HTMLButtonElement
		button.textContent = 'Click to render'

		const counterDisplay = document.createElement('h1') as HTMLHeadingElement
		counterDisplay.textContent = `Counter is: ${this.state.counter}`

		button.addEventListener('click', () => this.onClickCounter())

		div.append(counterDisplay, button)

		console.log('rendered')
		console.log(this.state.counter)

		return div
	}
}