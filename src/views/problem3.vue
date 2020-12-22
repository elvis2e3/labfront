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
              <textarea class="form-control" id="input-3" aria-label="" v-model="input3" style="height: 200px"></textarea>
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
            <pre id="output-3" style="color: aliceblue">
              {{ output3 }}
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
  name: 'Problem3',
  data(){
    return {
      titulo: "Problema 3",
      problem: "Value String",
      input3: "aaaaaa",
      output3: "",
      errors: [],
      message: "",
      show: false,
      post: ()=> {
        axios.post("http://127.0.0.1:8000/api/v1/problem-3", {
              "input-3": this.input3
            }
        ).then(response =>{
          this.output3 = response.data["output"];
        })
            .catch(e => {
              this.errors.push(e);
              this.message = "Error: Datos de entrada incorrectos!!";
              this.show = true;
              this.output3 = "";
            })
      }
    }
  }
}
</script>
