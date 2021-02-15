<template>
  <ElCard class="form-card">
    <ElForm
        :model="formData"
        :rules="rules"
        ref="addItemForm"
        label-position="top">
      <ElFormItem label="Тип" prop="type">
        <ElSelect class="type-select"
                  v-model="formData.type"
                  placeholder="Выберите тип...">
          <ElOption label="Income"
                    value="INCOME"/>
          <ElOption label="Outcome"
                    value="OUTCOME"/>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Комментарий"
                  prop="comment">
        <ElInput v-model="formData.comment"/>
      </ElFormItem>
      <ElFormItem label="Сумма"
                  prop="value">
        <ElInput v-model.number="formData.value"/>
      </ElFormItem>
      <ElButton type="primary"
                @click="onSubmit">Добавить</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    formData:{
      type: 'INCOME',
      comment: '',
      value: 0
    },
    rules: {
      type:[ {required: true, message: 'Выберите тип', trigger: 'blur'} ],
      comment: [ {required: true, message: 'Оставьте запись', trigger: 'blur'} ],
      value: [
          {required: true, message: 'Введите сумму', trigger: 'blur'},
          {type: 'number', message: 'Введите число', trigger: 'change'},
      ],
    }
  }),
  methods:{
    onSubmit(){
      this.$refs.addItemForm.validate(valid => {
         if(valid) {
           if (this.formData.value === 0){
             this.$notify({
               title: 'Оповещение',
               message: 'Сумма не должна быть равна 0',
             })
             return false
           }
           if(this.formData.type === 'OUTCOME'){
             this.formData.value = -this.formData.value
           }
           this.$emit('submitForm', {...this.formData})
           this.$refs.addItemForm.resetFields()
         }
      })
    },
  }
}
</script>

<style scoped>
.form-card{
  max-width: 500px;
  margin: auto;
}
.type-select{
  width: 100%;
}
</style>