<template>
  <modal name="clientForm" transition="pop-out" :adaptive="true" width="400" height="auto" @before-open="beforeOpen" @before-close="beforeClose">
    <div class="modal-wrapper">
      <div class="m-close">
        <div class="m-title">Ücretsiz fiyat teklifi al</div>
        <img :src="require('~/assets/images/close.svg')" alt="" @click="$modal.hide('clientForm')">
      </div>
      <div class="m-body">

        <form id="companiesForm" @submit="sendCompaniesForm($event)">

          <!-- Form Elem's -->
          <template v-for="input in activeCompaniesForm" >
            <customInput :input="input"></customInput>
          </template>
          <!-- Form Elem's -->

          <!-- User Terms -->
          <div class="control-group field">
            <label class="control control-checkbox">
              <a href="javascript:void(0)">Kullanıcı sözleşmesi</a> ve <a href="javascript:void(0)">pazarlama izni</a> metinlerini okudum ve kabul ediyorum.
              <input type="checkbox" required="required" />
              <div class="control_indicator"></div>
            </label>
          </div>
          <!-- User Terms -->

          <!-- Get Offer -->
          <div class="field">
            <button class="button primaryBg">Ücretsiz teklif al</button>
          </div>
          <!-- Get Offer -->

        </form>

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
    sendCompaniesForm(_event){
      let self = this;
      self.$nuxt.$loading.start()
      setTimeout(() => {
        self.$modal.hide('clientForm');
        self.$modal.show('completed');
        self.$nuxt.$loading.finish();
      },1000);
      _event.preventDefault();
    }
  },
  components: {
    customInput : () => import('~/components/global/formInput'),
  },
  computed : {
    activeCompaniesForm() {
      return this.$store.state.modules.companies.activeForm
    }
  },
};
</script>

<style>


</style>
