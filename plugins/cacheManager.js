
import Vue from 'vue';

Vue.mixin({
  methods: {
    $getCompaniesFormCache(companiesId){
      return JSON.parse(sessionStorage.getItem(companiesId));
    },
    $setCompaniesFormCache(companiesId,data){
      sessionStorage.setItem(companiesId,JSON.stringify(data));
    }
  }
});
