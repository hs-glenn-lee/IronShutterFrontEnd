<template>
  <div class="subscription-card">
    <div v-if="subscription" class="card" :style="{'background-color': stateColor}">
      <div class="detail">
        <div class="state pad-8">
          <span>{{stateMessage}}</span>
        </div>
        <div class="period">
          <span>기간: </span><span>{{subscription.periodAmount}}</span> <span>{{subscription.periodUnit}}</span>
        </div>
        <div class="charge-amount">
          <span>결재금액: {{subscription.chargeAmount}}</span><span>원</span>
        </div>
        <div class="requested-date">
          <span>신청일</span><span>{{subscription.requestedAt}}</span>
        </div>
        <div class="canceled-date">
          <span>취소일</span><span>{{subscription.canceledAt}}</span>
        </div>
        <div class="permitted-date">
          <span>승인일</span><span>{{subscription.permittedAt}}</span>
        </div>
        <div class="activated-date">
          <span>활성일</span><span>{{subscription.activatedAt}}</span>
        </div>
        <div class="expire-date">
          <span>만료일</span><span>{{subscription.expireAt}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubscriptionState from '../../model/SubscriptionState'
export default {
  name: 'subscription-card',
  props: {
    subscription: Object
  },
  data () {
    return {
      isShowingDetail: true
    }
  },
  computed: {
    stateMessage () {
      let message = ''
      switch (this.subscription.state) {
        case SubscriptionState.REQUESTED : message = '신청'
          break
        case SubscriptionState.CANCELED : message = '취소'
          break
        case SubscriptionState.PERMITTED : message = '승인'
          break
        case SubscriptionState.ACTIVATED : message = '활성화'
          break
        case SubscriptionState.EXPIRED : message = '만료'
          break
      }
      return message
    },
    stateColor () {
      let color = ''
      switch (this.subscription.state) {
        case SubscriptionState.REQUESTED : color = '#e5e5e5'
          break
        case SubscriptionState.CANCELED : color = 'grey'
          break
        case SubscriptionState.PERMITTED : color = 'yellow'
          break
        case SubscriptionState.ACTIVATED : color = 'green'
          break
        case SubscriptionState.EXPIRED : color = 'red'
          break
      }
      return color
    }
  }
}
</script>

<style scoped>

</style>
