<template>
  <div class="charge">
    <global-header></global-header>
    <div class="center-block">
      <nav class="charge-nav">
        <ul class="nav-button-list">
          <li class="nav-button">개요</li>
          <li class="nav-button">결제하기</li>
          <li class="nav-button">결제이력</li>
        </ul>
      </nav>
      <component :is="'charge-overview'"></component>
    </div>
  </div>
</template>

<script>
import GlobalHeaderComp from '../global-header'
import ChargeOverviewComp from './charge-overview'
export default {
  name: 'charge',
  components: {
    'global-header': GlobalHeaderComp,
    'charge-overview': ChargeOverviewComp
  }
}
</script>

<style scoped>

</style>
