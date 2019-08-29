<template>
    <div class="home">
        <Header></Header>
        <Content></Content>
        <Products></Products>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'
    import Content from '@/components/Content.vue'
    import Products from '@/components/Products.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'home',
        components: {
            Header,
            Content,
            Products,
            Footer
        }
    }
</script>
