<template>
  <div class="subscription">
    <div class="state">{{decodedState}}</div>

    <div v-if="mode=='manager'">
      <div class="id">
        <span>id: </span>{{subscription.id}}
      </div>
      <div class="subscriber">
        <span>id: {{subscription.subscriber.id}}</span>
        <span>username: {{subscription.subscriber.username}}</span>
      </div>
    </div>

  </div>
</template>

<script>
/*
  this.id = id
  this.subscriber = subscriber;
  this.state = state;
  this.periodAmount = periodAmount;
  this.periodUnit = periodUnit;
  this.chargeAmount = chargeAmount;
  this.requestedAt = requestedAt;
  this.canceledAt = canceledAt;
  this.permittedAt = permittedAt;
  this.expireAt = expireAt; */
export default {
  name: 'subscription',
  props: {
    subscription: Object,
    mode: Object // my, my-short, manager, manager-short
  },
  data () {
    return {
    }
  },
  computed: {
    decodedState () {
      let state = this.subscription.state
      let decodedState = ''
      switch (state) {
        case 'REQUESTED' :
          decodedState = '신청'
          break;
        case 'CANCELED' :
          decodedState = '취소'
          break;
        case 'PERMITTED' :
          decodedState = '승인'
          break;
        case 'ACTIVATED' :
          decodedState = '활성'
          break;
        case 'EXPIRED' :
          decodedState = '만료'
          break;
      }
      return decodedState;
    }
  },
  created () {
    this.mode = this.mode || 'my'
  }
}
</script>

<style scoped>

</style>
