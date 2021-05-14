<template>
    <div>
        <div><h2>Tasks</h2></div> 
        <hr/>
        <h3>{{total}}</h3>

       
        <hr/>
        <div>
          <router-link to="./transaction" class="btn btn-warning"> Add Transaction</router-link> <hr/>
           <router-link to="/transactiond" class="btn btn-warning"> Show Transaction</router-link><hr/>
           <router-link to="./createpost" class="btn btn-primary"> Create Todo</router-link> <hr/>
            <router-link to="/posts" class="btn btn-primary"> Show Todo</router-link> <hr/>
          
            
           
        </div>
    </div>
</template>

<script>
import axios from 'axios';
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
   



};
</script>
