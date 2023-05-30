import { IStoreState } from "@core/store/store.interface"

export interface ICounterStore extends IStoreState {
    counter: number,

    increaseCounter(): void
}