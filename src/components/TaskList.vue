<template>
    <div class="wrapper__list">
          <h2>
            <span>{{ title }}</span>
            <span class="task-num">{{ TaskNum }}</span>
          </h2>
          <div v-if="tasks.length === 0">
            <p>Задач нет</p>
          </div>
          <ul v-else class="task-list" :class="SubStyle">
            <task-item
             v-for="(task, index) in tasks" 
             :key="task.id" 
             :task = "task"
             :index = "index"
             @checkItem="check" 
             @removeItem="removeTask"
             @redactItem="redactTask"  
             @doneItem="doneTask" 
             @inputChangeItem="inputChangeList"
             :isItemChecked = isChecked
             :isDelListItem = isDelList
             :hiddenClass = isHidden
             :item_reddid = list_redid
             />
            <!-- <li v-for="(task, index) in tasks" :key="task.id">
              <div>
                <input type="checkbox" @click="check(index)" />

                <span v-if = "task.id != redid" :class="isChecked">{{ task.title }}</span>
                <input class="text-field" 
                v-if = "task.id === redid" 
                type="text" 
                @input ="inputChange"
                :value = "task.title">
              </div>
              <div>
                <button hidden v-if="task.id === redid" class="btn btn_mr btn_icon" @click="done(task)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>                
                </button>
                <button hidden v-else class="btn btn_yellow btn_icon" @click="redact(task)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>                
                </button>
                <button class="btn btn_red " @click="removeTask(index,this.isDelList)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
              </div>
            </li> -->
          </ul>

        </div>

</template>
<script>
import TaskItem from '@/components/TaskItem.vue';
export default{
  components:{
    TaskItem
  },
    props: {
        tasks: {
            type: Array
        },
        TaskNum:Number,
        title:String,
        SubStyle: String,
        isChecked: String,
        isDelList: Number,
        isHidden: String,
        list_redid:Number

    },
    methods: {
        check(index){
            this.$emit('check', index)
        },
        removeTask(index,flag) {
          this.$emit('remove', index,flag)
        },
        redactTask(task){
          //console.log("task1")
          this.$emit('redact', task)
        },
        doneTask(task){
          //console.log("task")
          this.$emit('done', task)
        }
        ,
        inputChangeList(task){
          //console.log("task")
          this.$emit('inputChangeList', task)
        }
    }

}
</script>
<style scoped>

</style>