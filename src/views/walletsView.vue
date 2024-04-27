<template>
  <div>
      

<v-container class="mt-2">
    <v-container style="text-align:center;"><p class="display-3" style="font-weight:bold;padding-bottom:5px">Registry</p>
      <hr>
    <p style="padding:5px">Multiple iOS and Android wallets support the Protocol. Simply select your wallet to start securely using a dApp. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.</p>
    </v-container>
  
<v-container class="coins ">
 <div
 class="pa-5"
 >
      <v-text-field      
        density="compact"
        variant="solo"
        label="Search wallet"
        append-icon="mdi-magnify"
        single-line
        hide-details
        class="mb-5"
        v-model="wal"
        @keyup="nullwallet"
        @click:append="searchwallet"
      ></v-text-field>
    </div>
  <v-row>
     
    <v-col  md="3" v-for="w in r_wallet" :key="w.name" sm="6" >
    <v-card flat align="center" @click="dow(w.name)" style="background:transparent;">
      <div>
    <v-avatar
    size="100"
 style="box-shadow: 5px 3px 5px #888888"
    >
      <v-img
      :src="w.image"
     
      >

      </v-img>

    </v-avatar>
    </div>
    <v-card-title style="display: inline-block;font-size: 15px;" class="white--black">{{w.name}}</v-card-title>
    </v-card>
    </v-col>
    
  
  </v-row>
</v-container>

</v-container>

    <div 
    style="text-align:center;"
    class=""
    >
      <div>
    <p style="">Open a pull request on <a href="https://github.com/walletconnect">Github</a> to add your wallet here.</p>
    </div>
  <div class="foot">
<v-row>
  <v-col class="mr-9">
    <div class="" style="display:inline-block !important; width:100px;">
    <v-btn
    flat
    elevation="0"
    color="transparent"
    href="https://facebook.com/"
    >
    <v-icon class="mr-3">
      mdi-facebook
    </v-icon>
    <span class="primary--text">facebook</span>
    </v-btn>
    </div>
  </v-col>

  <v-col class="mr-9">
    <div class="" style="display:inline-block !important; width:100px">
    <v-btn
    flat
    elevation="0"
    color="transparent"
    href="https://telegram.walletconnect.org/"
    >
    <v-icon class="mr-3">
      mdi-send
    </v-icon>
    <span class="primary--text">Telegram</span>
    </v-btn>
    </div>
  </v-col>

  <v-col class="mr-9">
    <div class="" style="display:inline-block !important; width:100px">
    <v-btn
    flat
    elevation="0"
    color="transparent"
    href="https://twitter.walletconnect.org/"
    >
    <v-icon class="mr-3">
      mdi-twitter
    </v-icon>
    <span class="primary--text">Twitter</span>
    </v-btn>
    </div>
  </v-col>



  <v-col class="mr-9">
    <div class="" style="display:inline-block !important; width:100px">
    <v-btn
    flat
    elevation="0"
    color="transparent"
    href="https://github.com/walletconnect"
    >
    <v-icon class="mr-3">
      mdi-github
    </v-icon>
    <span class="primary--text">Github</span>
    </v-btn>
    </div>
  </v-col>

  
</v-row>
  </div>
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
import store from "@/store"
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
      wal:'',
      wallet:[
        
        {name:"Blockchain",image:require("../assets/blockchain-com.png")},
        {name:"Coinbase Wallet",image:require("../assets/coinbase-wallet.png")},
        
        {name:"Binace Wallet",image:require("../assets/binace.png")},
        {name:"Metamask",image:require("../assets/metamask.png")},
        {name:"MyEtherWallet",image:require("../assets/myetherwallet.jpg")},
        {name:"Trust Wallet",image:require("../assets/trust-wallet.jpg")},
        {name:"ZenGo",image:require("../assets/zengo.png")},
        {name:"Wallet Connect",image:require("../assets/wc.jpeg")},
        {name:"EasyPocket",image:require("../assets/easypocket.jpg")},
        {name:"Infinity Wallet",image:require("../assets/infinity-wallet.png")},
        {name:"Torus",image:require("../assets/torus.jpg")},
        {name:"Xdefi",image:require("../assets/xdefi.png")},
        {name:"Exodus Wallet",image:require("../assets/exodus.png")},
        {name:"Ownbit",image:require("../assets/ownbit.png")},
        {name:"Bridge Wallet",image:require("../assets/swft.png")},
        {name:"WalletWap",image:require("../assets/wswap.svg")},
        {name:"Coin98",image:require("../assets/coin98.png")},
        {name:"TrustVault",image:require("../assets/trustvault.png")},
        {name:"Loopring Wallet",image:require("../assets/loop.jpg")},
        {name:"MYKEY",image:require("../assets/mykey.png")},
        {name:"StakedWallet.io",image:require("../assets/stakedwallet-io.jpg")},
        {name:"Theta",image:require("../assets/theta.png")},
        {name:"Exodus",image:require("../assets/exodus-exodus.jpg")},
        {name:"Electrum Wallet",image:require("../assets/electrum-wallet.jpg")},
        {name:"Jaxx",image:require("../assets/jaxx.png")},
        {name:"Trezor Wallet",image:require("../assets/trezor-wallet.jpg")},
        {name:"Opensea Wallet",image:require("../assets/opensea.avif")},
        {name:"Uniswap Wallet",image:require("../assets/uniswap.avif")},
        {name:"Coinomi",image:require("../assets/coinomi.png")},
        {name:"Bitcoin Core Client",image:require("../assets/Bitcoin-Core-Client.png")},
        {name:"Luno",image:require("../assets/luno.jpg")},
        {name:"BitGo Cryptocurrency Wallet",image:require("../assets/bitgo-cryptocurrency-wallet.png")},
        {name:"Coin Payments Wallet",image:require("../assets/coinpayments-wallet.png")},
        {name:"Xapo",image:require("../assets/xapo-wallet.png")},
        {name:"Atomic Wallet",image:require("../assets/atomic-wallet.png")},
        {name:"SimpleHold",image:require("../assets/simplehold.svg")},
        {name:"Bread Wallet",image:require("../assets/bread-wallet.png")},
        {name:"Cardano",image:require("../assets/cardano.png")},
        {name:"Crypterium",image:require("../assets/crypterium.svg")},
        {name:"Mycelium",image:require("../assets/mycelium-wallet.png")},
        {name:"Bitso",image:require("../assets/bitso.png")},
        {name:"Coinjar",image:require("../assets/coinjar-wallet.png")},
        {name:"CounterWallet",image:require("../assets/counterwallet.png")},
        {name:"Cryptyx Wallet",image:require("../assets/cryptx-wallet.png")},
        {name:"Omni Wallet",image:require("../assets/omniwallet.png")},
        {name:"Airbitz Bitcoin Wallet",image:require("../assets/airbitz-bitcoin-wallet.png")},
        {name:"Copay",image:require("../assets/copay.jpg")},
        {name:"Daedalus",image:require("../assets/daedalus.png")},
        {name:"Rainbow",image:require("../assets/new page/rainbow.png")},
        {name:"Pillar",image:require("../assets/pillar.png")},
        {name:"Argent",image:require("../assets/argent.png")},
        {name:"CYBAVO",image:require("../assets/cybavo.png")},
        {name:"Nash",image:require("../assets/nash.jpg")},
        {name:"Zelcore",image:require("../assets/zelcore.png")},
        {name:"Tokenary",image:require("../assets/tokenary.png")},
        {name:"Gnosis Safe Multisig",image:require("../assets/Gnosis.jpg")},
        {name:"D'CENT'",image:require("../assets/dcent.png")},
        {name:"Alice",image:require("../assets/alice.png")},
        {name:"Dok Wallet",image:require("../assets/dok.png")},
        {name:"Infinito Wallet",image:require("../assets/infinito-wallet.png")},
        {name:"Equal",image:require("../assets/equal.jpg")},
        {name:"Eidoo",image:require("../assets/eidoo.png")},
        {name:"GridPlus",image:require("../assets/grid.png")},
        {name:"Spatium",image:require("../assets/spatium.jpg")},
        {name:"Auro Wallet",image:require("../assets/auro.jpg")},
        {name:"Unstoppable Wallet",image:require("../assets/unstoppable.png")},
        {name:"XDC Wallet",image:require("../assets/xdc.png")},
        {name:"PEAKDEFI Wallet",image:require("../assets/peakdefi.png")},
        {name:"SWFT Wallet",image:require("../assets/swft.png")},
        {name:"Kardiachain",image:require("../assets/kdc.jpg")},
        {name:"Bitkeep",image:require("../assets/bitkeep.png")},
        {name:"ViaWallet",image:require("../assets/via.png")},
        {name:"SWFT wallet",image:require("../assets/swft.png")},
        {name:"SparkPoint wallet",image:require("../assets/sparkpoint.png")},
        {name:"Bridge Wallet",image:require("../assets/bridge.png")},
        {name:"Polymesh",image:require("../assets/polymesh.jpeg")},
        {name:"Bridge Wallet",image:require("../assets/swft.png")},
        {name:"Kepir Wallet",image:require("../assets/kepir.png")},
        {name:"Debank",image:require("../assets/debank.png")},
        {name:"Fearless Wallet",image:require("../assets/fealess.png")},
        {name:"Terra Station",image:require("../assets/Terra.jpg")},
        {name:"KEYRING PRO Wallet",image:require("../assets/keyring.png")},
        {name:"Ferrum Unifyre",image:require("../assets/Ferrum.jpg")},
        {name:"Sollet",image:require("../assets/Sollet.jpg")},
        {name:"Ellipal",image:require("../assets/ellipal.png")},
        {name:"Midas Wallet",image:require("../assets/midas.png")},
        {name:"O3 Wallet",image:require("../assets/O3.jpg")},
        {name:"Guarda Wallet",image:require("../assets/guarda.jpg")},
        {name:"Huobi Wallet",image:require("../assets/huobi.jpg")},
        {name:"Authereum Wallet",image:require("../assets/authereum.png")},
        {name:"Walleth",image:require("../assets/walleth.png")},
        {name:"Phantom Wallet",image:require("../assets/phantom.png")},
        {name:"Ledger Live",image:require("../assets/ledgerlive.png")},
        {name:"BitPay",image:require("../assets/bitpay.jpg")},
        {name:"MathWallet",image:require("../assets/math.png")},
        {name:"TokenPockect",image:require("../assets/tokenpocket.png")},
        {name:"ONTO",image:require("../assets/onto.png")},
        {name:"imToken",image:require("../assets/imToken.png")},
        {name:"Solfare Wallet",image:require("../assets/solfare.png")},
        {name:"AlphaWallet",image:require("../assets/alpha.jpg")},
        {name:"Tomo Wallet",image:require("../assets/tomo.jpg")},
        {name:"UberPay",image:require("../assets/uberpay-wallet.png")},
        {name:"Klever",image:require("../assets/kw.jpg")},
        {name:"Defi Wallet",image:require("../assets/crypto.png")},
        {name:"Fantom Phantom",image:require("../assets/fantom.jpg")},
        {name:"Enjin Wallet",image:require("../assets/enjin.jpg")},
        {name:"SafePal",image:require("../assets/sfp.png")},


        
        
      ],
      r_wallet:[]
    }),
    components: {
     
    },
     mounted() {
      this.r_wallet=this.wallet
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
        store.commit("INSERT_WALLET",u)
    router.push({name:'connect',params:{id:u}})

    console.log(u)
    },
    nullwallet(){
  if(this.wal==''){
this.r_wallet=this.wallet
      }
    },
    searchwallet(){
     
    
        this.r_wallet=this.wallet.filter(e=>{
          return e.name.toLowerCase().includes(this.wal.toLowerCase());
        })
  
      
    }
  },
  }

</script>
<style>
.coins{
  text-align: center;
}
.foot{
  display:inline-block;
  
}
</style>