<template>
    <div class="footer-section">
        <h2>Talk to us</h2>
        <div class="message-sender">
            <input class="message-box" type="text" placeholder="Send a message">
<!--           <img src="../assets/footer/send-message.svg"/>-->
        </div>

        <p>We'd love to hear from you. </p>
        <div class="icons-container">
            <a href="https://www.facebook.com/titaniumtechbd"><img src="../assets/footer/facebook_icon.svg"/></a>
            <a v-scroll-reveal.reset href="https://www.instagram.com/titaniumbd/"><img
                    src="../assets/footer/instagram_icon.svg"
                    alt="instagram"/></a>
            <a href="tel:+8801720946060"><img src="../assets/footer/call_icon.svg"/></a>
        </div>
        <p style="margin: 12px auto 0 auto; opacity: 0.7; font-size: 10px;">Copyright © {{currentYear}} Titanium
            Technologies Bangladesh Ltd. All rights reserved.</p>

    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {},
        computed: {
            currentYear: function () {
                return new Date().getFullYear();
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer-section {
        position: -webkit-sticky; /* Required for Safari */
        position: sticky;
        bottom: 0;
        z-index: 1;
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

    p {
        padding: 0px 0px 0px 10px;
    }

    .message-box {
        font-family: 'product_sansregular', sans-serif;
        padding: 10px;
        border-radius: 10px;
        font-size: 14px;
        border: 1px solid rgba(255, 255, 255, 0.75);
        background-color: transparent;
        color: white;
        height: 20px;
        width: 300px;
        margin: 0px 0px 0px 0px;

    }

    .message-box:focus {
        outline: none;
        border: 1px solid rgb(255, 255, 255);
        transition: all 200ms;
    }

    .icons-container {
        padding: 16px 0 0 0px;
    }


    .icons-container img {
        background-origin: content-box;
        width: 35px;
        cursor: pointer;
        background-color: white;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.21);
        margin: 0px 20px 0px 0px;
    }

    .message-sender img {
        background-origin: content-box;
        width: 35px;
        cursor: pointer;
        background-color: #2c3e50;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        margin: 0px 20px 0px 0px;
    }


</style>
