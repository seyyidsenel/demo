<template>

  <div class="loading-page" v-if="loading">
    <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  </div>

</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    /**
     * this.$nuxt.$loading.start() => trigger open
     */
    start() {
      this.loading = true
    },
    /**
     * this.$nuxt.$loading.finish() => trigger close
     */
    finish() {
      this.loading = false
    }
  }
}
</script>

<style>
.loading-page{position:fixed;z-index:9999;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.8);text-align:center;display:flex;align-items:center;justify-content:center}
.spinner{-webkit-animation:rotator 1.4s linear infinite;animation:rotator 1.4s linear infinite}
@-webkit-keyframes rotator {
  0%{transform:rotate(0deg)}
  100%{transform:rotate(270deg)}
}
@keyframes rotator {
  0%{transform:rotate(0deg)}
  100%{transform:rotate(270deg)}
}
.path{stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center;-webkit-animation:dash 1.4s ease-in-out infinite,colors 5.6s ease-in-out infinite;animation:dash 1.4s ease-in-out infinite,colors 5.6s ease-in-out infinite}
@-webkit-keyframes colors {
  0%{stroke:#4285f4}
  25%{stroke:#de3e35}
  50%{stroke:#f7c223}
  75%{stroke:#1b9a59}
  100%{stroke:#4285f4}
}
@keyframes colors {
  0%{stroke:#4285f4}
  25%{stroke:#de3e35}
  50%{stroke:#f7c223}
  75%{stroke:#1b9a59}
  100%{stroke:#4285f4}
}
@-webkit-keyframes dash {
  0%{stroke-dashoffset:187}
  50%{stroke-dashoffset:46.75;transform:rotate(135deg)}
  100%{stroke-dashoffset:187;transform:rotate(450deg)}
}
@keyframes dash {
  0%{stroke-dashoffset:187}
  50%{stroke-dashoffset:46.75;transform:rotate(135deg)}
  100%{stroke-dashoffset:187;transform:rotate(450deg)}
}
</style>
