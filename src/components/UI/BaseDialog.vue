<template>
    <transition name="popup">
    <!-- <teleport to="body"> -->
        <dialog open :class="theme" v-if="open">
            <slot></slot>
        </dialog>
    <!-- </teleport> -->
    </transition>
</template>

<script>
export default {
    // data() {
    //     theme: 'light',
    // },
    props: ['theme', 'open']
}
</script>

<style scoped>
dialog {
    width: 84.5%;
    position: fixed;
    top: 35vh;
    z-index: 10;
    margin: auto;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 0.6rem 0 0.6rem 0;
    font-family: inherit;
    font-size: 10px;
    font-weight: 400;
    /* color: red; */
}

.light {
    background-color: hsl(0, 0%, 98%);
    box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.4);
    /* box-shadow: 0 0 10px -4px rgba(192, 88, 243, 0.4); */
    color: hsl(235, 19%, 35%);
}

.dark {
    background-color: hsl(235, 24%, 19%);
    box-shadow: 0 0 10px -2px rgba(255, 255, 255, 0.4);
    /* box-shadow: 0 0 10px -2px rgba(192, 88, 243, 0.4); */
    /* rgb(192, 88, 243) */
    color: hsl(234, 39%, 85%);
}

.popup-enter-from, .popup-leave-to{
    /* opacity: 0; */
    transform: scale(0.7);
}

.popup-enter-active {
    transition: all 0.3s ease-in
}

.popup-enter-to, .popup-leave-from {
    /* opacity: 1; */
    transform: scale(1);
}

.popup-leave-active {
    transition: all 0.3s ease-out
}

@media screen and (min-width: 769px) {
    dialog {
        width: 38%;
        font-size: inherit;
    }
}
</style>