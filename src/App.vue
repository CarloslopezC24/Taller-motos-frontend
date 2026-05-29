<script setup>
  import { provide, computed } from 'vue';
  import { useSessionStore } from '@/modules/auth/stores/sessionStore';
  import MainNavbar from '@/modules/public/components/MainNavbar.vue';

  const sessionStore = useSessionStore();
  const nombreUsuarioGlobal = computed(() => sessionStore.nombreBienvenida);
  const tipoPlanGlobal = computed(() => sessionStore.tipoPlan)

  provide('nombreUsuarioGlobal', nombreUsuarioGlobal)
  provide('tipoPlanGlobal', tipoPlanGlobal)
</script>

<template>
  <div class="app-shell">
    <MainNavbar />
    <main class="contenedor-pagina"> 
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell{
  min-height: 100vh;
  background: radial-gradient(circle at top left, rgba(80, 70, 229, 0.15), transparent 30%),
            radial-gradient(circle at bottom right, rgba(15, 165, 233, 0.15), transparent 30%),
            linear-gradient(180deg, #fafafa 0%, #eef3ff 100%);
}

.contenedor-pagina {
  max-width: 1024px;
  margin: 0 auto;
  padding: 28px 20px 40px;
}
</style>