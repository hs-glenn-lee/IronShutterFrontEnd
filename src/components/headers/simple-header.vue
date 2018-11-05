<template>
  <header class="simple-header user-select-none">
    <div class="content-container">
      <div class="content-item c-logo">
        <div class="logo">
          <img src="../../assets/images/logo-banner.png"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'home-header',
  components: {},
  methods: {
    ...mapActions(['syncSign'])
  },
  created () {
    this.syncSign()
  }
}
</script>

<style scoped>
  header.simple-header {
    height: 60px;
  }

  div.content-container{
    height: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  div.content-item {
    display: flex;
  }

  .c-logo {
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid var(--context-border-color);
  }

  .logo {
    display: flex;
    justify-self: center;
  }

</style>
