<template>
  <div class="customer-request-home">
    <div class="center-block">
      <customer-request-form></customer-request-form>
      <my-customer-requests></my-customer-requests>
    </div>
  </div>
</template>

<script>
import HomeHeaderComp from '../../headers/home-header'
import CustomerRequestForm from './customer-request-form'
import MyCustomerRequests from './my-customer-requests'

export default {
  name: 'customerRequestHome',
  components: {
    'home-header': HomeHeaderComp,
    'customer-request-form': CustomerRequestForm,
    'my-customer-requests': MyCustomerRequests
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
