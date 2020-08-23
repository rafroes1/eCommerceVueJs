<template>
  <div>
    <b-modal id="modal-register" title="Register">
      <template v-slot:default>
        <Alert :alert="alert" />
        <b-form-group
          label="Email"
          label-for="email-input"
          invalid-feedback="email is required"
        >
        <b-form-input
            id="email-input"
            v-model="form.email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Password"
          label-for="password-input"
          invalid-feedback="password is required"
        >
          <b-form-input
            id="password-input"
            v-model="form.password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Fullname"
          label-for="fullname-input"
          invalid-feedback="fullname is required"
        >
          <b-form-input
            id="fullname-input"
            v-model="form.fullname"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Phone"
          label-for="phone-input"
          invalid-feedback="phone is required"
        >
          <b-form-input
            id="phone-input"
            v-model="form.phone"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Address"
          label-for="address-input"
          invalid-feedback="fullname is required"
        >
          <b-form-input
            id="address-input"
            v-model="form.address"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
      </template>
      <template v-slot:modal-footer="{ cancel }">
        <b-button size="sm" variant="success" @click="handleRegister">
          Register
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancel
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Alert from '@/components/Alert'
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
  components: {
    Alert
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    async handleRegister () {
      const response = await this.register(this.form)
      const result = await response.json()
      this.alert.show = true
      this.alert.message = result.message
      if (response.status === 200) {
        this.form.email = ''
        this.form.password = ''
        this.form.fullname = ''
        this.form.phone = ''
        this.form.address = ''
        this.alert.variant = 'success'
      } else {
        this.alert.variant = 'danger'
      }
    }
  }
}
</script>
