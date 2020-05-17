<template>
  <div class="welcome container">
    <div class="pb-2 mt-4 mb-2 text-center">
      <h1 class="text-info">Welcome</h1>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="enterChat">
              <div class="text-center">
                <div class="form-group">
                  <label for="name">Enter Your Name:</label>
                  <input type="text" class="form-control" name="name" v-model="name">
                  <p v-if="feedback" class="text-danger">{{ feedback }}</p>
                </div>
                <button class="btn btn-info">Enter Chat</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback:null
    }
  },
  methods:{
    enterChat(){
      if(this.name){
        this.$router.push({name:'Chat',params:{name:this.name}})
      }else{
        this.feedback="You Must Enter A Name To Join"
      }
    }
  }
}
</script>
