<template>
  <div class="charge">
    <global-header></global-header>
    <div class="center-block">
      <nav class="charge-nav">
        <ul class="tab-list flex-con-row">
          <li @click="changeTabTo('charge-overview')" class="tab flex-item pad-8 hover-pointer hover-bc-grey">개요</li>
          <li @click="changeTabTo('charge-pay')" class="tab flex-item pad-8 hover-pointer hover-bc-grey">결제하기</li>
          <li @click="changeTabTo('charge-log')" class="tab flex-item pad-8 hover-pointer hover-bc-grey">결제이력</li>
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
  .flex-con-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .flex-item {
    display: flex;
  }
  .hover-bc-grey:hover {
    background-color: #ececec;
  }
</style>
