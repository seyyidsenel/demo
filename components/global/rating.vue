<template>

  <div class="ratingWrapper">
    <ul class="rating" :data-ratio="score">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li class="count">{{commentCount}}</li>
    </ul>
    <div class="examination"> <!-- todo: koşul'a bağlanacak -->
      <i class="iconExamination"></i>
      <span class="examText">İnceleme</span>
    </div>
  </div>

</template>

<script>
export default {
  name: "rating",
  props: ['score','commentCount']
}
</script>

<style>
.ratingWrapper{display: flex;}
.rating{margin:0;padding:0;list-style: none;display: flex;align-items: center;}
.rating li:not(.count){width: 15px;height: 15px;background-image: url("~assets/images/star-full.svg");margin-right: 1px;}
.rating[data-ratio="1"] li:nth-child(1) ~ li:not(.count){background-image: url("~assets/images/star-empty.svg");}
.rating[data-ratio="2"] li:nth-child(2) ~ li:not(.count){background-image: url("~assets/images/star-empty.svg");}
.rating[data-ratio="3"] li:nth-child(3) ~ li:not(.count){background-image: url("~assets/images/star-empty.svg");}
.rating[data-ratio="4"] li:nth-child(4) ~ li:not(.count){background-image: url("~assets/images/star-empty.svg");}
.rating[data-ratio="5"] li:nth-child(5) ~ li:not(.count){background-image: url("~assets/images/star-empty.svg");}
.count{font-size:13px;color: var(--text-soft-black);margin:0 0 0 5px;}
.examination{margin:0 0 0 10px;display: flex;align-items: center;}
.iconExamination{background-image: url("~assets/images/viewer.svg");width:13px;height: 18px;display: inline-block;}
.examText{font-size:13px;color: var(--text-soft-black);margin:0 0 0 5px;}
</style>
