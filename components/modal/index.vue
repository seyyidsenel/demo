<template>

  <div>
    <profileForm />
    <completed />
  </div>

</template>

<script>
export default {
  name: "AllModals",
  components : {
    profileForm : () => import('./clientForm'),
    completed : () => import('./completed'),
  }
}
</script>
