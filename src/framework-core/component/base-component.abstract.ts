import { Compiler } from '../compiler/compiler';
import { IBaseComponent } from './base-component.abstract.interface';

export abstract class BaseComponent implements IBaseComponent {
	protected readonly props: string | undefined
	readonly compiler

	constructor(props?: string) {
		this.props = props
		this.compiler = new Compiler()
	}

	render(): HTMLElement {
		const div = document.createElement('div') as HTMLElement

		return div
	}
}