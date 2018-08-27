<template>
  <div>
    <global-header></global-header>
    <section>
    </section>
    <common-footer></common-footer>
  </div>
</template>

<script>
import GlobalHeaderComp from './global-header'
import CommonFooterComp from './common-footer'
export default {
  name: 'Home',
  components: {
    'common-footer': CommonFooterComp,
    'global-header': GlobalHeaderComp
  }
}
</script>

<style scoped>
  section {
    min-height: 400px;
  }
</style>
