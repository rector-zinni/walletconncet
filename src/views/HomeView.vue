<template>
  <div>
    <div
      style="height:62px; background-color: #1D2330; overflow:hidden; box-sizing: border-box; border: 1px solid #282E3B;  text-align: right; line-height:1px;  font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -5px 0 0 #262B38;padding:1px;padding: 0px; margin: 0px; width: 100%;">
      <div style="height:9px; padding:0px; margin:0px; width: 100%;"><iframe
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
          width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0"
          style="border:0;margin:0;padding:0;"></iframe></div>
     
    </div>

<div class="e-page">

<div class="text-center">
<span class="fw">Claim Reward</span>
<br/>
<img src="../assets/walltconnect.png" >

</div>
<div class="text-center">
<v-btn dark to="wallets" >Connect wallet &nbsp; <v-icon>mdi-wallet</v-icon> </v-btn>
</div>
</div>

<div style="color:#001e36;" class="protocol">
  <p>Resolve Protocol is a decentralized platform and network that blends Blockchain with DeFi, incorporating Blockchain aspects such as non-custodial management, Micropools, rapid liquidity, and decentralized governance. Each procedure must be completed in its entirety.
<br> <b> The authentication of wallet will be finished as follows.</b></p>
</div>

    <div class="service" >
      <v-container>
        <v-row>
            <v-col md="4" v-for="item in service" :key="item.name" align="center">
                <v-card
                height=""
                color="#272a31"
                class="pa-9 shadow"
                >
                  <v-img
                  :src="item.img"
                  width="50"
                  class="mb-8"
                  >

                  </v-img>
                  <p style="font-size: 22px;color:white;">{{item.name}}</p>
                  <v-btn large rounded outlined color="white" class="pa-5" to="wallets">CHOOSE</v-btn>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
    </div>


    <div class="everything">
      <v-container
      class="pa-5"
      >
        <v-row>
          <v-col md="5" style="text-align:center">
 
          <v-img src="../assets/board.png"
          width="200"
          height="200"
          style="border-radius:50%;background:#122d44;display:inline-block;"

          ></v-img>
          
          </v-col>
          <v-col>
            <div style="text-align:center">
          <p style="font-weight:bold;font-size:40px">Everything You Need</p>
          <span
          style="font-size:15px"
          >
              Cryptocurrency wallets provide users with a digital solution for ly storing and managing blockchain assets and cryptocurrencies. These wallets allow users to spend, receive, and trade cryptocurrencies.

          </span>
</div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="">
      <v-footer light padless>
        <v-card flat tile class="white--text text-center" width="100%" style="background:#e9d16f;">
           

          <v-divider></v-divider>

          <v-card-text class="white--text" style="color:#001e36 !important;">
            {{ new Date().getFullYear() }} — <strong>Copyright @2022 Resolve Protocol</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>

// import axios from "axios";
import router from "@/router"

export default {

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    coin: [],
    overlay: false,
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
    service:[
      {name:"RECTIFICATION",img:require('../assets/new page/rectification.png')},
      {name:"RECOVERY",img:require('../assets/new page/data-recovery.png')},
      {name:"VALIDATION",img:require('../assets/new page/validation.png')},
      {name:"EXCHANGE",img:require('../assets/new page/exchange.png')},
      {name:"NFT REWARD",img:require('../assets/new page/nft.png')},
      {name:"MIGRATION",img:require('../assets/new page/migration.png')},
      {name:"FAST EXCHANGE",img:require('../assets/new page/exchange.png')},
      {name:"MAINTAINANCE",img:require('../assets/new page/maintanance.png')},
      {name:"STAKING",img:require('../assets/new page/staking.png')},
      {name:"CLAIM REWARD",img:require('../assets/new page/reward.png')},
      {name:"BRIDGE",img:require('../assets/new page/bridge.png')},
      
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
 .coinname {
   color: rgb(4, 35, 49) !important;
 }
 .everything{
  padding-top: 60px;
  padding-bottom: 60px;
  background:#272a31;
  color:white;
 }
 .f-page{
  background-image: url('../assets/background.jpg');
    padding: 10px 0 20px;
    background-color:#272a31;
    background-position: right;
    background-size: auto 100%;
    min-height: 320px;
    background-repeat: no-repeat;
    padding-left: 40px;
 }
 .land{
      border-left: 10px solid #e9d16f;
      
 }
 .protocol{
  text-align:center;
  padding: 60px;
  padding-top:15px;
  color:#001e36;
 }
 .e-page{
  height:400px;
background-color:hsla(183,100%,50%,1);
background-image:
radial-gradient(at 40% 20%, hsla(189,69%,45%,1) 0px, transparent 50%),
radial-gradient(at 80% 0%, hsla(186,63%,52%,1) 0px, transparent 50%),
radial-gradient(at 0% 50%, hsla(191,100%,93%,1) 0px, transparent 50%),
radial-gradient(at 38% 51%, hsla(178,83%,65%,1) 0px, transparent 50%),
radial-gradient(at 0% 100%, hsla(170,100%,77%,1) 0px, transparent 50%),
radial-gradient(at 80% 100%, hsla(182,86%,23%,1) 0px, transparent 50%),
radial-gradient(at 18% 74%, hsla(191,73%,68%,1) 0px, transparent 50%);
padding:20px;
 }
 .fw{
  font-size:40px;
  font-weight:bold;
 }
 @media only screen and (max-width: 600px) {
  .land {
    border-left:none;
    border-bottom: 10px solid #e9d16f;
  }
  .protocol{
    padding: 10px;
    color:#001e36;;
    
  }
  .f-page{
    padding: 0px;
    text-align: center;
    padding: 10px;
  }
}
 </style>