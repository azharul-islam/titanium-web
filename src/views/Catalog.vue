<template>
    <div class="about container">
        <div class="product-grid-container">
            <div class="product" v-bind:key="product.model" v-for="product in products">

                <img class="product-image" :src="product.imageURL" alt="Product Image">

                <div class="product-details">
                    <h2 class="product-title">{{product.name}}</h2>
                    <span v-if="product.frequency" class="product-spec">Frequency: {{product.frequency}}<br></span>
                    <span v-if="product.model" class="product-spec">Model: {{product.model}}<br></span>
                    <span v-if="product.voltage" class="product-spec">Voltage: {{product.voltage}}<br></span>
                    <span v-if="product.colorTemp" class="product-spec">Color Temp.: {{product.colorTemp}}<br></span>
                    <span v-if="product.lumens" class="product-spec">Lumens: {{product.lumens}}<br></span>
                    <span v-if="product.lampSize" class="product-spec">Lamp Size: {{product.lampSize}}<br></span>
                    <span v-if="product.lampBase" class="product-spec">Base: {{product.lampBase}}<br></span>
                    <span v-if="product.life" class="product-spec">Life: {{product.life}}<br></span>
                    <span v-if="product.warranty" class="product-spec">Warranty: {{product.warranty}}<br></span>
                    <span v-if="product.stabilizerPhase" class="product-spec">{{product.stabilizerPhase}}<br></span>
                    <span v-if="product.stabilizerType" class="product-spec">{{product.stabilizerType}}<br></span>
                    <span v-if="product.application" class="product-spec">Application: {{product.application}}<br></span>
<!--                    <span v-if="product.stabilizerFeatures" class="product-spec">{{product.stabilizerFeatures}}<br></span>-->
<!--                    <span v-if="product.stabilizerMainSpecs" class="product-spec">{{product.stabilizerMainSpecs}}<br></span>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'catalog',
        data: function () {
            return {
                products: [
                    {
                        name: 'A55 5w Classic',
                        imageURL: require('../assets/bulbs/a55-5w.jpg'),
                        model: 'A55 5w Classic',
                        power: '5 watt',
                        frequency: '50/60Hz',
                        voltage: '85-265V AC',
                        colorTemp: '6000-6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '55 X 106 mm',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'A55 7w Classic',
                        imageURL: require('../assets/bulbs/a55-7w.jpg'),
                        model: 'A55 7w Classic',
                        power: '7 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 85-265 V',
                        colorTemp: '6000-6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '55 X 106 mm',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'A60 9w Bulb',
                        imageURL: require('../assets/bulbs/a60-9w.jpg'),
                        model: 'A60 9w Bulb',
                        power: '9 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000-6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '60 X 113 mm',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'A65 12w Classic',
                        imageURL: require('../assets/bulbs/a65-12w.jpg'),
                        model: 'A65 12w Blue',
                        power: '12 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000-6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '65 X 123 mm',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'A65 12w Blue',
                        imageURL: require('../assets/bulbs/a65blue12W.jpg'),
                        model: 'A65 12w Blue',
                        power: '12 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000K - 6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '65 X 123 mm',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'A65 12w Green',
                        imageURL: require('../assets/bulbs/a65green12W.jpg'),
                        model: 'A65 12w Green',
                        power: '12 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000K - 6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '65 X 123 mm',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'A70 15w Classic',
                        imageURL: require('../assets/bulbs/a7015W.jpg'),
                        model: 'A70 15w Classic',
                        power: '15 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000-6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '70 X 134 mm',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'A80 18w Classic',
                        imageURL: require('../assets/bulbs/a8018w.jpg'),
                        model: 'A80 18w Classic',
                        power: '18 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000-6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '80 X 154 mm',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'C37 3-5w Candle',
                        imageURL: require('../assets/bulbs/c373to5W.jpg'),
                        model: 'C37 3-5w Candle',
                        power: '3-5 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000-6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '37 X 100 mm',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '1 years',
                        price: 260.00
                    },
                    {
                        name: 'T100 30w Bulb',
                        imageURL: require('../assets/bulbs/t30W.jpg'),
                        model: 'T100 30w Bulb',
                        power: '30 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000-6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '100 X 180 mm',
                        lampBase: 'B22/E27',
                        life: '20,000 Hours',
                        warranty: '1 years',
                        price: 260.00
                    },
                    {
                        name: 'T115 40w Bulb',
                        imageURL: require('../assets/bulbs/t40W.jpg'),
                        model: 'T115 40w Bulb',
                        power: '40 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000-6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '115 X 190 mm',
                        lampBase: 'B22/E27',
                        life: '20,000 Hours',
                        warranty: '1 years',
                        price: 260.00
                    },
                    {
                        name: 'T125 50w Bulb',
                        imageURL: require('../assets/bulbs/t50W.jpg'),
                        model: 'T125 50w Bulb',
                        power: '50 watt',
                        frequency: '50/60Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000-6500K',
                        lumens: '> 100/W',
                        cri: '>80',
                        lampSize: '125 X 215 mm',
                        lampBase: 'B22/E27',
                        life: '20,000 Hours',
                        warranty: '1 years',
                        price: 260.00
                    },
                    {
                        name: 'AC Automatic Voltage Regulator',
                        imageURL: require('../assets/voltage-stabilizers/PC-SVC-3kVA.jpg'),
                        model: 'PC-SVC-3kVA',
                        stabilizerPhase: 'Single Phase / 3000VA',
                        stabilizerType: 'Servo Type',
                        application: 'Home & Office, especially for Air Conditioner',
                        stabilizerFeatures: "Over Voltage, Over Load, Over Heat, Short Circuit, Surge Protection\nWide Input Voltage Range\nIntelligent Auto Cooling Fan\nLED Digital Display",
                        stabilizerMainSpecs: "Input Voltage: AC 100-260V/50Hz\nOutput Voltage: AC 220V+-3%/ 50Hz\nOutput Power: 3000VA",
                    },
                    {
                        name: 'AC Automatic Voltage Regulator',
                        imageURL: require('../assets/voltage-stabilizers/PC-SVC-5kVA.jpg'),
                        model: 'PC-SVC-5kVA',
                        stabilizerPhase: 'Single Phase / 5000VA',
                        stabilizerType: 'Servo Type',
                        application: 'Home & Office, especially for Air Conditioner',
                        stabilizerFeatures: "Over Voltage, Over Load, Over Heat, Short Circuit, Surge Protection\nWide Input Voltage Range\nIntelligent Auto Cooling Fan\nLED Digital Display",
                        stabilizerMainSpecs: "Input Voltage: AC 100-260V/50Hz\nOutput Voltage: AC 220V+-3%/ 50Hz\nOutput Power: 3000VA",
                    },
                    {
                        name: 'AC Automatic Voltage Regulator',
                        imageURL: require('../assets/voltage-stabilizers/PC-SVC-10kVA.jpg'),
                        model: 'PC-SVC-10kVA',
                        stabilizerPhase: 'Single Phase / 10KVA',
                        stabilizerType: 'Servo Type',
                        application: 'Home & Office, especially for Air Conditioner',
                        stabilizerFeatures: "Over Voltage, Over Load, Over Heat, Short Circuit, Surge Protection\nWide Input Voltage Range\nIntelligent Auto Cooling Fan\nLED Digital Display",
                        stabilizerMainSpecs: "Input Voltage: AC 100-260V/50Hz\nOutput Voltage: AC 220V+-3%/ 50Hz\nOutput Power: 3000VA",
                    },
                    {
                        name: 'AC Automatic Voltage Regulator',
                        imageURL: require('../assets/voltage-stabilizers/TMB95-10kVA.jpg'),
                        model: 'TMB95-10kVA',
                        stabilizerPhase: 'Single Phase / 10KVA',
                        stabilizerType: 'Relay Type',
                        application: 'Home & Office, especially for Air Conditioner',
                        stabilizerFeatures: "Over Voltage, Over Load, Over Heat, Short Circuit, Surge Protection\nWide Input Voltage Range\nIntelligent Auto Cooling Fan\nLED Digital Display",
                        stabilizerMainSpecs: "Input Voltage: AC 100-260V/50Hz\nOutput Voltage: AC 220V+-3%/ 50Hz\nOutput Power: 3000VA",
                    },
                    {
                        name: 'AC Automatic Voltage Regulator',
                        imageURL: require('../assets/voltage-stabilizers/TMB95-5000VA.jpg'),
                        model: 'TMB95-5kVA',
                        stabilizerPhase: 'Single Phase / 5000VA',
                        stabilizerType: 'Relay Type',
                        application: 'Home & Office, especially for Air Conditioner',
                        stabilizerFeatures: "Over Voltage, Over Load, Over Heat, Short Circuit, Surge Protection\nWide Input Voltage Range\nIntelligent Auto Cooling Fan\nLED Digital Display",
                        stabilizerMainSpecs: "Input Voltage: AC 100-260V/50Hz\nOutput Voltage: AC 220V+-3%/ 50Hz\nOutput Power: 3000VA",
                    },
                    {
                        name: 'AC Automatic Voltage Regulator',
                        imageURL: require('../assets/voltage-stabilizers/TMB95-3000VA.jpg'),
                        model: 'TMB95-3kVA',
                        stabilizerPhase: 'Single Phase / 3000VA',
                        stabilizerType: 'Relay Type',
                        application: 'Home & Office, especially for Air Conditioner',
                        stabilizerFeatures: "Over Voltage, Over Load, Over Heat, Short Circuit, Surge Protection\nWide Input Voltage Range\nIntelligent Auto Cooling Fan\nLED Digital Display",
                        stabilizerMainSpecs: "Input Voltage: AC 100-260V/50Hz\nOutput Voltage: AC 220V+-3%/ 50Hz\nOutput Power: 3000VA",
                    },
                    {
                        name: 'Motor Protector/Motor Starter',
                        imageURL: require('../assets/voltage-stabilizers/PUMPCTRL.jpg'),
                        model: 'MP-M3',
                        stabilizerPhase: 'Three Phase/Dol Start',
                        application: "Auto Start & protection for three phase pump motor",
                        stabilizerFeatures: "Over Voltage, Over Load, Over Heat, Short Circuit, Surge Protection\nWide Input Voltage Range\nIntelligent Auto Cooling Fan\nLED Digital Display",
                        stabilizerMainSpecs: "Input Voltage: AC 100-260V/50Hz\nOutput Voltage: AC 220V+-3%/ 50Hz\nOutput Power: 3000VA",
                    },

                ],
                message: ""
            }
        }

    }
</script>
<style lang="scss" scoped>
    .about {
        padding-top: 46px;
        background-color: #ededed;
    }

    .product-image {
        display: inline-block;
        height: 100%;
        max-width: 120px;
        margin-bottom: 16px;
        object-fit: contain;
    }

    .product-details {
        padding-left: 26px;
    }


    .product-grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: 1.5px;
    }

    .product-grid-container p {
        font-family: Arial;
    }

    .product {
        display: flex;
        height: 225px;
        grid-column: auto;
        padding: 16px 32px;
        background-color: rgb(255, 255, 255);
    }

    .product-title {
        font-weight: bold;
        text-align: left;
        font-size: 18px;


    }

    .product-spec {
        font-size: 15px;
        text-align: left;
        line-height: 20px;

    }
</style>
