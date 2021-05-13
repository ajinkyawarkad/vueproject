
<template>
<router-view></router-view>

   
</template>

<script>
//Named SLOTS With Profile 



export default {
 
  data() {
    return {
      posts:[{
        title:'Ajinkya',
        desc:'First Son'
      },
      {
        title:'Ram',
        desc:'Second Son'

      },
      {
        title:'Mahadeo Warkad',
        desc:'Son of Punjaappa warkad'
      }
      ],
      name:'Ajinkya'
    }
  },
  methods:{
      onTitleChange(event) {
            let index = this.posts.findIndex(
                (post) => post.id === event.id,
            );
            this.posts[index].title = event.title;
        },
          changeTitle() {
            for(var a in this.posts ){
               this.posts[a].title = 'change the title in parent';

            }
        },

  },
  name: 'App',
  components: {
 
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
