<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const object = ref([])
const codigo = ref('')
const ubicacion = ref('')
const responsable = ref('')
const estado = ref('Bueno')

function addCode(code: string) {
  if (code.includes('ANH')  && code.length >= 7) {
    codigo.value = ''
  }
  if (code.length >= 6 && !code.includes('ANH')) {
    object.value.push({
      codigo: codigo.value,
      ubicacion: ubicacion.value,
      responsable: responsable.value,
      estado: estado.value
    })
    codigo.value = ''
  }
}
watchEffect(() => {
  if (codigo.value.length > 0) {
    addCode(codigo.value)
  }
})
</script>

<template>
  <div style="display: flex; position: absolute; top: 0; margin-top: 1rem; left: 0;">
   
    <span>codigo: </span>
    <input autofocus type="text" name="Codigo" v-model="codigo" />
    <span>Ubicacion: </span>
    <input type="text" name="ubicacion" v-model="ubicacion" />
    <span>Estado: </span>
    <select type="text" name="estado" v-model="estado" >
    <option value="Bueno" label="Bueno"></option>
    <option value="Inservible" label="Inservible"></option>
    </select>
    <span>Responsable: </span>
    <input type="text" name="responsable" v-model="responsable" />
  
  </div>
  <download-excel type="xlsx" v-if="object.length>0" style="position:absolute; top: 0; left: 0; margin-top: 6.5rem;" :data="object">
  <button>Descargar</button>
</download-excel>
  <br/>
    <br/>
    <br/>
    <table style="top: 0; margin-top: 8rem; width: 95%; position: absolute;">
      <tr>
        <th>Codigo</th>
      <th>Ubicacion</th>
      <th>Estado</th>
      <th>Responsable</th>
      </tr>
     <tr  v-for="obj in object" :key="obj.codigo">
      <td>{{ obj.codigo }}</td>
      <td>{{ obj.ubicacion }}</td>
      <td>{{ obj.estado }}</td>
      <td>{{ obj.responsable }}</td>
     </tr>
    </table>

</template>

<style>
table, th, td {
  border: 1px solid;
}
table{
  overflow: scroll;
}
</style>
