<template>
<div>
    <h2>Create Post</h2>
    <hr/>
    <div class="alert alert-success" v-if="succ">Done</div>
    <form @submit.prevent="onCratePost">
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="title"/>
        </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" v-model="desc">
            </textarea>
        </div>
        <div class="mt-3">
        <button type="submit" class="btn btn-primary">Create Post</button>
        <hr/>
         <router-link to="/" class="btn btn-primary">Home</router-link>


        </div>

    </form>
</div>
    


</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            title:'',
            desc:'',
            succ:false
        }
    },
    methods: {
        onCratePost(){
            axios.post('https://test-3581e-default-rtdb.firebaseio.com/posts.json',
            {
              
                    title:this.title,
                description:this.desc

               
            } ).then((res)=>{
                this.succ=true
                console.log("Fire IS",res)
                this.$emit('created')



            });

        }
       
    },
   
};
</script>
