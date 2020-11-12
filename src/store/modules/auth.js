import { auth } from "@/services/";

const state=()=>({
    current:{},
    token:localStorage.getItem('dc-token') || ''
})

const getters={
    currentUser:state=>state.current,
    token:state=>state.token
}
const mutations={
    SET_CURRENT_USER:(state,user)=>{
        state.current=user
    }
}

const actions={
    login:async (context,payload)=>{
        //context.dispatch("loading/setLoadingState", true, { root: true });
        return new Promise((resolve,reject)=>{
            auth.login(payload).then(response=>{
                //context.dispatch("loading/setLoadingState", false, { root: true });
                resolve(), 
                context.commit("SET_CURRENT_USER",response.data)
            }).catch(error=>reject(error))
        })
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
};