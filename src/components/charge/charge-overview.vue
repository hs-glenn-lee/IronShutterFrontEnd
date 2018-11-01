<template>
  <div class="charge-overview">
    <div v-if="isAppAvailable" class="app-availability" style="background-color: green;">
      <div class="result-symbol">
        <span>O(아이콘)</span>
      </div>
      <div class="result-message">
        <span>앱 사용이 가능합니다.</span>
      </div>
    </div>
    <div v-else class="app-availability" style="background-color: red;">
      <div class="result-symbol">
        <span>X(아이콘)</span>
      </div>
      <div class="result-message">
        <span>앱 사용이 불가능합니다.</span>
      </div>
    </div>

    <div class="activated-subscription">
      <div class="state">활성화된 구독</div>
      <subscription v-if="activatedSubscription" :subscription="activatedSubscription" :mode="'my'"></subscription>
    </div>

    <div class="permitted-subscription">
      <div class="state">승인된 구독</div>
      <subscription v-if="permittedSubscription" :subscription="permittedSubscription" :mode="'my'"></subscription>
    </div>

    <div class="requested-subscription">
      <div class="state">입금 확인 중</div>
      <subscription v-if="requestedSubscription" :subscription="requestedSubscription" :mode="'my'"></subscription>
    </div>
  </div>
</template>

<script>
import api from '../../api/api'
import { mapGetters, mapActions } from 'vuex'
import SubscriptionComp from './subscription'
import SubscriptionState from '../../model/SubscriptionState'
export default {
  name: 'charge-overview',
  components: {
    'subscription': SubscriptionComp
  },
  data () {
    return {
      state: 'loading', /* loading ready */
      activatedSubscription: null,
      permittedSubscription: null,
      requestedSubscription: null
    }
  },
  methods: {
    ...mapActions(['syncSign']),
    onCreated () {
      // this.syncSign()
      // api.appAuthenticate

      api.getSubscriptionOverview()
        .then(data => {
          data.forEach(el => {
            if (el.state === SubscriptionState.ACTIVATED) {
              this.activatedSubscription = el
            }
            if (el.state === SubscriptionState.PERMITTED) {
              this.permittedSubscription = el
            }
            if (el.state === SubscriptionState.REQUESTED) {
              this.requestedSubscription = el
            }
          })
        })
    }
  },
  computed: {
    ...mapGetters(['getAccount']),
    isAppAvailable () {
      return false
    }
  },
  created () {
    this.onCreated()
  }
}
</script>

<style scoped>

</style>
