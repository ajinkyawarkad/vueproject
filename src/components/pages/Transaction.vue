<template>
<div>
    <h2>Create Transaction</h2>
    <hr/>
    <div class="alert alert-success" v-if="succ">Done</div>
    <form @submit.prevent="onCratePost">
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="title"/>
        </div>
         <div class="form-group">
            <label>Amount</label>
            <input type="number" class="form-control" v-model="amount"/>
            
        </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" v-model="desc">
            </textarea>
        </div>
        
        <div class="mt-3">
        <button type="submit" class="btn btn-primary">Create Transaction</button> <hr/>
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
            desc: '',
            amount:'',
            succ:false
        }
    },
    methods: {
        onCratePost(){
            axios.post('https://point-d7110.firebaseio.com/point.json',
            {
              
                    title:this.title,
                description:this.desc,
                amount:this.amount

               
            } ).then((res)=>{
                this.succ=true
                setTimeout(()=>{
                this.succ=false
                    },1000);
                console.log("Fire IS",res)
                this.$emit('created')
                this.title=''
                this.desc=''
                this.amount=''
            });

        }
       
    },
   
};
</script>
