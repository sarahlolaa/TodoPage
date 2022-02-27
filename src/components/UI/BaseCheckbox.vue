<template>
    <!-- <div :class="['check-circle', selectionState, theme]" @click="cancelSelection"> -->
    <div :class="['check-circle', theme, selectionState]" @click="executeSelection">
        <img src="../../assets/icon-check.svg" alt="checkmark">
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectionState: 'unchecked',
        };
    },
    emits: ['checkbox-action', 'checkbox-submit'],
    props: ['theme', 'action'],
    // props: ['theme'],
    // computed: {
    //     selectionState() {
    //         console.log(this.state);
    //         if (this.state) {
    //             return 'unchecked'
    //         }
    //         else {
    //             return ''
    //         }
    //     }   
    // },
    // beforeCreate: {
    //     function () { 
    //         console.log(this.state);
    //         if (this.state) {
    //             return selectionState = 'unchecked'
    //         }
    //         else {
    //             return selectionState = ''
    //         }
    //     }   
    // },
    methods: {
        executeSelection() {
            if (this.action === 'cancel') {
                if (this.selectionState === "unchecked") {
                    this.selectionState = "checked";
                    // this.$emit('cross-list', true)
                }
                else if (this.selectionState === "checked") {
                    this.selectionState = "unchecked"
                    // this.$emit('cross-list', false)
                }
                this.$emit('checkbox-action');
            }

            else if (this.action === 'submit') {
                this.$emit('checkbox-submit');
            }
        }
    }
}
</script>

<style scoped>
/* .unchecked {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 1.4625rem;
    height: 1.4625rem;
    border-radius: 50%;
    background: hsl(233, 11%, 84%);
    margin: 0.3rem 0.625rem 0.3rem 1rem;
}

.unchecked:after {
    content: '';
    border-radius: 50%;
    background: hsl(0, 0%, 98%);
    width: 1.3rem;
    height: 1.3rem; 
    position: absolute;
} */

.check-circle {
    /* display: inline-block; */
    display: flex;
    position: relative;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    margin: 0.3rem 0.625rem 0.3rem 1rem;
}

/* .unchecked {
    display: inline-block;
    position: relative;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    margin: 0.3rem 0.625rem 0.3rem 1rem;
} */

.unchecked.light {
    background: hsl(233, 11%, 84%);
}

.unchecked.dark {
    background: hsl(233, 14%, 35%);
}

.unchecked:after {
    content: '';
    position: absolute;
    width: 20.7px;
    height: 20.7px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    margin-left: -10.344px;
    margin-top: -10.344px; 
}  

.unchecked.light:after {
    background: hsl(0, 0%, 98%);
}

.unchecked.dark:after  {
    background: hsl(235, 24%, 19%);
}

.checked.light, .checked.dark {
    background: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

img {
    display: none;
    z-index: 5;
    align-content: center;
    justify-content: center;
    margin: auto;
}

.checked img {
    display: flex;  
}

/* .checked:after {
    display: none;
} */




@media screen and (min-width: 769px) {
    .unchecked:hover {
        background: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    }

}

/* .light-theme {
    background-color: hsl(236, 33%, 92%);
    background-image: url('../../assets/bg-mobile-light.jpg');  
}

.dark-theme {
    background-color: hsl(235, 21%, 11%);
    background-image: url('../../assets/bg-mobile-dark.jpg');  
} */

</style>