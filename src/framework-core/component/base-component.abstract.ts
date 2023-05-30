import { Compiler } from '../compiler/compiler';
import { IBaseComponent, TProps } from './base-component.abstract.interface';

export abstract class BaseComponent implements IBaseComponent {
	protected readonly props: TProps = {}

	/*Each component has built-in compiler */
	readonly compiler

	constructor(props = {}) {
		this.props = props
		this.compiler = new Compiler()
	}

	update() { }

	render(): HTMLElement {
		const div = document.createElement('div') as HTMLElement

		return div
	}
}