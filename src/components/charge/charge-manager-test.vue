<template>
  <div class="charge-manager">
    <ul class="requested-subscriptions">
      <li v-for="(subs) in subsList" :key="subs.id">
        <div>
          <span>신청자</span><span>{{subs.subscriber.username}}</span>
        </div>
        <subscription-card :subscription="subs"></subscription-card>
        <button @click="permitSubscription(subs)" type="button">승인</button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../../api/api'
import PageParameter from '../../model/PageParameter'
import SubscriptionCardComp from './subscription-card'
export default {
  name: 'charge-manager-test',
  components: {
    'subscription-card': SubscriptionCardComp
  },
  data () {
    return {
      subsList: null
    }
  },
  methods: {
    onCreated () {
      this.findRequestedSubscription()
    },
    findRequestedSubscription () {
      let pageParameter = new PageParameter(0, 10, 'asc', 'requestedAt')
      api.getRequestedSubscriptionPage(pageParameter)
        .then(data => {
          console.log(data)
          this.subsList = data
        })
    },
    permitSubscription (subscription) {
      api.permitSubscription(subscription)
    }
  },
  created () {
    this.onCreated()
  }
}
</script>

<style scoped>

</style>
