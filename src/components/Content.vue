<template>
    <div>
        <img src="../assets/box_air_frontview_transparent.png" alt="">
    </div>
</template>

<script>
    export default {
        name: 'Content',
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    @media (min-width: 800px) {
        img {
            max-width: 800px;
        }
    }

    @media (max-width: 800px) {
        img {
            max-width: 100%;
        }
    }
</style>
