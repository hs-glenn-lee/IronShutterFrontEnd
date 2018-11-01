<template>
  <div class="charge-manager">
    <ul class="requested-subscriptions">
      <li v-for="(subs) in subsList" :key="subs.id">
        <div>
          <span>신청자</span><span>{{subs.subscriber.username}}</span>
        </div>
        <subscription :subscription="subs" :mode="'manager'"></subscription>
        <button @click="permitSubscription(subs)" type="button">승인</button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../../api/api'
import PageParameter from '../../model/PageParameter'
import SubscriptionComp from './subscription'
export default {
  name: 'charge-manager-test',
  components: {
    'subscription': SubscriptionComp
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
