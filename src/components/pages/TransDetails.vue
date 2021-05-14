<template>
<div>
    <h2>Transaction Details</h2><hr/>
    <h3>{{total}}</h3>
    <table class="table">
    <thead>
        <tr>
            <th>Titile</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    <tr v-for="post in posts" :key="post.id">
        <td>{{post.title}}</td>
        <td>{{post.description}}</td>
        <td>{{post.amount}}</td>
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
            posts:[],
           total:'',
           tra:[],
                                                                                                                                                                                                                                                    
        }
    },
    mounted() {
        this.getDetails();
        
        
    },
    
    methods: {
        
       getDetails(){
            axios.get('https://point-d7110.firebaseio.com/point.json',
       
            ).then((res)=>{
                this.convert(res.data)
        
            });

        },
        convert(posts){
            let c=0;
            
            for(let key in posts){
                this.posts.push({...posts[key], id:key})
                let a;
                a= parseInt(posts[key].amount)
                c= c+ a
                this.total =c
            }
            console.log("this",c)
            
        },
       
           
            
        

       
    },
   
}
</script>
