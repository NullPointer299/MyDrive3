import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fileTree: {
      name: "My Tree",
      fileId: 1,
      children: [
        {name: "hello",
         fileId:2},
        {name: "wat",
         fileId: 3},
        {
          name: "child folder",
          fileId: 4,
          children: [
            {
              name: "child folder",
              fileId: 6,
              children: [{name: "hello"}, {name: "wat"}]
            },
            {name: "hello",
             fileId:7},
            {name: "wat",
            fileId: 8},
            {
              name: "child folder",
              fileId: 9,
              children: [{name: "hello"}, {name: "wat"}]
            }
          ]
        }
      ]
    }
  },
  getters:{
    getFileTree(state){
      return state.fileTree
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
