# Challenge-Amigo-Secreto
"Aplicación web simple para organizar el juego del Amigo Secreto: agrega nombres, muéstralos en lista, sortea un amigo al azar y reinicia el juego fácilmente."
## 🚀 Funcionalidades

- **Agregar amigos**  
  Introduce el nombre de un amigo y añádelo a la lista. Se valida que no esté vacío.
  
- **Mostrar lista de amigos**  
  Se renderiza dinámicamente en el DOM cada nombre agregado.
  
- **Sortear un amigo secreto**  
  Selección aleatoria de un nombre de la lista usando `Math.random()`.
  
- **Reiniciar el juego**  
  Borra la lista de amigos y el resultado del sorteo para empezar de nuevo.

## 🖥️ Tecnologías utilizadas

- **HTML5** para la estructura de la interfaz.
- **CSS3** para estilos, tipografía y diseño responsivo.
- **JavaScript (ES6)** para la lógica del juego y manipulación del DOM.
- **Google Fonts** (Inter y Merriweather) para mejorar la apariencia del texto.

## 📜 Archivos clave

### 1. `index.html`
Contiene la estructura base del juego:
- Un **header** con título y banner.
- Una **sección de entrada** para añadir amigos.
- Botones para **sortear** y **reiniciar**.
- Listas para mostrar amigos y el resultado.

### 2. `style.css`
Define:
- Colores en variables `:root` para fácil mantenimiento.
- Diseño **flexbox** para centrar elementos.
- Estilos de botones, inputs y tipografía.
- Efectos `hover` y sombras para una interfaz más atractiva.

### 3. `app.js`
Incluye la lógica:
- `agregarAmigo()` → Valida, añade y actualiza la lista.
- `mostrarLista()` → Renderiza la lista en el DOM.
- `sortearAmigo()` → Escoge un amigo al azar y lo muestra.
- `reiniciarJuego()` → Limpia todo para reiniciar.
- `escapeHtml()` → Previene inyección de HTML en los nombres.

## 📷 Vista previa

![Vista previa del juego](assets/amigo-secreto.png)

## ⚙️ Instalación y uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tuusuario/juego-amigo-secreto.git
   cd juego-amigo-secreto
