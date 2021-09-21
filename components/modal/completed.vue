<template>
  <modal name="completed" transition="pop-out" :adaptive="true" width="400" height="auto" @before-open="beforeOpen" @before-close="beforeClose">
    <div class="modal-wrapper">
      <div class="m-close">
        <div class="m-title">Ücretsiz fiyat teklifi al</div>
        <img :src="require('~/assets/images/close.svg')" alt="" @click="$modal.hide('completed')">
      </div>
      <div class="m-body">

        <div class="successText">Fiyat teklifin başarıyla iletildi!</div>
        <div class="returnCompanies">Lazzoni Hotel sana en kısa sürede dönüş yapacak.</div>

      </div>
    </div>
  </modal>
</template>

<script>
export default {
  methods: {
    beforeOpen(){
      document.querySelector('body').classList.add('lockedBody');
    },
    beforeClose(){
      document.querySelector('body').classList.remove('lockedBody');
    },
  },
};
</script>

<style>

.successText{letter-spacing: -0.27px;color: #00ABAA;font-size: 15px;position: relative;display: flex;align-items: center}
.successText:before{content:"";background-image: url("~assets/images/completed.svg");width:18px;height: 18px;display: inline-block;margin:0 5px 0 0;}
.returnCompanies{letter-spacing: -0.2px;color: #5F5F5F;font-size:14px;text-indent: 25px;margin:5px 0 0 0;}


</style>
