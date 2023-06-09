import { IBaseComponent } from 'src/framework-core/component/base-component.abstract.interface'

export class Compiler {
	/* TAG PATTERN is used in custom tags | <component-card> for example */
	readonly #TAG_PATTERN: RegExp = /^component-/

	/**
	 * @title Method [ compile ]
	 * @description Main compiling process
	 * @param  htmlString Html string with classic tags and custom tags
	 * @param componentsList  Components list that wll be replaced instead of custom tags
	 * @return Ready-to-use compiled component
	 */
	compile(htmlString: string, componentsList: IBaseComponent[]): HTMLElement {
		const template = document.createElement('template')

		template.innerHTML = htmlString.trim()

		const element = template.content.firstChild as HTMLElement

		this.#replaceComponentTags(element, componentsList)

		return element
	}

	/**
	 * @title Method [ #replaceComponentTags ]
	 * @description Finds custom tags (<component-header> for example) and replaces them to real components from components list
	 * @param parentElement Parent component
	 * @param componentsList  ComponentsList that wll be replaced 
	 */
	#replaceComponentTags(parentElement: HTMLElement, componentsList: IBaseComponent[]) {
		const allElements = parentElement.getElementsByTagName('*') as HTMLCollectionOf<Element>

		Array.from(allElements).forEach((element) => {
			if (this.#TAG_PATTERN.test(element.tagName.toLowerCase())) {

				const pureName = this.#extractPureComponentName(element)

				const foundComponent = componentsList.find(component => component.constructor.name.toLowerCase() === pureName)

				if (foundComponent) {
					const componentContent = foundComponent.render()

					element.replaceWith(componentContent)
				}
			}
		})
	}

	/**
	 * @title Method [ #extractPureComponentName ]
	 * @description Allows to get pure component name from custom tag
	 * @example <component-header> => header | <component-user> => user
	 * @param element custom tag element | <component-header><component-header>
	 * @returns pure component name as string
	 */
	#extractPureComponentName(element: Element): string {
		return element.tagName
			.toLowerCase()
			.replace(this.#TAG_PATTERN, '')
			.replace(/-/g, '')
	}
}