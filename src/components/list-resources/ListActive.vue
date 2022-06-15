<template>
    <list-items
        :theme="theme"
        v-for='items in activeTodos'
        :listitem='items.item'
        :id='items.id'
        :key='items.id'
        @delete-item = deleteItem
    ></list-items>
    <!-- @delete-item = deleteItem -->
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['theme', 'listOfTodos'],
    emits: ['delete-item'],
    computed: {
        activeTodos() {
            console.log("I'm here");
            console.log(this.listOfTodos);
            const activeTodoList = this.listOfTodos.filter((todo) => todo.status === 0);
             console.log(activeTodoList);
            return activeTodoList 
        }
    },
    methods: {
        deleteItem(listId) {
            console.log("activated next completed level", listId);
            this.$emit('delete-item', listId);
        }
    }
}
</script>