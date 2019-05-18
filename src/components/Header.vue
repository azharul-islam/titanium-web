<template>
    <div class="header-container">
        <img id="header-image" src="../assets/fireworks.png" alt="">
        <div id="header-text-main"><span class="brand-highlight on-counter">{{bulbStatFormatted}}</span><br>
            switched on
        </div>
        <img class="icon-header-sub" src="../assets/lightning.png"/>
        <div class="header-text-sub" style="grid-column: 3/-1;">
            <animated-number :value="electricitySaved"
                             :formatValue="formatToPrice"
                             :duration="600"></animated-number>
            kWh electricity saved
        </div>
        <img class="icon-header-sub" src="../assets/clock.png"/>
        <div class="header-text-sub" style="grid-column: 3/-1;">
            <animated-number :value="bulbLife"
                             :formatValue="formatToPrice"
                             :duration="600"></animated-number>
            more hours of light
        </div>
        <div class="header-text-sub linkified" style="z-index: 1">Learn More →</div>


        <div style="grid-column: 2/-1; display: grid; grid-template-columns: 70px 55px auto; grid-gap: 10px; margin: 30px 0 40px; position: relative;">

            <div class="circle"></div>

            <img v-show="!isBulbOn" class="bulb-image" src="../assets/bulb-off.png"
                 style="max-height: 117px; margin: 0 0 0; grid-row: span 2; z-index: 1"/>
            <img v-show="isBulbOn" class="bulb-image" src="../assets/bulb-on.png"
                 style="max-height: 117px; margin: 0 0 0; grid-row: span 2; z-index: 1"/>


            <img src="../assets/logo-black.png" style="margin: 0 0 0; max-width:150px; align-self: end; z-index: 1"/>
            <label class="switch" style="grid-column: 2; padding: 0 0; z-index: 1">
                <input type="checkbox" v-model="isBulbOn">
                <span class="slider round"></span>
            </label>
            <div class="header-text-sub" style="grid-column: 3; padding: 0 0; z-index: 1">Switch on
                <vue-typer erase-style='clear'
                           :text='["#bright","#durable","#affordable"]'></vue-typer>.

            </div>
        </div>


    </div>

</template>

<script>
    import {db} from '../main.js'
    import firebase from 'firebase'
    import {VueTyper} from 'vue-typer'
    import AnimatedNumber from "animated-number-vue";

    export default {
        name: 'Header',
        props: {},
        data: function () {
            return {
                bulbStat: 60786,
                isBulbOn: false
            }
        },
        computed: {
            bulbStatFormatted: function () {
                return this.bulbStat.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            },
            electricitySaved: function () {
                return (137.5 * this.bulbStat)
            },
            bulbLife: function () {
                return (150000 * this.bulbStat)
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
        components: {
            VueTyper, AnimatedNumber
        },
        created: function () {
            db.collection("web-header").doc("bulbs")
                .onSnapshot((doc) => {
                    this.bulbStat = doc.data().bulbStat
                });
        },

        methods: {
            formatToPrice(value) {
                return `${value.toFixed(0)}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .circle {
        position: absolute;
        top: -15px;
        left: -70px;
        width: 150px;
        height: 150px;
        background: #f2f2f2;
        border-radius: 50%
    }



    .header-container {
        padding: 70px 0 0 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        background-repeat: no-repeat;
        background-position: left bottom;
        user-select: none;
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


    .icon-header-sub {
        grid-column: 2/3;
        max-height: 24px;
        justify-self: center;
        align-self: center;
    }

    .linkified {
        grid-column: 3/span 4;
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
        box-shadow: 0 10px 20px rgba(7, 177, 44, 0.16);

    }

    input:focus + .slider {

    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        box-shadow: 0 10px 20px rgba(7, 177, 44, 0.16);

    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }


</style>
