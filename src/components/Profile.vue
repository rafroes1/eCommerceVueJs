<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          type="email"
          v-model="form.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
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
        id="input-group-3"
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
        id="input-group-2"
        label="Address:"
        label-for="input-address"
      >
        <b-form-input
          id="input-address"
          v-model="form.address"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" @click="handleUpdateAccount">Update</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        fullname: '',
        phone: '',
        address: ''
      },
      alert: {
        show: false,
        variant: '',
        message: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'updateAccount'
    ]),
    async handleUpdateAccount () {
      const response = await this.updateAccount(this.form)
      const result = await response.json()
      this.alert.show = true
      this.alert.message = result.message
      if (response.status === 200) {
        this.alert.variant = 'success'
      } else {
        this.alert.variant = 'danger'
      }
    }
  }
}
</script>
