<template>
    <draggable :list="listOfTodos.item"
    tag="list-items" 
    >
        <list-items
            :theme="theme"
            v-for='items in listOfTodos'
            :listitem='items.item'
            :id='items.id'
            :key='items.id'
            @delete-item = deleteItem
        ></list-items>
    </draggable>
    <!-- @delete-item = deleteItem -->
</template>

<script>
export default {
    props: ['theme', 'listOfTodos'],
    emits: ['delete-item'],
    // inject: ['todoList', 'todoListToo'],

    // computed: {
    //     todoList() {
    //         return this.$todoList()
    //     }
    // },

    // mounted(){
    //     console.log(this.todoListToo);
    // },

    methods: {
        deleteItem(listId) {
            this.$emit('delete-item', listId);
        }
    }
}
</script>