<script setup>
    import { inject } from 'vue';
    import { useSessionStore } from '@/modules/auth/stores/sessionStore';

    const sessionStore = useSessionStore()
    const nombreUsuarioGlobal = inject('nombreUsuarioGlobal')
    const tipoPlanGlobal = inject('tipoPlanGlobal')
</script>

<template>
    <section class="perfil-container">
        <h2 class="titulo-seccion">Perfil del Usuario</h2>

        <div class="credencial-card">
            <div class="credencial-header">
                <div class="avatar">
                    {{ nombreUsuarioGlobal ? nombreUsuarioGlobal.charAt(0).toUpperCase() : 'U' }}
                </div>
                <div class="info-principal">
                    <h3>{{ nombreUsuarioGlobal || 'Usuario Invitado' }}</h3>
                    <span class="badge" :class="tipoPlanGlobal === 'Premium' ? 'badge-premium' : 'badge-basico'">
                        Plan {{ tipoPlanGlobal }}
                    </span>
                </div>
            </div>

            <div class="credencial-body">
                <div class="info-item">
                    <span class="label">Estado de Autenticación</span>
                    <strong class="valor" :class="sessionStore.autenticado ? 'text-success' : 'text-danger'">
                        {{ sessionStore.autenticado ? '✅ Autenticado' : '❌ Sin acceso' }}
                    </strong>
                </div>

                <div class="info-item">
                    <span class="label">Nivel de Usuario</span>
                    <strong class="valor highlight">
                        {{ tipoPlanGlobal === 'Premium' ? '⭐ Usuario VIP' : 'Usuario Estándar' }}
                    </strong>
                </div>
            </div>
            
            <div class="credencial-footer">
                <p>Culiacán Bikers Garage - Sistema de Gestión</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .perfil-container {
        max-width: 600px;
        margin: 40px auto;
        padding: 0 20px;
    }

    .titulo-seccion {
        font-size: 28px;
        color: #1e293b;
        margin-bottom: 24px;
        text-align: center;
    }

    /* Diseño de la Tarjeta (Estilo Credencial) */
    .credencial-card {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        border: 1px solid #e2e8f0;
        transition: transform 0.3s ease;
    }

    .credencial-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    /* Encabezado oscuro */
    .credencial-header {
        background: #18181b; /* Gris oscuro asfalto */
        padding: 30px;
        display: flex;
        align-items: center;
        gap: 20px;
        color: white;
        border-bottom: 4px solid #f59e0b; /* Línea Biker amarilla */
    }

    .avatar {
        width: 70px;
        height: 70px;
        background: #f59e0b;
        color: #18181b;
        font-size: 32px;
        font-weight: bold;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 10px rgba(245, 158, 11, 0.4);
    }

    .info-principal h3 {
        margin: 0 0 8px 0;
        font-size: 24px;
        letter-spacing: 0.5px;
    }

    /* Badges de los planes */
    .badge {
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .badge-premium {
        background: #f59e0b;
        color: #18181b;
    }

    .badge-basico {
        background: #475569;
        color: #ffffff;
    }

    /* Cuerpo de la tarjeta */
    .credencial-body {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: #f8fafc;
    }

    .info-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 15px;
        border-bottom: 1px solid #e2e8f0;
    }

    .info-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    .label {
        color: #64748b;
        font-weight: bold;
        font-size: 14px;
    }

    .valor {
        font-size: 16px;
        font-weight: bold;
    }

    /* Colores para los estados */
    .text-success { color: #10b981; }
    .text-danger { color: #ef4444; }
    .highlight { color: #f59e0b; }

    /* Pie decorativo */
    .credencial-footer {
        background: #f1f5f9;
        padding: 15px;
        text-align: center;
        font-size: 12px;
        color: #afce34;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
</style>