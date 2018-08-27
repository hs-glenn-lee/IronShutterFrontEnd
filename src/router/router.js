import Vue from 'vue'
import Router from 'vue-router'
import HomeComp from '../components/home.vue'
import SignInComp from '../components/sign-in.vue'
import SignUpComp from '../components/sign-up.vue'
import ChargeComp from '../components/charge/charge.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComp
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignInComp
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUpComp
    },
    {
      path: '/charge',
      name: 'Charge',
      component: ChargeComp
    }
  ]
})
