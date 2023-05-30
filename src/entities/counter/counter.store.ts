import { Store } from "@core/store/store"

import { ICounterStore } from "./counter.store.interface"

export const counterStore = new Store<ICounterStore>({
    counter: 0,

    increaseCounter(): void { 
        this.counter += 1
    }
})

// !TODO : need to create separate actions
