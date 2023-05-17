import { IBaseComponent } from '@core/component/base-component.abstract.interface';


export class Compiler {
	readonly #TAG_PATTERN: RegExp = /^component-/

	compile(htmlString: string, componentsList: IBaseComponent[]): HTMLElement {
		const template = document.createElement('template')

		template.innerHTML = htmlString.trim()

		const element = template.content.firstChild as HTMLFormElement

		this.#replaceComponentTags(element, componentsList)

		return element
	}

	#replaceComponentTags(parentElement: HTMLElement, componentsList: IBaseComponent[]) {
		const allElements = parentElement.getElementsByTagName('*') as HTMLCollectionOf<Element>

		Array.from(allElements).forEach((element) => {
			if (this.#TAG_PATTERN.test(element.tagName.toLowerCase())) {
				const pureName = element.tagName.toLowerCase().replace(this.#TAG_PATTERN, '').replace(/-/g, '')
				console.log(pureName)

				const foundComponent = componentsList.find((component) => {
					return component.constructor.name.toLowerCase() === pureName
				})

				if (foundComponent) {
					const componentContent = foundComponent.render()
					element.replaceWith(componentContent)
				}

				console.log(foundComponent)
			}
		})
	}
}