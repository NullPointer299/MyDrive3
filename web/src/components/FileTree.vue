<template lang="pug">
    li
        div.text-nowrap.d-inline-block(@click.prevent="toggle" :class="{'font-weight-bold':isDirectory}")
            font-awesome-icon(v-if="isDirectory" v-show="isOpen" icon="angle-up")
            font-awesome-icon(v-if="isDirectory" v-show="!isOpen" icon="angle-down")
            span.ml-1.px-1 {{item.name}}
        ul.pl-2.ml-1.border-left.list-unstyled(v-if="isDirectory" v-show="isOpen")
            file-tree(v-for="(child,index) in item.children" :item="child" :key="index")
</template>

<script>
    export default {
        name: "FileTree",
        props:[
            'item'
        ],
        data: function(){
          return{
              isOpen: false
          }
        },
        computed:{
            isDirectory() {
                return this.item.children && this.item.children.length
            }
        },
        methods:{
            toggle:function () {
                this.isOpen = !this.isOpen
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    li{
        div{
            cursor: pointer;
            span{
                &:hover{
                    background-color: $hover-color;
                }
            }
        }
    }
</style>