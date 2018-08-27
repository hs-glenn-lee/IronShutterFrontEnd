<template>
  <header class="global-header">
    <div class="flex-con-row"><!-- if not signed-in -->
      <div class="flex-item">
        <div class="logo">logo</div>
      </div>
      <div class="flex-con">
        <div @click="goToSignIn" class="header-link">로그인</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'global-header',
  methods: {
    goToSignIn () {
      console.log('???')
      this.$router.push({ name: 'SignIn' })
    }
  }
}
</script>

<style scoped>
  header {

  }

  .flex-con-row {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .flex-item {
    display:inline-block;
  }
  .logo {
    /* temp */
    display: inline-block;

    background-color: #c3c3c3;
    text-align: center;
    width:280px;
    height: 32px;
  }

  .header-link {
    padding: 4px;
    margin: 0px 4px 0px 4px;
  }
</style>
