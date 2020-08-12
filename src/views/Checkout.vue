<template>
  <div class="checkout">
    <b-row align-h="center">
      <b-col cols="6">
        <h1>Please fill your information</h1>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="6">
        <b-form @submit.prevent="onSubmit">
          <Alert :alert="alert" />
          <b-form-group
            id="input-group-1"
            label="Fullname:"
            label-for="input-fullname"
          >
            <b-form-input
              id="input-fullname"
              v-model="form.fullname"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Phone:"
            label-for="input-phone"
          >
            <b-form-input
              id="input-phone"
              v-model="form.phone"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Address:"
            label-for="input-address"
          >
            <b-form-input
              id="input-address"
              v-model="form.address"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Coupon:"
            label-for="input-couponCode"
          >
            <b-form-input
              id="input-couponCode"
              v-model="form.couponCode"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '@/components/Alert'

export default {
  name: 'Checkout',
  data () {
    return {
      form: {
        fullname: '',
        phone: '',
        address: '',
        couponCode: ''
      },
      alert: {
        show: false,
        variant: '',
        message: ''
      }
    }
  },
  created () {
    if (this.$store.state.cart.length <= 0) {
      this.$router.push('/')
    }
  },
  components: {
    Alert
  },
  methods: {
    ...mapActions([
      'checkout'
    ]),
    async onSubmit () {
      const response = await this.checkout(this.form)
      const result = await response.json()

      this.alert.show = true
      this.alert.message = result.message
      if (response.status === 200) {
        this.$router.push('/success')
      } else {
        this.alert.variant = 'danger'
      }
    }
  }
}
</script>
