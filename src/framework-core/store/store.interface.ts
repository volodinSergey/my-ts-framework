import { IBaseComponent } from "@core/component/base-component.abstract.interface"

/**
 * @title IStore
 * @description Describes each store instance
 */
export interface IStore {
    /**
     * @title method [ addObserver ]
     * @description Allows to add component as an observer to react to store changes
     * @param component Component that will be an observer 
    */
    addObserver: (component: IBaseComponent) => void
}

 /**
     * @title  IStoreState
     * @description Base store state that each store will have . By default, store state is empty object
    */
export interface IStoreState extends Record<string, any> { }