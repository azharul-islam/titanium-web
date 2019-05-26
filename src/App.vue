<template>
    <div id="app">
        <ul class="nav" :class="{expanded: isShowingMenu}">
            <li class="menu-button" :class="{change: isShowingMenu}" @click.prevent="changeMenuButton">
                <div class="bar1"></div>
                <div class="bar2"></div>
            </li>
            <li><img id="nav-logo" src="./assets/logo-black.png" alt=""></li>


            <li style="margin-top: 70px" class="menu-item" :class="{'show-menu': isShowingMenu}">
                <router-link class="nav-link" to="/">
                    <span>Home</span></router-link>
            </li>
            <li class="menu-item" :class="{'show-menu': isShowingMenu}">
                <router-link class="nav-link" to="/about"><span>About Company</span></router-link>
            </li>
            <li class="menu-item" :class="{'show-menu': isShowingMenu}">
                <router-link class="nav-link" to="/catalog"><span>Products</span>
                </router-link>
            </li>


        </ul>
        <router-view/>
    </div>
</template>


<script>
    export default {
        name: 'app',
        props: {},
        data: function () {
            return {
                isShowingMenu: false,
            }
        },
        methods: {
            changeMenuButton: function () {
                this.isShowingMenu = !this.isShowingMenu;
            }
        }, watch: {
            '$route'() {
                if (this.isShowingMenu) this.changeMenuButton();
            }
        }
    }
</script>


<style lang="scss">
    #app {
        margin: 0 auto auto;
        font-family: 'product_sansregular', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    h1 {
        font-family: Futura, Trebuchet MS, Arial, sans-serif;
        text-align: left;
    }

    .container {
        max-width: 1000px;
        margin: auto;
    }

    @font-face {
        font-family: 'product_sansbold';
        src: url('./font/product_sans_bold-webfont.woff2') format('woff2'),
        url('./font/product_sans_bold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'product_sansregular';
        src: url('./font/product_sans_regular-webfont.woff2') format('woff2'),
        url('./font/product_sans_regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }


    .nav {
        height: 50px;
        z-index: 11;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
        backdrop-filter: saturate(180%) blur(20px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1), height .56s cubic-bezier(0.52, 0.16, 0.24, 1);
        user-select: none;
    }

    .expanded {
        height: 100%;
    }

    #nav-logo {
        max-width: 130px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -65px;
        padding: 14px 0;
    }


    @media (min-width: 800px) {
        img {
            max-width: 800px;
        }
    }

    @media (max-width: 800px) {
        img {
            max-width: 100%;
        }
    }

    .menu-button {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        padding: 14px 14px 14px 18px;
        justify-self: start;
        -webkit-transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .menu-button:hover, .menu-button:focus, .menu-button:active {
        opacity: .65;
    }

    .menu-button div {
        width: 20px;
        height: 2px;
        background-color: black;
        margin: 6px 0;

        -webkit-transition: -webkit-transform .1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) .1008s;
        transition: -webkit-transform .1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) .1008s;
        transition: transform .1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) .1008s;
        transition: transform .1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) .1008s, -webkit-transform .1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) .1008s;
        -webkit-transform: none;
        transform: none;
    }

    .change .bar1 {
        transform: rotate(-45deg) translate(-1.5px, 4px);
    }

    /* Rotate last bar */
    .change .bar2 {
        transform: rotate(45deg) translate(-1.5px, -4px);
    }

    #language-switch {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        padding: 13px 16px 0 16px;
        justify-self: end;

    }

    .nav-link {
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        display: block;
        color: #000;
        text-align: left;
        padding: 15px 40px;
        font-size: 18px;

    }

    .menu-item {
        pointer-events: none;
        opacity: 0;

        font-size: 20px;
    }

    .menu-item:nth-child(3) {
        transform: translateY(-44px);
        transition: opacity .3345s cubic-bezier(0.52, 0.16, 0.52, 0.84) .15s, transform .4669s cubic-bezier(0.52, 0.16, 0.52, 0.84) .108s, -webkit-transform .4669s cubic-bezier(0.52, 0.16, 0.52, 0.84) .108s;
    }

    .menu-item:nth-child(4) {
        transform: translateY(-40px);
        transition: opacity .29294s cubic-bezier(0.52, 0.16, 0.52, 0.84) .13s, transform .45043s cubic-bezier(0.52, 0.16, 0.52, 0.84) .095s, -webkit-transform .45043s cubic-bezier(0.52, 0.16, 0.52, 0.84) .095s;
    }

    .menu-item:nth-child(5) {
        transform: translateY(-36px);
        transition: opacity .26098s cubic-bezier(0.52, 0.16, 0.52, 0.84) .11s, transform .43756s cubic-bezier(0.52, 0.16, 0.52, 0.84) .082s, -webkit-transform .43756s cubic-bezier(0.52, 0.16, 0.52, 0.84) .082s;
    }


    .show-menu:nth-child(3) {
        transform: none;
        transition: opacity .3091s cubic-bezier(0.32, 0.08, 0.24, 1) .03s, transform .3455s cubic-bezier(0.32, 0.08, 0.24, 1) .02s, -webkit-transform .3455s cubic-bezier(0.32, 0.08, 0.24, 1)
    }

    .show-menu:nth-child(4) {
        transform: none;
        transition: opacity .32244s cubic-bezier(0.32, 0.08, 0.24, 1) .05s, transform .35825s cubic-bezier(0.32, 0.08, 0.24, 1) .04s, -webkit-transform .35825s cubic-bezier(0.32, 0.08, 0.24, 1) .04s;
    }

    .show-menu:nth-child(5) {  transform: none;
        transition: opacity .33467s cubic-bezier(0.32, 0.08, 0.24, 1) .07s, transform .37539s cubic-bezier(0.32, 0.08, 0.24, 1) .06s, -webkit-transform .37539s cubic-bezier(0.32, 0.08, 0.24, 1) .06s;
    }


    .show-menu {
        pointer-events: auto;

        opacity: 1;
    }

    .router-link-exact-active {
        font-family: product_sansbold, Helvetica, Arial, sans-serif;
        font-weight: bold;
    }
</style>
