<template>
  <div>
    <h1>My Cart</h1>
    <Alert :alert="alert" />
    <b-table striped hover :fields="fields" :items="items">
      <template v-slot:cell(price)="data">
        ${{ data.value }}
      </template>

      <template v-slot:cell(shippingCost)="data">
        ${{ data.value }}
      </template>

      <template v-slot:cell(quantities)="data">
        <b-form-input
          v-model="data.item.quantities"
          type="number"
        ></b-form-input>
      </template>

      <template v-slot:cell(action)="data">
        <b-button variant="danger" size="sm" class="mb-2" @click="removeFromCart(data.item.productId)">
          <b-icon icon="trash" aria-hidden="true"></b-icon>
        </b-button>
      </template>

      <template v-slot:custom-foot>
        <tr>
          <td class="bg-dark text-white" :colspan="fields.length">
            Total: ${{ total }}
          </td>
        </tr>
      </template>
    </b-table>
    <div v-if="showCart" class="text-right">
      <b-button href="#" variant="danger" @click="clearCart()">Clear</b-button>
      &nbsp;
      <b-button href="#" variant="success" @click="updateCart()">Update</b-button>
      &nbsp;
      <b-button to="/checkout" variant="primary">Checkout</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '@/components/Alert'

export default {
  name: 'Cart',
  data () {
    return {
      showCart: this.$store.state.cart.length > 0,
      fields: [
        'name',
        'price',
        'shippingCost',
        { key: 'quantities', label: 'Quantities' },
        { key: 'action', label: 'Action' }
      ],
      items: this.$store.state.cart,
      alert: {
        show: false,
        variant: '',
        message: ''
      }
    }
  },
  created () {
    this.loadCart()
  },
  components: {
    Alert
  },
  computed: {
    total () {
      return this.items.reduce((acc, item) => acc + item.price * item.quantities + item.shippingCost, 0)
    }
  },
  methods: {
    ...mapActions([
      'getCart',
      'update',
      'remove',
      'clear'
    ]),
    async loadCart () {
      await this.getCart()
      this.showCart = this.$store.state.cart.length > 0
      this.items = this.$store.state.cart
    },
    async updateCart () {
      const payload = { products: this.items }
      const response = await this.update(payload)
      const result = await response.json()

      this.alert.show = true
      this.alert.message = result.message
      if (response.status === 200) {
        this.$store.state.cart = this.items
        this.alert.variant = 'success'
      } else {
        this.alert.variant = 'danger'
      }
    },
    async removeFromCart (id) {
      const response = await this.remove(id)
      const result = await response.json()

      this.alert.show = true
      this.alert.message = result.message
      if (response.status === 200) {
        this.items = this.items.filter(item => item.productId !== id)
        this.showCart = this.items.length > 0
        this.$store.state.cart = this.items
        this.alert.variant = 'success'
      } else {
        this.alert.variant = 'danger'
      }
    },
    async clearCart () {
      const response = await this.clear()
      const result = await response.json()

      this.alert.show = true
      this.alert.message = result.message
      if (response.status === 200) {
        this.items = []
        this.showCart = false
        this.$store.state.cart = this.items
        this.alert.variant = 'success'
      } else {
        this.alert.variant = 'danger'
      }
    }
  }
}
</script>
