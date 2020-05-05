<template>
    <div class="about container">
        <div class="product-grid-container">
            <div class="product" v-bind:key="product.model" v-for="product in products">

                <img class="product-image" :src="product.imageURL" alt="Product Image">

                <div class="product-details">
                    <h2 class="product-title">{{product.name}}</h2>
                    <p class="product-spec">Frequency: {{product.frequency}}<br/>
                        Voltage: {{product.voltage}}<br/>
                        Color Temp.: {{product.colorTemp}}<br/>
                        Lumens: {{product.lumens}}<br/>
                        Lamp Size: {{product.lampSize}}<br/>
                        Base: {{product.lampBase}}<br/>
                        Life: {{product.life}}<br/>
                        Warranty: {{product.warranty}}</p>
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
                        imageURL: require('../assets/bulbs/a55-5w.png'),
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
                        imageURL: require('../assets/bulbs/a55-7w.png'),
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
                        imageURL: require('../assets/bulbs/a60-9w.png'),
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
                        imageURL: require('../assets/bulbs/a65-12w.png'),
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
                        imageURL: require('../assets/bulbs/a65blue12W.png'),
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
                        imageURL: require('../assets/bulbs/a65green12W.png'),
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
                        imageURL: require('../assets/bulbs/a7015W.png'),
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
                        imageURL: require('../assets/bulbs/a8018w.png'),
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
                        imageURL: require('../assets/bulbs/c373to5W.png'),
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
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'T100 30w Bulb',
                        imageURL: require('../assets/bulbs/t30W.png'),
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
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'T115 40w Bulb',
                        imageURL: require('../assets/bulbs/t40W.png'),
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
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'T125 50w Bulb',
                        imageURL: require('../assets/bulbs/t50W.png'),
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
                        warranty: '2 years',
                        price: 260.00
                    },

                ],
                message: ""
            }
        }

    }
</script>
<style lang="scss" scoped>
    .about {
        padding: 70px 24px 0;
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
        grid-gap: 10px;
    }

    .product-grid-container p {
        font-family: Arial;
    }

    .product {
        display: flex;
        height: 220px;
        border-radius: 5px;
        grid-column: auto;
        padding: 16px;
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
