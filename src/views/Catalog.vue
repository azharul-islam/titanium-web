<template>
    <div class="about container">
        <div class="product-grid-container">
            <div class="product" v-for="product in products">

                <img class="product-image" :src="product.imageURL" alt="Product Image">

                <div class="product-details">
                    <h2 class="product-title">{{product.name}}</h2>
                    <p class="product-spec">Frequency: {{product.frequency}}<br/>
                        Voltage: {{product.voltage}}<br/>
                        Color Temp.: {{product.colorTemp}}<br/>
                        Luminous Flux: {{product.luminousFlux}}<br/>
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
                        name: 'LED 7W Classic',
                        imageURL: require('@/assets/bulbs/A60 B22.png'),
                        model: 'A60 7W Classic',
                        power: '7 WATT',
                        frequency: '50 Hz',
                        voltage: 'AC 85-265 V',
                        colorTemp: '6000K - 6500K',
                        luminousFlux: '>700 LM',
                        cri: '>80',
                        lampSize: '60 X 108 mm',
                        driver: 'Non-isolated',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'LED 9W Classic',
                        imageURL: require('@/assets/bulbs/A60 B22.png'),
                        model: 'A60 9W Classic',
                        power: '9 WATT',
                        frequency: '50 Hz',
                        voltage: 'AC 85-265 V',
                        colorTemp: '6000K - 6500K',
                        luminousFlux: '>900 LM',
                        cri: '>80',
                        lampSize: '60 X 108 mm',
                        driver: 'Non-isolated',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'LED 12W Classic',
                        imageURL: require('@/assets/bulbs/A65 B22.png'),
                        model: 'A60 12W Classic',
                        power: '12 WATT',
                        frequency: '50 Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000K - 6500K',
                        luminousFlux: '>1200 LM',
                        cri: '>80',
                        lampSize: '60 X 123 mm',
                        driver: 'Non-isolated',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'LED 15W Classic',
                        imageURL: require('@/assets/bulbs/A70 B22.png'),
                        model: 'A70 15W Classic',
                        power: '15 WATT',
                        frequency: '50 Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000K - 6500K',
                        luminousFlux: '>1500 LM',
                        cri: '>80',
                        lampSize: '70 X 135 mm',
                        driver: 'Non-isolated',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'LED 18W Classic',
                        imageURL: require('@/assets/bulbs/A80 B22.png'),
                        model: 'A80 18W Classic',
                        power: '18 WATT',
                        frequency: '50 Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000K - 6500K',
                        luminousFlux: '>1900 LM',
                        cri: '>80',
                        lampSize: '80 X 147 mm',
                        driver: 'Non-isolated',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'LED 16W Classic',
                        imageURL: require('@/assets/bulbs/A65 B22.png'),
                        model: 'ED75 16W Classic',
                        power: '16 WATT',
                        frequency: '50 Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000K - 6500K',
                        luminousFlux: '>1520 LM',
                        cri: '>80',
                        lampSize: '75 X 180 mm',
                        driver: 'Non-isolated',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
                        warranty: '2 years',
                        price: 260.00
                    },
                    {
                        name: 'LED 27W Classic',
                        imageURL: require('@/assets/bulbs/A80 B22.png'),
                        model: 'ED90 27W Classic',
                        power: '27 WATT',
                        frequency: '50 Hz',
                        voltage: 'AC 110-265 V',
                        colorTemp: '6000K - 6500K',
                        luminousFlux: '>2565 LM',
                        cri: '>80',
                        lampSize: '90 X 210 mm',
                        driver: 'Non-isolated',
                        lampBase: 'B22/E27',
                        life: '25,000 Hours',
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
        max-width: 80px;
        margin-bottom: 16px;
        object-fit: contain;
    }

    .product-details {
        padding-left: 26px;
    }


    .product-grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
