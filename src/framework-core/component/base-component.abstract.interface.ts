export type TypeRenderOptions = Record<string, any>

/**
 * @title Base component
 * @description Describes base component behavior.
 */
export class IBaseComponent {
	/**
 * @title Method render
 * @description Renders component. Each component has method render with its own implementation
 * @returns Rendered component as HTMLElement
 */
	render: () => HTMLElement
}

export type TProps = Record<string, any>
