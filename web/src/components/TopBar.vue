<template lang="pug">
    #top-bar
        div#hamburger.d-flex.justify-content-center(v-b-toggle.side-nav)
            span.hamburger-item.align-self-center
        b-sidebar#side-nav(title="MyDrive" shadow bg-variant="light" text-variant="dark" width="200px" header-class="header" )
            b-nav(vertical align="center")
                b-nav-item(v-for="(page,i) in pages" :active="currentPage === i" @click="clicked(i)" link-classes="links" :key="page.url" :to="page.url") {{page.name}}
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
                console.log(page)
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

    div#top-bar {
        width: 100vw;
        height: 40px;
        background-color: $main-color;
        #hamburger {
            background-color: $main-color;
            height: 40px;
            width: 40px;
            outline: none;
            &:active{
                background-color: green;
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

        #side-nav {
            height: 100vh;

            .active {
                background-color: $main-color !important;
                color: white !important;
            }

            .links {
                text-decoration: none;
                color: $main-color;
                font-weight: bold;

                &:hover {
                    background-color: gainsboro;
                }
            }
        }
    }
</style>