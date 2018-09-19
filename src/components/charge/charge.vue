<template>
  <div class="charge">
    <global-header></global-header>
    <div class="center-block">
      <nav class="charge-nav">
        <ul class="nav-tab-list">
          <li @click="changeTabTo('charge-overview')" class="nav-tab psd-hover-cursor-pointer"><span>개요</span></li>
          <li @click="changeTabTo('charge-pay')" class="nav-tab psd-hover-cursor-pointer"><span>결제하기</span></li>
          <li @click="changeTabTo('charge-log')" class="nav-tab psd-hover-cursor-pointer"><span>결제이력</span></li>
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
    changeTabTo (compName, event) { // TODO debounce
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
  nav.charge-nav {
    margin-bottom: 8px;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
  }

  ul.nav-tab-list {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ul.nav-tab-list > li {
    display: flex;
    font-size: 1.5em;
    padding: 8px;
  }

  ul.nav-tab-list > li:hover {
    background-color: #ececec;
    transition: 0.4s;
  }
</style>
