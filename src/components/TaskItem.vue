<template>
    <li>
        <div>
            <div>
                <input :checked="isDelListItem" type="checkbox" @click="checkItem(index)" />
                <span v-if = "task.id != item_reddid"  >{{ task.title }}  {{isDelListItem ? '('+task.date+')' : ""}} </span>
                <input class="text-field" 
                v-if = "task.id == item_reddid" 
                type="text"
                @input ="inputChangeItem"
                :value = "task.title">
            </div>       
        </div>

        <div>
        <button :class="hiddenClass" v-if="task.id === item_reddid" class="btn btn_mr btn_icon" @click="doneItem(task)"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>                
        </button>
        <button :class="hiddenClass" v-else class="btn btn_yellow btn_icon" @click="redactItem(task)"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>                
        </button>
        <button class="btn btn_red btn_icon" @click="removeItem(index,this.isDelListItem)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </button>
        </div>
    </li>


</template>
<script>
export default{
    props: {
        task: Object,
        index: Number,
        isItemChecked: String,
        isDelListItem: Boolean,
        hiddenClass:String,
        item_reddid:Number
    },
    methods: {
        checkItem(index){
            this.$emit('checkItem', index)
        },
        removeItem(index,flag) {
            this.$emit('removeItem', index,flag)
        },
        redactItem(task) {
          this.$emit('redactItem', task)
        },
        doneItem(task){
            this.$emit('doneItem', task)           
        },
        inputChangeItem(task){
            this.$emit('inputChangeItem', task)     
        }
    }
}
</script>
<style scoped>
</style>