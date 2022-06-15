<template>
<div>
    <div class="base">
        <base-checkbox :theme="theme" @checkbox-submit = addListItem :action="action"></base-checkbox>
        <div class='input-div'>
            <input :class='theme' type="text" 
            v-model="inputString"
            placeholder="Create a new todo..."
            @focus="onFocus=true">
            <!-- @blur="onFocus=false"> -->
        </div>
    </div>
    <base-dialog :theme="theme" :open="isInputEmpty">
      <p>Empty note discarded</p>
    </base-dialog>
</div> 
</template>

<script>
import BaseDialog from "../UI/BaseDialog.vue"
export default {
    components: { BaseDialog }, 
    data() {
        return {
            // inputString: 'Create a new todo...',
            inputString: '',
            action: "submit",
            regexString: /^\s*$/,
            isInputEmpty: false,
            onFocus: false
            // testString: 'testString',
            // testStringOne: '  ',
            // testStringTwo: ''
        }  
    },
    props: [ 'theme'],
    emits: ['collect-input'],
    watch: {
        isInputEmpty(value) {
            if (value === true) {
                setTimeout(() => {this.isInputEmpty = false; this.onFocus = false; }, 3000);                 
            }
        }
    },
    methods: {
        addListItem() {
            const trueMatch = this.inputString.match(this.regexString);
            // console.log(this.testString.match(this.regexString))
            // console.log(this.testStringOne.match(this.regexString))
            // console.log(this.testStringTwo.match(this.regexString))
            if (this.onFocus === true && trueMatch) {
                this.isInputEmpty = true;
            }
            else if (!trueMatch){
                console.log('Activated')
                this.$emit('collect-input', this.inputString);
                this.inputString = '';
            }
        }
    }
}
</script>

<style scoped>
input {
    width: 100%;
    background-color: transparent;
    font-family: inherit;
    font-size: 10px;
    line-height: 1.2;
    border: none;
    outline: none;
    padding: 0.45rem 0 0.25rem 0;
}

.base {
    display: flex;
    align-items: center;
    width: 100%;
}

.input-div {
    flex-grow: 1;
}

.light {
    color: hsl(236, 9%, 61%);
}

.dark {
    color: hsl(234, 11%, 52%);
}

@media screen and (min-width: 769px) {
    input {
        font-size: inherit;
    }
}
</style>

