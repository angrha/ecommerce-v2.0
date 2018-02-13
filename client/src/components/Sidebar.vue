<template>
  <div class="container-fluid side flx-cnt">
    <!-- search -->
    <div class="flx-search">
      <input class="col-md-10" placeholder="Search" type="text">
      <i class="fa fa-search col-md-2" style="cursor: pointer;"> </i>
    </div>
    <!-- list group categories -->
    <div>
      <div class="list-group gr col-md-12">
        <li class="list-group-item list-group-item-action active">Categories</li>
        <a href="#" class="list-group-item list-group-item-action">Watercolor</a>
        <a href="#" class="list-group-item list-group-item-action">Photo</a>
        <a href="#" class="list-group-item list-group-item-action">Illustration</a>
        <!-- disable group -->
        <a href="#" class="list-group-item list-group-item-action disabled">
          Animals
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          Background
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          Beauty
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          Computer
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          Emotions
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          Foods
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          Health
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          Music
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          Nature
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          People
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          Science
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.side {
  flex: 1;
  background-color: rgba(224, 212, 212, 0.349);
  border-width: 3px;
  border-style: solid;
  border-color: #666;
  border-radius: 5px;
  margin-right: 1%;
}

.flx-search {
  margin-top: 0.5%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
}

.fa-search {
  font-size:28px;
  color: #666;
  padding-left: 5px;
}

.gr {
  letter-spacing: 2px;
  margin: 1%;
  padding-right: 1%;
}
</style>
