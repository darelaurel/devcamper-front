const state = () => ({
    loading: false
  });
  
  const getters = {
    loading: state => state.loading
  };
  
  const mutations = {
    SETLOADING: (state, loading) => {
      state.loading = loading;
    }
  };
  
  const actions = {
    setLoadingState: async ({ commit }, loadingState) => {
      commit("SETLOADING", loadingState);
    }
  };
  export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
  };
  