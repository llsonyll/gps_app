import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex';

// My custom modules
import exampleModule from './module-template';
import { ExampleStateInterface } from './module-template/state';


export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: ExampleStateInterface
}

// define injection key
export const key: InjectionKey<Store<StateInterface>> = Symbol()

export const store = createStore<StateInterface>({
  modules: {
    example: exampleModule
  }
})