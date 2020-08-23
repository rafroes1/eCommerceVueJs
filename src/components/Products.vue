<template>
  <div class="mt-3">
    <Alert :alert="alert" />
    <!-- <b-row v-for="value in items" :key="value._id">
      <b-col> -->
        <b-card-group columns>
          <b-card
            v-for="value in items" :key="value._id"
            :title="value.name"
            :img-src="value.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              ${{ value.price }}
            </b-card-text>

            <b-button size="sm" class="mb-2" href="#" variant="primary" @click="addToCart(value._id)">Buy</b-button>
            &nbsp;
            <b-button size="sm" class="mb-2" variant="outline-primary" :to="'/product/' + value._id ">Details</b-button>
          </b-card>
        </b-card-group>
      <!-- </b-col>
    </b-row> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '@/components/Alert'

export default {
  data () {
    return {
      form: {
        productId: '',
        quantities: 1
      },
      items: this.$store.state.products,
      alert: {
        show: false,
        variant: '',
        message: ''
      }
    }
  },
  created () {
    this.loadProducts()
  },
  components: {
    Alert
  },
  methods: {
    ...mapActions([
      'getProducts',
      'add'
    ]),
    async loadProducts () {
      await this.getProducts()
      this.items = this.$store.state.products
    },
    async addToCart (id) {
      this.form.productId = id
      const response = await this.add(this.form)
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
