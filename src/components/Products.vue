<template>
    <div class="about-section">
        <h1 style="grid-column: 1/-1" >From our labs to your home.</h1>
        <img  src="../assets/innovation.png"/>
        <p><span class="bold-ps">We focus on the technology. </span>Our bulbs have been re-engineered from scratch to
            make them more resistant to harsh voltages and provide better quality light as well as more light for less
            watts.
        </p>

        <p><span class="bold-ps">Heat management is important. </span>Carefully chosen materials have allowed us to
            design a bulb that dissipates heat effectively to maintain the high lumen output and durability that we
            promise.</p>
        <img src="../assets/chemistry.png" />

        <img src="../assets/test.png"/>
        <p><span class="bold-ps">Stress tested before shipping. </span>Our bulbs undergo thorough testing before they
            are shipped to you. This ensures the product you receive is of optimum quality. </p>
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
    .about-section {
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 130px auto 130px;
        font-family: 'product_sansregular', sans-serif;
    }

    h1 {
        font-family: Futura, serif;
        padding: 10px 22px 5px;
        text-align: left;

    }

    p {
        grid-column: span 2;
        font-size: 18px;
        text-align: left;
        padding: 16px;
    }

    img {
        max-width: 100px;
        padding: 12px;
    }

    .bold-ps {
        font-family: 'product_sansbold', sans-serif;
        font-weight: bold;
    }
</style>
