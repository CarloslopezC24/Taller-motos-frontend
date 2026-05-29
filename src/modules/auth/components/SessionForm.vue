<script setup>
    import {ref, reactive, computed} from 'vue'
    import { useSessionStore } from '@/modules/auth/stores/sessionStore';

    const sessionStore = useSessionStore()
    const form = reactive({
        nombreUsuario: ''
    })
    const puedeIngresar = computed(() => form.nombreUsuario.trim() !== '')

    function enviarFormulario() {
        if (!puedeIngresar.value) 
            return
        sessionStore.iniciarSesion(form.nombreUsuario)
        form.nombreUsuario = ''
    }
</script>

<template>
    <form class="login-form" @submit.prevent="enviarFormulario">
        <label for="nombreUsuario">Nombre del Usuario</label>
        <input type="text" id="nombreUsuario" v-model="form.nombreUsuario" placeholder="Escribe tu nombre" 
        @keyup.enter="enviarFormulario">
        <button type="submit">Iniciar Sesion</button>
        
        <p v-if="!puedeIngresar" class="warning"> Ingresa un nombre de usuario. </p>
        <p v-else class="success">El formulario esta listo para ser procesado </p>
    </form>
</template>

<style scoped>
    .login-form{
        background: white;
        border-radius: 18px;
        padding: 22px;
        max-width: 300px;
        box-shadow: 0 8px 18px rgba(15,24,43, 0.10);
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
    }
    input, button {
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 2px solid #cbd5e1;
        margin-bottom: 12px;
    }
    button {
    width: 100%; /* Ocupa todo el ancho del formulario */
    border: none;
    background: #F59E0B; /* El mismo Amarillo Biker del rayo */
    color: #18181B; /* Letras oscuras para alto contraste */
    font-weight: bold;
    cursor: pointer;
    padding: 12px 20px;
    border-radius: 12px;
    font-size: 16px;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

button:hover {
    opacity: 0.90;
    transform: translateY(-2px); /* Pequeño efecto de elevación */
}
    .warning {
        color: #b91c1c;
        font-weight: bold;
    }
    .success{
        color: #15830d;
        font-weight: bold;
    }
</style>