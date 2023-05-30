import { Store } from "@core/store/store"
import { IStoreState } from "@core/store/store.interface"

interface ICounterStore extends IStoreState {
    counter: number,

    increaseCounter(): void
}

export const counterStore = new Store({
    counter: 0,

    increaseCounter(): void {
        this.counter += 1
    }
} as ICounterStore)
