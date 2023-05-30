import { Compiler } from '../compiler/compiler';
import { IBaseComponent } from './base-component.abstract.interface';

export abstract class BaseComponent implements IBaseComponent {
	protected readonly props: string | undefined // !TOOO : props must be an empty object by default. NOT STRING OR UNDEFINED

	/*Each component has built-in compiler */
	readonly compiler

	constructor(props?: string) { // !TOOO : props must be an empty object by default. NOT STRING OR UNDEFINED
		this.props = props
		this.compiler = new Compiler()
	}

	render(): HTMLElement {
		const div = document.createElement('div') as HTMLElement

		return div
	}
}