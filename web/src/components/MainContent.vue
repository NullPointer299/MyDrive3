<template lang="pug">
    .wrapper
        .content-top-bar
            .content-top-bar-item
                b-button-group
                    b-button(squared variant="light" size="sm" )
                        b-icon-cloud-download(scale="1.1")
                        span.ml-2 Download
                    b-dropdown(variant="light" class="d-flex" size="sm" )
                        template(v-slot:button-content)
                            b-icon-cloud-upload(scale="1.1")
                            span.ml-2 Upload
                        b-dropdown-item(href="#" v-b-modal.modal-upload-file) File
                        b-modal#modal-upload-file(title="Upload File" @ok="" @cancel="cancel" )
                            b-form-file(v-model="files" placeholder="Choose a file or drop it here..." multiple).oh
                            ul.selected-files
                                h2 {{files.length}} Files Selected...
                                li(v-for="file in files") {{file.name}}

                        b-dropdown-item(href="#" v-b-modal.modal-upload-folder) Folder
                        b-modal#modal-upload-folder(title="upload Folder")
                            b-form-file(v-model="directory" placeholder="Choose a folder or drop it here..." directory)
                            h2 Selected Folder...
                            div {{getDirectoryName}}
                    b-button(squared variant="light" size="sm")
                        b-icon-trash(scale="1.1")
                        span.ml-2 Remove
</template>

<script>
    export default {
        name: "MainContent",
        data: function () {
            return {
                files: [],
                directory: null
            }
        },
        computed: {
            getDirectoryName() {
                return this.directory === null ? 'Not Selected' : this.directory.name
            }
        },
        methods: {
            cancel(){
                this.files = []
            },
            upload(){
                this.$store.dispatch('uploadFiles',this.files)
            }
        }
    }
</script>

<style scoped lang="scss">
    .oh {
        overflow: hidden;
    }

    .selected-files {
        padding-left: 0;

        li {
            margin-left: 30px;
        }
    }

    .wrapper {
        .content-top-bar {
            display: inline-block;
            width: 100%;
            border-bottom: 1px solid lightgray;

            .content-top-bar-item {
                height: 100%;
                white-space: nowrap;

                span {
                    display: inline-block;
                    font-size: 15px;
                    font-weight: bold;
                }

            }
        }
    }
</style>