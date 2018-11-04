<template>
    <footer class="recap-footer">
      <div class="content-container center-block">

        <a href="/">
          <img src="../../assets/images/logo-banner.png"/>
        </a>

        <nav class="c-footer--wrap">
          <div class="c-nav--footer-block">
            <p class="c-nav--footer-listheader">Company</p>
            <ul class="c-nav--footer__list">
              <li class="c-nav--footer-listitem">
                <router-link :to="{name: 'Home'}"><span>About Us</span></router-link>
              </li>
            </ul>
          </div>
          <div class="c-nav--footer-block">
            <p class="c-nav--footer-listheader">Product</p>
            <ul class="c-nav--footer__list">
              <li class="c-nav--footer-listitem">
                <router-link :to="{name: 'Home'}"><span>소개</span></router-link>
              </li>
              <li class="c-nav--footer-listitem">
                <router-link :to="{name: 'Home'}"><span>요금제</span></router-link>
              </li>
            </ul>
          </div>
          <div class="c-nav--footer-block">
            <p class="c-nav--footer-listheader">함께하기</p>
            <ul class="c-nav--footer__list">
              <li class="c-nav--footer-listitem">
                <router-link :to="{name: 'Home'}"><span>다운로드</span></router-link>
              </li>
              <li class="c-nav--footer-listitem">
                <router-link :to="{name: 'Home'}"><span>고객센터</span></router-link>
              </li>
              <li class="c-nav--footer-listitem">
                <router-link :to="{name: 'Home'}"><span>도움말</span></router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'recap-footer'
}
</script>

<style scoped>
  footer.recap-footer {
    background-color: #fff;
    padding: 4em 0 5em 0;
  }

  div.content-container {
    display: flex;
    justify-content: space-between;
  }

  .c-footer--wrap {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(3,1fr);
  }

  .c-nav--footer-block {
    flex: 1 1 auto;
    color: var(--grey-text-color);
  }

  .c-nav--footer-block li{
    padding: 0.5em 0px;
  }

  p.c-nav--footer-listheader {
    font-weight: bold;
    padding: 0.5em 0px;
  }
</style>
