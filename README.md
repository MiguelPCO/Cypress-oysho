
# Prueba Tecnica Cypress

1. Visitar la página y verificar el título:
- Visitar la página que se va a probar usando cy.visit('https://www.oysho.com').
- Verificar que el título de la página sea correcto
- erificar que la navegación funcione correctamente
- Crear un README.md con instrucciones
- Usar buenas practicas con Git
2. Realizar otras verificaciones y acciones según sea necesario (opcional):
- Por ejemplo, hacer clic en un elemento, llenar un formulario, etc.
3. Sabrías crear un pequeño workflow en GitHub Actions para ejecutar estos tests cada noche?


## Instalacíon

Crear el proyecto npm init.


```bash
   npm init
```

Instalar Cypress npm install cypress. 
```bash
   npm install cypress
```

Instalar Version 12.17.4 de Cypress con npm install -D cypress@12.17.4

```bash
   npm install -D cypress@12.17.4
```

Añadir un script a npm "cypress:open": " cypress open " en package.json

```bash
  "scripts": {
    "cypress:open": " cypress open "
  }
```
    
## Iniciar los test

Para iniciar el test utiliza el siguiente comando.

```bash
  npx cypress run
```


