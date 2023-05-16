import { IBaseComponent } from '@core/component/base-component.interface'

export interface IRouterOptions {
	rootElement: HTMLElement
	routes: IRoute[]
}

export interface IRouter {
	init: () => void
}

export interface IRoute {
	path: string
	component: new () => IBaseComponent
}
