<script setup>
    import { computed } from 'vue';
    import { useSessionStore } from '@/modules/auth/stores/sessionStore';

    const sessionStore = useSessionStore();
    const nombreUsuario = computed(() => sessionStore.nombreBienvenida);
    const tipoPlan = computed(() => sessionStore.tipoPlan)
</script>

<template>
    <header class="navbar">
        <div class="brand">
            <span class="logo"> ⚡</span>
            <div>
                <h1>Culiacán Bikers Garage</h1>
                <p>Servicio preventivo, correctivo y refacciones </p>
            </div>
        </div>
        <nav class="links">
            <RouterLink to="/login"> Login </RouterLink>
            <RouterLink to="/"> Inicio </RouterLink>
            <RouterLink to="/admin"> Admin </RouterLink>
            <RouterLink to="/registros"> Registros </RouterLink>
            <RouterLink to="/perfil"> Perfil </RouterLink>
        </nav>
        <div class="user-box">
            <span>{{ nombreUsuario }}</span>
            <small> {{  tipoPlan  }}</small>
        </div>
    </header>    
</template>

<style scoped>
    .navbar {
        position: sticky;
        top: 0;
        z-index: 20;
        display: grid;
        grid-template-columns: 1.2fr 2fr auto;
        gap: 24px;
        align-items: center;
        padding: 18px 24px;
        background: rgba(24, 24, 27, 0.95);
        color: #ffffff;
        box-shadow: 0 8px 18px rgba(0,0,0,0.2);
    }
    .brand{
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .logo {
        font-size: 32px;
    }

    .brand h1{
        margin: 0;
        font-size: 22px;
    }

    .brand p {
        margin: 2px 0 0;
        font-size: 14px;
        color: #cbd5e1;
    }
    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .links a{
        text-decoration: none;
        color: white;
        background: rgba(255,255,255,.10);
        padding: 10px 14px;
        border-radius: 12px;
        transition: 0.25s ease ;
        cursor: pointer;
    }

    .links a:hover, .links a.router-link-active {
    background: #F59E0B; 
    color: #18181B; 
}

    .user-box {
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 4px;
        background: rgba(255,255,255,0.10);
        padding: 10px 14px;
        border-radius: 14px;
    }

    .user-box span {
        font-weight: bold;
        font-size: 22px;
    }

    .user-box small {
        color: #cbd5e1
    }

    @media (max-width: 900px){
        .navbar {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .brand, .user-box {
            justify-content: center;
            align-items: center;
        }
    }
</style>