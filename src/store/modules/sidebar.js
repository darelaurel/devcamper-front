export default {
    namespaced:true,
    state: {
        sideBarOpen: false
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    },
    mutations: {
        TOGGLE (state) {
            
            state.sideBarOpen = !state.sideBarOpen
            console.log(state.sideBarOpen)
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('TOGGLE')
        }
    }
}
