<template>
<Dropdown />
  <!-- <div>
    <div class="buttons">
      <button :class="[isActive ? 'active' : '']" @click="component = 'CreateSede'; toggle()">Crear Sede</button>
      <button :class="[!isActive ? 'active' : '']" @click="component = 'DeleteSede'; toggle()">Borrar Sede</button>
    </div>
      <component :is="component" />
  </div> -->
</template>

<script>
  import Dropdown from '../components/Dropdown.vue'

  export default {
    name: 'App',
    components: {
      Dropdown
    },
    data() {
      return{
        // component: '',
        // isActive: false,
      }
    },
    methods: {
      // toggle() {
      //   this.isActive = !this.isActive;
      // },
    }
  }
</script>

<style lang="scss" scoped>
// .buttons {
//   margin-left: 35px;
// }

// button {
//   height: 50px;
//   padding: 10px 20px;
//   color: var(--light);
//   text-transform: uppercase;  
//   font-size: 1rem;
//   font-weight: bold;
//   text-align: center;
//   background: var(--dark); 
//   border: solid 3px var(--light);
    
//     &:hover {
//         background: var(--dark-alt);
//         color: var(--primary);
//     }
// }

// .active {
//   border: solid 3px var(--dark);
// }

</style>
