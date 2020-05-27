<template lang="pug">
    div.content
        vue-resizable(
            :active="handlers"
            :fit-parent="fit"
            :min-width="minW"
            :width="width"
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
                fileTree:this.$store.getters.getFileTree
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
        }
    }

</script>
<style lang="scss" scoped>
    .content {
        height: calc(100vh - 50px);

        .resize-box {
            height: calc(100vh - 50px);
            overflow: hidden;
            box-shadow: 1px 1px 5px gray;

            ul#tree-root{
                height: 100%;
                list-style: none;
                margin: 0;
                padding-left: 15px;
            }
        }
    }
</style>