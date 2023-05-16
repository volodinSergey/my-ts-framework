/**
 * @title IApp
 * @description Describes app
 */
export interface IApp {
	/**
	 * @title Method [ run ]
	 * @description Runs application and executes all the actions inside (Init router, settings etc....)
	 */
	run(): void
}

/**
 * @title IAppOptions
 * @description Describes options object during app initialization
 */
export interface IAppOptions {
	rootElement: string
}
