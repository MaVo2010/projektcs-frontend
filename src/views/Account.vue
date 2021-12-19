<template>
<h1>Account Page</h1>
<div class="container-fluid">
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="user in users" :key="user.id">
        <div class="card" style="width: 18rem;">
        <img :src="getAvatar(user)" class="card-img-top" :alt=" '#' + user.id + user.userName">
        <div class="card-body">
          <h5 class="card-title">#{{ user.id }} {{ user.userName }}</h5>
          <p class="card-text">{{ user.userBalance }}</p>
          <p class="card-text">{{ user.validated }}</p>
          <a href="#" class="btn btn-primary">Submit</a>
        </div>
      </div>
    </div>
  <!--  <div class="card" style="width: 18rem;">
    <img src="/src/assets/logo.png" class="card-img-top" alt="User image">
    <div class="card-body">
      <h5 class="card-title">User #1</h5>
      <p class="card-text">Lorem Ipsum oder so</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>-->
  </div>
</div>
</template>

<script>
export default {
  name: 'Account.vue',
  data () {
    return {
      users: []
    }
  },
  methods: {
    getAvatar (user) {
      if (user.validated === true) {
        return require('../assets/positive_check.png')
      } else {
        return require('../assets/negative_check.png')
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/users'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(user => {
        this.users.push(user)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
