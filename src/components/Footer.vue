<template>
    <div id="footer" v-scroll="handleScrollFooter" class="footer-section" v-bind:class="{ 'not-sticky': isNotSticky }">
        <h2>Get in touch</h2>
        <div class="message-sender">
            <input class="message-box" type="text" placeholder="Send a message" v-model="message">
            <img src="../assets/footer/send-message.svg" @click="sendMessage"/>
        </div>

        <p>We'd love to hear from you.</p>
        <div class="icons-container">
            <a href="https://www.facebook.com/titaniumtechbd"
               v-bind:class="{ 'not-visible': isSocialNotVisible }"><img
                    src="../assets/footer/facebook-icon.svg"/></a>
            <a href="https://www.instagram.com/titaniumbd/"
               v-bind:class="{ 'not-visible': isSocialNotVisible }"><img
                    src="../assets/footer/instagram-icon.svg"
                    alt="instagram"/></a>
            <a href="tel:+8801720946060" v-bind:class="{ 'not-visible': isSocialNotVisible }"><img
                    src="../assets/footer/call-icon.svg"/></a>
            <a href="mailto:info@titanium.com.bd"
               v-bind:class="{ 'not-visible': isSocialNotVisible }"><img
                    src="../assets/footer/email-icon.svg"/></a>
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
                message: "",
                isNotSticky: false,
                isSocialNotVisible: true,
                debug: ""
            }
        },
        computed: {
            currentYear: function () {
                return new Date().getFullYear();
            }
        },
        methods: {
            sendMessage: function () {
                if (this.message !== "") {
                    db.collection("messages").add({
                        message: this.message
                    });
                    this.message = "";
                }
            },
            handleScrollFooter: function (evt, el) {
                if (document.body.scrollHeight -window.innerHeight - window.pageYOffset < el.scrollHeight) {
                    this.isNotSticky = true;
                } else {
                    this.isNotSticky = false;
                }

                if ((document.documentElement.scrollHeight - document.documentElement.clientHeight) - window.pageYOffset < 165) {
                    if (this.isSocialNotVisible === true)
                        this.isSocialNotVisible = false;
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    .footer-section {
        visibility: hidden;
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
        grid-template-columns: minmax(1fr, 1000px);
        margin: auto;
        justify-items: left;
        padding: 12px 12px 12px 22px;
        text-align: left;
        font-family: 'product_sansregular', sans-serif;
    }

    .not-sticky {
        visibility: visible;
    }

    h2 {
        font-family: Futura,Trebuchet MS,Arial,sans-serif;
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

        a {
            transition: 1s opacity cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        a:nth-child(2) {
            transition-delay: 350ms;
        }

        a:nth-child(3) {
            transition-delay: 500ms;
        }

        a:nth-child(4) {
            transition-delay: 800ms;
        }
    }

    .not-visible {
        opacity: 0;
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
