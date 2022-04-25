<template>
  <div class="menu-item-wrap" @click="isOpen = !isOpen" >
      <p>Pick</p>
      <span class="material-icons">expand_more</span>
        <div class="sub-menu" v-if="isOpen">
            <div class="menu-item">
                <button @click="component = 'CreateSede'">Crear_Sede</button>
                <br>
                <button @click="component = 'DeleteSede'">Borrar_Sede</button>
            </div>
        </div>
  </div>
  <component :is="component" />
</template>

<script>
import CreateSede from '../components/CreateSede.vue'
import DeleteSede from '../components/DeleteSede.vue'

export default {
    name: 'dropdown',
    data () {
        return {
            isOpen: false
        }
    },
    components: {
        DeleteSede,
        CreateSede
    }
}
</script>

<style lang="scss" scoped>

    p {
        margin-top: 4px;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: bold;
        margin-left: 20px;
    }
    
    .material-icons {
        font-size: 2rem;
        cursor: pointer;
        margin-left: 20px;

        &:hover {
            color: var(--primary);
            transform: translateY(3px);
            transition: 0.2s ease-out;
        }
    }
   
    .menu-item-wrap {
        width: 235px;
        margin-left: 35px;
        color: #fff;
        padding: 10px 20px;
        // position: relative;
        // display: flex;
        background-color: var(--dark);
        height: min-content;
   }

   .sub-menu {
       display: flex;
       background-color: var(--dark-alt);
       margin-bottom: 15px;
   }

   button {
        background: #031838;
        padding: 20px;
        margin: 15px;
        color: var(--light);
        text-transform: uppercase;  
        font-size: 1rem;
        font-weight: bold; 
        
        &:hover {
            color: var(--primary);
        }
    }
</style>