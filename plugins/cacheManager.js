
import Vue from 'vue';

Vue.mixin({
  methods: {
    /**
     * Metot geriye cache'den tıklanan companies'in formu var mı geriye döner.
     * @param companiesId
     * @returns {any}
     */
    $getCompaniesFormCache(companiesId){
      return JSON.parse(sessionStorage.getItem(companiesId));
    },
    /**
     * Metot içerisine companiesId ve form alır. Cache' kaydeder.
     * Daha sonrasında get metoduyla data geri alınır.
     * @param companiesId
     * @param form
     */
    $setCompaniesFormCache(companiesId,form){
      sessionStorage.setItem(companiesId,JSON.stringify(form));
    }
  }
});
