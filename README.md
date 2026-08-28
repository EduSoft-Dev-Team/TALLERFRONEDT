# 🎨 Taller Frontend — Práctica de Git Flow

## 📌 Descripción

Repositorio correspondiente al taller práctico de desarrollo frontend y control de versiones, realizado como actividad académica para aplicar buenas prácticas de trabajo colaborativo utilizando **Git, GitHub y Git Flow**.

Durante el desarrollo se trabajó con **HTML5, CSS3 y JavaScript**, aplicando un flujo de trabajo basado en ramas para gestionar funcionalidades, integración de cambios, generación y resolución de conflictos, corrección de errores mediante `hotfix` y control de versiones mediante etiquetas.

La práctica permitió simular un escenario de desarrollo en el que se introduce un error de forma controlada, se integra dentro del flujo de trabajo y posteriormente se corrige mediante una rama `hotfix`.

---

## 🎯 Objetivo

Aplicar de manera práctica la metodología **Git Flow** para gestionar el ciclo de desarrollo de un proyecto frontend, utilizando:

* Ramas principales.
* Ramas `feature`.
* Ramas `hotfix`.
* Commits descriptivos.
* Integración mediante `merge`.
* Resolución de conflictos.
* Etiquetas de versión.
* Sincronización con GitHub.
* Trabajo colaborativo.

---

## 🛠️ Tecnologías y herramientas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Git Flow
* Visual Studio Code

---

## 📁 Estructura del proyecto

```text
TALLERFRONEDT/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### Archivos principales

| Archivo      | Descripción                                              |
| ------------ | -------------------------------------------------------- |
| `index.html` | Estructura principal de la aplicación.                   |
| `style.css`  | Estilos y diseño visual de la aplicación.                |
| `script.js`  | Lógica JavaScript para la funcionalidad del proyecto.    |
| `README.md`  | Documentación del proyecto y de la práctica de Git Flow. |

---

# 🌿 Estrategia de ramas

Durante la práctica se utilizó una estructura basada en Git Flow:

```text
main
 │
 └── develop
      │
      └── feature/generacion-error

hotfix/corregir-estilos
```

### Ramas principales

#### `main`

Representa la rama principal del proyecto y contiene las versiones consideradas estables.

#### `develop`

Rama utilizada para integrar y consolidar los cambios realizados durante el desarrollo antes de llevarlos a `main`.

#### `feature/*`

Ramas utilizadas para desarrollar funcionalidades o realizar modificaciones específicas sin afectar directamente las ramas principales.

Durante la práctica se utilizó:

```text
feature/generacion-error
```

#### `hotfix/*`

Ramas utilizadas para corregir errores detectados en una versión estable del proyecto.

Durante la práctica se utilizó:

```text
hotfix/corregir-estilos
```

---

# 🔄 Flujo de trabajo realizado

## 1. Preparación del repositorio

Se verificaron las ramas disponibles y el estado del repositorio mediante comandos de Git.

```bash
git branch
git status
git fetch origin
```

Las ramas principales utilizadas fueron:

```text
main
develop
```

Antes de realizar modificaciones se verificó la sincronización con el repositorio remoto.

---

## 2. Creación de la rama Feature

Para realizar una modificación controlada se creó una rama independiente:

```bash
git checkout -b feature/generacion-error
```

La rama permitió realizar cambios sin modificar directamente las ramas principales.

---

## 3. Introducción de un error controlado

Como parte de la práctica se introdujo intencionalmente un error en `index.html`.

La referencia correcta de la hoja de estilos era:

```html
<link rel="stylesheet" href="style.css">
```

Para generar el error de forma controlada se modificó la referencia:

```html
<link rel="stylesheet" href="estilos.css">
```

El archivo `estilos.css` no existía dentro del proyecto, provocando que la página dejara de cargar correctamente los estilos.

El cambio quedó registrado mediante el commit:

```text
01f2244
test: introducir error en referencia de estilo
```

---

# ⚠️ 4. Integración del cambio y generación del conflicto

Durante la práctica se realizaron integraciones entre las ramas mediante `merge`.

El cambio que contenía el error fue integrado dentro del flujo de desarrollo, generando posteriormente diferencias que permitieron practicar la resolución de conflictos.

Uno de los commits relacionados con esta etapa fue:

```text
f7d6868
merge: integrar error de estilos en main
```

El archivo involucrado fue:

```text
index.html
```

Este proceso permitió practicar la identificación de cambios provenientes de diferentes ramas y su integración mediante Git.

---

# 🔧 5. Corrección del error mediante Hotfix

Después de identificar el problema en la versión estable, se utilizó Git Flow para crear una rama específica de corrección:

```bash
git flow hotfix start corregir-estilos
```

Se creó la rama:

```text
hotfix/corregir-estilos
```

El objetivo de esta rama fue solucionar el error sin realizar directamente la modificación sobre `main`.

---

## 6. Corrección de la referencia de estilos

Se modificó `index.html` para restablecer la referencia correcta hacia la hoja de estilos.

### Referencia incorrecta

```html
<link rel="stylesheet" href="estilos.css">
```

### Referencia corregida

```html
<link rel="stylesheet" href="style.css">
```

De esta manera se restableció la conexión correcta entre:

```text
index.html
    │
    └── style.css
```

La corrección quedó registrada mediante el commit:

```text
451061d
fix: corregir referencia de hoja de estilos
```

---

# 🔀 7. Finalización del Hotfix

Una vez realizada la corrección se utilizó Git Flow para finalizar el proceso:

```bash
git flow hotfix finish corregir-estilos
```

La corrección fue integrada dentro del flujo correspondiente del proyecto.

Durante este proceso se realizaron las integraciones necesarias entre las ramas principales.

Posteriormente se realizaron diferentes merges entre `main` y `develop`, los cuales quedaron registrados en el historial del repositorio.

Entre ellos se encuentran:

```text
8b15671
merge: integrar main en develop
```

y:

```text
9a68978
Merge branch 'main' into develop
```

---

# 🏷️ 8. Etiquetas de versión

Durante la práctica se utilizaron etiquetas para identificar puntos importantes del historial.

Las etiquetas existentes en el repositorio son:

```text
1.0.0
corregir-estilos
```

### Tag `corregir-estilos`

Identifica el punto del historial relacionado con la corrección del error de referencia de la hoja de estilos.

### Tag `1.0.0`

Identifica una versión estable del proyecto.

Las etiquetas pueden consultarse mediante:

```bash
git tag
```

---

# ☁️ 9. Sincronización con GitHub

Durante el desarrollo se utilizaron diferentes comandos para mantener sincronizado el repositorio local con GitHub:

```bash
git fetch origin
git pull origin develop
git push origin develop
git pull origin main
git push origin main
```

También se verificó la configuración del repositorio remoto mediante:

```bash
git remote -v
```

El repositorio remoto utilizado actualmente es:

```text
https://github.com/EduSoft-Dev-Team/TALLERFRONEDT.git
```

---

# 🔄 10. Actualización de Develop

Durante la práctica se realizaron integraciones entre diferentes versiones del proyecto.

El historial muestra diferentes commits de merge relacionados con la actualización de `develop`.

Entre ellos se encuentra:

```text
df29195
Merge branch 'develop' of https://github.com/arenasmarce/TALLERFRONEDT into develop
```

Posteriormente se agregó la documentación y se organizó la estructura final del proyecto mediante:

```text
954cf52
docs: agregar README y organizar estructura del proyecto
```

Este commit incorporó el `README.md` y realizó la organización correspondiente de los archivos del proyecto.

---

# 📚 11. Documentación del proyecto

El archivo `README.md` fue incorporado a `develop` mediante el commit:

```text
954cf52
docs: agregar README y organizar estructura del proyecto
```

Posteriormente, `develop` fue integrado nuevamente en `main`.

Durante esta integración se presentó un conflicto de tipo `add/add` debido a que existían diferentes versiones del archivo `README.md`.

Git informó:

```text
CONFLICT (add/add): Merge conflict in README.md
```

El conflicto fue resuelto seleccionando la versión correspondiente de `develop`:

```bash
git checkout --theirs README.md
```

Posteriormente se agregó el archivo:

```bash
git add README.md
```

Y se finalizó el merge mediante:

```bash
git commit -m "merge: integrar develop en main"
```

El merge final quedó registrado como:

```text
9061763
merge: integrar develop en main
```

---

# 🚀 12. Integración final de Develop en Main

Después de completar el proceso de desarrollo y documentación, se realizó la integración final:

```bash
git checkout main
git merge develop
```

Una vez resuelto el conflicto del `README.md`, se creó el commit:

```text
9061763
merge: integrar develop en main
```

Finalmente se sincronizó `main` con GitHub:

```bash
git push origin main
```

Resultado:

```text
3ac17bf..9061763  main -> main
```

De esta manera, la rama `main` quedó actualizada con los cambios desarrollados en `develop`.

---

# 📁 13. Estado final del proyecto

Al finalizar la práctica, tanto `develop` como `main` contienen la estructura principal del proyecto:

```text
README.md
index.html
script.js
style.css
```

La rama `develop` quedó sincronizada con:

```text
954cf52
docs: agregar README y organizar estructura del proyecto
```

La rama `main` quedó sincronizada con:

```text
9061763
merge: integrar develop en main
```

---

# 🧹 14. Verificación del estado del repositorio

Se verificó el estado del repositorio mediante:

```bash
git status
```

El resultado final fue:

```text
nothing to commit, working tree clean
```

Esto indica que no quedaron cambios pendientes en el directorio de trabajo.

También se verificó la estructura de archivos mediante:

```bash
git ls-tree -r develop --name-only
```

Resultado:

```text
README.md
index.html
script.js
style.css
```

Y las etiquetas existentes mediante:

```bash
git tag
```

Resultado:

```text
1.0.0
corregir-estilos
```

---

# 📊 Trazabilidad de commits principales

| Commit    | Tipo    | Descripción                                                       |
| --------- | ------- | ----------------------------------------------------------------- |
| `7940661` | Initial | Creación inicial del taller.                                      |
| `cacdcee` | Feature | Creación inicial de HTML, JavaScript y estilos.                   |
| `206d7db` | Feature | Mejoras en los archivos del proyecto.                             |
| `1041d08` | Feature | Agregado de funcionalidad para eliminación de productos.          |
| `0940776` | Docs    | Actualización de documentación de la versión 1.0.0.               |
| `01f2244` | Test    | Introducción controlada del error en la referencia de estilos.    |
| `f7d6868` | Merge   | Integración del cambio que contenía el error de estilos.          |
| `451061d` | Fix     | Corrección de la referencia de la hoja de estilos.                |
| `8b15671` | Merge   | Integración de cambios de `main` en `develop`.                    |
| `9a68978` | Merge   | Integración de `main` en `develop`.                               |
| `df29195` | Merge   | Integración de cambios dentro de `develop`.                       |
| `954cf52` | Docs    | Agregado del README y organización de la estructura del proyecto. |
| `9061763` | Merge   | Integración final de `develop` en `main`.                         |

---

# 🧪 Prácticas realizadas

Durante el taller se aplicaron los siguientes conceptos:

* [x] Creación y utilización de ramas.
* [x] Trabajo con `main`.
* [x] Trabajo con `develop`.
* [x] Creación de ramas `feature`.
* [x] Creación de ramas `hotfix`.
* [x] Realización de commits.
* [x] Uso de mensajes de commit descriptivos.
* [x] Integración mediante `merge`.
* [x] Introducción controlada de errores.
* [x] Generación de conflictos.
* [x] Resolución manual de conflictos.
* [x] Corrección de errores mediante `hotfix`.
* [x] Integración de cambios entre ramas.
* [x] Creación de tags.
* [x] Sincronización con GitHub.
* [x] Uso de `fetch`, `pull` y `push`.
* [x] Verificación del estado del repositorio.
* [x] Integración final de `develop` en `main`.
* [x] Documentación del flujo de trabajo.

---

# 🎓 Resultado de aprendizaje

La práctica permitió comprender y aplicar un flujo de trabajo colaborativo basado en **Git Flow**, fortaleciendo el manejo de ramas, commits, integración de cambios, generación y resolución de conflictos, corrección de errores y control de versiones.

El ejercicio permitió simular un escenario cercano a un entorno profesional de desarrollo, donde diferentes cambios son desarrollados en ramas independientes y posteriormente integrados de manera controlada.

También permitió comprender la importancia de mantener sincronizados los repositorios locales y remotos, documentar los cambios realizados y utilizar etiquetas para identificar versiones importantes del proyecto.

---

# 👨‍💻 Información académica

**Proyecto:** Taller Frontend — Git Flow

**Tecnologías:** HTML5, CSS3, JavaScript

**Control de versiones:** Git / GitHub

**Metodología:** Git Flow

**Tipo de actividad:** Práctica académica
