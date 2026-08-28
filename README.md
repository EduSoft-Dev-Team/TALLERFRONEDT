# 🎨 Taller Frontend — Práctica de Git Flow

## 📌 Descripción

Repositorio correspondiente al taller práctico de desarrollo frontend y control de versiones, desarrollado como ejercicio académico para aplicar buenas prácticas de trabajo colaborativo utilizando **Git y Git Flow**.

Durante el desarrollo de la actividad se trabajó con HTML, CSS y JavaScript, aplicando un flujo de trabajo basado en ramas para gestionar funcionalidades, errores, conflictos de integración y correcciones mediante `hotfix`.

El ejercicio permitió simular un escenario real en el que un error llega a la rama principal y posteriormente debe ser corregido mediante un proceso controlado de mantenimiento.

---

## 🎯 Objetivo

Aplicar de manera práctica y organizada la metodología **Git Flow** para gestionar el ciclo de desarrollo de un proyecto frontend, utilizando ramas, commits, integración de cambios, resolución de conflictos, correcciones mediante `hotfix`, etiquetado de versiones y sincronización con un repositorio remoto.

---

## 🛠️ Tecnologías utilizadas

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

| Archivo      | Descripción                                             |
| ------------ | ------------------------------------------------------- |
| `index.html` | Estructura principal de la aplicación                   |
| `style.css`  | Estilos y diseño visual                                 |
| `script.js`  | Lógica para generación de colores aleatorios y contador |
| `README.md`  | Documentación del proyecto y del flujo Git Flow         |

---

# 🌿 Estrategia de ramas

Para el desarrollo se utilizó una estructura basada en Git Flow:

```text
main
  │
  ├── develop
  │     │
  │     └── feature/error-estilos
  │
  └── hotfix/corregir-estilos
```

### Ramas principales

#### `main`

Contiene las versiones estables del proyecto y representa el código listo para ser considerado como versión funcional.

#### `develop`

Rama utilizada para integrar y consolidar los cambios realizados durante el desarrollo.

#### `feature/*`

Ramas destinadas al desarrollo de funcionalidades o modificaciones específicas sin afectar directamente las ramas principales.

#### `hotfix/*`

Ramas utilizadas para solucionar errores críticos detectados en una versión estable.

---

# 🔄 Flujo de trabajo realizado

## 1. Preparación del repositorio

Se verificó la existencia de las ramas principales:

```bash
git branch
```

Se trabajó principalmente con:

```text
main
develop
```

Antes de realizar modificaciones se sincronizó el repositorio con GitHub.

---

## 2. Creación de la rama Feature

Para introducir un error controlado se creó la rama:

```bash
git checkout -b feature/error-estilos
```

Esta rama permitió realizar el cambio sin modificar inicialmente las ramas principales.

---

## 3. Introducción de un error controlado

El archivo modificado fue:

```text
index.html
```

La referencia correcta de la hoja de estilos era:

```html
<link rel="stylesheet" href="style.css">
```

Para simular un error se modificó a:

```html
<link rel="stylesheet" href="estilos.css">
```

El archivo `estilos.css` no existía, provocando que la página dejara de cargar correctamente los estilos.

### Commit realizado

```text
01f2244
test: introducir error en referencia de estilo
```

---

# ⚠️ 4. Integración y generación de conflicto

Se intentó integrar la rama:

```text
feature/error-estilos
```

en:

```text
main
```

mediante:

```bash
git checkout main
git pull origin main
git merge feature/error-estilos
```

Durante el proceso Git detectó un conflicto en:

```text
index.html
```

Git informó:

```text
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

Esto permitió practicar la identificación y resolución manual de conflictos.

---

## 5. Resolución del conflicto

Se revisó el archivo `index.html`, se analizaron las diferencias entre las ramas y se eliminaron los marcadores de conflicto generados por Git.

Posteriormente se confirmó la resolución:

```bash
git add index.html
git commit -m "merge: integrar error de estilos en main"
```

### Commit del merge

```text
f7d6868
merge: integrar error de estilos en main
```

De esta manera, el error quedó integrado intencionalmente en `main` para simular un problema detectado en una versión estable.

---

# 🚨 6. Creación del Hotfix

Al identificar el problema en `main`, se utilizó Git Flow para generar una rama específica de corrección:

```bash
git flow hotfix start corregir-estilos
```

Se creó:

```text
hotfix/corregir-estilos
```

El objetivo de esta rama fue solucionar el error sin realizar modificaciones directas sobre `main`.

---

# 🔧 7. Corrección del error

Se modificó nuevamente `index.html`.

### Referencia incorrecta

```html
<link rel="stylesheet" href="estilos.css">
```

### Referencia corregida

```html
<link rel="stylesheet" href="style.css">
```

Con esto se restableció la conexión correcta entre `index.html` y `style.css`.

### Commit de corrección

```text
451061d
fix: corregir referencia de hoja de estilos
```

---

# 🔀 8. Finalización del Hotfix

Una vez realizada la corrección se utilizó:

```bash
git flow hotfix finish corregir-estilos
```

Git Flow realizó la integración correspondiente y actualizó las ramas principales.

La corrección quedó registrada en:

```text
main
develop
```

---

# 🏷️ 9. Etiquetado de la corrección

Durante la finalización del Hotfix se creó el tag:

```text
corregir-estilos
```

Este tag permite identificar de manera concreta la versión que contiene la corrección realizada.

Para sincronizarlo con GitHub se utilizó:

```bash
git push origin corregir-estilos
```

---

# ☁️ 10. Sincronización con GitHub

Se actualizaron las ramas principales:

```bash
git push origin main
git push origin develop
```

También se realizó:

```bash
git fetch origin
```

para verificar el estado del repositorio remoto.

Durante el proceso se presentó una diferencia entre el `develop` local y el remoto, por lo que fue necesario integrar los cambios remotos antes de realizar el `push`.

Esto permitió practicar también la sincronización de ramas cuando existen cambios realizados por diferentes integrantes.

---

# 🧹 11. Limpieza de ramas

Una vez finalizado el ejercicio, la rama temporal:

```text
feature/error-estilos
```

dejó de ser necesaria.

Se eliminó localmente:

```bash
git branch -d feature/error-estilos
```

Y posteriormente del repositorio remoto:

```bash
git push origin --delete feature/error-estilos
```

---

# ✅ Estado final del repositorio

Al finalizar la práctica se verificó que el repositorio estuviera limpio:

```bash
git status
```

Resultado:

```text
nothing to commit, working tree clean
```

Las ramas principales quedaron:

```text
develop
main
```

Y se conservó el tag:

```text
corregir-estilos
```

---

# 📊 Trazabilidad de commits

| Commit    | Tipo    | Descripción                            |
| --------- | ------- | -------------------------------------- |
| `7940661` | Initial | Creación inicial del taller            |
| `cacdcee` | Feature | Creación de HTML, JavaScript y estilos |
| `206d7db` | Feature | Mejoras en archivos del proyecto       |
| `1041d08` | Feature | Agregado de funcionalidad              |
| `0940776` | Docs    | Actualización de documentación         |
| `01f2244` | Test    | Introducción controlada del error      |
| `f7d6868` | Merge   | Integración de la rama con conflicto   |
| `451061d` | Fix     | Corrección de referencia de estilos    |

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
* [x] Generación de un conflicto real.
* [x] Resolución manual de conflictos.
* [x] Corrección de errores mediante `hotfix`.
* [x] Integración del hotfix en las ramas principales.
* [x] Creación de tags.
* [x] Sincronización con GitHub.
* [x] Eliminación de ramas temporales.
* [x] Verificación del estado final del repositorio.

---

# 🎓 Resultado de aprendizaje

La práctica permitió comprender y aplicar un flujo de trabajo colaborativo basado en Git Flow, fortaleciendo el manejo de ramas, integración de cambios, resolución de conflictos y mantenimiento de versiones.

El ejercicio también permitió simular una situación cercana a un entorno profesional de desarrollo, donde un error puede ser detectado después de que una modificación ha sido integrada a una versión estable y debe ser corregido mediante un proceso controlado de `hotfix`.

---

## 👨‍💻 Información académica

**Proyecto:** Taller Frontend — Git Flow
**Tecnologías:** HTML5, CSS3, JavaScript
**Control de versiones:** Git / GitHub
**Metodología:** Git Flow
**Tipo de actividad:** Práctica académica