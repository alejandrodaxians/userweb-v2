<template>
  <aside id="sidebar" :class="`${is_expanded && 'is-expanded'}`">
      <div class="logo">
          <img src="../assets/logo.png" alt="Vue">
      </div>

      <div class="menu-toggle-wrap">
          <button class="menu-toggle" @click="ToggleMenu">
              <span class="material-icons">keyboard_double_arrow_right</span>
          </button>
      </div>

      <h3>Menu</h3>
      <div class="menu">
          <router-link class="button" to="/">
            <span class="material-icons">search</span>
            <span id="father" class="text">SEARCH</span>
          <div class="dropdown-toggle-wrap">
              <button class="dropdown-toggle" @click="ToggleDrop">
              <span class="material-icons">expand_more</span>
              </button> 
          </div>          
          </router-link>

            <div class="dropdown" :class="`${is_down && 'is-down'}`">
                <router-link class="button" to="/filter">
                    <span class="material-icons">filter_alt</span>
                    <span class="text">FILTER</span>
                </router-link>  
                <router-link class="button" to="/id">
                    <span class="material-icons">fingerprint</span>
                    <span class="text">ID</span>
                </router-link>
            </div>

          <router-link class="button" to="/sede">
            <span class="material-icons">perm_data_setting</span>
            <span class="text">SEDE</span>
          </router-link>
          <router-link class="button" to="/configure">
            <span class="material-icons">tune</span>
            <span class="text">CONFIGURE</span>
          </router-link>
      </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
 
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const is_down = ref(localStorage.getItem("is_down") === "true")


const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}

const ToggleDrop = () => {
    is_down.value = !is_down.value
	localStorage.setItem("is_down", is_down.value)
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;


    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
            filter: invert(100%);
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        
        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translatex(0.5rem);
                }
            }
        }
    }

    .dropdown-toggle-wrap {
        display: flex;
        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .dropdown-toggle {
            transition: 0.2s ease-out;            

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translatey(0.5rem);
                }
            }
        }
    }

    h3, .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
       margin: 0 -1rem; 

       .button {
           display: flex;
           align-items: center;
           text-decoration: none;
           
           padding: 0.5rem 1rem;
           transition: 0.2s ease-out;

           .material-icons {
               font-size: 2rem;
               color: var(--light);
               transition: 0.2s ease-out;
           }

           .text {
               color: var(--light);
               transition: 0.2s ease-out;
           }

           &:hover, &.router-link-exact-active {
               background-color: var(--dark-alt);

               .material-icons, .text {
                   color: var(--primary);
               }
           }

           &.router-link-exact-active {
               border-right: 5px solid var(--primary);
           }
       }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3, .button .text {
        opacity: 1;
    }
    
        .button {
           .material-icons {
               margin-right: 1rem;
           } 
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}

.dropdown {
    display: flex;
    flex-direction: column;
    height: 0px;
    overflow: hidden;
    background-color: var(--dark);
    color: var(--light);
    transition: 0.2s ease-out;

    &.is-down {
        height: 6rem;
        transition: 0.3s ease-out;
        background-color: var(--drop-item);
    }

}
</style>