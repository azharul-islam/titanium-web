<template>
  <div id="app">
    <Nav/>
    <Header/>
    <Content/>
  </div>



</template>

<script>
  import Nav from './components/Nav.vue'
  import Header from './components/Header.vue'
  import Content from './components/Content.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Header,
    Content
  }
}
</script>

<style>
#app {
  background-color: white;
  max-width: 1000px;
  margin: 0 auto auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: 'product_sansbold';
  src: url('./font/product_sans_bold-webfont.woff2') format('woff2'),
  url('./font/product_sans_bold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}


@font-face {
  font-family: 'product_sansregular';
  src: url('./font/product_sans_regular-webfont.woff2') format('woff2'),
  url('./font/product_sans_regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}

</style>
