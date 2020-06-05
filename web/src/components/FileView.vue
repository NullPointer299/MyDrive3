<template lang="pug">
    #file.d-flex.justify-content-center.flex-column.ml-1.pt-2(@contextmenu.prevent="context" @dblclick.prevent="dblclick")
        font-awesome-icon.align-self-center(:icon="item.children ? 'folder':'file'")
        .mt-2.px-1.font-weight-bold.text-center.ellipsis {{name}}
</template>

<script>
    export default {
        name: "FileView",
        props:['item'],
        data:function () {
            return{
                name:this.item.name
            }
        },
        methods:{
            context(){
                console.log("context")
            },
            dblclick(){
                if(this.item.children) {
                    this.$store.dispatch('downDirectory', this.item)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    #file{
        width: 110px;
        height: 100px;
        &:hover{
            background-color: $hover-color;
        }
        svg{
            width:60px;
            height: 60px;
        }
        .ellipsis{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
</style>