import api from '../../api/api'

const state = {
  sign: {
    account: null,
    isSignedIn: false
  }
}
const getters = {
  getSign: state => {
    return state.sign
  },
  getAccount: state => {
    return state.sign.account
  },
  isSignedIn: state => {
    return state.sign.isSignedIn
  }
}
const mutations = {
  setAccount: (state, payload) => {
    state.sign.account = payload
  },
  setIsSignedIn: (state, payload) => {
    state.sign.isSignedIn = payload
  },
  setSign: (state, payload) => {
    state.sign.account = payload.account
    state.sign.isSignedIn = payload.isSignedIn
  }
}
const actions = {
  syncSign: (context) => {
    if (!state.sign.isSignedIn) {
      return api.myAccount()
        .then(data => {
          context.commit('setAccount', data)
          context.commit('setIsSignedIn', true)
          return Promise.resolve(data)
        })
        .catch(errMsg => {
          return Promise.reject(errMsg)
        })
    } else {
      return Promise.resolve(this.account)
    }
  },
  signIn: (context, payload) => {
    if (!payload.username) {
      return Promise.reject(new Error('사용자명을 입력하세요.'))
    }
    if (!payload.password) {
      return Promise.reject(new Error('비밀번호를 입력하세요.'))
    }
    return api.signIn(payload)
  },
  signUp: (context, payload) => {
    const signUpForm = payload
    return api.signUp(signUpForm)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
