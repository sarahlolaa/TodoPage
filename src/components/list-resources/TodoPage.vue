<template>
<div :class="['main', themeClass]">
    <the-header @change-Theme='changeTheme'></the-header>
    <!-- <base-card></base-card>-->
    <!-- <base-checkbox></base-checkbox> -->
    <base-card :theme="theme">
      <list-input :theme="theme" @collect-input = saveInput></list-input>
    </base-card>
    <!-- <div class="sub-main"></div> -->
    <base-card :theme="theme">
      <list-items
      :theme="theme"
      v-for='items,index in todoList'
      :listitem='items'
      :key='index'
      ></list-items>
      <options-bar :theme="theme" :isVisible="showDesktop">
        <template  #items-left>
          <span> {{itemCount}} items left</span>
        </template>
        <template #default>
          <span>All</span> 
          <span>Active</span>
          <span>Completed</span>
        </template> 
        <template #clear>
          <span>Clear Completed</span>
        </template>
    </options-bar>
    </base-card>
    <base-card :theme="theme">
      <options-bar :theme="theme" :isVisible="showMobile">
        <template #default>
          <span>All</span> 
          <span>Active</span>
          <span>Completed</span> 
        </template>
      </options-bar> 
    </base-card>
    <p :class="['list-reorder', theme]">Drag and drop to reorder list</p>
    <!-- <base-dialog :theme="theme" :open="isInput">
      <p>Empty note discarded</p>
    </base-dialog> -->
</div>
</template>

<script>
import TheHeader from '../layouts/TheHeader.vue'
import ListInput from './ListInput.vue'
import ListItems from './ListItems.vue'
import OptionsBar from './OptionsBar.vue'
import  firebase from "../../config/firebase.js"
// import BaseDialog from '../UI/BaseDialog.vue'

export default {
  components: {
    TheHeader,
    ListInput,
    ListItems,
    OptionsBar,
    // BaseDialog
  },

  data() {
    return {
      themeClass: 'light-theme',
      theme: 'light',
      showMobile: 'show-mobile',
      showDesktop: 'show-desktop',
      todoList: []
      // todoList: ['Jog around the park 3x',
      //             '10 minutes meditation',
      //             'Read for 1 hour',
      //             'Pick up groceries',
      //             'Complete Todo App on Frontend Mentor'
      //           ]
    }
  },
  computed: {
    itemCount() {
      return this.todoList.length
    }
  },
  // provide() {
  //   return {
  //     // boxtheme: computed(()=>this.theme)
  //     boxtheme: this.theme
  //   }
  // },
  // computed: {
  //   changeTheme() {
  //     this.themeClass
  //   }
  // },
  mounted(){
    this.getItems()
  },
  methods: {
    changeTheme() {
      if (this.themeClass === 'light-theme') {
        this.themeClass = 'dark-theme';
        this.theme = 'dark';
      } else if (this.themeClass === 'dark-theme') {
        this.themeClass = 'light-theme';
        this.theme = 'light';
      }  
    },
    getItems() {
      firebase.firestore.collection("todoitems").get().then(items => {
        const todoListItems = []
        items.forEach(item => {
          todoListItems.push(item.data().item)
          console.log(item.data().item);
        })
        this.todoList = todoListItems
      })
    },
    saveInput(todoItem) {
      let todo = {
        item: todoItem,
        timestamp: new Date()
      }
      firebase.firestore.collection("todoitem-s").add(todo).then(response => {
        console.log("in then");
        if (response.ok) {
          this.todoList.push(todoItem);
        }
        else {
          console.log("an error occurred!")
        }
      }).catch(e => {
        console.log(e)
        console.log("There was an error")
      })
    }
  }

}
</script>

<style scoped>
.main {
    width: 100%;
    padding: 2.5rem 1.5rem 0 1.5rem;
    min-height: 100vh;

    background-repeat: no-repeat;
    background-position: top center;
    background-size: contain;
}

.light-theme {
    background-color: hsl(236, 33%, 92%);
    background-image: url('../../assets/bg-mobile-light.jpg');  
}

.dark-theme {
    background-color: hsl(235, 21%, 11%);
    background-image: url('../../assets/bg-mobile-dark.jpg');  
}

.list-reorder {
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  margin: 2.5rem 0 0 0;
}

.list-reorder.light {
  color: hsl(236, 9%, 61%);
}

.list-reorder.dark {
  color: hsl(234, 11%, 52%);
}

/* .option {
    display: flex;
    justify-content: space-around;
} */

@media screen and (min-width: 769px) {
  .main {
    background-size: 100% 40%;
  }

  .light-theme {
    background-image: url('../../assets/bg-desktop-light.jpg');
  }

  .dark-theme {
    background-image: url('../../assets/bg-desktop-dark.jpg');  
  }
}

/* .sub-main {
  background-color: hsl(0, 0%, 98%);
  padding: 0.4rem 0;
  border-radius: 5px;
  margin: 2.5rem auto 1.2rem auto; 
  width: calc(280px + calc(0.077778 * calc(1440px - 100vw)));
} */
</style>