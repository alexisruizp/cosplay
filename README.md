# Cosplay en foco

### Nombre del alumno: [escribe tu nombre]

Proyecto académico para la materia de Aplicaciones Web. La página funciona como una galería comentada de cinco fotografías de cosplay y presenta observaciones sobre vestuario, caracterización, encuadre y luz.

## Objetivos

1. Organizar el contenido con etiquetas semánticas de HTML.
2. Aplicar CSS adaptable para mostrar las fotografías en distintos tamaños de pantalla.
3. Usar JavaScript y el DOM para generar las tarjetas, aplicar filtros, buscar y abrir los detalles de una imagen.
4. Practicar la referencia de imágenes e indicar cuándo falta información sobre su procedencia.

## Estructura del proyecto

```text
.
├── CSS/
│   └── styles.css
├── images/
│   ├── cosplay-blanco-retrato.jpg
│   ├── cosplay-lila-exterior.jpg
│   ├── cosplay-rojo-exterior.jpg
│   ├── cosplay-rubio-interior.jpg
│   └── cosplay-verde-interior.jpg
├── JS/
│   └── app.js
├── JavaScript_DOM/
│   ├── Parte_1/
│   │   └── fundamentos.js
│   ├── Parte_2/
│   └── Parte_3/
├── index.html
└── README.md
```

## Referencias de las imágenes

Las imágenes se recibieron como archivos adjuntos al proyecto. Los nombres de personajes y juegos que aparecen abajo fueron proporcionados por el alumno; no se proporcionaron autor, URL de publicación ni fecha de consulta. Por eso no se atribuyen las fotografías a una cosplayer ni se inventan citas. Si las imágenes provienen de una página pública, hay que añadir su enlace y autoría para completar la referencia académica.

1. `cosplay-lila-exterior.jpg`: Cantarella, de *Wuthering Waves*; retrato con peluca lila y vestuario blanco y azul.
2. `cosplay-verde-interior.jpg`: Nefer, de *Genshin Impact*; retrato con peluca negra y vestuario oscuro con detalles verdes y dorados.
3. `cosplay-rojo-exterior.jpg`: Mavuika, de *Genshin Impact*; retrato con peluca roja frente a rocas y agua.
4. `cosplay-blanco-retrato.jpg`: Zani, de *Wuthering Waves*; retrato con peluca blanca y accesorios negros frente a una pared de concreto.
5. `cosplay-rubio-interior.jpg`: Evelyn, de *Zenless Zone Zero*; retrato con peluca rubia en un espacio interior.

Las descripciones combinan el personaje indicado por el alumno con observaciones de lo que se ve en las fotografías; no identifican a las cosplayers ni afirman dónde se tomaron.

## Ejemplo de JavaScript

```js
const fotos = document.querySelectorAll(".photo-card");
console.log(`Fotografías en la página: ${fotos.length}`);
```

## Cómo abrirlo

Abre `index.html` en el navegador. No requiere instalar paquetes. Prueba los filtros, el buscador y la ventana de detalles de cada fotografía.

## Lista de tareas

- [x] Crear la estructura HTML, la navegación y el hero.
- [x] Mostrar las cinco imágenes compartidas en tarjetas con descripciones y referencias numeradas.
- [x] Agregar filtros, búsqueda y una ventana de detalles con JavaScript.
- [x] Crear las carpetas `JavaScript_DOM/Parte_1`, `Parte_2` y `Parte_3`.
- [ ] Sustituir `[escribe tu nombre]` por el nombre del alumno.
- [ ] Añadir autor y enlaces originales de las fotos, si están disponibles.
- [ ] Completar en las carpetas de DOM los ejercicios que se vayan viendo en clase.
- [ ] Crear el repositorio en GitHub y subir los avances mediante pull requests.

## Publicar los avances en GitHub

1. Configura tu nombre y correo en Git Bash:

   ```bash
   git config --global user.name "Tu nombre"
   git config --global user.email "tu-correo"
   ```

2. Crea un repositorio vacío en GitHub para este proyecto.
3. Abre una terminal en esta carpeta y enlaza el repositorio:

   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "Crear galeria de cosplay"
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```

4. Para subir un avance, crea una rama y envíala:

   ```bash
   git checkout -b add-mejora-galeria
   git add .
   git commit -m "Agregar mejora a la galeria"
   git push -u origin add-mejora-galeria
   ```

5. Abre un pull request de la rama hacia `main` y agrega a **Rigo0804** como revisor, según la práctica del curso.
