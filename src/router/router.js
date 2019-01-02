import Vue from 'vue'
import Router from 'vue-router'
import HomeComp from '../components/home.vue'
import SignInComp from '../components/sign/sign-in.vue'
import SignUpComp from '../components/sign/sign-up.vue'
import ChargeComp from '../components/charge/charge.vue'
import ChargeManagerTestComp from '../components/charge/charge-manager-test'
import ChargeAppAuthTestComp from '../components/charge/charge-app-auth-test'
import PricingComp from '../components/pricing/pricing'
import DownloadComp from '../components/download/download'
import HelpCenterComp from '../components/help-center/help-center'

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
    },
    {
      path: '/charge/manager-test',
      name: 'ChargeManagerTest',
      component: ChargeManagerTestComp
    },
    {
      path: '/charge/app-auth-test',
      name: 'ChargeAppAuthTest',
      component: ChargeAppAuthTestComp
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: PricingComp
    },
    {
      path: '/download',
      name: 'Download',
      component: DownloadComp
    },
    {
      path: '/help-center',
      name: 'HelpCenter',
      component: HelpCenterComp
    }
  ]
})
