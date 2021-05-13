<template>
    <div class="contaner">
    <div class="row">
    <div class="col-md-4">
    <ul class="list-group">
        <li class="list-group-item" 
        v-for="hobbi in hobbies" :key="hobbi" >
        <slot :hobbi="hobbi">
        </slot>
        </li>
    </ul>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hobbies:['Reading', 'Writing','Learning' ]
        }
    },


}
</script>
