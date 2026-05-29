<script setup>
    import { inject } from 'vue';
    import { useSessionStore } from '@/modules/auth/stores/sessionStore';
    import SessionForm from '@/modules/auth/components/SessionForm.vue';

    const sessionStore = useSessionStore()
    const tipoPlanGlobal = inject('tipoPlanGlobal')
</script>

<template>
    <div class="panel-central">
        
        <div class="bloque-izquierdo">
            <span class="subtitulo">PERFIL DE USUARIO</span>
            <h2>Panel de Control Central</h2>
            
            <div class="usuario-box">
                <p>Usuario Actual: <strong>{{ sessionStore.nombreUsuario || 'Carlos López' }}</strong></p>
                
                <p>Nivel de Acceso: <strong>{{ sessionStore.rolUsuario || tipoPlanGlobal || 'Administrador' }}</strong></p>
            </div>
            
            <div class="acciones-principales">
                <router-link to="/registros" class="btn-explorar">
                    Explorar Registros
                </router-link>
            </div>
        </div>

        <div class="estado-box">
            <h3>Datos de la Estación</h3>
            <div class="linea-divisor"></div>
            
            <ul class="lista-arquitectura">
                <li>
                    <span class="icono">📍</span>
                    <p><strong>Sucursal:</strong> Culiacán Centro</p>
                </li>
                <li>
                    <span class="icono">⏰</span>
                    <p><strong>Turno Actual:</strong> Matutino (09:00 AM - 07:00 PM)</p>
                </li>
                <li>
                    <span class="icono">🛡️</span>
                    <p><strong>Rol Asignado:</strong> {{ sessionStore.rolUsuario || 'Administrador Principal' }}</p>
                </li>
                <li>
                    <span class="icono">🟢</span>
                    <p><strong>Estado:</strong> Sesión Activa / En Línea</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
    .panel-central {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 40px;
        background: #18181B; 
        border-radius: 24px;
        padding: 40px;
        max-width: 950px;
        margin: 40px auto;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        color: white;
    }

    /* --- ESTILOS DE LADO IZQUIERDO --- */
    .bloque-izquierdo {
        flex: 1.2;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .subtitulo {
        color: #F59E0B; 
        font-size: 13px;
        letter-spacing: 1.5px;
        font-weight: bold;
        margin-bottom: 8px;
        text-transform: uppercase;
    }

    .bloque-izquierdo h2 {
        font-size: 32px;
        margin: 0 0 25px 0;
        font-family: 'Georgia', 'Times New Roman', serif;
        color: white;
    }

    .usuario-box {
        background: #27272A; /* Fondo gris de la caja interna de usuario */
        border-left: 4px solid #F59E0B; /* Borde de acento naranja */
        padding: 16px 22px;
        border-radius: 14px;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 25px;
    }

    .usuario-box p {
        margin: 8px 0;
        color: #A1A1AA;
        font-size: 15px;
    }

    .usuario-box strong {
        color: white;
    }

    .btn-explorar {
        display: inline-block;
        background: #F59E0B; 
        color: #18181B; 
        font-weight: bold;
        padding: 12px 22px;
        border-radius: 12px;
        text-decoration: none;
        transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .btn-explorar:hover {
        opacity: 0.9;
        transform: translateY(-2px);
    }

    
    .estado-box {
        flex: 1;
        background: #27272A; /* Fondo gris original de la tarjeta de la derecha */
        border-radius: 18px;
        padding: 24px;
        box-shadow: 0 8px 18px rgba(15,24,43, 0.10);
        max-width: 360px;
        width: 100%;
        box-sizing: border-box;
    }

    .estado-box h3 {
        margin: 0 0 10px 0;
        color: #F59E0B; 
        font-size: 18px;
    }

    .linea-divisor {
        height: 1px;
        background: #3F3F46;
        margin-bottom: 18px;
    }

    .lista-arquitectura {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .lista-arquitectura li {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #E4E4E7;
        font-size: 14px;
    }

    .lista-arquitectura p {
        margin: 0;
    }

    .lista-arquitectura strong {
        color: #A1A1AA;
    }

    .icono {
        font-size: 16px;
    }

    @media (max-width: 768px) {
        .panel-central {
            flex-direction: column;
            padding: 24px;
            gap: 25px;
        }
        .estado-box {
            max-width: 100%;
        }
    }
</style>