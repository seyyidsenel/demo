<template>

  <div id="home">
    <div class="container container-full-mobile">
      <div class="row">
        <card :data="companies" v-for="companies in list"></card>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data (){
    return {
      companies : [],
    }
  },
  components: {
    card : () => import('~/components/card')
  },
  methods : {
    async dispatchCompanies(){
      this.companies = await this.$repositories.companyApi.list();
      this.$nuxt.$loading.finish()
    }
  },
  computed : {
    list (){
      return this.companies
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.dispatchCompanies();
  }
}
</script>

<style>
  #home {background-color: #f4f6f9;height: 100vh;}
</style>
