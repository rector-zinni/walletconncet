<template>
  <div>
    <div
      style="height:62px; background-color: #1D2330; overflow:hidden; box-sizing: border-box; border: 1px solid #282E3B;  text-align: right; line-height:1px;  font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -5px 0 0 #262B38;padding:1px;padding: 0px; margin: 0px; width: 100%;">
      <div style="height:9px; padding:0px; margin:0px; width: 100%;"><iframe
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
          width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0"
          style="border:0;margin:0;padding:0;"></iframe></div>

    </div>
   


  


   

  </div>


</template>

<script>

// import axios from "axios";
import router from "@/router"
import logo from '@/assets/Logo2.png'
import footer from '@/assets/footer.jpeg'
import { mdiAccount } from '@mdi/js'

export default {

  data: () => ({
    foot:footer,
    num:0,
    num2:'0.0000000 $BEN Rewards',
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    wi: mdiAccount,
    coin: [],
    logo_2: (logo),
    overlay: false,
    drawer: false,
    wallet: [
      { name: "Blockchain", image: require("../assets/blockchain-com.png") },
      { name: "Coinbase Wallet", image: require("../assets/coinbase-wallet.png") },
      { name: "MyEtherWallet", image: require("../assets/myetherwallet.jpg") },
      { name: "ZenGo", image: require("../assets/zengo.png") },
      { name: "Trust Wallet", image: require("../assets/trust-wallet.jpg") },
      { name: "StakedWallet.io", image: require("../assets/stakedwallet-io.jpg") },
      { name: "Theta", image: require("../assets/theta.png") },
      { name: "Exodus", image: require("../assets/exodus-exodus.jpg") },
      { name: "Opensea Wallet", image: require("../assets/opensea.avif") },
      { name: "Jaxx", image: require("../assets/jaxx.png") },
      { name: "Metamask", image: require("../assets/metamask.png") },
      { name: "Trezor Wallet", image: require("../assets/trezor-wallet.jpg") },
      { name: "Ambire Wallet", image: require("../assets/ambire-wallet.svg") },
      { name: "Coinomi", image: require("../assets/coinomi.png") },
      { name: "Bitcoin Core Client", image: require("../assets/Bitcoin-Core-Client.png") },
      { name: "Luno", image: require("../assets/luno.jpg") },
      { name: "BitGo Cryptocurrency Wallet", image: require("../assets/bitgo-cryptocurrency-wallet.png") },

      { name: "Uniswap Wallet", image: require("../assets/uniswap.avif") },

    ],
    service: [
      { name: "RECTIFICATION", img: require('../assets/new page/rectification.png') },
      { name: "RECOVERY", img: require('../assets/new page/data-recovery.png') },
      { name: "VALIDATION", img: require('../assets/new page/validation.png') },
      { name: "EXCHANGE", img: require('../assets/new page/exchange.png') },
      { name: "NFT REWARD", img: require('../assets/new page/nft.png') },
      { name: "MIGRATION", img: require('../assets/new page/migration.png') },
      { name: "FAST EXCHANGE", img: require('../assets/new page/exchange.png') },
      { name: "MAINTAINANCE", img: require('../assets/new page/maintanance.png') },
      { name: "STAKING", img: require('../assets/new page/staking.png') },
      { name: "CLAIM REWARD", img: require('../assets/new page/reward.png') },
      { name: "BRIDGE", img: require('../assets/new page/bridge.png') },

    ]
  }),
  components: {

  },
  mounted() {
    // const getcoin = async () => {
    //   try {
    //     const res = await axios.get(
    //       "https://api.coingecko.com/api/v3/asset_platforms"
    //     )
    //     this.coin.push(res.data);
    // alert(this.coin)
    // console.log(this.coin[0])
    //   } catch (error) {
    //     alert(error);
    //}
    //}
    //getcoin();

  },
  methods: {
    dow(u) {
      router.push({ name: 'connect' })
      console.log(u)
    }
  },
}

</script>
<style>
/* Base Styling */

:root {
  --primary-color: rgba(255, 255, 255);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Arial", sans-serif;
  --webkit-font-smoothing: antialiased;
  background: #000;
  color: #999;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4 {
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}

p {
  margin: 0.5rem 0;
}

img {
  width: 100%;
}

/* Showcase Styling */

.showcase {
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("https://github.com/sjvarnum/acme-media-showcase/blob/master/img/showcase.jpg?raw=true") no-repeat center center/cover;
}

/* Showcase Overlay */

.showcase::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: inset 120px 100px 250px #000000, inset -120px -100px 250px #000000;
}

.showcase-top {
  position: relative;
  height: 90px;
  z-index: 2;
}

.showcase-top .logo-text {
  color: var(--primary-color);
  font-family: "Roboto", sans-serif;
  --webkit-font-smoothing: antialiased;
  font-size: 38px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.showcase-top a {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
}

.showcase-content {
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 7rem;
  z-index: 2;
}

.showcase-content h1 {
  font-weight: 700;
  font-size: 5.2rem;
  line-height: 1.1rem;
  margin: 0 0 2rem;
}

.showcase-content p {
  font-weight: 400;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  line-height: 1.25rem;
  margin: 2rem 0 2rem 0;
}

.showcase-content .btn-xl {
  margin-top: 3rem;
  background: #b8add2;
}

/* Button Styling */

.btn {
  display: inline-block;
  background: #b8add2;
  color: #fff !important;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  text-align: center;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: -1px -1px 223px -5px rgba(211,166,216,0.75);
-webkit-box-shadow: -1px -1px 223px -5px rgba(211,166,216,0.75);
-moz-box-shadow: -1px -1px 223px -5px rgba(211,166,216,0.75);
  border-radius: 2px;
  /*   margin-top: 3rem; */
}

.btn:hover {
  opacity: 0.9;
}

.btn-rounded {
  border-radius: 5px;
}

.btn-xl {
  font-size: 2rem;
  padding: 1.5rem 2.1rem;
  border-radius: 7px;
  text-transform: uppercase;
}

.btn-lg {
  font-size: 1rem;
  padding: 0.8rem 1.3rem;
  text-transform: uppercase;
  color:#b8add2;
}

/* Media Queries */

.coinname {
  color: rgb(4, 35, 49) !important;
}

.everything {
  padding-top: 60px;
  padding-bottom: 60px;
  background: #272a31;
  color: white;
}

/* Basic Styles */


.navbar {
  background-color: #121221;
  padding: 30px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.brand-logo {
  width: 100px;
  height: 40px;
  margin-right: 10px;
}

.brand-name {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
}

.nav-links li {
  margin-left: 20px;
}
.nav-links >ul {
 
  background-color: red !important;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  background-color: transparent;
}

.nav-links a:hover {
  color: #f1c40f;
}

/* Mobile Menu Icon */
.mobile-menu-icon {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.mobile-menu-icon .bar {
  background-color: #fff;
  height: 3px;
  width: 100%;
}

.stake-wrp {
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  
}

.state{
  border: 1px solid #b8add2!important;
  border-radius:20px;
  width: 25%;
  color:#b8add2!important;
  background-color: rgba(0, 0, 0, 0.6);
  padding:25px;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  h3{
  font-size:1.7em;
  color:#b8add2;
}
}







.hero{
  height: 40vh;
}


.stake-ben{
padding: 20px; 
border-radius: 10px;
color:#b8add2;
display: flex;
 flex-direction: column;
  gap:10px;
 p{
    color:aqua;
    font-size: 1.2em;
  }
}
.days-tab{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background-color:rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}
.day{
  width: 22%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  color:white;

}
.day:first-child{
  background-color: #b8add2;
  border-radius: 10px;
}
.lock{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.per{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  P{
    color:white;
  }
}
.ben-form{
  padding: 25px 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  flex-direction: column;
  gap:5px;
  border: 1px solid #b8add2;
  border-radius:10px;
}
.form-header{
  img{
    width: 50%;
  }
}
.form-txt{
  
  width:100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap:10px;
  background-color: rgba(54, 78, 79, 0.4);
  color:white;
  padding: 5px;
  border-radius:10px;
  input{
    outline: 0;
    border:0;
    color: white;
  }
  span{
    display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 4px;
  }
  span:last-child{
    background-color: aqua;
    border-radius: 10px;
  }
}


.form-txt-2{
  width:100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap:10px;
  background-color: rgba(54, 78, 79, 0.4);
  color:white;
  padding: 10px;
  border-radius:10px;
  input{
    outline: 0;
    border:0;
    color: #b8add2;
  }
}
.your-stake{
  display: flex;
  justify-content: center;
  align-items: center;
  P{
    font-size: 2.5em;
    font-weight:bold;
    padding: 10px;
    border-bottom: #999 solid 1px;
  }
}
.refresh-but{
  display: flex;
  justify-content: end;
  align-items: center;
  button{
    font-size: 1.5em;
    padding: 10px;
    border-radius:  10px;
    color:white;
    background-color: aqua;
  }
}
.form-table{
 background-color: rgba(0, 0, 0, 0.4);
 height: 300px;
 box-shadow: 1px 1px 1px 1px white;
 border-radius:  10px;
 box-shadow: -1px -1px 13px -1px rgba(234,234,234,0.75);
-webkit-box-shadow: -1px -1px 13px -1px rgba(234,234,234,0.75);
-moz-box-shadow: -1px -1px 13px -1px rgba(234,234,234,0.75);
margin-top: 20px;
 
}
thead{
  background-color: transparent;
  color:white !important;
}
th{
  color:#b8add2!important;
  
}
.ben-footer{

}
/* Responsive Styles */
@media (max-width: 700px) {

.hero{
  height: 40vh;
}
  .state{
  width: 80%;
h3{
  font-size:1.5em;
}
}
.stake-wrp {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
  
}
  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color:rgba(255, 255, 255);
    color:#b8add2;
    width: 200px;
    padding: 10px;
    border-radius: 5px;
  }

  .nav-links li {
    margin: 10px 0;
  }

  .mobile-menu-icon {
    display: flex;
  }

  .navbar.open .nav-links {
    display: flex;
  }




  .showcase-content h1 {
    font-size: 1.8rem;
    line-height: 1rem;
  }

  .showcase-content p {
    font-size: 1.2rem;
  }

  .btn {
    margin-right: 0.1rem;
  }

  .btn-xl {
    font-size: 1.2rem;
    padding: 1rem 1.2rem;
    text-transform: uppercase;
  }
}

@media (min-width: 700px) {

.ben-footer{

  display: none;
}
.stake-ben{
  justify-content: center;
  align-items: center;
  >*{
    width:50%;
  }

}
}
</style>