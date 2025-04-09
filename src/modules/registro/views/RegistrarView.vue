<template>
    <div> 
        <h2>Formulario de registro</h2>
        <Form @submit="onSubmit" :validation-schema="schema" >
            <div class="form-group">
                <label>Nombre:</label>
                <Field name="nombre" type="text" class="form-control" />
                <ErrorMessage name="nombre" class="error-message" />
            </div>

            <div class="form-group">
                <label>Email:</label>
                <Field name="email" type="email" class="form-control" />
                <ErrorMessage name="email" class="error-message" />
            </div>

            <button type="submit" class="btn">Registrar</button>
        </Form>
    </div>
</template>


<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';

const onSubmit = (values) => {
    console.log('Formulario enviado:', values);
  // Aquí tu lógica de registro
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