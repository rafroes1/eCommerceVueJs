<template>
  <div>
    <b-container class="m-2">
      <Alert :alert="alert" />
      <b-row align-v="center">
        <b-col><b-img thumbnail fluid :src="product.image" alt="Image 1"></b-img></b-col>
        <b-col><h6>Product Name: </h6> <p><small>{{ product.name }}</small></p></b-col>
        <b-col><h6>Product Description: </h6> <p><small>{{ product.description }}</small></p></b-col>
        <b-col><h6>Shipping Cost: </h6> <p><small>{{ product.shippingCost | formatMoney() }}</small></p></b-col>
        <b-col><h6>Unit Price: </h6> <p><small>{{ product.price | formatMoney() }}</small></p></b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col cols="2">
          <b-form-input
            id="email-input"
            type="number"
            v-model="item.quantities"
          ></b-form-input>
        </b-col>
        <b-col cols="2">
          <b-button class="mb-2" href="#" variant="primary" @click="addToCart(product._id)">Buy</b-button>
        </b-col>
      </b-row>
    </b-container>
    <div>
      <p class="mt-2">Products Reviews:</p>
      <b-container v-for="comment in comments" v-bind:key="comment._id" class="border border-secondary m-2 p-2">
        <b-row>
          <b-col>
            <b-avatar class="mr-3"/>
            <span class="mr-auto">{{ comment.fullname }}</span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-icon icon="star-fill" variant="warning" font-scale="1" v-for="n in comment.rating" v-bind:key="'fill-' + n"/>
            <b-icon icon="star" variant="warning" font-scale="1" v-for="i in getUnfilled(comment.rating)" v-bind:key="i"/>
            <span class="ml-2">{{ comment.updated_at | formatDate() }}</span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="mt-2">{{ comment.content }}</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <b-form @submit="onSubmit">
        <span>Rate this product: </span>
        <select v-model="form.rating" class="ml-2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <p class="mt-2 mb-0">Write your comment:</p>
        <b-form-textarea id="textarea" v-model="form.content" placeholder="Write here" class="mb-2"/>
        <b-button type="submit" variant="primary">Post Comment</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '@/components/Alert'

export default {
  data () {
    return {
      product: {},
      comments: [],
      item: {
        productId: '',
        quantities: 1
      },
      form: {
        rating: 1,
        content: '',
        produtId: ''
      },
      alert: {
        show: false,
        variant: '',
        message: ''
      }
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
      return '$' + money
    }
  },
  created: async function () {
    this.product = await this.getProductById(this.$route.params.id)
    this.getComment(this.$route.params.id)
  },
  components: {
    Alert
  },
  methods: {
    ...mapActions([
      'getProductById',
      'getCommentForId',
      'addComment',
      'add'
    ]),
    getComment: async function (productId) {
      const response = await this.getCommentForId(productId)
      const result = await response.json()
      this.comments = result
    },
    getUnfilled: function (rating) {
      return 5 - rating
    },
    async onSubmit (e) {
      e.preventDefault()
      this.form.productId = this.$route.params.id
      const response = await this.addComment(this.form)
      const result = await response.json()

      this.alert.show = true
      this.alert.message = result.message
      if (response.status === 200) {
        this.getComment(this.$route.params.id)
        this.alert.variant = 'success'
      } else {
        this.alert.variant = 'danger'
      }
    },
    async addToCart (id) {
      this.item.productId = id
      console.log(this.item.quantities)
      const response = await this.add(this.item)
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
