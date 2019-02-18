<template>
  <div id="app">
      <h1 :style="{transform: red}">{{ msg | capitalize}}</h1>
      <ul>
        <li v-for="(item,index) of teacher" :key="index">{{item.name}}</li>
      </ul>
      <h2 @click="count += 1"> {{ count }}</h2>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'df',
      class1: true,
      seen: true,
      teacher: [
        {name:1},
        {name:3},
        {name:2}
      ],
      count: 5
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
