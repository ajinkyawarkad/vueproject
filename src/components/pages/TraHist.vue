<template>
    <div>
        <h3>Post Details</h3>
        <div>
        <div>Id: {{id}}</div>
        <div>Title: {{post.title}}</div>
        <div>Description:{{post.description}}</div>
        </div>
         <hr/>
         <button class=""></button>
        <hr/>
     <router-link class="btn btn-warning" to="/posts">Back to posts</router-link> <hr/>
     <router-link class="btn btn-primary" to="/createpost">Create post</router-link>
        
       

    </div>
</template>

<script>
import axios from 'axios'


export default {
  data() {
      return {
          post:'',
          id:'',
      }
  },
  watch: {
      $route() {
          console.log("Watch calles")
          this.getPostDetails()
      },
  },

  created(){
    //   this.$watch(()=> this.$route.params, ()=>{
    //       this.getPostDetails();
    //   },
    //   );
      this.getPostDetails()


      
  },
  methods: {
      getPostDetails(){


           this.id= this.$route.params.id
            axios.get(`https://test-3581e-default-rtdb.firebaseio.com/posts.json?id=${this.id}`,
       
            ).then((res)=>{
                    console.log(res.data)
                    this.post=res.data[this.id]
        
            });

      }
  },
}
</script>
