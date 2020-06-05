<template lang="pug">
    div.content
        vue-resizable(
            :active="handlers"
            :fit-parent="fit"
            :min-width="minW"
            :width="width"
            :max-width="800"
            @mount="eHandler"
            @resize:move="eHandler"
            @resize:start="eHandler"
            @resize:end="eHandler"
            @drag:move="eHandler"
            @drag:start="eHandler"
            @drag:end="eHandler").resize-box
            ul#tree-root
                file-tree(:item="fileTree")
</template>

<script>
    import VueResizable from 'vue-resizable'
    import FileTree from "../components/FileTree";

    export default {
        name: "Home",
        data: function () {
            return {
                handlers: ["r"],
                width: 150,
                minW: 100,
                fit: true,
                event: "",
                fileTree: this.$store.getters.getFileTree
            }
        },
        components: {
            VueResizable,
            FileTree
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