import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'
import bootcamps from './modules/bootcamps'
import sidebar from './modules/sidebar'
import loading from './modules/loading'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        bootcamps,
        loading,
        sidebar
    }
});
