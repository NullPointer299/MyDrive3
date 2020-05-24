<template lang="pug">
    #app
        .d-flex.flex-row
            TopBar.d-flex.mb-3
        router-view
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        div#test{
            width: 200px;
            height: 200px;
            background-color: black;
        }
    }
</style>

<script>
    import TopBar from "@/components/TopBar";

    export default {
        name: 'app',
        components: {
            TopBar
        }
    }

</script>
