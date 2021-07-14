import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    compState: {
      linkState: "web",
      targetLinkBlank: false,
      selectedURLState: false,
      input: "",
      validated: true,
      typing: false,
      deleteState: false
    }
  },

  mutations: {
    SET_LINKSTATE(state, value){
      state.compState.linkState = value;
    },
    SET_TARGETLINKBLANK(state, value){
      state.compState.targetLinkBlank = value;
    },
    SET_SELECTEDURLSTATE(state, value){
      state.compState.selectedURLState = value;
    },
    SET_INPUT(state, value){
      state.compState.input = value;
    },
    SET_VALIDATED(state, value){
      state.compState.validated = value;
    },
    SET_TYPING(state, value){
      state.compState.typing = value;
    },
    SET_DELETESTATE(state, value){
      state.compState.deleteState = value;
    }
  },

  actions: {

    setLinkState({ commit }, value){
      commit('SET_LINKSTATE', value)
    },
    setTargetLinkBlank( { commit }, value ){
      commit( 'SET_TARGETLINKBLANK', value)
    },
    setSelectedURLstate({ commit }, value){
      commit( 'SET_SELECTEDURLSTATE', value)
    },
    setInput({ commit }, value){
      commit('SET_INPUT', value)
    },
    setValidated({ commit }, value){
      commit('SET_VALIDATED', value)
    },
    setTyping({ commit }, value) {
      commit('SET_TYPING', value)
    },
    setDeleteState({ commit }, value){
      commit('SET_DELETESTATE', value)
    }
  },

  modules: {
  }
})
