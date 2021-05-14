<template>
    <div>
        <div><h2>Tasks</h2></div> 
        <hr/>
        <h3>{{total}}</h3>

       
        <hr/>
        <div>
            <router-link to="./createpost" class="btn btn-primary"> CreateTodo</router-link> <hr/>
            <router-link to="./createpost" class="btn btn-warning"> Add Transaction</router-link>
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
