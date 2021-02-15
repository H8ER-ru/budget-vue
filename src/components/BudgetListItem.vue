<template>
  <ElCard :header="header">
    <template v-if="isExits">
      <div class="list-item" v-for="(item, prop) in list" :key="prop">
        <i v-if=" item.type === 'INCOME' " class="el-icon-arrow-up"></i>
        <i v-else class="el-icon-arrow-down"></i>
        <span class="budget-comment">{{item.comment}}</span>
        <span
            :class="item.type=='INCOME' ? 'value-green' : 'value-red'"
            class="budget-value">
            {{item.value}}
        </span>
        <ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>
      </div>
    </template>
    <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
  </ElCard>
</template>

<script>
export default {
  name: "BudgetListItem",
  props:{
    list:{
      type: Object,
      default: () => ({
        ...this.props
      })
    },
  },
  data: () => ({
    header: 'Список трат/расходов',
    emptyTitle: "Пустой список",
    dialogVisible: true
  }),
  computed: {
    isExits(){
      return Boolean(Object.keys(this.list).length)
    }
  },
  methods:{
    deleteItem(id){
      this.$emit('deleteItem', id)
    }
  },
}
</script>

<style scoped>
.list-item{
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value{
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.budget-comment:first-letter{
  text-transform: uppercase;
}
.el-icon-arrow-up{
  font-size: 25px;
  color: green;
}
.el-icon-arrow-down{
  font-size: 25px;
  color: darkred;
}
.value-green{
  color: green;
}
.value-red{
  color: darkred;
}
</style>