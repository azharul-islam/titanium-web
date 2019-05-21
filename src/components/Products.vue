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
        position:relative;
        background-color: white;
        display: grid;
        justify-items: center;
        align-items: center;
        font-family: 'product_sansregular', sans-serif;
        padding: 12px 12px 22px;
        z-index: 10;
    }

    h1 {
        font-family: Futura,Trebuchet MS,Arial,sans-serif;
        padding: 10px 22px 5px;
        text-align: left;

    }

    img {
        max-width: 360px;
    }

    .button {
        padding: 12px 22px 10px 22px;
        background-color: #42B152;
        color: white;
        border-radius: 30px;
        cursor: pointer;
        font-size: 16px;
        border: none;
        box-shadow: 0 10px 20px -5px rgba(66, 177, 82, 0.5);
        -webkit-tap-highlight-color: transparent;
        font-family: 'product_sansbold', Arial, sans-serif;
    }


</style>
