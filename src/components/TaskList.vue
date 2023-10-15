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
        isDelList: Boolean,
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
          this.$emit('redact', task)
        },
        doneTask(task){
          this.$emit('done', task)
        }
        ,
        inputChangeList(task){
          this.$emit('inputChangeList', task)
        }
    }

}
</script>
<style scoped>

</style>