<template>
  <div class="charge-overview">
    <div v-if="isAppAvailable" class="app-availability">
      <div class="result-symbol">
        <span>O</span>
      </div>
      <div class="result-message">
        <span>앱 사용이 가능합니다.</span>
      </div>
    </div>
    <div v-else class="app-availability">
      <div class="result-symbol">
        <span>X</span>
      </div>
      <div class="result-message">
        <span>앱 사용이 불가능합니다.</span>
      </div>
    </div>

    <div class="activated-subscription">
      <div class="state">적용중인 구독</div>
      <div class="period">6 개월</div>
      <div class="expiration-message">만료일까지 앱 사용이 가능합니다.</div>
    </div>

    <div class="permitted-subscription">
      <div class="state">적용 대기</div>
      <div class="period">3 개월</div>
      <div class="expiration-message">만료일까지 앱 사용이 가능합니다.</div>
    </div>

    <div class="requested-subscription">
      <div class="state">입금 확인 중</div>
      <div class="period">3 개월</div>
      <div class="expiration-message">구독 금액의 입금을 확인중입니다.</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'charge-overview',
  data () {
    return {
      state: 'loading', /* loading ready */
      activated: null,
      permitted: null,
      requested: null
    }
  },
  methods: {
    getOverview () {
      console.log('') // api
    }
  },
  computed: {
    isAppAvailable () {
      return false
    }
  }
}
</script>

<style scoped>

</style>
