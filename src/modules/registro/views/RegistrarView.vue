<template>
    <div> 
        <h2>Formulario de registro</h2>
        <Form @submit="onSubmit" :validation-schema="schema" >
            <div class="form-group">
                <label>Nombre:</label>
                <Field v-model="nombre" type="text" name="nombre" class="form-control" />
                <ErrorMessage name="nombre" class="error-message" />
            </div>

            <div class="form-group">
                <label>Email:</label>
                <Field v-model="email" type="email" name="email" class="form-control" />
                <ErrorMessage name="email" class="error-message" />
            </div>

            <button type="submit" class="btn">Registrar</button>
        </Form>
    </div>
</template>


<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import {schema} from '../schemas/validationSchema';
import {useRegistrarStore} from '../stores/registrarStore';
import {ref} from 'vue';
 
const registrarStore = useRegistrarStore();

const nombre = ref('');
const email = ref('');

const onSubmit = (values) => {
    registrarStore.guardarRegistro(values.nombre, values.email);
    console.log('Datos guardados en Pinia:', registrarStore.nombre, registrarStore.email);
};
</script>


<style scoped>
.error-message {
    color: red;
    font-size: 0.8em;
}
.form-group {
    margin-bottom: 1rem;
}
</style>