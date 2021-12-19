<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="d-flex justify-content-center">
    <div class="p-2">
      <input type="text" class="form-control" placeholder="username" aria-label="First name">
      <input type="text" class="form-control" placeholder="password" aria-label="Last name">
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
