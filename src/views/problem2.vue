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
              <textarea class="form-control" id="input-2" aria-label="" v-model="input2" style="height: 200px"></textarea>
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
            <pre id="output-2" style="color: aliceblue">
              {{ output2 }}
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
  name: 'Problem2',
  data(){
    return {
      titulo: "Problema 2",
      problem: "Chess",
      input2: "5 3\n" +
          "4 3\n" +
          "5 5\n" +
          "4 2\n" +
          "2 3",
      output2: "",
      errors: [],
      message: "",
      show: false,
      post: ()=> {
        axios.post("http://127.0.0.1:8000/api/v1/problem-2", {
              "input-2": this.input2
            }
        ).then(response =>{
          this.output2 = response.data["output"];
        })
            .catch(e => {
              this.errors.push(e);
              this.message = "Error: Datos de entrada incorrectos!!";
              this.show = true;
              this.output2 = "";
            })
      }
    }
  }
}
</script>
