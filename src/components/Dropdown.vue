<template>
  <div class="menu-item" @click="isOpen = !isOpen">
      <p>Pick action</p>
      <span class="material-icons">expand_more</span>
      <transition name="fade" appear>
    <div class="sub-menu" v-if="isOpen">
        <div class="menu-item">
            <button @click="component = 'CreateSede'">Crear Sede</button>
            <button @click="component = 'DeleteSede'">Borrar Sede</button>
        </div>
    </div>
      </transition>
  </div>
</template>

<script>
export default {
    name: 'dropdown',
    props: ['title', 'items'],
    data () {
        return {
            isOpen: false
        }
    }
}
</script>

<style lang="scss" scoped>
    p {
        margin-top: 4px;
        text-transform: uppercase;
        cursor: pointer;
    }
    
    span {
        width: 10px;
        margin-left: 5px;
        cursor: pointer;
    }
   
    .menu-item {
        color: #fff;
        padding: 10px 20px;
        position: relative;
        border-bottom: 3px solid transparent;
        display: flex;
        transition: 0.4s;

        a {
            color: inherit;
            text-decoration: none;
        }
   }

   .menu-item .sub-menu {
    margin-top: 40px;
    position: block;
    background-color: var(--dark);
    left: 50%;
    transform: translateX(-50%);
    transition: height 0.2s;
    
    &:hover, &:active {
            background-color: var(--dark-alt);
        }
   }
</style>