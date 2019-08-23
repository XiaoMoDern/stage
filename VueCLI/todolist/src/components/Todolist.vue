<template>
  <div class="todolist">
    <TodoForm v-on:add="addItem"></TodoForm>
    <TodoContent :datalist="datalist"></TodoContent>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

// 引入组件
import TodoForm from "./TodoFrom.vue";
import TodoContent from "./TodoContent.vue";
import Bus from '../bus.js';
// 导出组件
export default {
  data() {
    return {
      datalist: [
        {
          content: "完成Vue团队项目",
          time: "2019-9-9",
          done: false
        }
      ],

      // 测试
      num:10
    };
  },

  components: {
    TodoForm,
    TodoContent
  },

  methods: {
    addItem(content) {
      let data = {
        content,
        time: Date.now(),
        done: false
      };
      this.datalist.push(data);
    },
    removeItem(idx) {
      this.datalist.splice(idx, 1);
    },
    completeItem(idx) {
      this.datalist.forEach((item, i) => {
        if (i === idx) {
          item.done = true;
        }
      });
    },
    changeNum(){
      this.num++
    }
  },

  mounted(){

    // 自定义事件
    Bus.$on('remove',idx=>{
      this.removeItem(idx);
    })

    .$on('complete',idx=>{
      this.completeItem(idx)
    })
  }
};
</script>