<template>
  <div>
    <b-form @submit="onSubmit">
      <Alert :alert="alert" />
      <b-form-group
        id="input-group-1"
        label="Password:"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Password Confirm:"
        label-for="input-passwordConfirmation"
      >
        <b-form-input
          id="input-passwordConfirmation"
          v-model="form.passwordConfirmation"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Update</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '@/components/Alert'

export default {
  data () {
    return {
      form: {
        password: '',
        passwordConfirmation: ''
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
      'changePassword'
    ]),
    async onSubmit (e) {
      e.preventDefault()
      const response = await this.changePassword(this.form)
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
