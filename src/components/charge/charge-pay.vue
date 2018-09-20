<template>
  <div class="charge-pay">
    <div class="charge-guide-pay">
      <p>결제과정은 블라블라</p>
    </div>
    <div class="active">
      <form class="request-subscription-form">
        <div>
          <span>기간</span><input v-model.number="requestForm.periodAmount" type="text"><span>개월</span>
        </div>
        <div>
          <span>금액</span><span>{{requestForm.chargeAmount}}</span>
        </div>
        <button @click="submitRequestForm" type="button">신청</button>
      </form>

      <div class="overview-pay">
        <div class="permitted-subscription">
          <div><span>승인된 구독</span></div>
          <subscription-card v-if="permittedSubscription" :subscription="permittedSubscription"></subscription-card>
        </div>
        <div class="requested-subscription">
          <div><span>신청된 구독</span></div>
          <subscription v-if="requestedSubscription" :subscription="requestedSubscription" :mode="'my'"></subscription>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import api from '../../api/api'
import { mapActions } from 'vuex'
import SubscriptionState from '../../model/SubscriptionState'
import Subscription from '../../model/Subscription'
import SubscriptionComp from './subscription'

export default {
  name: 'charge-paying',
  components: {
    'subscription': SubscriptionComp
  },
  data () {
    return {
      requestForm: {
        periodAmount: 0,
        periodUnit: 'month',
        chargeAmount: 0
      },
      chargeUnitTime: 'month',
      chargeRatio: null,
      requestedSubscription: null,
      permittedSubscription: null
    }
  },
  methods: {
    ...mapActions(['syncSign']),
    submitRequestForm () {
      let requestingSubscription = new Subscription()
      requestingSubscription.periodAmount = this.requestForm.periodAmount
      requestingSubscription.periodUnit = this.requestForm.periodUnit
      api.requestSubscription(requestingSubscription)
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    onCreated () {
      // this.syncSign()
      api.getSubscriptionChargeRatio()
        .then(data => {
          console.log(data)
          data.forEach(el => {
            if (el.unitTime === this.chargeUnitTime) {
              console.log('!!!')
              this.chargeRatio = el
            }
          })
        })
      api.getSubscriptionOverview()
        .then(data => {
          data.forEach(el => {
            if (el.state === SubscriptionState.REQUESTED) {
              this.requestedSubscription = el
            }
            if (el.state === SubscriptionState.PERMITTED) {
              this.permittedSubscription = el
            }
          })
        })
    }
  },
  watch: {
    'requestForm.periodAmount': function (val, oldVal) {
      console.log('watch periodAmount')
      console.log(this.chargeRatio)
      this.requestForm.chargeAmount = this.chargeRatio.chargePerUnit * this.requestForm.periodAmount
    }
  },
  created () {
    this.onCreated()
  }
}
</script>

<style scoped>

</style>
