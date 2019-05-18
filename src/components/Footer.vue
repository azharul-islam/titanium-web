<template>
    <div class="product-section">
        <p>All Rights Reserved 2019</p>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .product-section {
        display: grid;
        justify-items: center;
        align-items: center;
        background: transparent;
        font-family: 'product_sansregular', sans-serif;
    }

    h1 {
        font-family: Futura, serif;
        padding: 10px 22px 5px;
        text-align: left;

    }

    img {
        max-width: 350px;
    }


</style>
