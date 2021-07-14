<template>
    <div class="bg-gray-100">
      <div class="container h-screen flex justify-center items-center mx-auto">
        <div class="relative rounded-lg"
          v-bind:class = "input=='' && typing?'border border-red-200':'border-transparent'"
          >
          <popper trigger="clickToToggle" 
            :options="{
                placement: 'left',
                modifiers: { offset: { offset: '0,10px' } }
            }">
            <div class="popper">
              <div>
                <ul class="w-full rounded-lg mt-2 mb-3 text-gray-600">
                  <li class="mb-1">
                    <div 
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 w-full cursor-pointer items-center"
                      @click="switchLinkType(1)"
                    >
                      <i class="fa fa-envelope z-20"></i>
                      <span class="ml-2 truncate">Link to Email</span>
                    </div>
                  </li>
                  <li class="mb-1">
                    <div 
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 w-full cursor-pointer items-center"
                      @click="switchLinkType(2)"
                    >
                      <i class="fa fa-link z-20"></i>
                      <span class="ml-2 truncate">Link to Page</span>
                    </div>
                  </li>
                  <li class="mb-1">
                    <div 
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 w-full cursor-pointer items-center"
                      @click="switchLinkType(3)"
                    >
                      <i class="fa fa-mobile-alt z-20"></i>
                      <span class="ml-2 truncate">Link to Phone</span>
                    </div>
                  </li>
                </ul>
              </div> 
            </div>
            <div 
              slot="reference"
              class="absolute h-full w-12 bg-gray-200 flex justify-center items-center cursor-pointer rounded-l-lg hover:bg-gray-400"
              v-show="!typing"
              v-bind:class = "selectedURLState?'bg-gray-600':'bg-gray-200'"
              @click="selectedURLState = !selectedURLState"
              >
              <i class="fa fa-link z-20" 
                v-show="linkState == 'web'"
                 v-bind:class = "selectedURLState?'text-gray-200':'text-gray-600'"
                >
                
              </i> 
              <i class="fa fa-envelope z-20" 
                v-show="linkState == 'email'"
                v-bind:class = "selectedURLState?'text-gray-200':'text-gray-600'"
                >
                  
              </i>
              <i class="fa fa-mobile-alt z-20" 
              v-show="linkState == 'phone'"
              v-bind:class = "selectedURLState?'text-gray-200':'text-gray-600'"
              >                
              </i>

            </div>
          </popper>
           
           <input type="text" 
              class="h-14 w-96 rounded-lg z-0 focus:shadow focus:outline-none" 
              :placeholder="linkState.toUpperCase()"
              v-model="input"
              v-bind:class = "typing?'pl-5 pr-24':'pl-16 pr-24'"
              @focus="focusAction"
              />

            <div 
              class="absolute h-full top-0 right-12 flex justify-center items-center w-12"
              v-show="typing"
              v-bind:class = "input=='' && typing?'bg-red-600':'bg-gray-400'"
              > 
                <i 
                  class="z-20 text-white fa fa-check"
                  >
                </i> 
            </div>

            <div 
              class="absolute h-full top-0 right-12 flex justify-center items-center w-12 bg-transparent cursor-pointer"
              v-show="deleteState"
              @click="clearInput"
              > 
                <i 
                  class="z-20 text-gray-500 fa fa-trash"
                  >
                </i> 
            </div>


            <div 
              class="absolute h-full top-0 right-0 flex justify-center items-center w-12 cursor-pointer rounded-r-lg hover:bg-gray-400"
              @click="targetLinkBlank = !targetLinkBlank"
              v-bind:class = "targetLinkBlank?'bg-gray-600':'bg-gray-200'"
              v-show="validated"
              > 
                <i 
                  class="fa fa-external-link-alt z-20"
                  v-bind:class = "targetLinkBlank?'text-gray-200':'text-gray-600'"
                  >
                </i> 
            </div>

            <div 
              class="absolute h-full top-0 right-0 flex justify-center items-center w-12 cursor-pointer rounded-r-lg cursor-pointer bg-gray-400"
              v-show="typing"
              @click="clearInput"
              > 
                <i 
                  class="fa fa-times z-20 text-white"
                  >
                </i> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
  name: 'URLInput',
  components: {
    'popper': Popper
  },
  data() {
    return {
      linkState: "web",
      targetLinkBlank: false,
      selectedURLState: false,
      input: "",
      validated: true,
      typing: false,
      deleteState: false
    }
  },
  watch: {
    input: function (value) {
    
      this.typing = true
      this.deleteState = false
      if (this.linkState == "web"){
        const re = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        this.validated = re.test(value)
        
      }
      if (this.linkState == "email"){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.validated = re.test(String(value).toLowerCase());
      }
      if (this.linkState == "phone") {
        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        this.validated = re.test(value)

      }
      if (this.validated){
          this.typing = false
          this.deleteState = true
      }
      
    }
  },

  methods: {
    clearInput: function(){
      this.input = ""
      this.deleteState = false
      this.typing = false
      this.validated = true
    },
    focusAction: function () {
      if (this.validated == false) {
        this.typing = true
      }
      if (this.input == "") {
        this.deleteState = false
        this.typing = true
        this.validated = false
      }
    },
    switchLinkType: function(id) {
      this.selectedURLState = true
      switch(id) {
        case 1:
          this.linkState = "email"
          break
        case 2:
          this.linkState = "web"
          break
        case 3:
          this.linkState = "phone"
          break
        default:
          this.linkState = "web"
      }
    },
  }
}
</script>
