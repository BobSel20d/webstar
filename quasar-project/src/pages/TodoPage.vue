<template>
  <q-page class="bg-gray-3">
    <div class="row q-pa-sm bg-primary">
      <q-input v-model="text" label="Добавить задачу" @keypress.enter="addTask" @blur="this.text = ''" filled bg-color="white" class="col" square>
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="addTask"/>
        </template>
      </q-input>
    </div>
    <task-list
    :tasks="tasks.sort(sortByDone)"
    @confirmList = confirm
    />
    <div v-if="this.tasks.length == 0" class="no-tasks absolute-center">
      <q-icon
        name="check"
        size="100px"
        color="primary"
      >
      </q-icon>
      <div class="text-h5 text-primary text-center">Задач нет</div>
    </div>
  </q-page>
  <!-- <div class="q-pa-md q-gutter-sm">
    <q-btn label="Confirm" color="primary" @click="confirm(index)" />
  </div> -->
</template>

<script>
import TaskList from '../components/TaskList.vue'
export default {
  components: {
    TaskList
  },
  data () {
    return {
      tasks: [
      ]
    }
  },
  methods: {
    confirm (index) {
      this.$q.dialog({
        title: 'Удаление задачи',
        message: 'Вы уверены, что хотите удалить задачу?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.sort(this.sortByDone).splice(index, 1)
        this.$q.notify({
          message: 'Задача аннигилирована',
          color: 'purple'
        })
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    sortByDone (d1, d2) {
      if (d1.done && !d2.done) {
        return 1
      }
      if (d1.done === d2.done) {
        return 0
      }
      if (!d1.done && d2.done) {
        return -1
      }
    },
    addTask () {
      if (this.text !== '') {
        const task = {
          title: this.text,
          done: false,
          date: new Date()
        }
        this.tasks.unshift(task)
      }
      this.text = ''
    }
  }
}
</script>
