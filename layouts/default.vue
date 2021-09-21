<template>

  <div id="siteWrapper">
    <template>
      <nuxt/>
      <AllModals/>
    </template>
  </div>

</template>

<script>
export default {
  name: "default",
  components : {
    AllModals: () => import('~/components/modal'),
  }
}
</script>

<style>
  #siteWrapper{}
</style>
