import { IBaseComponent } from "@core/component/base-component.abstract.interface"

export interface IStore {
    addObserver: (component: IBaseComponent) => void
}

export interface IStoreState extends Record<string, any> {}