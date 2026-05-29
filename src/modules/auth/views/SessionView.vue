<script setup>
    import { inject } from 'vue';
    import { useSessionStore } from '@/modules/auth/stores/sessionStore';
    import SessionForm from '@/modules/auth/components/SessionForm.vue';

    const sessionStore = useSessionStore()
    const tipoPlanGlobal = inject('tipoPlanGlobal')
</script>

<template>
    <div class="login-container">
        
        <div class="login-content">
            <section>
                <h2>Login</h2>
                <p> Plan Actual Contratado: <strong> {{ tipoPlanGlobal }}</strong></p>
                <SessionForm />
                
                <div class="estado-box">
                    <p> <strong>Usuario:</strong> {{ sessionStore.nombreUsuario }}</p>
                    <p> <strong>Autenticado: </strong> {{ sessionStore.autenticado ? 'Si': 'No' }}</p>
                    <div class="acciones">
                        <button @click="sessionStore.cambiarPlan">Cambiar Plan</button>
                        <button @click="sessionStore.cerrarSesion">Cerrar Sesion</button>
                    </div>
                </div>
            </section>
        </div>

        <div class="login-imagen">
            <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000" alt="Motocicleta en Taller Culiacán Bikers Garage">
        </div>

    </div>
</template>

<style scoped>
    .login-container {
        display: flex;
        width: 100%;
        max-width: 1200px;      
        margin: 40px auto;
        background: transparent; 
        border-radius: 20px;
        overflow: hidden;        
        box-shadow: 0 12px 30px rgba(15, 24, 43, 0.15);
    }

    .login-content {
        flex: 4;
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .login-imagen {
        flex: 6;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #111827;    
    }

    .login-imagen img {
        width: 100%;
        height: 100%;
        object-fit: cover;      
    }

    .estado-box {
        margin-top: 18px;
        background: white;
        border-radius: 18px;
        padding: 20px;
        box-shadow: 0 8px 18px rgba(15,24,43, 0.10);
        max-width: 300px;
    }

    .acciones {
        display: flex;
        gap: 10px;
        margin-top: 12px;
    }

    button {
        border: none;
        background: #F59E0B; 
        color: #18181B; 
        font-weight: bold;
        cursor: pointer;
        padding: 10px 14px;
        border-radius: 12px;
        transition: transform 0.2s ease, opacity 0.2s ease;
    }

    button:hover {
        opacity: 0.85;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .login-container {
            flex-direction: column;
            margin: 20px;
        }
        .login-imagen {
            height: 300px; 
        }
    }
</style>