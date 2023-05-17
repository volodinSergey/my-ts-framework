import html from './main-layout.component.html?raw';
import { BaseComponent } from '@core/component/base-component.abstract';
import { Header } from '@widgets/header/header.widget.module';


export class MainLayout extends BaseComponent {
	render(): HTMLElement {
		const element = this.compiler.compile(html, [
            new Header()
        ])

		return element
	}
}