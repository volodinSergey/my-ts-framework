import { IBaseComponent } from '@core/component/base-component.interface';


/**
 * @title IRouterOptions
 * @description Describes options object during router initialization
 */
export interface IRouterOptions {
	rootElement: HTMLElement
	routes: IRoute[]
}

/**
 * @title IRouter
 * @description Describes router
 */
export interface IRouter {
	/**
	 * @title Method [ init ]
	 * @description Inits router and executes a list of actions during render
	 */
	init: () => void
}

export interface IRoute {
	path: string
	component: new () => IBaseComponent
}