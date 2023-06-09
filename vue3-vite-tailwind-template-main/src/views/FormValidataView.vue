<script setup>
    import { ref,computed} from 'vue';
    import BaseInput from '../components/BaseInput.vue';
    import BaseButton from '../components/BaseButton.vue';

    const username = ref('');
    const password = ref('');

    const usernameIsValid = computed(() => username.value !== '');
    const passwordIsValid = computed(() => password.value.length >= 6);

    const result = ref('校验结果：')

    const onSubmit =() =>{
        if(usernameIsValid.value && passwordIsValid.value){
            result.value = '表单校验通过'
        }else{
            result.value = '表单校验未通过'
        }
    
    }
</script>

<template>
    <div class="px-2 py-10 m-10 w-100 h-80 bg-slate-200 text-center">
        <form @submit.prevent="onSubmit">
            <BaseInput label="Username" type="text" v-model="username"/>
            <BaseInput label="Password" type="password" v-model="password"/>
            <div class="my-2">
                <BaseButton type="submit">提交</BaseButton>
            </div>
        </form>
        <p>{{ result }}</p>
    </div>
</template>

<style scoped>

</style>