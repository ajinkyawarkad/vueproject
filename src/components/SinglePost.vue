<template>
<div :class="{'bgcolor-grey': isactive}" class="p-3">
    <div class="row">
        <div class="col-md-12">
        <h2>Ajinkya</h2>
            <div class="title">{{post.title}}</div>
            <div>{{post.desc}}</div>
            <a href="" @click.prevent="changeTitle()">Ajinkya</a>
            <Button ><em class="fa fa-user"> </em>&nbsp; Ajinkya</Button>

        </div>
    </div>

    
</div> 
    
</template>


<script>
import Button from './Button.vue'
export default {
      props:['data','isactive'],
    setup() {
        
    },
 


    data() {
        return {
            post:this.data,
        }
    },
    methods: {
        changeTitle() {
            this.post.title ='chaned the title';
        }
    },
    components:{
        Button

    }
}
</script>

<style scoped>
.po{
    color: red;
}

.bgcolor-grey{
    background: lightgray;
}

h2{
    color: red ;

}


</style>