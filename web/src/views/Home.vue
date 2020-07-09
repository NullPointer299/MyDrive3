<template lang="pug">
    div.content.d-flex
        vue-resizable.h-100.resize-box.overflow-hidden(
            :active="handlers"
            :width="width"
            :max-width="800"
            @mount="eHandler"
            @resize:move="eHandler"
            @resize:start="eHandler"
            @resize:end="eHandler")
            ul#tree-root.h-100.pl-2.list-unstyled
                file-tree(:item="fileTree")
        main-content.flex-grow-1
</template>

<script>
    import VueResizable from 'vue-resizable'
    import FileTree from "../components/FileTree";
    import MainContent from "../components/MainContent";

    export default {
        name: "Home",
        data: function () {
            return {
                handlers: ["r"],
                width: 150,
                event: "",
                fileTree: this.$store.getters.getFileTree
            }
        },
        components: {
            VueResizable,
            FileTree,
            MainContent
        },
        methods: {
            eHandler(data) {
                this.width = data.width;
                this.event = data.eventName;
            }
        },
        beforeCreate() {
            this.$store.dispatch('init')
        }
    }
</script>
<style lang="scss" scoped>
    .content {
        height: calc(100vh - 50px); //ビューポートからTopBarの高さを引く
        .resize-box {
            border-right: 2px solid lightgray;
        }
    }
</style>