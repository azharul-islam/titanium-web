<template>
    <div class="footer-section">
        <h2>Talk to us</h2>
        <input class="message-box" type="text" placeholder="Send us a message">
        <p>We'd love to hear from you.</p>
        <div class="icons-container">
            <a href="https://www.instagram.com/qqq/"><img src="../assets/footer/instagram_icon.svg"
                                                          alt="instagram"/></a>
            <a href="https://www.facebook.com/Ghaafri"><img src="../assets/footer/facebook_icon.svg"/></a>
            <a href="tel:+97431300080"><img src="../assets/footer/call_icon.svg"/></a>
        </div>
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
    .footer-section {
        background-color: #2c3e50;
        background-image: url("../assets/bangladesh.svg");
        background-size: 200px;
        background-origin: content-box;
        background-position: right top;
        background-repeat: no-repeat;
        color: white;
        display: grid;
        justify-items: left;
        padding: 12px 12px 12px 22px;
        text-align: left;
        font-family: 'product_sansregular', sans-serif;
    }

    h2 {
        font-family: Futura, serif;
        text-align: left;
        padding: 0px 0px 0px 0px;
    }

    img {
        max-width: 350px;
    }

    .message-box {
        font-family: 'product_sansregular', sans-serif;
        padding: 10px;
        border-radius: 10px;
        font-size: 14px;
        border: 1px solid rgba(255, 255, 255);
        background-color: transparent;
        color: white;
        height: 20px;
        width: 200px;
        margin: 0px 0px 0px 0px;

    }

    .message-box:focus {
        outline: none;
        border: 1px solid rgba(255, 255, 255, 0.5);
        transition: all 200ms;
    }

    .icons-container {
        padding: 16px 0 0 0px;
    }


    .icons-container img {
        width: 35px;
        cursor: pointer;
        background-color: white;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        margin: 0px 20px 0px 0px;

    }

    .icons-container img:hover {

        background-color: white;
        border: 1px solid white;
        opacity: 0.5;
        transition: all 200ms;
        border: 1px solid rgb(255, 255, 255);

    }
</style>
