import { App } from '@core/app/app';
import { routes } from '@router/router';


const app = new App({
	rootElement: '#app'
})

app.useRoutes(routes).run()

// !!! TEST REACTIVE STORE 
// abstract class BaseComponent {
// 	protected readonly props: string

// 	constructor(props: string) {
// 		this.props = props
// 	}

// 	update() {
// 		this.render()
// 	}

// 	protected render(): void {}
// }

// class Layout extends BaseComponent {
// 	constructor(props: string) {
// 		super(props)
// 		document.title = 'Pagizm'
// 	}

// 	render(): void {
// 		const props = this.props

// 		const root = document.querySelector('#app') as HTMLElement

// 		root.append(`Counter is: ${props}`)

// 		console.log('component is rendered')
// 	}
// }


// interface IObserver {
// 	update(): void
// }

// class Store {
// 	observers: IObserver[] = []
// 	state

// 	constructor(initialState: Record<string,any>) {
// 		this.state = new Proxy(initialState, {
// 			set: (target, prop, value) => {
// 				target[prop as string] = value

// 				this.notify()

// 				return true
// 			}
// 		})
// 	}

// 	onClick() {
// 		this.state.counter += 1
// 	}

// 	subscribe(observer: IObserver) {
// 		this.observers.push(observer)
// 	}

// 	notify() {
// 		this.observers.forEach((observer) => observer.update())
// 	}
// }

// const counterStore = new Store({
// 	counter: 0
// })


// class Subscriber {
// 	update() {
// 		console.log('subscriber updated !!!')
// 	}
// }

// const subscriber = new Subscriber()

// const layout = new Layout(counterStore.state.counter)
// counterStore.subscribe(subscriber)
// counterStore.subscribe(layout)

// const root = document.querySelector('#app') as HTMLElement

// const button = document.createElement('button') as HTMLButtonElement
// button.textContent = 'Click to render'

// root.append(button)

// button.addEventListener('click', () => {
// 	counterStore.onClick()
// })