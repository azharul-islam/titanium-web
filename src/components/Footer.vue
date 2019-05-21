<template>
    <div class="footer-section">
        <h2>Talk to us</h2>
        <div class="message-sender">
            <input class="message-box" type="text" placeholder="Send a message" v-model="message">
            <img src="../assets/footer/send-message.svg" @click="sendMessage"/>
        </div>

        <p>We'd love to hear from you. </p>
        <div class="icons-container">
            <a href="https://www.facebook.com/titaniumtechbd"><img src="../assets/footer/facebook-icon.svg"/></a>
            <a href="https://www.instagram.com/titaniumbd/"><img
                    src="../assets/footer/instagram-icon.svg"
                    alt="instagram"/></a>
            <a href="tel:+8801720946060"><img src="../assets/footer/call-icon.svg"/></a>
            <a href="mailto:info@titanium.com.bd"><img src="../assets/footer/email-icon.svg"/></a>
        </div>
        <p style="margin: 12px auto 0 auto; opacity: 0.7; font-size: 10px;">Copyright © {{currentYear}} Titanium
            Technologies Bangladesh Ltd. All rights reserved.</p>

    </div>
</template>

<script>
    import {db} from '../main.js'

    export default {
        name: 'Footer',
        props: {},
        data: function () {
            return {
                message: ""
            }
        },
        computed: {
            currentYear: function () {
                return new Date().getFullYear();
            }
        },
        methods: {
            sendMessage: function () {
                if (!this.message.equals("")) {
                    db.collection("messages").add({
                        message: this.message
                    })
                        .then(function (docRef) {
                            console.log("Document written with ID: ", docRef.id);
                        })
                        .catch(function (error) {
                            console.error("Error adding document: ", error);
                        });

                    this.message = "";
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    .footer-section {
        position: sticky;
        position: -webkit-sticky; /* Required for Safari */
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
        width: 100%;
        margin: 0px 0px 0px 0px;

    }

    .message-box:focus {
        outline: none;
    }

    .message-box::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
        opacity: 0.4; /* Firefox */
    }

    .icons-container {
        padding: 16px 0 0 0px;
    }


    .icons-container img {
        background-origin: content-box;
        width: 22px;
        cursor: pointer;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.75);
        margin: 0px 18px 0px 0px;
        padding: 6px;
    }

    .message-sender {
        display: grid;
        grid-template-columns: minmax(auto, 400px) 42px;
    }

    .message-sender img {
        width: 26px;
        padding: 7px;
        cursor: pointer;
        background-color: #2c3e50;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.75);
        margin: 0px 0px 0px -10px;
    }


</style>
