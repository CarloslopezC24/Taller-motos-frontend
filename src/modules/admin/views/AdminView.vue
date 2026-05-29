<script setup>
import { computed } from 'vue';
import { useSessionStore } from '@/modules/auth/stores/sessionStore';
import { useControlStore } from '@/modules/admin/stores/controlStore';

// Inicialización de stores
const sessionStore = useSessionStore();
const controlStore = useControlStore();

// Datos calculados para la UI
const nombreUsuario = computed(() => sessionStore.nombreBienvenida || 'Invitado');
const esAutenticado = computed(() => sessionStore.autenticado);

// Definición de estadísticas para el dashboard
const stats = computed(() => [
  {
    label: 'Usuario en sesión',
    value: nombreUsuario.value,
    highlight: true
  },
  {
    label: 'Estado del acceso',
    value: esAutenticado.value ? 'Autenticado' : 'Bloqueado',
    statusClass: esAutenticado.value ? 'text-success' : 'text-danger'
  },
  {
    label: 'Notificaciones',
    value: controlStore.notificaciones,
    statusClass: 'text-warning'
  }
]);
</script>

<template>
  <section class="admin-container">
    <div class="header-section">
      <h2>Panel Administrativo</h2>
      <p class="subtitle">Gestión centralizada del Taller de Motos</p>
    </div>

    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <span class="stat-label">{{ stat.label }}</span>
        <strong class="stat-value" :class="stat.statusClass">
          {{ stat.value }}
        </strong>
      </div>
    </div>
  </section>
</template>

<style scoped>
.admin-container {
  padding: 40px;
  background: rgba(24, 24, 27, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  max-width: 900px;
  margin: 0 auto;
}

.header-section {
  margin-bottom: 40px;
  border-bottom: 1px solid #3f3f46;
  padding-bottom: 20px;
}

.header-section h2 {
  font-size: 32px;
  color: #f59e0b;
  margin: 0;
}

.subtitle {
  color: #a1a1aa;
  margin: 8px 0 0 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.stat-card {
  background: rgba(39, 39, 42, 0.6);
  padding: 32px;
  border-radius: 16px;
  border-left: 4px solid #f59e0b;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(39, 39, 42, 0.9);
  transform: translateY(-5px);
}

.stat-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #a1a1aa;
  font-weight: 700;
}

.stat-value {
  font-size: 28px;
  color: #ffffff;
}

.text-success { color: #10b981; }
.text-danger { color: #ef4444; }
.text-warning { color: #f59e0b; }
</style>