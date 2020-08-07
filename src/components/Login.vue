<template>
  <div>
    <b-modal id="modal-login" title="Login">
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
      </template>
      <template v-slot:modal-footer="{ cancel }">
        <b-button size="sm" variant="success" @click="handleLogin">
          Login
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancel
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '@/components/Alert'

export default {
  data () {
    return {
      form: {
        email: undefined,
        password: undefined
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
      'login',
      'profile'
    ]),
    async handleLogin () {
      const result = await this.login(this.form)
      if (result.isLoggedIn) {
        this.profile()
        this.alert.show = false
        this.$bvModal.hide('modal-login')
      } else {
        this.alert.show = true
        this.alert.variant = 'danger'
        this.alert.message = result.message
      }
    }
  }
}
</script>
