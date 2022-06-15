<template>
    <div class="base" :class="theme">
    <!-- <div :class="['base', theme]"> -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['theme', 'showCard']
}
</script>

<style scoped>
.base {
    /* display: flex;
    align-items: center;
    width: 100%; */
    padding: 0.4rem 0;
    border-radius: 5px;
    margin: 0 auto 1.2rem auto;
    /* border-radius: 5px; */
    /* padding: 0.9rem 0.6rem; */
}

.light {
    background-color: hsl(0, 0%, 98%);
}

.dark {
    background-color: hsl(235, 24%, 19%);
}


@media screen and (min-width: 769px) {
  .base {
      width: 62%;
  }
}

@media screen and (min-width: 1024px) {
  .base {
      width: 40%;
  }
}

</style>



<!--<template>
    <div class="base">
        <base-checkbox></base-checkbox>
        <div>
            <slot></slot>
        </div>
        <span class='crossIcon'>
            <slot name='iconImage'></slot>
        </span>
    </div>
</template>

<style scoped>
.base {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: hsl(0, 0%, 98%);
    /* border-radius: 5px; */
    /* padding: 0.9rem 0.6rem; */
}
</style>-->

