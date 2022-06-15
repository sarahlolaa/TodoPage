<template>
<li>
    <div class="base">
        <base-checkbox :theme="theme" @checkbox-action = "crossList" :action="action"></base-checkbox>
        <li :class="['list-items', theme, 
            { 'cross-text': lineacross, 'show-full-text': showFullText }]"  @click = "revealText">
            {{listitem}}
        </li>
        <span class="cross-icon" @click = "deleteList(id)">
            <img src="../../assets/icon-cross.svg" alt="cancel">
        </span>
    </div>
    <div :class="['div-line', theme]"></div>
</li>
</template>

<script>
export default {
    data() {
        return {
            lineacross: false,
            showFullText: true,
            action: "cancel"
        };
    },
    props: ['listitem', 'theme', 'id'],
    emits: ['delete-item'],
    // props: {
        // 
    //     // key: {
    //     //     type: Number,
    //     //     required: true
    //     // },
    //     listitem: {
    //         type: String,
    //         required: false,
    //     }
    // }
    
    methods: {
        // crossList(state) {
        //     this.lineacross = state;
        // },

        crossList() {
            this.lineacross = !this.lineacross;
        },

        revealText() {
            this.showFullText = !this.showFullText;
        },

        deleteList(listId) {
            console.log("activated", listId);
            this.$emit('delete-item', listId);
        }
    }
}
</script>

<style scoped>
li {
    list-style-type: none;
    /* border-bottom: 1px solid hsl(233, 11%, 84%); */
}

.base {
    display: flex;
    align-items: center;
    width: 100%;
}

.list-items {
    width: 70%;
    flex-grow: 1;
    padding: 0.45rem 0 0.25rem 0;
    font-family: inherit;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.2;  
    text-decoration: none;  
}

.cross-text {
    text-decoration: line-through;
}

.show-full-text {
    height: 23.19px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.cross-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0.3rem 1rem 0.3rem 0.625rem;
}

.div-line {
    width: 100%;
    /* height: 0.1rem; */
    border-bottom-style: solid ;
    border-bottom-width: 1px;
    margin: 0.4rem 0;
    /* background: hsl(233, 11%, 84%); */
}

.div-line.light {
    border-color: hsl(233, 11%, 84%);
}

.div-line.dark {
    border-color: hsl(233, 14%, 35%);
}

.light {
    color: hsl(235, 19%, 35%);
}

.dark {
    color: hsl(234, 39%, 85%);
}

.cross-text.light {
    color: hsl(236, 9%, 61%);
}

.cross-text.dark {
    color: hsl(237, 14%, 26%);
}


@media screen and (min-width: 769px) {
    .list-items {
        font-size: inherit;
    }

    .cross-icon {
        display: none;
    }

    li:nth-child(n) .base:hover .cross-icon {
        display: flex;  
    }

    .cross-text.light {
        color: hsl(233, 11%, 84%);
    }
}
</style>