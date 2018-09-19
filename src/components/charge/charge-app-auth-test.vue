<template>
  <div class="app-auth-test">
    {{JSON.stringify(appAuth)}}
  </div>
</template>

<script>
import api from '../../api/api'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'charge-manager-test',
  data () {
    return {
      appAuth: null
    }
  },
  methods: {
    ...mapActions(['syncSign']),
    onCreated () {
      this.syncSign()
        .then(() => {
          api.appAuthenticate(this.getAccount.username)
            .then(data => {
              this.appAuth = data
            })
        })
    }
  },
  computed: {
    ...mapGetters(['getAccount'])
  },
  created () {
    this.onCreated()
  }
}
</script>

<style scoped>

</style>
