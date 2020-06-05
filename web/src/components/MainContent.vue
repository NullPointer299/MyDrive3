<template lang="pug">
    .wrapper
        .d-inline-block.border-bottom.w-100
            .text-nowrap.content-top-bar-item.h-100
                b-button-group
                    b-button(squared variant="light" size="sm" )
                        b-icon-cloud-download(scale="1.1")
                        span.font-weight-bold.ml-2.font-15px Download
                    b-dropdown(variant="light" class="d-flex" size="sm" )
                        template(v-slot:button-content)
                            b-icon-cloud-upload(scale="1.1")
                            span.font-weight-bold.ml-2.font-15px Upload
                        b-dropdown-item(href="#" v-b-modal.modal-upload-file) File
                        b-modal#modal-upload-file(title="Upload File" @ok="" @cancel="closeFileModal" @close="closeFileModal" )
                            b-form-file.overflow-hidden(v-model="uploadFiles" placeholder="Choose a file or drop it here..." multiple)
                            ul.pl-0
                                h2 {{uploadFiles.length}} Files Selected...
                                li.ml-4(v-for="file in uploadFiles") {{file.name}}

                        b-dropdown-item(href="#" v-b-modal.modal-upload-folder) Folder
                        b-modal#modal-upload-folder(title="upload Folder" @ok="" @cancel="closeDirectoryModal" @close="closeDirectoryModal" )
                            b-form-file(v-model="uploadDirectory" placeholder="Choose a folder or drop it here..." directory)
                            h2 Selected Folder...
                            div {{getDirectoryName}}
                    b-button(squared variant="light" size="sm")
                        b-icon-trash(scale="1.1")
                        span.font-weight-bold.ml-2.font-15px Remove
        b-breadcrumb.px-2.py-1.font-weight-bold.no-radius
            b-breadcrumb-item.active(v-for="(item,index) in getBreadcrumb" :key="index" @click="moveDirectoryOnBreadcrumb(item)" :active="item.active" ) {{item.name}}
        .d-flex.flex-wrap
            file-view(v-for="item in getCurrentDirectory" :item="item" :key="item.fileId")
</template>

<script>
    import FileView from "./FileView";

    export default {
        name: "MainContent",
        data: function () {
            return {
                uploadFiles: [],
                uploadDirectory: null
            }
        },
        computed: {
            getDirectoryName() {
                return this.uploadDirectory === null ? 'Not Selected' : this.uploadDirectory.name
            },
            getCurrentDirectory(){
                return this.$store.getters.getCurrentDirectory
            },
            getBreadcrumb(){
                return this.$store.getters.getBreadcrumb
            }
        },
        methods: {
            upload(){
                this.$store.dispatch('uploadFiles',this.files)
            },
            moveDirectoryOnBreadcrumb(item){
                this.$store.dispatch('moveDirectoryOnBreadcrumb',item)
            },
            closeFileModal(){
                this.uploadFiles = []
            },
            closeDirectoryModal(){
                this.uploadDirectory = null
            }
        },
        components: {
            FileView
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/global.scss";
    .font-15px{
        font-size: 15px;
    }
</style>