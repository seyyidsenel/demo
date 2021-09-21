<template>

  <picture class="cardImg">
    <source media="(max-width: 767px)" :srcset="mobile">
    <source media="(min-width: 768px) and (max-width: 1023px)" :srcset="tablet">
    <source media="(min-width: 1024px)" :srcset="desktop">
    <img :src="desktop" :alt="alt">
    <span class="imgTitle">{{title}}</span>
  </picture>

</template>

<script>
export default {
  name: "dfPicture",
  props: ['mobile','tablet','desktop','title','alt']
}
</script>

<style>
  .cardImg{width: 100%;position: relative;}
  .cardImg img{width: 100%;}
  .imgTitle{position: absolute;bottom :0;left:0;padding: 0 7px 0 15px;font-size:13px;letter-spacing: -0.2px;height: 30px;background: rgb(52,52,52);background: linear-gradient(0deg, rgba(52,52,52,0.8169642857142857) 25%, rgba(52,52,52,0) 100%);opacity: 0.8;width: 100%;color:#fff;display: flex;align-items: center;}
</style>
