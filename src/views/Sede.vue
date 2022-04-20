<template>
  <div>
    <div class="buttons">
      <button class="crear" @click="component = 'CreateSede'">Crear Sede</button>
      <button class="borrar" @click="component = 'DeleteSede'">Borrar Sede</button>
    </div>
    <transition name="fade" mode="out-in">
    <component :is="component" />
  </transition>
  </div>
</template>

<script>
  import CreateSede from '../components/CreateSede.vue'
  import DeleteSede from '../components/DeleteSede.vue'

  export default {
    name: 'App',
    components: {
      CreateSede, DeleteSede
    },
    data() {
      return{
        component: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.1;
}

.buttons {
  margin-left: 25px;
}

button {
  height: 50px;
  padding: 10px 20px;
  margin: 15px;
  color: var(--light);
  border-radius: 20px; 
  text-transform: uppercase;  
  font-size: 1rem;
  font-weight: bold;
  text-align: center;  
    
    &:hover {
        border: solid 3px var(--dark);
    }
}

.crear {
  background: #04602c;
}

.borrar {
    background: #c33535;
}
</style>
