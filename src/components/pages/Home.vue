<template>
    <div>
        <div><h2>Tasks</h2></div> 
        <hr/>
        <h3>{{total}}</h3>

       
        <hr/>
        <div>
          <router-link to="./createpost" class="btn btn-warning"> Add Transaction</router-link> <hr/>
           <router-link to="/transactiond" class="btn btn-warning"> Show Transaction</router-link><hr/>
           <router-link to="./createpost" class="btn btn-primary"> Create Todo</router-link> <hr/>
            <router-link to="/posts" class="btn btn-primary"> Show Todo</router-link> <hr/>
          
            
           
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            total:43526356,
        }
    },
    methods:{
        postPage(){
            this.$router.push('/posts')
        }



    }



};
</script>
