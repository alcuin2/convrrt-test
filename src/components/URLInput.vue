<template>
    
      <div class="container mt-20 flex justify-center items-center mx-auto">
        <div class="relative rounded-lg"
          v-bind:class = "store.input=='' && store.typing?'border border-red-200':'border-transparent'"
          >
          <popper trigger="hover" 
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
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                      <span class="ml-2 truncate">Link to Email</span>
                    </div>
                  </li>
                  <li class="mb-1">
                    <div 
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 w-full cursor-pointer items-center"
                      @click="switchLinkType(2)"
                    >
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link" class="svg-inline--fa fa-link fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></svg>
                      <span class="ml-2 truncate">Link to Page</span>
                    </div>
                  </li>
                  <li class="mb-1">
                    <div 
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 w-full cursor-pointer items-center"
                      @click="switchLinkType(3)"
                    >
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" class="svg-inline--fa fa-mobile-alt fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
                      <span class="ml-2 truncate">Link to Phone</span>
                    </div>
                  </li>
                </ul>
              </div> 
            </div>
            <div 
              slot="reference"
              class="absolute h-full w-12 bg-gray-200 flex justify-center items-center cursor-pointer rounded-l-lg hover:bg-gray-400"
              v-show="!store.typing"
              v-bind:class = "store.selectedURLState?'bg-gray-600':'bg-gray-200'"
              @click="flipSelectedURL"
              >
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link" class="svg-inline--fa fa-link fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"  v-show="store.linkState == 'web'" v-bind:class = "store.selectedURLState?'text-gray-200':'text-gray-600'"><path fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></svg>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512" v-show="store.linkState == 'email'" v-bind:class = "store.selectedURLState?'text-gray-200':'text-gray-600'"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
          
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" class="svg-inline--fa fa-mobile-alt fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 320 512" v-show="store.linkState == 'phone'" v-bind:class = "store.selectedURLState?'text-gray-200':'text-gray-600'"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>

            </div>
          </popper>
           
           <input type="text" 
              class="h-14 w-96 rounded-lg z-0 focus:shadow focus:outline-none bg-gray-100" 
              :placeholder="store.linkState.toUpperCase()"
              v-model="store.input"
              v-bind:class = "store.typing?'pl-5 pr-24':'pl-16 pr-24'"
              @focus="focusAction"
              />

            <div 
              class="absolute h-full top-0 right-12 flex justify-center items-center w-12"
              v-show="store.typing"
              v-bind:class = "store.input=='' && store.typing?'bg-red-600':'bg-gray-400'"
              > 
                
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16 z-20 text-white" role="img" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                
            </div>

            <div 
              class="absolute h-full top-0 right-12 flex justify-center items-center w-12 bg-transparent cursor-pointer"
              v-show="store.deleteState"
              @click="clearInput"
              > 
               
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14 z-20 text-gray-500" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
                 
            </div>


            <div 
              class="absolute h-full top-0 right-0 flex justify-center items-center w-12 cursor-pointer rounded-r-lg hover:bg-gray-400"
              @click="flipTargetLinkBlank"
              v-bind:class = "store.targetLinkBlank?'bg-gray-600':'bg-gray-200'"
              v-show="store.validated"
              > 
               
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16 z-20" width="20px" height="20px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" v-bind:class = "store.targetLinkBlank?'text-gray-200':'text-gray-600'"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" ></path></svg>
      
            </div>

            <div 
              class="absolute h-full top-0 right-0 flex justify-center items-center w-12 cursor-pointer rounded-r-lg cursor-pointer bg-gray-400"
              v-show="store.typing"
              @click="clearInput"
              > 
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 text-white z-20" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg> 
            </div>
        </div>
    
  </div>
</template>

<script>

import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import Store from "../store";

const store = Store.state.compState;

export default {
  name: 'URLInput',
  components: {
    'popper': Popper
  },
  data() {
    return {
      store,
    }
  },
  computed: {
    input () {
      return store.input
    }
  },
  watch: {
    input : function (value) {
      Store.dispatch('setTyping', true)
      Store.dispatch('setDeleteState', false)

      if (this.store.linkState == "web"){
        const re = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        Store.dispatch('setValidated', re.test(value))
        
      }
      if (this.store.linkState == "email"){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const bool = re.test(String(value).toLowerCase());
        Store.dispatch('setValidated', bool);
      }
      if (this.store.linkState == "phone") {
        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        const bool = re.test(value)
        Store.dispatch('setValidated', bool)

      }
      if (this.store.validated){
          Store.dispatch('setTyping', false)
          Store.dispatch('setDeleteState', true)
      }
      
    }
  },

  methods: {
    flipSelectedURL: function() {
      if (store.selectedURLState){
        Store.dispatch('setSelectedURLstate', false)
      }
      else {
        Store.dispatch('setSelectedURLstate', true)
      }
    },
    flipTargetLinkBlank: function(){
      if (store.targetLinkBlank){
        Store.dispatch('setTargetLinkBlank', false)
      }
      else {
        Store.dispatch('setTargetLinkBlank', true)
      }
    },
    clearInput: function(){
      Store.dispatch('setInput', '')
      Store.dispatch('setDeleteState', false)
      Store.dispatch('setTyping', false)
      Store.dispatch('setValidated', true)
    },
    focusAction: function () {
      if (this.store.validated == false) {
        Store.dispatch('setTyping', true)
      }
      if (this.store.input == "") {
        Store.dispatch('setDeleteState', false)
        Store.dispatch('setTyping', true)
        Store.dispatch('setValidated', false)
      }
    },
    switchLinkType: function(id) {
      Store.dispatch('setSelectedURLstate', true)
      switch(id) {
        case 1:
          Store.dispatch('setLinkState', 'email')
          break
        case 2:
          Store.dispatch('setLinkState', 'web')
          break
        case 3:
          Store.dispatch('setLinkState', 'phone')
          break
        default:
          Store.dispatch('setLinkState', 'web')
      }
    },
  }
}
</script>
