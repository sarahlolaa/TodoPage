<template>
<div :class="['main', themeClass]">
    <the-header @change-Theme="changeTheme"></the-header>
   
    <base-card :theme="theme">
      <list-input :theme="theme" @collect-input = "saveInput"></list-input>
    </base-card>

    <base-card :theme="theme">
      <component 
          :is="currentDisplay" 
          :theme="theme" 
          :listOfTodos="todoList"
          @delete-item = deleteItem
          >
      </component>

      <options-bar :theme="theme" :isVisible="showDesktop" @switch-component="switchComponent">
        <template  #items-left>
          <span> {{itemCount}} items left</span>
        </template>
        <!-- <template #default>
          <span>All</span> 
          <span>Active</span>
          <span>Completed</span>
        </template>  -->
        <template #clear>
          <span>Clear Completed</span>
        </template>
      </options-bar>
    </base-card>
    <base-card :theme="theme"  v-show="viewCard">
      <options-bar :theme="theme" :isVisible="showMobile" @switch-component="switchComponent">
        <!-- <template #default>
          <span>All</span> 
          <span>Active</span>
          <span>Completed</span> 
        </template> -->
      </options-bar> 
    </base-card>
    <p :class="['list-reorder', theme]">Drag and drop to reorder list</p>
    <!-- <base-dialog :theme="theme" :open="isInput">
      :list="todoListTest"
      :group="todoListTest"
      :item-key="todoindex"
      <p>Empty note discarded</p>
    </base-dialog> -->
</div>
</template>

<script>
import TheHeader from '../layouts/TheHeader.vue'
import ListInput from './ListInput.vue'
import OptionsBar from './OptionsBar.vue'
import ListAll from './ListAll.vue'
import ListActive from './ListActive.vue'
import ListCompleted from './ListCompleted.vue'
import firebase from "../../config/firebase.js"
// import { VueDraggableNext } from 'vue-draggable-next'
// import BaseDialog from '../UI/BaseDialog.vue'


export default {
  components: {
    TheHeader,
    ListInput,
    OptionsBar,
    ListAll,
    ListActive,
    ListCompleted
    // draggable: VueDraggableNext
    // BaseDialog
  },

  data() {
    return {
      showDesktop: 'show-desktop',
      showMobile: 'show-mobile',
      theme: 'light',
      themeClass: 'light-theme',     
      todoList: [],
      viewCard: null,
      currentDisplay: 'list-all',
      todoListTest: [{id: '1' , item: 'Jog around the park 3x', status: 0},
                  {id: '2', item: '10 minutes meditation', status: 0},
                  {id: '3', item: 'Read for 1 hour', status: 1},
                  {id: '4', item: 'Pick up groceries', status: 1},
                  {id: '5', item: 'Complete Todo App on Frontend Mentor', status: 1},
                  {id: '6', item: 'Go to the gym', status: 0},
                  {id: '7', item: 'Take her to the swimming pool', status: 1},
                  {id: '8', item: 'Happy New Year', status: 1},
                  {id: '9', item: 'Wow, its tuesday', status: 1},
                  {id: '10', item: 'Have a great day', status: 1},
                  {id: '11', item: 'Test the todo', status: 0},
                ],
    }
  },

  // provide() {
  //   return {
  //     todoList: this.todoListTest,
  //     todoListToo: this.todoList
  //   };
  // },

  computed: {
    itemCount() {
      return this.todoList.length
    }
  },

  created() {
		window.addEventListener("resize", this.showCard);
		this.showCard();
	},
	
  mounted(){
    this.getItems()
  },

  unmounted() {
    window.removeEventListener("resize", this.showCard);
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

    showCard() {
			this.windowWidth = window.innerWidth;
			if (this.windowWidth <= 769) {
        return this.viewCard = true;
			} else {
				return this.viewCard = false;
			}
		},

    switchComponent(component) {
      this.currentDisplay = component;
    },

    getItems() {
      firebase.firestore.collection("todoitems").orderBy("timestamp", "desc").get().then(items => {
        const todoListItems = []
        items.forEach(item => {
          todoListItems.push({
            id: item.id,
            item: item.data().item,
            position: item.data().position,
            status: item.data().status
          });
        })
        this.todoList = todoListItems
      })
    },

    saveInput(todoItem) {
      // let todo = {
      //   item: todoItem,
      //   timestamp: new Date()
      // }
      let todo = {
        position: this.itemCount,
        item: todoItem,
        status: 0,
        timestamp: new Date()
      }
      firebase.firestore.collection("todoitems").add(todo).then(response => {
        if (response) {
          //console.log("response is ok", response);
          this.todoList.unshift({
            id: response.id,
            item: todoItem
          });
          console.log(response.id)
        }
        else {
          console.log("an error occurred!")
        }
      // }).catch(e => {
      //   console.log(e)
      //   console.log("There was an error")
      })
    },

    deleteItem(listId) {
      firebase.firestore.collection("todoitems").doc(listId).delete().then(() => {
        const todoIndex = this.todoList.findIndex((todo) => todo.id == listId);
        this.todoList.splice(todoIndex, 1);
      })
    }
  }

}
</script>

<style scoped>
.main {
    width: 100%;
    padding: 2.5rem 1.5rem 1rem 1.5rem;
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

@media screen and (min-width: 769px){
  .main {
    background-size: 100% 28%;
  }

  .light-theme {
    background-image: url('../../assets/bg-desktop-light.jpg');
  }

  .dark-theme {
    background-image: url('../../assets/bg-desktop-dark.jpg');  
  }
}

@media screen and (min-width: 1024px){
  .main {
    background-size: contain;
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