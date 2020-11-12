import api from './../index'
import {setElement, removeElement,getElement} from '@/utils/Resolver'
import { bootcamp } from "@/services/";

const state=()=>({
    bootcamps:[]
})

const getters={
    all:state=>state.bootcamps,
    one:state=>(id)=>getElement(state.bootcamps,id),
}

const mutations={
    ADD_BOOTCAMP:(state,bootcamp)=>setElement(state.bootcamps,bootcamp),
    UPDATE_BOOTCAMP:(state,bootcamp)=>setElement(state.bootcamps,bootcamp),
    DELETE_BOOTCAMP:(state,bootcamp)=>removeElement(state.bootcamps,bootcamp),
    FILL_BOOTCAMP:(state,bootcamps)=>state.bootcamps=bootcamps
}

const actions={
    addBootcamp:async (context, payload)=>{
        let res=bootcamp.create(payload)
        context.commit("ADD_BOOTCAMP",res.data)
    },

    updateBootcamp:async (context, payload)=>{
        var res;
        if(context.gettters.one(payload.id))
        {
            res=await api.put(`bootcamps/${payload.id}`)
            context.commit("UPDATE_BOOTCAMP",res.data)
        }
        return null
    },
    deleteBootcamp:async (context, payload)=>{
        if(context.gettters.one(payload.id))
        {
            let res;
            res=await api.delete(`bootcamps/${payload.id}`)  
            console.log(res.data)
            context.commit("DELETE_BOOTCAMP",payload)
        }
        return null
    },
    getBootcamps:async (context, params)=>{
        let res=await api.get(`bootcamps/${params}`)
        context.commit("FILL_BOOTCAMP",res.data)
    },
    uploadBootcampPicture:async (context, payload)=>{
        if(context.gettters.one(payload.id))
        {
            let res=await api.delete(`bootcamps/${payload.id}/photo`)
            context.commit("UPDATE_BOOTCAMP",res.data)
        }
    },
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
};