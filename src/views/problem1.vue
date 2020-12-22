<template>
  <div>
    <h1 class="mb-1">{{ titulo }}</h1>
    <h3 class="mb-5">
      <em>{{ problem }}</em>
    </h3>
    <div class="row">
      <div class="col-6">
        <b-card bg-variant="dark" header="Entrada" text-variant="white" class="text-center">
          <b-card-text>
            <div class="input-group">
              <textarea class="form-control" id="input-1" aria-label="" v-model="input1" style="height: 200px"></textarea>
            </div>
            <button id="submit" type="button" @click="post"  class="btn btn-primary" style="width: 150px ">Enviar</button>
          </b-card-text>
        </b-card>
      </div>
      <div class="col-6">
        <b-alert
            variant="danger"
            v-model="show"
            class="mt-3"
            dismissible
            @dismissed="dismissed"
        >
          {{ message }}
        </b-alert>
        <b-card bg-variant="dark" header="Salida" text-variant="white" class="text-center">
          <b-card-text>
            <pre id="output-1" style="color: aliceblue">
              {{ output1 }}
            </pre>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'Problem1',
  data(){
    return {
      titulo: "Problema 1",
      problem: "Liga de Padel",
      input1: "Junior\n" +
          "Buenisimos 3 Malisimos 0\n" +
          "Buenillos 2 Malillos 1\n" +
          "Buenillos 3 Malisimos 0\n" +
          "Buenisimos 3 Malillos 0\n" +
          "Buenisimos 2 Buenillos 1\n" +
          "Malisimos 0 Buenisimos 3\n" +
          "Malillos 1 Buenillos 2\n" +
          "Malisimos 0 Buenillos 3\n" +
          "Malillos 0 Buenisimos 3\n" +
          "Buenillos 1 Buenisimos 2\n" +
          "FIN\n" +
          "Senior\n" +
          "Abuelos 3 Abueletes 0\n" +
          "Abueletes 2 Abuelos 1\n" +
          "FIN",
      output1: "",
      errors: [],
      message: "",
      show: false,
      post: ()=> {
        axios.post("http://127.0.0.1:8000/api/v1/problem-1", {
              "input-1": this.input1
            }
        ).then(response =>{
          this.output1 = response.data["output"];
        })
            .catch(e => {
              this.errors.push(e);
              this.message = "Error: Datos de entrada incorrectos!!";
              this.show = true;
              this.output1 = "";
            })
      }
    }
  },
}
</script>
