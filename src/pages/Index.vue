<template>
  <q-page padding>

    <button
    style="position: absolute; right: 10px"
    @click="counter++">
    {{counter}}
    </button>
    
    <!-- :style="errorStyle"-->
    <!-- v-autofocus -> custom directives -->
    <input v-model="message"
    @keyup.esc="clearMessage"
    @keyup.enter="alertMessage"
    v-autofocus
    :class="{ 'error' : message.length > 14}"
    ref="messageInput"
    />

    <div>{{ message.length }}</div>

    <button @click="clearMessage">Clear</button>

    <h5
    v-if="message.length"
    class="border-grey"
    >{{ message }}</h5>
    <h6 v-else>No message entered</h6>

    <hr>

    <p>Uppercase message: {{ messageUppercase }} </p>
    <p>Lowercase message: {{ message | messageLowercase }}</p>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        message: 'I Love Vue.js!',
        counter: 0
      }
    },
    computed:{
      messageUppercase(){
        console.log('messageUppercase was fired')
        return this.message.toUpperCase()
      },
      errorStyle(){
        if (this.message.length > 14) {
          return {
            'color' : 'red',
            'background' : 'pink'
          }
        }
      }
    },
    methods: {
      clearMessage(){
        this.message = ''
      },
      alertMessage(){
        alert(this.message)
      }
    },
    // filter tidak bisa askes ke method, computed atau data berbeda dengan computed yg bisa akses kemana saja
    filters: {
      messageLowercase(value) {
        return value.toLowerCase()
      }
    },
    directives: {
      autofocus: {
        inserted(el) {
          el.focus()
        }
      }
    },
    mounted(){
      console.log(this.$refs);
      this.$refs.messageInput.className = 'bg-green'
    }
    
  }
</script>

<style scoped>
  .border-grey {
    border: 1px solid grey;
  }

  input,button {
    font-size: 20px;
  }

  .error {
    color: red;
    background: pink;
  }
</style>
