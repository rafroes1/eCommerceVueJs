<template>
  <div>
    <b-alert
      :show="alert.show"
      :variant="alert.variant"
    >
      {{ alert.message }}
    </b-alert>
  </div>
</template>

<script>
export default {
  props: {
    alert: {
      show: Boolean,
      variant: String,
      message: String
    }
  }
}
</script>
