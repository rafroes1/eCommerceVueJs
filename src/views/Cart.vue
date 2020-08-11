<template>
  <div>
    <h1>My Cart</h1>
    <Alert :alert="alert" />
    <b-table striped hover :fields="fields" :items="items">
      <template v-slot:cell(remove)="data">
        <b-button href="#" variant="danger" @click="removeFromCart(data.item.productId)">{{ data.item.productId }}</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '@/components/Alert'

export default {
  name: 'Cart',
  data () {
    return {
      fields: [
        'productId',
        'quantities',
        { key: 'remove', label: 'Remove' }
      ],
      items: this.$store.state.cart,
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
      'getCart',
      'remove'
    ]),
    async removeFromCart (id) {
      const response = await this.remove(id)
      const result = await response.json()

      this.alert.show = true
      this.alert.message = result.message
      if (response.status === 200) {
        this.items = this.items.filter(item => item.productId !== id)
        this.$store.state.cart = this.items
        this.alert.variant = 'success'
      } else {
        this.alert.variant = 'danger'
      }
    }
  }
}
</script>
