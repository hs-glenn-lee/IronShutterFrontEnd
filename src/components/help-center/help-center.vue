<template>
  <div class="help-center">
    <home-header></home-header>
    <!--
    <div class="center-block" style="margin-bottom: 32px;">
      <div class="main flex-col w100p">
        <div class="main-content-item w100p">
          <nav class="help-center-link&#45;&#45;wrap w100p">
            <div class="help-center-link">
              <div class="icon-cont">
                <img src="../../assets/images/headset.svg"/>
              </div>
              <div class="title">
                <span>문의하기</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    -->
    <customer-request></customer-request>
    <div class="context-switch-board"></div>
    <recap-footer></recap-footer>
  </div>
</template>

<script>
import HomeHeaderComp from '../headers/home-header'
import CustomerRequestComp from './customer-request/customer-request-home'
import RecapFooterComp from '../footers/recap-footer'

export default {
  name: 'HelpCenter',
  components: {
    'home-header': HomeHeaderComp,
    'customer-request': CustomerRequestComp,
    'recap-footer': RecapFooterComp
  }
}
</script>

<style scoped>
  .w100p {
    width: 100%;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .help-center-link--wrap {
    /*
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(1,1fr);
    */
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--grey-bg-color);
    padding: 4px;
  }

  .help-center-link--wrap .help-center-link {
    width: 138px;
    height: 138px;

    padding: 16px;
    border-radius: 4px;
    /*box-shadow: 0px 0px 3px rgba(0,0,0,.2);*/

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .help-center-link >.icon-cont {
    width: 96px;
    height: 96px;
    margin-bottom: 16px;
  }

  .help-center-link > .title {
    font-size: 1.5em;
    text-align: center;
  }

  .context-switch-board {
    height: 170px;
    opacity: 0.5;
    background: var(--grey-bg-color) url("../../assets/images/bg_halftone_black_20p.png");
  }
</style>
