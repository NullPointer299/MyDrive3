<template lang="pug">
    #top-bar
        #hamburger.top-bar-items.d-flex.justify-content-center.mr-auto(v-b-toggle.side-nav)
            span.hamburger-item.align-self-center
        b-sidebar#side-nav(title="MyDrive" shadow bg-variant="light" text-variant="dark" width="200px" header-class="header" @click.esc="hide")
            b-nav(vertical align="center")
                b-nav-item(v-for="(page,i) in pages" :active="currentPage === i" @click="clicked(i)" link-classes="link" :key="page.url" :to="page.url") {{page.name}}
        .top-bar-items.d-flex.justify-content-center
            b-icon-gear.align-self-center(font-scale="1.2" variant="light")
        .top-bar-items.d-flex.justify-content-center
            b-avatar.align-self-center(size="40px" variant="light" src="https://placekitten.com/300/300")
</template>

<script>
    export default {
        name: 'topBar',
        data: function () {
            return {
                pages: [
                    {
                        name: 'Home',
                        url: '/'
                    },
                    {
                        name: 'Trash',
                        url: '/Trash'
                    },
                    {
                        name: 'Search',
                        url: '/Search'
                    }
                ],
                currentPage: 0
            }
        },
        components: {},
        computed: {},
        methods: {
            clicked(page) {
                this.currentPage = page
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/variables';

    * {
        user-select: none;
    }

    #top-bar {
        width: 100vw;
        height: 50px;
        background-color: $main-color;
        #hamburger {
            background-color: $main-color;
            outline: none;
            &:active{
                background-color: white;
            };

            span.hamburger-item {
                position: relative;
                background-color: $sub-color;
                width: $hamburger-item-width;
                height: $hamburger-item-height;

                &:before {
                    content: '';
                    position: absolute;
                    top: -6px;
                    width: $hamburger-item-width;
                    height: $hamburger-item-height;
                    background-color: $sub-color;
                }

                &:after {
                    content: '';
                    position: absolute;
                    top: 6px;
                    width: $hamburger-item-width;
                    height: $hamburger-item-height;
                    background-color: $sub-color;
                }
            }
        }

        .top-bar-items{
            width: 50px;
            height: 50px;
            cursor: pointer;
            &:hover{
                background-color: green !important;
            }
        }

        #side-nav {
            height: 100vh;

            .active {
                background-color: $main-color !important;
                color: white !important;
            }

            .link {
                text-decoration: none;
                color: $main-color;
                font-weight: bold;

                &:hover {
                    background-color: $hover-color;
                }
            }
        }
    }
</style>