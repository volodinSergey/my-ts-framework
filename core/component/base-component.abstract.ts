import { IBaseComponent } from './base-component.abstract.interface';


export abstract class BaseComponent implements IBaseComponent {
	protected readonly props: string

	constructor(props: string) {
		this.props = props
	}

	useState(state: Record<string, any>) {
		console.log('inside use state')

		const proxie = new Proxy(state, {
			set: (target, prop, value) => {
				console.log('proxy is work')
				target[prop as string] = value

				this.update()
				return true
			},

			get: (target, prop) => {
				return target[prop as string]
			}
		})

		return proxie
	}

	update() {
		this.render()
	}

	render(): HTMLElement {
		const div = document.createElement('div') as HTMLElement

		return div
	}
}