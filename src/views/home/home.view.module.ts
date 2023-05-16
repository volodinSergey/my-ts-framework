import { IBaseComponent } from '@core/component/base-component.interface'

export class HomeView implements IBaseComponent {
	render() {
		return '<h1>I am home page</h1> <a href="/about"> GO to qbout page</a>'
	}
}
