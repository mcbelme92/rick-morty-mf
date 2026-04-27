# 🧠 Rick and Morty Microfrontends

## 🎯 Objetivo del proyecto

Construir una aplicación web basada en **arquitectura de microfrontends** que consume la **Rick and Morty API** para resolver un caso real de frontend distribuido.

El proyecto busca demostrar:

- Descomposición frontend por dominios funcionales
- Orquestación de microfrontends mediante Module Federation
- Consumo de datos relacionados desde una API pública real
- Navegación entre vistas desacopladas (listado → detalle)
- Escalabilidad, mantenibilidad y despliegue distribuido con Docker

### ¿Qué hace la aplicación?

La aplicación consume la API pública de Rick and Morty:

- Consulta personajes paginados
- Permite búsqueda dinámica por nombre
- Filtra por estado y especie
- Navega a detalle del personaje seleccionado
- Consulta y muestra episodios relacionados del personaje

Esto simula un flujo real de:

**Listado → búsqueda → filtrado → navegación → detalle relacionado**

con datos distribuidos entre microfrontends.

---

## ✅ Cumplimiento de requerimientos técnicos

Se implementaron los tres microfrontends solicitados:

### MF-Characters

Cumple con:

- Tarjetas con:
  - Imagen
  - Nombre
  - Género
  - Estado
  - Especie
- Filtro por nombre
- Filtro por estado
- Filtro por especie
- Paginación
- Vista responsiva

Además:

- búsqueda global orquestada desde el Shell
- loading states
- pruebas unitarias

---

### MF-CharacterDetail

Cumple con:

- Detalle ampliado del personaje
- Estado y especie
- Lista de episodios relacionados
- Datos relacionales obtenidos desde la API
- Navegación integrada desde MF-Characters

---

### MF-Shell (Host)

Cumple con:

- Routing global
- Orquestación de microfrontends
- Layout compartido
- Navbar / diseño común
- Integración vía Webpack Module Federation
- Estado compartido de búsqueda propagado a remotes

---

Aplicación web basada en arquitectura **Microfrontend** usando  
**React + Webpack Module Federation + Docker Compose**.

Proyecto construido como prueba técnica enfocada en:

- Modularidad
- Escalabilidad
- Aislamiento por dominio
- Despliegue distribuido
- Containerización de microfrontends

---

# 🚀 Arquitectura utilizada

Se implementó una arquitectura **Microfrontend con Module Federation (Host/Remote Pattern)**.

El sistema está dividido por responsabilidades de negocio:

## Microfrontends

### `mf-shell`

Aplicación contenedora (**Host**) encargada de:

- Orquestación de remotes
- Routing global
- Composición de la aplicación

---

### `mf-characters`

Remote responsable del dominio:

- Búsqueda y listado de personajes
- Filtros
- Paginación

---

### `mf-character-detail`

Remote enfocado en:

- Detalle de personaje
- Episodios relacionados

---

## ¿Por qué esta separación?

Se separó por **bounded contexts / domain ownership** para:

- Desacoplar funcionalidades
- Permitir despliegues independientes
- Escalar equipos por dominio
- Reducir impacto de cambios
- Favorecer mantenibilidad

Cada microfrontend puede evolucionar y desplegarse de forma autónoma.

---

# ⚙️ Patrón de integración

Se usa:

- Webpack 5 Module Federation
- Host / Remote Architecture
- Dynamic Imports
- React Lazy + Suspense

El shell consume remotes dinámicamente mediante `remoteEntry.js`.

---

# 🛠️ Stack Tecnológico

- React 18
- Webpack 5
- Module Federation
- React Router DOM
- Jest + Testing Library
- Docker
- Docker Compose

---

# 🧪 Pruebas

Se agregaron pruebas unitarias para:

## CharactersPage

Valida:

- Render de datos mockeados
- Integración de componentes mock
- Comportamiento esperado del feature

---

## useCharacterFilters Hook

Valida:

- Estado inicial
- Cambio de página
- Reinicio de paginación al cambiar filtros

---

# 🐳 Dockerización

Cada microfrontend cuenta con:

- Su propio `Dockerfile`
- Contenedor independiente
- Puerto dedicado

El ecosistema completo se orquesta con:

```bash
docker-compose.yml
```

---

## ¿Por qué Docker Compose está configurado así?

Se configuró para levantar un ecosistema distribuido de microfrontends:

- Shell como host principal
- Remotes como servicios independientes
- Puertos separados por microfrontend
- `depends_on` para orquestación del host
- Bind volumes para live reload en desarrollo

Esto simula una topología cercana a producción.

---

## Levantar todo con Docker

```bash
docker compose up --build
```

Detener:

```bash
docker compose down
```

---

## Servicios

### Shell (Host)

http://localhost:3000

### Characters Remote

http://localhost:3001

### Character Detail Remote

http://localhost:3002

---

## Desarrollo con Hot Reload

Se configuraron `volumes` en `docker-compose` para permitir:

- Cambios en código sin reconstruir imágenes
- Live reload / hot reload
- Mejor experiencia de desarrollo

---

# ▶️ Ejecución local sin Docker

Instalar dependencias en cada microfrontend:

```bash
cd mf-characters
npm install

cd ../mf-character-detail
npm install

cd ../mf-shell
npm install
```

Levantar cada microfrontend:

```bash
# Characters
cd mf-characters
npm start

# Detail
cd ../mf-character-detail
npm start

# Host
cd ../mf-shell
npm start
```

---

# 🔀 Rutas

```bash
/                -> Characters
(Ruta principal `/` consume directamente el microfrontend de Characters como home)
/character/:id   -> Character Detail
```

---

# 📌 Objetivo del proyecto

Demostrar:

- Diseño Microfrontend
- Integración federada con Module Federation
- Testing de componentes y hooks
- Containerización
- Orquestación con Docker Compose
- Separación de dominios en frontend

---

# ✅ Estado del proyecto

- ✔ Arquitectura Microfrontend
- ✔ Module Federation
- ✔ Navegación entre remotes
- ✔ Pruebas unitarias
- ✔ Dockerización por microfrontend
- ✔ Compose orchestration

---

---

# 🧱 Organización interna y patrón de diseño por microfrontend

Cada microfrontend sigue una combinación de:

## Feature-Based Architecture

La aplicación está organizada por **features o dominios**, no por tipo técnico global.

```bash
features/
 └── characters/
      api/
      components/
      hooks/
      page/
```

### ¿Por qué se eligió?

Porque permite:

- Agrupar código por dominio de negocio
- Escalar funcionalidades sin acoplar módulos
- Facilitar ownership por feature
- Mejor mantenibilidad
- Estructura alineada con microfrontends

Cada microfrontend encapsula su propio dominio.

---

# 🧩 Arquitectura por capas (Layered Architecture)

Dentro de cada feature se separaron responsabilidades por capas.

## API Layer

```bash
api/
```

Ejemplos:

- characters.service.js
- client_rickmorty.js

Responsabilidades:

- Consumo de APIs
- Transformación de datos
- Aislamiento de acceso a datos

Evita mezclar llamadas remotas con UI.

---

## Presentation Layer

```bash
components/
page/
```

Responsabilidad:

- Renderizado
- Composición de vistas
- UI reusable

Ejemplos:

- CharacterCard
- CharactersGrid
- CharactersPage

---

## Logic Layer (Custom Hooks)

```bash
hooks/
```

Ejemplos:

- useCharacters
- useCharacterFilters
- useDebounce

Responsabilidad:

- Lógica reusable
- Manejo de estado
- Reglas de negocio
- Side effects

Se evita poner lógica compleja dentro de componentes.

---

## Shared UI Layer

```bash
components/UI/
```

Componentes reutilizables:

- Card
- Skeletons

Patrón tipo:

- Shared UI / Design primitives

Favorece consistencia visual.

---

# 🎯 Patrones aplicados

## Container / Presentational Pattern

Separación entre:

Containers:

```bash
CharactersPage
useCharacters
```

Presentacionales:

```bash
CharacterCard
CharactersGrid
```

Permite componentes más simples y testeables.

---

## Custom Hooks Pattern

Uso de hooks para encapsular comportamiento:

```bash
useCharacterFilters
useDebounce
```

Elegido para:

- Reusabilidad
- Separación de lógica
- Testabilidad

---

## Barrel Exports

Uso de:

```bash
index.js
```

para centralizar exports.

Beneficios:

- Imports más limpios
- Menor acoplamiento
- Mejor ergonomía

---

## ¿Por qué este diseño?

Se eligió esta estructura porque combina:

- Domain-driven organization
- Separation of concerns
- Escalabilidad
- Testabilidad
- Encapsulamiento por microfrontend

Y encaja naturalmente con arquitectura Microfrontend.

---

## Inspiración arquitectónica

La estructura toma ideas de:

- Feature Sliced Design (adaptado)
- Layered Architecture
- Container/Presentational Pattern
- Domain-driven decomposition

---

# 👨‍💻 Autor

**Jaime Téllez Palafox**  
Frontend Ing.
