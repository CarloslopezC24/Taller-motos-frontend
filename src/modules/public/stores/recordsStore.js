import { defineStore } from "pinia";
import { ref, computed } from 'vue'

const URL_BACKEND = "http://127.0.0.1:5000"

export const useRecordsStore = defineStore('registros', () => {
    // --- ESTADOS REACTIVOS (TALLER DE MOTOS) ---
    const categorias = ref(['Servicios', 'Productos', 'Citas', 'Clientes', 'Inventario', 'Soporte']);
    const tipos = ref(['General', 'Preventivo', 'Correctivo', 'Venta', 'Reservación', 'Consulta']);

    const registros = ref([])
    const mensaje = ref("")
    const error = ref("")
    const cargando = ref(false)

    // --- GETTERS / PROPIEDADES COMPUTADAS ---
    const totalElementos = computed(() => registrosActivos.value.length)
    
    const totalDestacados = computed(() => {
        return registrosActivos.value.filter(item => item.destacado == 1 || item.destacado === true).length
    })

    const promedioValor = computed(() => {
        if (registrosActivos.value.length === 0) return 0

        const suma = registrosActivos.value.reduce((acumulado, item) => {
            return acumulado + Number(item.precio)
        }, 0)

        return (suma / registrosActivos.value.length).toFixed(1)
    })
       
    const registrosActivos = computed(() => {
        // Mapeo seguro: MariaDB regresa un entero (1) para las banderas activas
        return registros.value.filter(item => Number(item.activo) === 1 || item.activo === true)
    })
        
    // --- ACCIONES ASÍNCRONAS (COMUNICACIÓN CON FLASK) ---
    async function cargarRegistros() {
        cargando.value = true
        error.value = ""

        try {
            const respuesta = await fetch(`${URL_BACKEND}/registros`)
            const datos = await respuesta.json()

            if (!respuesta.ok) {
                throw new Error(datos.error || "No se pudieron cargar los registros")
            }

            registros.value = datos
        } 
        catch (err) {
            error.value = err.message
            console.error("Error al cargar registros desde el servidor:", err)
        } 
        finally {
            cargando.value = false
        }
    }

    async function agregarRegistro(nuevoRegistro) {
        mensaje.value = ""
        error.value = ""

        try {
            const respuesta = await fetch(`${URL_BACKEND}/registros`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: nuevoRegistro.nombre,
                    categoria: nuevoRegistro.categoria,
                    descripcion: nuevoRegistro.descripcion,
                    precio: Number(nuevoRegistro.precio),
                    destacado: nuevoRegistro.destacado ? 1 : 0
                })
            })

            const resultado = await respuesta.json()

            if (!respuesta.ok) {
                throw new Error(resultado.error || 'No se pudo agregar el registro en el servidor')
            }

            mensaje.value = resultado.mensaje
        } 
        catch (err) {
            error.value = err.message
            throw err // Re-lanzamos el error para que RecordsView detenga el flujo si es necesario
        }
    }

    async function desactivarRegistro(id) {
        mensaje.value = ''
        error.value = ''

        try {
            // Se corrigió el endpoint y se cambió el método a POST para acoplarse exactamente a app.py
            const respuesta = await fetch(`${URL_BACKEND}/registros/desactivar/${id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const resultado = await respuesta.json()

            if (!respuesta.ok) {
                throw new Error(resultado.error || 'No se pudo ocultar el registro')
            }

            mensaje.value = resultado.mensaje
        } 
        catch (err) {
            error.value = err.message
            throw err
        }
    }

    async function eliminarRegistro(id) {
        mensaje.value = ""
        error.value = ""

        try {
            const respuesta = await fetch(`${URL_BACKEND}/registros/${id}`, {
                method: "DELETE"
            })

            const resultado = await respuesta.json()

            if (!respuesta.ok) {
                throw new Error(resultado.error || "No se pudo eliminar de forma física el registro")
            }

            mensaje.value = resultado.mensaje
            await cargarRegistros()
        } 
        catch (err) {
            error.value = err.message
        }
    }
     
    function reemplazarRegistros(datos){
        registros.value = datos.map(item => ({
            id: item.id ?? Date.now() + Math.random(), ...item
        }))
    }

    return {
        categorias, 
        tipos, 
        registros, 
        totalElementos, 
        totalDestacados, 
        promedioValor, 
        registrosActivos, 
        mensaje, 
        error, 
        cargando,
        cargarRegistros, 
        agregarRegistro, 
        eliminarRegistro, 
        desactivarRegistro, 
        reemplazarRegistros
    }
})