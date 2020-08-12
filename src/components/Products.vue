<template>
  <div class="mt-3">
    <Alert :alert="alert" />
    <b-row>
      <b-col>
        <b-card-group deck>
          <b-card
            title="Product 1"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary" @click="addToCart('5f261fb516dd9c4a2d2af376')">Buy</b-button>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col>
        <b-card-group deck>
          <b-card
            title="Product 2"
            img-src="https://picsum.photos/600/300/?image=26"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary" @click="addToCart('5f261fcb16dd9c4a2d2af377')">Buy</b-button>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col>
        <b-card-group deck>
          <b-card
            title="Product 1"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Buy</b-button>
          </b-card>
        </b-card-group>
      </b-col>

      <div class="w-100"></div>

      <b-col>
        <b-card-group deck>
          <b-card
            title="Product 1"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Buy</b-button>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
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
      'add'
    ]),
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
