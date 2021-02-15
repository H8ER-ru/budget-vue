<template>
  <div class="budget-list-wrap">
    <BudgetListItem @deleteItem="deleteItem" :list="list"/>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";
export default {
  name: "BudgetList",
  components:{
    BudgetListItem
  },
  props:{
    list:{
      type: Object,
      default: () => ({})
    },
  },
  methods : {
    deleteItem(id){
      this.$emit('deleteItem', id)
    }
  }
}
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto
}

</style>