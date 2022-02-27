<template>
    <div :class="['bar', theme]">
        <div class="option">
            <slot name="items-left"></slot>
        </div>
        <div :class="['options-bar', isVisible]">
            <slot name="default"></slot>
        </div>
        <div class="option">
            <slot name="clear"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isVisible', 'theme']
}
</script>

<style scoped>
.bar {
    display: flex;
    width: 100%;
    /* padding: 0.45rem 1rem 0.25rem 1rem; */
    padding: 0.494rem 1rem;
    justify-content: space-between;
    align-items: center;
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
    line-height: 1.2; 
}

.option {
    font-size: 10px;
    font-weight: 400;
    margin: 0.151rem 0;
}

.options-bar {
    padding: 0 20%;
}


.options-bar.show-mobile {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
}

.options-bar.show-desktop {
    display: none;
}

.light {
    color: hsl(236, 9%, 61%);
}

.dark {
    color: hsl(234, 11%, 52%);
}


/* .light {
    color: hsl(233, 11%, 84%);
}

.dark {
    color: hsl(234, 11%, 52%);
} */

@media screen and (min-width: 769px) {
    .options-bar {
        padding: 0 17%;
    }

    /* .options-bar.light:hover  {
        color: hsl(235, 19%, 35%);
    }

    .options-bar.dark:hover  {
        color: hsl(236, 33%, 92%);
    } */

    .options-bar.show-mobile {
        display: none;
    }

    .options-bar.show-desktop {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
        flex-shrink: 1;
    }
}

/* @media screen and (min-width: 769px) {

} */
</style>