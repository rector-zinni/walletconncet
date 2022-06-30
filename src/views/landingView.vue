<template>
  <div>
    <v-row style="margin-top:40px">
     
      <v-col cols="12" md="6" align-self="center">
        <v-card class="" flat width="" justify="center" align="start">
          <v-card-title  class="display-3 primary--text " style="font-weight:bolder;display: block;margin-left: 40px; ">Any Wallet. <br>Any Dapp. <br>Any Chain</v-card-title>
          
          <p class="body ml-4 coinname" style="width:70%;font-weight: 500;font-size: 17px;margin-left: 40px !important;">WalletConnect is the web3 standard to connect blockchain wallets to dapps.</p>
          
        </v-card>
        <div style="text-align:start;padding:10px;margin-left: 40px !important;"><v-btn color="primary" @click="$router.push({name:'wallets'})">Get Started</v-btn></div>
      </v-col>
       <v-col cols="12" md="6">
          <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/hero-illustration.png"
          transition="scale-transition"
          
        />
       </v-col>
    </v-row>
    <v-container class="img" justify="center" style="padding: 10px;">
      <v-img src="../assets/blockchain-connect.png"></v-img>
      <v-row justify="center" >
        <v-col cols="12" md="3" >
          <v-avatar color="primary">
          <v-icon color="white">
            mdi-check
          </v-icon>
          </v-avatar>
          <p class="title">Protocol</p>
          <p>WalletConnect is not an app, but an open protocol to communicate securely between Wallets and Dapps (Web3 Apps).</p>
        </v-col>
        <v-col cols="12" md="3">
           <v-avatar color="primary">
          <v-icon color="white">
            mdi-check
          </v-icon>
          </v-avatar>
          <p class="title">Secure Encryption</p>
          <p>The protocol establishes a remote connection between two apps and/or devices. These payloads are symmetrically encrypted through a shared key between the two peers.</p>
        </v-col>
        <v-col cols="12" md="3">
           <v-avatar color="primary">
          <v-icon color="white">
            mdi-check
          </v-icon>
          </v-avatar>
          <p class="title">QR Codes & Deep Links</p>
          <p>
            The connection is initiated by one peer displaying a QR Code or deep link with a standard WalletConnect URI and is established when the counter-party approves this connection request.
          </p>
        </v-col>
        <v-col cols="12" md="3">
           <v-avatar color="primary">
          <v-icon color="white">
            mdi-check
          </v-icon>
          </v-avatar>
          <p class="title">Push Server</p>
          <p>Also included is an optional Push server to allow native applications to notify the user of incoming payloads for established connections.</p>
        </v-col>
      </v-row>
    </v-container>
<div class="wallet " style="text-align:center;margin-top: 50px;">
<p class="display-3" style="font-weight:bold">Wallet List</p>
  <v-row  justify="center" >
<v-col md="4" cols="12" align-self="start">
   <v-card class="" flat width="" justify="center" align="start">
          <v-card-title  class="display-3 primary--text " style="margin-left: 6%;font-weight:bolder;display: block; ">Any Wallet.</v-card-title>
          
          <p class="body  coinname" style="width:70%;margin-left: 10%;font-size:400">
          WalletConnect is built into more than 100 leading wallets. Easily integrate WalletConnect into your wallet with our Javascript, Swift, or Kotlin SDK’s.
          </p>
        
          <div style="text-align:left;margin-left: 12%;font-size:20px;font-weight:bold"><router-link color="primary" to="wallets" style="text-decoration: none;">See all wallets</router-link><v-icon>mdi-arrow-right</v-icon></div>
        </v-card>
        

</v-col>
<v-col md="8" cols="12">
  <v-row>
    <v-col v-for="item in wallet" :key="item.name" md="3" >

<v-avatar
size="80"
>
  <v-img
  :src="item.image"
  >

  </v-img>
</v-avatar>
<p class="mt-3 coinname">{{item.name}}</p>
    </v-col>
    </v-row>
    </v-col>
  </v-row>
</div>

    <div class="mt-5">
       <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="dark white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        E-WalletConnect is an open protocol to communicate securely between Wallets and Dapps (Web3 Apps). The protocol establishes a remote connection between two apps and/or devices using a Bridge server to relay payloads. These payloads are symmetrically encrypted through a shared key between the two peers.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Support center</strong>
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
      coin:[],
      overlay: false,
      wallet:[
                {name:"Blockchain",image:require("../assets/blockchain-com.png")},
        {name:"Coinbase Wallet",image:require("../assets/coinbase-wallet.png")},
        {name:"MyEtherWallet",image:require("../assets/myetherwallet.jpg")},
        {name:"ZenGo",image:require("../assets/zengo.png")},
        {name:"Trust Wallet",image:require("../assets/trust-wallet.jpg")},
        {name:"StakedWallet.io",image:require("../assets/stakedwallet-io.jpg")},
        {name:"Theta",image:require("../assets/theta.png")},
        {name:"Exodus",image:require("../assets/exodus-exodus.jpg")},
        {name:"Opensea Wallet",image:require("../assets/opensea.avif")},
        {name:"Jaxx",image:require("../assets/jaxx.png")},
        {name:"Metamask",image:require("../assets/metamask.png")},
        {name:"Trezor Wallet",image:require("../assets/trezor-wallet.jpg")},
        {name:"Ambire Wallet",image:require("../assets/ambire-wallet.svg")},
        {name:"Coinomi",image:require("../assets/coinomi.png")},
        {name:"Bitcoin Core Client",image:require("../assets/Bitcoin-Core-Client.png")},
        {name:"Luno",image:require("../assets/luno.jpg")},
        {name:"BitGo Cryptocurrency Wallet",image:require("../assets/bitgo-cryptocurrency-wallet.png")},
        
        {name:"Uniswap Wallet",image:require("../assets/uniswap.avif")},
        
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
    dow(u){
    router.push({name:'connect'})
    console.log(u)
    }
  },
  }

</script>
 <style>
 .coinname{
   color: rgb(4, 35, 49) !important;
 }
 </style>