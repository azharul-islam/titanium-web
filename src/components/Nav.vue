<template>
    <ul class="nav" :class="{expanded: isExpanded}">
        <li class="menu-button" :class="{change: isClose}" @click.prevent="changeMenuButton">
            <div class="bar1"></div>
            <div class="bar2"></div>
        </li>
        <li><img id="nav-logo" src="../assets/logo-black.png" alt=""></li>

        <li><span id="language-switch">বাংলা</span></li>

        <li style="margin-top: 100px">
            <router-link class="menu-item" to="/" :class="{'show-menu': isShowingMenu}" @click.prevent href=""><span>Home</span></router-link>
        </li>
        <li>
            <router-link class="menu-item" to="/about" :class="{'show-menu': isShowingMenu}" @click.prevent href=""><span>About Company</span></router-link>
        </li>
        <li>
            <router-link class="menu-item" :class="{'show-menu': isShowingMenu}" @click.prevent href=""><span>Contact</span></router-link>
        </li>


    </ul>
</template>

<script>
    export default {
        name: 'Nav',
        props: {},
        data: function () {
            return {
                isClose: false,
                isExpanded: false,
                isShowingMenu: false
            }
        },
        methods: {
            changeMenuButton: function () {
                this.isClose = !this.isClose;
                this.isExpanded = !this.isExpanded;
                this.isShowingMenu = !this.isShowingMenu;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>

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
        transition: 0.18s ease;
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

    .menu-item {
        display: none;

        opacity: 0;
        text-decoration: none;
        color: #000;
        font-size: 20px;
        margin: 20px 0 0 0;
        padding: 20px;
        transition: all .18s;
        -webkit-tap-highlight-color: transparent;
        transform: translateY(-10px);

    }

    .show-menu {
        display: inline-block;
        opacity: 1;
        transform: translateY(-19px);

    }

</style>
