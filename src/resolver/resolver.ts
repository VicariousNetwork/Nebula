import { Module } from 'hl-distribution-types-sir'

export interface Resolver {

    getModule(): Promise<Module>

}
