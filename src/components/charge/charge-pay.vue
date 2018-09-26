<template>
  <div class="charge-pay">
    <div id="charge-guide-pay">
      <p>결제안내</p>
      <p>결제과정은 블라블라</p>
    </div>
    <div class="active">
      <form id="request-subscription-form">
        <div style="margin-bottom: 8px;">
          <label class="input-label">기간</label><input v-model.number="requestForm.periodAmount" type="text"><label class="input-label">개월</label>
          <label>월 10000원</label>
        </div>
        <div style="margin-bottom: 16px;">
          <label class="input-label">계산된 결제금액</label><span>{{requestForm.chargeAmount}}</span>
        </div>
        <button @click="submitRequestForm" type="button" class="generic">구독 신청</button>
      </form>

      <div class="overview-pay">
        <div class="permitted-subscription">
          <div><span>승인된 구독</span></div>
          <subscription v-if="permittedSubscription" :subscription="permittedSubscription" :mode="'my'"></subscription>
        </div>
        <div class="requested-subscription">
          <div><span>신청된 구독</span><button v-if="requestedSubscription" type="button" class="generic">취소하기</button></div>
          <subscription v-if="requestedSubscription" :subscription="requestedSubscription" :mode="'my'"></subscription>
          <div v-else><span>구독정보를 받아오고 있습니다.</span></div>
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
  #charge-guide-pay {
    background-color: #eee;
    padding: 16px;
    margin-bottom: 16px;
  }

  #request-subscription-form {
    padding: 8px;
    margin: 4px 4px 16px 4px;
    border: 1px solid #8a8a8a;
  }

  #request-subscription-form label.input-label {
    font-size: 20px;
    color: #4a4a4a;
    margin-right: 8px;
  }

  #request-subscription-form input[type="text"] {
    font-size: 24px;
    border: 1px solid #8a8a8a;
    border-radius: 4px;
    padding: 2px;
    margin-right: 8px;
  }

  #request-subscription-form > button {
    width: 50%;
    font-size: 20px;
    background-color: #1c2b82;
    border: 1px solid #191140;
    color: #fff;
  }
</style>
