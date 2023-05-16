import { IBaseComponent } from '@core/component/base-component.interface'

export class AboutView implements IBaseComponent {
	render() {
		return '<h1>I am about page</h1> <a href="/"> GO to home page</a>'
	}
}
