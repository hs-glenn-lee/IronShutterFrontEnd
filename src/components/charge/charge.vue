<template>
  <div class="charge">
    <global-header></global-header>
    <div class="center-block">
      <nav class="charge-nav">
        <ul class="nav-tab-list">
          <li @click="changeTabTo('charge-overview')" class="nav-tab">개요</li>
          <li @click="changeTabTo('charge-pay')" class="nav-tab">결제하기</li>
          <li @click="changeTabTo('charge-log')" class="nav-tab">결제이력</li>
        </ul>
      </nav>
      <component :is="currentTab"></component>
    </div>
  </div>
</template>

<script>
import GlobalHeaderComp from '../global-header'
import ChargeOverviewComp from './charge-overview'
import ChargePayComp from './charge-pay'
import ChargePayLogComp from './charge-log'

export default {
  name: 'charge',
  data () {
    return {
      currentTab: 'charge-overview'
    }
  },
  methods: {
    changeTabTo (compName) { // TODO debounce
      this.currentTab = compName
    }
  },
  components: {
    'global-header': GlobalHeaderComp,
    'charge-overview': ChargeOverviewComp,
    'charge-pay': ChargePayComp,
    'charge-log': ChargePayLogComp
  }
}
</script>

<style scoped>

</style>
