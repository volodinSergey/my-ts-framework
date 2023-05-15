import { IAppOptions } from "./app.interface"

export class App {
    readonly #rootElement: HTMLElement

    constructor(options: IAppOptions) {
        this.#rootElement = document.querySelector(options.rootElement) as HTMLElement
    }

    run () {

    }
}