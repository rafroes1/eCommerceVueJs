<template>
  <div>
    <b-modal id="modal-login" title="Login">
      <template v-slot:default>
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

export default {
  data () {
    return {
      form: {
        email: undefined,
        password: undefined
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    async handleLogin () {
      await this.login(this.form)
      this.$bvModal.hide('modal-login')
    }
  }
}
</script>
