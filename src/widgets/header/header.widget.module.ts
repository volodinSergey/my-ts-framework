import html from './header.component.html?raw'
import { BaseComponent } from 'src/framework-core/component/base-component.abstract'

export class Header extends BaseComponent {
	constructor(props) {
		super(props)
	}
	render(): HTMLElement {
	
		const element = this.compiler.compile(html, [])
		
		element.textContent = this.props as string
		return element
	}
}
