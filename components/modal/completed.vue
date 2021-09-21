<template>
  <modal name="completed" transition="pop-out" :adaptive="true" width="400" height="auto" @before-open="beforeOpen" @before-close="beforeClose">
    <div class="modal-wrapper">
      <div class="m-close">
        <div class="m-title">Ücretsiz fiyat teklifi al</div>
        <img :src="require('~/assets/images/close.svg')" alt="" @click="$modal.hide('completed')">
      </div>
      <div class="m-body">

        <!-- Success -->
        <div class="successText">Fiyat teklifin başarıyla iletildi!</div>
        <div class="returnCompanies">{{ activeCompaniesName }} sana en kısa sürede dönüş yapacak.</div>
        <!-- Success -->

      </div>
    </div>
  </modal>
</template>

<script>
export default {
  methods: {

    /**
     * popup interceptor. Açılmadan hemen önce
     * Body popup açıldığında arka planda scroll olmasın diye.
     */
    beforeOpen(){
      document.querySelector('body').classList.add('lockedBody');
    },

    /**
     * popup interceptor. Kapanmadan hemen önce
     */
    beforeClose(){
      document.querySelector('body').classList.remove('lockedBody');
    },
  },
  computed : {
    /**
     * Property geriye o anda hangi companies'in formunu success ise, onun name'ini geriye return eder.
     * @returns string => tıklanan companies name
     */
    activeCompaniesName() {
      return this.$store.state.modules.companies.activeName
    }
  },
};
</script>

<style>
.successText{letter-spacing: -0.27px;color: #00ABAA;font-size: 15px;position: relative;display: flex;align-items: center}
.successText:before{content:"";background-image: url("~assets/images/completed.svg");width:18px;height: 18px;display: inline-block;margin:0 5px 0 0;}
.returnCompanies{letter-spacing: -0.2px;color: var(--text-soft-black);font-size:14px;text-indent: 25px;margin:5px 0 0 0;}
</style>
