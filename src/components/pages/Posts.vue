<template>
<div>
    <h2>Post Details</h2>
    <table class="table">
    <thead>
        <tr>
            <th>Post Id</th>
            <th>Titile</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    <tr v-for="post in posts" :key="post.id">
        <td>{{post.id}}</td>
        <td>{{post.title}}</td>
        <td>{{post.description}}</td>
        <td><router-link :to="`/posts/${post.id}`" class="btn btn-primary">Show Details</router-link></td>
        </tr>
    </tbody>
        
    </table>

   
</div>
    
</template>

<script>
import axios from 'axios'


export default {

    data() {
        return {
            posts:[]
        }
    },
    mounted() {
        this.getDetails();
    },
    methods: {
        
       getDetails(){
            axios.get('https://test-3581e-default-rtdb.firebaseio.com/posts.json',
       
            ).then((res)=>{
                this.convert(res.data)
        
            });

        },
        convert(posts){
            for(let key in posts){
                this.posts.push({...posts[key], id:key})

            }

            console.log(this.posts)


        }

       
    },
   
}
</script>
