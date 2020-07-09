import Vue from 'vue'
import Vuex from 'vuex'
import {INIT, DOWN_DIRECTORY, MOVE_DIRECTORY_ON_BREADCRUMB} from "./mutation_types";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fileTree: null,
        currentDirectory: null,
        breadcrumb: []
    },
    getters: {
        getFileTree(state) {
            return state.fileTree
        },
        getCurrentDirectory(state) {
            return state.currentDirectory.children
        },
        getBreadcrumb(state) {
            return state.breadcrumb
        }
    },
    mutations: {
        [INIT](state, payload) {
            state.fileTree = payload
            state.currentDirectory = payload
            state.breadcrumb = [{
                name: payload.name,
                active:true
            }]
        },
        [DOWN_DIRECTORY](state, payload) {
            state.currentDirectory = payload
            state.breadcrumb.forEach(bread => bread.active = false)
            state.breadcrumb.push({name:payload.name,active:true})
        },
        [MOVE_DIRECTORY_ON_BREADCRUMB](state, payload) {
            let breadcrumb = []
            const index = state.breadcrumb.indexOf(payload)
            for (let i = 0; i <= index; i++) {
                breadcrumb.push({
                    name:state.breadcrumb[i].name,
                    active:false
                })
            }
            breadcrumb[breadcrumb.length - 1].active = true
            state.breadcrumb = breadcrumb

            if(index === 0) {
                state.currentDirectory = state.fileTree
            }else{
                let searching = state.fileTree
                for(let i=0;i<index;i++) {
                    searching = searching.children.filter(child => child.name === breadcrumb[i+1].name)
                }
                state.currentDirectory = searching[0]
            }
        }
    },
    actions: {
        [INIT](context) { //未完成・実際には通信が走る
            let tree = {
                name: "My Tree",
                fileId: 1,
                children: [
                    {
                        name: "hello",
                        fileId: 2
                    },
                    {
                        name: "wat",
                        fileId: 3
                    },
                    {
                        name: "child2 folder",
                        fileId: 4,
                        children: [
                            {
                                name: "child3 folder",
                                fileId: 6,
                                children: [{name: "hello"}, {name: "wat"}]
                            },
                            {
                                name: "hello",
                                fileId: 7
                            },
                            {
                                name: "wat",
                                fileId: 8
                            },
                            {
                                name: "child4 folder",
                                fileId: 9,
                                children: [{name: "hello"}, {name: "wat"}]
                            }
                        ]
                    },
                    {
                        name: "child6 Folder",
                        fileId: 20,
                        children: [
                            {
                                name: "hello",
                                fileId: 7
                            },
                            {
                                name: "wat",
                                fileId: 8
                            }
                        ]
                    }
                ]
            }
            context.commit('init', tree)
        },
        [DOWN_DIRECTORY](context, payload) {
            context.commit('downDirectory', payload)
        },
        [MOVE_DIRECTORY_ON_BREADCRUMB](context, payload) {
            context.commit('moveDirectoryOnBreadcrumb', payload);
        }
    },
    modules: {}
})
