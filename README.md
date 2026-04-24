# 🧠 Rick and Morty Microfrontends

Aplicación web basada en arquitectura de **microfrontends** usando **React + Webpack Module Federation**.

---

## 🚀 Arquitectura

El proyecto está dividido en 3 microfrontends:

- **mf-shell** → Aplicación contenedora (Host)
- **mf-characters** → Listado de personajes
- **mf-character-detail** → Detalle de personaje

Cada microfrontend es independiente y se integra mediante **Module Federation**.

---

## 🛠️ Tecnologías

- React 18
- Webpack 5
- Module Federation
- React Router DOM
- Babel

---

## 📦 Instalación

Instalar dependencias en cada microfrontend:

```bash
cd mf-characters
npm install

cd ../mf-character-detail
npm install

cd ../mf-shell
npm install
```

---

## ▶️ Ejecución

Levantar cada microfrontend en terminales separadas:

```bash
# Microfrontend de personajes
cd mf-characters
npm start

# Microfrontend de detalle
cd mf-character-detail
npm start

# Aplicación principal (host)
cd mf-shell
npm start
```

---

## 🌐 Puertos

- Shell → http://localhost:3000
- Characters → http://localhost:3001
- Detail → http://localhost:3002

---

## 🔀 Rutas

- `/` → Lista de personajes
- `/characters` → Lista de personajes
- `/character/:id` → Detalle de personaje

---

## ⚙️ Notas Técnicas

- Se utiliza `React.lazy` y `Suspense` para carga dinámica de microfrontends.
- El `mf-shell` gestiona el enrutamiento global.
- Se configuró `historyApiFallback` para soportar rutas SPA.

---

## 📌 Estado del proyecto

✔️ Estructura base de microfrontends
✔️ Integración con Module Federation
✔️ Navegación entre vistas

🚧 Pendiente:

- Consumo de API real
- Filtros
- Manejo de errores y loading
- Pruebas unitarias
- Dockerización

---

## 👨‍💻 Autor Jaime Tellez Palafox

Proyecto realizado como prueba técnica Frontend SR.
