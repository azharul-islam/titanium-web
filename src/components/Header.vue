<template>
    <div class="header-container">
        <img id="header-image" src="../assets/fireworks.png" alt="">
        <div id="header-text-main"><span class="brand-highlight on-counter">{{bulbStat.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</span><br>
            switched on
        </div>
        <img class="icon-header-sub" src="../assets/lightning.png"/>
        <div class="header-text-sub" style="grid-column: 3/10;">{{electricitySaved}} kWh electricity saved</div>
        <img class="icon-header-sub" src="../assets/clock.png"/>
        <div class="header-text-sub" style="grid-column: 3/10;">{{bulbLife.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,
            '$1,')}} more hours of light
        </div>
        <div class="header-text-sub linkified">Learn More</div>

        <div style="grid-column: 2/-1; display: grid; grid-template-columns: 80px 60px auto; grid-gap: 10px; margin: 26px 0 0;">


            <img v-show="!isBulbOn" class="bulb-image" src="../assets/bulb-off.png"
                 style="max-width: 70px; margin: 0 0 0; grid-row: span 2"/>
            <img v-show="isBulbOn" class="bulb-image" src="../assets/bulb-on.png"
                 style="max-width: 70px; margin: 0 0 0; grid-row: span 2"/>


            <img src="../assets/logo-black.png" style="padding: 0 0; max-width:150px; align-self: end"/>
            <label class="switch" style="grid-column: 2; padding: 0 0;">
                <input type="checkbox" v-model="isBulbOn">
                <span class="slider round"></span>
            </label>
            <div class="header-text-sub" style="grid-column: 3; padding: 0 0;">Switch on <vue-typer erase-style='clear' :text='["#bright","#durable","#affordable"]'></vue-typer>.
            </div>
        </div>


    </div>

</template>

<script>
    import {db} from '../main.js'
    import firebase from 'firebase'

    export default {
        name: 'Header',
        props: {},
        data: function () {
            return {
                bulbStat: 60786,
                isBulbOn: false,
            }
        },
        computed: {

            electricitySaved: function () {
                return this.isBulbOn ? 1.4 : 1.2
            },
            bulbLife: function () {
                return this.isBulbOn ? 260000 : 250000
            },

        },
        watch: {
            // whenever question changes, this function will run
            isBulbOn: function (isBulbOnNew, isBulbOnOld) {
                if (isBulbOnNew == isBulbOnOld) {
                    return
                } else if (isBulbOnNew) {
                    db.collection("web-header").doc("bulbs").update({
                        bulbStat: firebase.firestore.FieldValue.increment(1)
                    });
                } else if (!isBulbOnNew) {
                    db.collection("web-header").doc("bulbs").update({
                        bulbStat: firebase.firestore.FieldValue.increment(-1)
                    });
                }

            }
        },
        created: function () {
            db.collection("web-header").doc("bulbs")
                .onSnapshot((doc) => {
                    this.bulbStat = doc.data().bulbStat
                });
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header-container {
        padding: 60px 0 0 0;
        display: grid;

        grid-template-columns: repeat(12, 1fr);
    }

    #header-text-main {
        grid-column: 2/-1;
        margin: -25px 0 10px;
        font-family: Futura, serif;
        font-weight: bold;
        font-size: 30px;
        text-align: start;
        float: left;
    }

    .brand-highlight {
        color: #42B152;
    }

    .on-counter {
        font-size: 35px;
    }

    #header-image {
        grid-column: span 9/ -1;
        justify-self: right;
        max-width: 100%;
        padding: 0 2vw 0 0;
    }

    .header-text-sub {
        text-align: left;
        font-family: 'product_sansregular', Arial, sans-serif;
        font-weight: bold;
        margin: 8px 4px;
    }

    @font-face {
        font-family: 'product_sansbold';
        src: url('../font/product_sans_bold-webfont.woff2') format('woff2'),
        url('../font/product_sans_bold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }



    @font-face {
        font-family: 'product_sansregular';
        src: url('../font/product_sans_regular-webfont.woff2') format('woff2'),
        url('../font/product_sans_regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }


    .icon-header-sub {
        grid-column: 2/3;
        max-height: 24px;
        justify-self: center;
        align-self: center;
    }

    .linkified {
        grid-column: 3/span 3;
        text-decoration: underline;
        cursor: pointer;
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        -webkit-tap-highlight-color: transparent;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .2s;
        transition: .2s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .2s;
        transition: .2s;
    }

    input:checked + .slider {
        background-color: #42B152;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #42B152;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    .vue-typer .custom.char.typed {
        color: #42B152;
    }

    .vue-typer .custom.caret {
        display: none;
    }

</style>
