<template>
  <div class="subscription">
    <div v-if="mode=='my'">
      <div class="header row flex-con-row">
        <span class="period" style="margin-right: 16px;">
          <span>{{subscription.periodAmount}} {{decodedPeriodUnit}}</span>
        </span>

        <span class="state wrapped">{{decodedState}}</span>
      </div>

      <div class="subscriber row">
        <span class="user-select-none label">구독자 :</span>
        <span class="">{{subscription.subscriber.username}}</span>
      </div>

      <div class="charge-amount row">
        <span class="label">금액 :</span>
        <span>{{subscription.chargeAmount}}원</span>
      </div>

      <div class="time row">
        <div v-if="subscription.state === 'REQUESTED'">
          <span class="label">신청 시각: </span>
          <span>{{stampToLocalString(subscription.requestedAt)}}</span>
        </div>
        <div v-if="subscription.state === 'CANCELED'"><span>취소 시각</span><span>{{stampToLocalString(subscription.canceledAt)}}</span></div>
        <div v-if="subscription.state === 'PERMITTED'"><span>승인 시각</span><span>{{stampToLocalString(subscription.permittedAt)}}</span></div>
        <div v-if="subscription.state === 'ACTIVATED'"><span>활성화 시각</span><span>{{stampToLocalString(subscription.activatedAt)}}</span></div>
        <div v-if="subscription.state === 'EXPIRED'"><span>만료 시각</span><span>{{stampToLocalString(subscription.expireAt)}}</span></div>
      </div>
    </div>

    <div v-if="mode=='manager'">
      <div class="header row">
        <span class="state wrapped">{{decodedState}}</span>
        <span class="id">{{subscription.id}}</span>
      </div>

      <div class="row">
        <span class="period">{{subscription.periodAmount}}<span>{{decodedPeriodUnit}}</span>,</span>
        <span class="charge-amount">{{subscription.chargeAmount}}<span>원</span></span>
      </div>

      <div class="subscriber row">
        <span style="margin-right: 8px;">구독자 정보</span>
        <span class="wrapped"><span class="user-select-none">id:</span>{{subscription.subscriber.id}}</span>
        <span class="wrapped"><span class="user-select-none">username: </span>{{subscription.subscriber.username}}</span>
      </div>

      <div class="time row">
        <div><span>신청 시각</span><span>{{stampToLocalString(subscription.requestedAt)}}</span></div>
        <div><span>취소 시각</span><span>{{stampToLocalString(subscription.canceledAt)}}</span></div>
        <div><span>승인 시각</span><span>{{stampToLocalString(subscription.permittedAt)}}</span></div>
        <div><span>활성화 시각</span><span>{{stampToLocalString(subscription.activatedAt)}}</span></div>
        <div><span>만료 시각</span><span>{{stampToLocalString(subscription.expireAt)}}</span></div>
      </div>
    </div>

  </div>
</template>

<script>
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
          break
        case 'CANCELED' :
          decodedState = '취소'
          break
        case 'PERMITTED' :
          decodedState = '승인'
          break
        case 'ACTIVATED' :
          decodedState = '활성'
          break
        case 'EXPIRED' :
          decodedState = '만료'
          break
      }
      return decodedState
    },
    decodedPeriodUnit () {
      let decodedPeriodUnit = ''
      switch (this.subscription.periodUnit) {
        case 'month' :
          decodedPeriodUnit = '개월'
          break
      }
      return decodedPeriodUnit
    }
  },
  methods: {
    stampToLocalString (timestamp) {
      if (timestamp) {
        return new Date(timestamp).toLocaleString()
      } else {
        return ''
      }
    }
  },
  created () {
    this.mode = this.mode || 'my'
  }
}
</script>

<style scoped>
  div.subscription {
    padding: 4px;
    background-color: #f4f4f4;
  }

  div.row {
    margin-bottom: 2px;
    padding: 4px;
  }

  div.header {
    padding: 12px 4px 12px 4px;
    background-color: #fff;
  }

  .flex-con-row {
    display:flex;
    flex-direction: row;
    align-items: center;
  }

  span.wrapped {
    display: inline-block;
    padding: 4px;
    border: 1px solid black;
    border-radius: 4px;
  }

  .period {
    font-size: 1.5em;
  }

  span.label {
    display: inline-block;
    width: 100px;
  }
</style>
