<template>
  <div>
    <b-list-group v-for="item in items" v-bind:key="item" class="m-2">
      <b-list-group-item variant="secondary">
        <b-container>
          <b-row align-v="center">
            <b-col><h4>Order #: </h4><p>{{ item._id }}</p></b-col>
            <b-col><h4>Date of Purchase: </h4><p>{{ item.updated_at | formatDate() }}</p></b-col>
            <b-col><h4>Total: </h4><p>{{ item.total | formatMoney() }}</p></b-col>
          </b-row>
        </b-container>
      </b-list-group-item>
      <v-list-group-item>
        <b-list-group>
            <b-list-group-item v-for="product in item.products" v-bind:key="product">
              <b-container class="m-2">
                <b-row align-v="center">
                  <b-col><b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img></b-col>
                  <b-col><h6>Product Name: </h6> <p><small>{{ product.name }}</small></p></b-col>
                  <b-col><h6>Shipping Cost: </h6> <p><small>{{ product.shippingCost | formatMoney() }}</small></p></b-col>
                  <b-col><h6>Unit Price: </h6> <p><small>{{ product.price | formatMoney() }}</small></p></b-col>
                  <b-col><h6>Quantity Purchased: </h6> <p><small>{{ product.quantities }}</small></p></b-col>
                </b-row>
              </b-container>
            </b-list-group-item>
          </b-list-group>
      </v-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      items: []
    }
  },
  filters: {
    formatDate (date) {
      var year = date.substring(0, 4)
      var month = date.substring(5, 7)
      var day = date.substring(8, 10)
      return month + '/' + day + '/' + year
    },
    formatMoney (money) {
      return 'CDN$ ' + money
    }
  },
  methods: {
    ...mapActions([
      'history'
    ]),
    getHistory: async function () {
      const response = await this.history()
      const result = await response.json()
      this.items = result
    }
  },
  created: function () {
    this.getHistory()
  }
}
</script>
