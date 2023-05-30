import { IBaseComponent } from "@core/component/base-component.abstract.interface"
import { IStore, IStoreState } from "./store.interface"

export class Store implements IStore {
    #observers: IBaseComponent[] = []
    #state: IStoreState = {}

    constructor(state: IStoreState) {
        this.#state = new Proxy(state, {
            get(target, prop: string) {
                return target[prop]
            },

            set: (target, prop: string, value: any) => {

                target[prop] = value

                this.#observers.forEach(observer => observer.update())
                
                return true
            }
        })
    }

    addObserver(component: IBaseComponent): void {
        this.#observers.push(component)
    }

    get state() {
        return this.#state
    }
}