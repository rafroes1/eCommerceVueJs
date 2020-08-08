<template>
  <div class="mt-3">
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

        <b-button href="#" variant="primary" @click="add(1)">Buy</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  methods: {
    add (id) {
      console.log(id)
    }
  }
}
</script>
