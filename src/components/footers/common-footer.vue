<template>
    <footer class="common-footer">
      <div class="center-block">
        <div class="footer-content-container">
          <ul class="c-nav--list">
            <li class="c-nav--list-item">
              <span><a target="_blank" rel="noopener noreferrer" href="/agreements/terms-of-service">이용약관</a></span>
            </li>
            <li class="c-nav--list-item">
              <span><a target="_blank" rel="noopener noreferrer" href="/agreements/privacy-policy">개인정보 처리방침</a></span>
            </li>
            <li class="c-nav--list-item">
              <span><a target="_blank" rel="noopener noreferrer" href="/agreements/privacy-policy">연락처</a></span>
            </li>
          </ul>
          <ul class="c-nav--list">
            <span></span>
          </ul>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'common-footer'
}
</script>

<style scoped>
  footer.common-footer {
    background-color: var(--grey-bg-color);
  }
  div.footer-content-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  .c-nav--list {
    height: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .c-nav--list-item a {
    color: var(--grey-text-color);
    font-weight: bold;
  }

  .c-nav--list-item {
    display: flex;
    height: inherit;
    align-items: center;

    padding: 8px;
  }
</style>
