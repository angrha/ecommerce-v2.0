<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card mb-3 col-md-4 bd" v-for="paint in paints" :key="paint._id">
        <div class="card-body ct-p">
          <h5 class="card-title">{{ paint.title }}</h5>
        </div>
        <img :src="paint.image" alt="Card image">
        <div class="card-body">
          <p class="card-text">{{ paint.description }}</p>
          <div class="flx-btn">
            <h5>IDR {{ paint.price }}</h5>
            <button type="button" class="btn btn-success btn-sm">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'paints'
    ])
  }
}
</script>

<style scoped>
.flx-btn {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

h5 {
  margin: 0%;
}

.bd {
  border: 1px solid #666;
}

img {
  height: 150px;
  width: 100%;
  display: block;
}

.row {
  margin-top: 1%;
}

.ct-p {
  padding: 15px 10px 5px 10px;
}
</style>
