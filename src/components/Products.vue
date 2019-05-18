<template>
    <div class="product-section">
        <img src="../assets/box_air_frontview_transparent.png"/>
        <div class="button">Browse All →</div>
    </div>
</template>

<script>
    export default {
        name: 'Products',
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .product-section {
        display: grid;
        justify-items: center;
        align-items: center;
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

    .button {
        padding: 12px 22px 10px 22px;
        background-color: #42B152;
        color: white;
        border-radius: 30px;
        cursor: pointer;
        font-size: 16px;
        border: none;
        box-shadow: 0 10px 20px rgba(29, 178, 59, 0.25);
        -webkit-tap-highlight-color: transparent;
        font-family: 'product_sansbold', Arial, sans-serif;
    }


</style>
