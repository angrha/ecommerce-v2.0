<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"> E-lukis </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control form-control-sm mr-sm-2" placeholder="Email" type="email">
          <input class="form-control form-control-sm mr-sm-2" placeholder="Password" type="text">
          <button class="btn btn-outline-info btn-sm my-2 my-sm-0" type="submit">Sign In</button>
          <button class="btn btn-info btn-sm my-2 my-sm-0" type="submit">Sign Out</button>
          <button type="button" class="btn btn-sm btn-link" >Sign Up</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
