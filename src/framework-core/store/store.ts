import { IBaseComponent } from "@core/component/base-component.abstract.interface"
import { IStore, IStoreState } from "./store.interface"

export class Store<T extends IStoreState> implements IStore {
    /* Components list that will be observers and react to store changes */
    #observers: IBaseComponent[] = []

    /* Store state that each store instance will have. Custom state must be extended by base StoreState*/
    #state: T

    constructor(state: T) {
        this.#state = new Proxy(state, {
            get(target, prop: string) {
                return target[prop]
            },

            set: (target, prop: string, value: any) => {

                target[prop] = value

                this.#notify()

                return true
            }
        })
    }

    addObserver(component: IBaseComponent): void {
        this.#observers.push(component)
    }

    /**
     * @title Method [ #notify ]
     * @description Triggers method update in all observers then state changes
     */
    #notify(): void {
        this.#observers.forEach(observer => observer.update ? observer.update() : null)
    }

    get state() {
        return this.#state
    }
}