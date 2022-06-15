<template>
    <list-items
        :theme="theme"
        v-for='items in completedTodos'
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
        completedTodos() {
            const completedTodoList = this.listOfTodos.filter((todo) => todo.status === 1);
            return completedTodoList 
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