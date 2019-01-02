<template>
  <div class="my-customer-requests">

  </div>
</template>

<script>
import HomeHeaderComp from '../../headers/home-header'
export default {
  name: 'MyCustomerRequests',
  components: {
    'home-header': HomeHeaderComp
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .request-form {
    margin: 32px 0;
  }

</style>
