import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

    let qiniu = "http://qckhjb8gg.bkt.clouddn.com";

const store = new Vuex.Store({
    state: {
        routes: [],
        listImg:{
            php: qiniu+"/PHP.png",
            linux: qiniu+"/Linux.png",
            java: qiniu+"/Java.png",
            default: qiniu+"/tou.png"
        }
    },
    mutations: {

    },
    actions: {

    }
})

export default store;