<template>

  <div class="cardWrapper col-12 col-md-6 col-lg-4 col-lg-3">

    <!-- Image -->
    <dfImage
      :mobile="data.imageUrl"
      :tablet="data.imageUrl"
      :desktop="data.imageUrl"
      :title="data.district.name">
    </dfImage>
    <!-- Image END -->

    <!-- Detail -->
    <div class="cardDetailWrapper dfPadding">

      <!-- Min - Max Count -->
      <div class="countWrapper">
        <span class="dfCount minCount">{{ data.listingDataBrief[1].label }} {{ data.listingDataBrief[1].value }}</span>
        <span class="dotted">•</span>
        <span class="dfCount maxCount">{{ data.listingDataBrief[0].label }} {{ data.listingDataBrief[0].value }}</span>
      </div>
      <!-- Min - Max Count END -->

      <!-- Card Title -->
      <a href="#" class="cardTitle" :title="data.name">{{ data.name }}</a>
      <!-- Card Title END -->

      <!-- Rating -->
      <div class="cardRatingWrapper">
        <rating :score="data.score" :commentCount="data.commentCount" />
      </div>
      <!-- Rating END -->

      <!-- View & Get Offer -->
      <div class="d-flex align-items-center justify-content-between btnColumn2 offerWrapper">
        <button class="button primaryBorder">İncele</button>
        <button class="button primaryBg" @click="getCompaniesForm(data)">Ücretsiz Teklif Al</button>
      </div>
      <!-- View & Get Offer END -->

    </div>
    <!-- Detail END -->

  </div>

</template>

<script>
export default {
  name: "card",
  props: ['data'],
  components: {
    dfImage : () => import('~/components/global/picture.vue'),
    rating  : () => import('~/components/global/rating.vue'),
  },
  methods : {
    /**
     * Metot gönderilen companiesId'nin geriye teklif form'unu dinamik getirir.
     * Her form 1 kere istek atılır ve sessionStorage'a cacheManager aracılığıyla set edilir.
     * Sonraki çağırmalarda browser kapanana kadar cache'den getirilir data.
     * Cache'de var ise ordan okunur, yok ise yeniden istek atılır.
     * @param companies
     * @returns {Promise<void>}
     */
    async getCompaniesForm(companies){
      this.$nuxt.$loading.start();
      let form = this.$getCompaniesFormCache(companies.id);
      if (!form) form = await this.$repositories.companyApi.getFormById(companies.id); // cache'de form yoksa yeniden istek atılır.
      this.$store.commit('modules/companies/SET_COMPANIES_FORM',form)
      this.$store.commit('modules/companies/SET_ACTIVE_COMPANIES_NAME',companies.name)
      this.$modal.show('clientForm');
      this.$setCompaniesFormCache(companies.id,form);
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

<style>
.cardWrapper {display: flex;flex-flow: column;align-items: center;margin:0 0 15px 0;}
.cardDetailWrapper{padding-top: 15px;padding-bottom: 15px;width: 100%;background: #ffffff 0 0 no-repeat padding-box;box-shadow: 0 0 2px #00000066;}
.countWrapper{display: flex;width:100%;align-items: flex-start}
.dfCount{letter-spacing: -0.2px;color: var(--text-soft-black);font-size:13px;}
.dotted{margin:0 10px;}
.cardTitle{font-size:20px;font-weight: 600;color: var(--text-form-black);margin:10px 0 0 0;display: flex;width: 100%;line-height: 1.3;}
.cardRatingWrapper{margin: 15px 0 0 0;}
.offerWrapper{margin:15px 0 0 0;}
</style>
