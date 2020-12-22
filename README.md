LabFront
==================================

Proceso de instalación
----------------------
### Instalación
```
yarn install
```

### Ejecución
```
yarn serve
```

### Compilación
```
yarn build
```

Proceso de instalación con Docker
----------------------
+ Construir el contenedor
  > docker run -d -p 8080:80 elvis2e3/labfront:latest
+ Ejecutar el proyecto
  > docker run -d -p 8080:80 elvis2e3/labfront:latest 
+ Probar en un navegador
  > http://127.0.0.1:8080
