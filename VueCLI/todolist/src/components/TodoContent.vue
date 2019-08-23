<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col"><input type="checkbox"/>全选</th>
                <th scope="col">#</th>
                <th scope="col">待办事项</th>
                <th scope="col">完成时间</th>
                <th scope="col">是否完成</th>
                <th scope="col">操作</th>
            </tr>
        </thead>
        <tbody>
            <TodoItem 
            v-for="(item,idx) in datalist" 
            :data="item" :idx="idx" :key="item.time" 
            />
        </tbody>
    </table>
</template>
<script>
import TodoItem from './Todoltem.vue';
export default {
    name:'TodoContent',
    props:['datalist'],
    components:{
        TodoItem
    }
}
</script>