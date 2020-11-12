import { ValidationObserver, ValidationProvider } from "vee-validate";
import MultiSelect from "vue-multiselect";
import Loader from './Loader.vue';

let components = {
  MultiSelect,
  Loader,
  ValidationObserver,
  ValidationProvider
};

const gComponent = {
  install(Vue) {
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  }
};

export default gComponent;