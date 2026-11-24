# Guía de Laboratorio 15
## Despliegue Web Continuo con Configuración SEO Técnico

---

## Requisitos previos

- Proyecto web estático (HTML / CSS / JS) desarrollado previamente
- Editor de código: Visual Studio Code
- Cuenta activa en GitHub
- Cuenta activa en Vercel o Netlify
- Navegador web moderno (Chrome, Firefox, Edge)

---

## Estructura esperada del proyecto

```
mi-proyecto/
├── index.html
├── pagina2.html        ← páginas adicionales (si las hubiera)
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
│   └── preview.jpg     ← imagen para Open Graph (mín. 1200×630 px)
├── robots.txt          ← se crea en el Paso 2
└── sitemap.xml         ← se crea en el Paso 2
```

---

## Paso 1 — Configuración de SEO Técnico (Meta Tags y Open Graph)

Abrir el archivo `index.html` en VS Code. Dentro de la etiqueta `<head>`, agregar las siguientes etiquetas **antes** del cierre `</head>`.

Repetir el mismo proceso en cada página HTML del proyecto, ajustando el título, la descripción y la URL de cada una.

### Etiquetas SEO básicas

```html
<!-- TÍTULO: aparece en la pestaña del navegador y en Google -->
<!-- Máximo 60 caracteres -->
<title>Nombre del Sitio — Descripción breve</title>

<!-- DESCRIPCIÓN: texto que aparece debajo del título en Google -->
<!-- Máximo 155 caracteres -->
<meta name="description"
      content="Descripción clara y atractiva de esta página.">

<!-- PALABRAS CLAVE -->
<meta name="keywords"
      content="palabra1, palabra2, palabra3">

<!-- INSTRUCCIONES PARA LOS MOTORES DE BÚSQUEDA -->
<meta name="robots" content="index, follow">

<!-- AUTOR DEL SITIO -->
<meta name="author" content="Nombre del autor">
```

### Etiquetas Open Graph (redes sociales)

```html
<!-- TIPO DE CONTENIDO -->
<meta property="og:type"        content="website">

<!-- URL CANÓNICA DE ESTA PÁGINA (debe ser absoluta) -->
<meta property="og:url"         content="https://MI-DOMINIO.vercel.app/">

<!-- TÍTULO PARA REDES SOCIALES -->
<meta property="og:title"       content="Nombre del Sitio — Descripción">

<!-- DESCRIPCIÓN PARA REDES SOCIALES -->
<meta property="og:description" content="Descripción atractiva para redes sociales.">

<!-- IMAGEN AL COMPARTIR (URL absoluta, mínimo 1200×630 px) -->
<meta property="og:image"       content="https://MI-DOMINIO.vercel.app/img/preview.jpg">

<!-- IDIOMA Y REGIÓN -->
<meta property="og:locale"      content="es_PE">

<!-- NOMBRE DEL SITIO -->
<meta property="og:site_name"   content="Nombre del Sitio">
```

### Etiquetas Twitter / X

```html
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="Nombre del Sitio — Descripción">
<meta name="twitter:description" content="Descripción atractiva para Twitter.">
<meta name="twitter:image"       content="https://MI-DOMINIO.vercel.app/img/preview.jpg">
```

> **Importante:** el valor `MI-DOMINIO` es un marcador temporal. Se reemplaza con la URL real en el Paso 4, una vez obtenida del servidor de despliegue.

---

## Paso 2 — Implementación para Crawlers (Sitemap y Robots.txt)

Crear los siguientes archivos directamente en la **carpeta raíz** del proyecto, al mismo nivel que `index.html`.

### Crear `robots.txt`

```
# robots.txt
# Instrucciones para los motores de búsqueda

User-agent: *
Allow: /

# Bloquear carpetas que no deben indexarse (ajustar según el proyecto)
Disallow: /admin/
Disallow: /privado/

# Ubicación del mapa del sitio
Sitemap: https://MI-DOMINIO.vercel.app/sitemap.xml
```

### Crear `sitemap.xml`

Agregar una entrada `<url>` por cada página HTML del proyecto:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Página principal -->
  <url>
    <loc>https://MI-DOMINIO.vercel.app/</loc>
    <lastmod>AAAA-MM-DD</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Páginas secundarias (repetir por cada una) -->
  <url>
    <loc>https://MI-DOMINIO.vercel.app/pagina2.html</loc>
    <lastmod>AAAA-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>
```

**Referencia de valores para `<priority>`:**

| Página | Prioridad sugerida |
|---|---|
| Página principal | 1.0 |
| Páginas de contenido principal | 0.8 – 0.9 |
| Páginas informativas | 0.5 – 0.7 |
| Páginas de contacto o legales | 0.3 – 0.5 |

**Referencia de valores para `<changefreq>`:**

| Frecuencia | Cuándo usarla |
|---|---|
| `weekly` | Contenido que cambia seguido |
| `monthly` | Contenido que cambia poco |
| `never` | Páginas estáticas permanentes |

> **Importante:** reemplazar `MI-DOMINIO` y `AAAA-MM-DD` con los valores reales al finalizar el Paso 4.

---

## Paso 3 — Versionado del Proyecto en GitHub

Abrir la terminal integrada de VS Code con `Ctrl + `` ` ``.

### Inicializar y subir el repositorio

```bash
# 1. Inicializar el repositorio local
git init

# 2. Revisar los archivos detectados por Git
git status

# 3. Agregar todos los archivos al área de preparación
git add .

# 4. Verificar que los archivos quedaron listos
git status

# 5. Registrar los cambios con un mensaje descriptivo
git commit -m "feat: proyecto web con configuración de SEO técnico"
```

### Crear el repositorio en GitHub.com

1. Ir a [github.com/new](https://github.com/new)
2. Completar los campos:
   - **Repository name:** nombre del proyecto (sin espacios, usar guiones)
   - **Visibility:** `Public`
3. ⚠️ **No marcar** ninguna opción de inicialización (sin README, sin .gitignore)
4. Click en **"Create repository"**

### Conectar el repositorio local con GitHub

Copiar la URL del repositorio recién creado y ejecutar:

```bash
# 6. Conectar con el repositorio remoto
git remote add origin https://github.com/USUARIO/nombre-proyecto.git

# 7. Renombrar la rama principal
git branch -M main

# 8. Subir el código a GitHub
git push -u origin main
```

---

## Paso 4 — Despliegue Continuo (CI/CD) en Vercel

### Crear la cuenta e importar el repositorio

1. Ir a [vercel.com](https://vercel.com) → **Sign Up**
2. Seleccionar **"Continue with GitHub"**
3. En la pantalla de plan elegir:
   - ✅ **"I'm working on personal projects" → Hobby** (gratuito)
4. Click en **"Add New" → "Project"**
5. En la sección **Import Git Repository** → click en **"GitHub"**
6. Si se solicita, instalar la aplicación de Vercel en GitHub → click en **"Install"**
7. Localizar el repositorio del proyecto → click en **"Import"**

### Configurar el proyecto

Verificar que la configuración sea la siguiente:

| Campo | Valor |
|---|---|
| Framework Preset | Other |
| Root Directory | ./ |
| Build Command | *(dejar vacío)* |
| Output Directory | *(dejar vacío)* |

8. Click en **"Deploy"**

Vercel construirá el proyecto y generará una URL pública en aproximadamente 30 segundos:
```
https://nombre-proyecto-xxx.vercel.app
```

### Actualizar las URLs en los archivos del proyecto

Reemplazar el marcador `MI-DOMINIO` con la URL real asignada por Vercel.

**En VS Code usar `Ctrl + Shift + H`:**
- **Search:** `MI-DOMINIO`
- **Replace:** `nombre-proyecto-xxx.vercel.app`
- Click en **"Replace All"**

Verificar que los cambios quedaron bien en los archivos HTML, `robots.txt` y `sitemap.xml`, luego subir los cambios:

```bash
git add .
git commit -m "fix: actualizar URLs con dominio real de Vercel"
git push
```

Vercel redesplegará el sitio automáticamente al detectar el `push`.

---

## Paso 5 — Validación y Pruebas del Despliegue

Reemplazar `MI-URL` con la URL real del sitio desplegado.

### 1. Verificar HTTPS

```
https://MI-URL.vercel.app
```

✅ El sitio debe cargar sin advertencias de seguridad en el navegador.  
Para confirmar: hacer click en el ícono a la izquierda de la URL → debe indicar **"La conexión es segura"**.

### 2. Verificar robots.txt

```
https://MI-URL.vercel.app/robots.txt
```

✅ Debe mostrar el contenido del archivo en texto plano en el navegador.

### 3. Verificar sitemap.xml

```
https://MI-URL.vercel.app/sitemap.xml
```

✅ Debe mostrar el XML con todas las URLs del sitio correctamente formadas.

### 4. Verificar Open Graph

1. Ir a [metatags.io](https://metatags.io)
2. Pegar la URL del sitio en el campo de búsqueda
3. ✅ Debe mostrar la previsualización con título y descripción en las secciones de Google, Twitter y LinkedIn

---

## Checklist de entrega

| # | Criterio | Cómo verificar |
|---|---|---|
| ✅ | Repositorio en GitHub publicado como público | URL del repositorio accesible |
| ✅ | `<title>` con menos de 60 caracteres en cada página | Código fuente: `Ctrl + U` |
| ✅ | `<meta description>` con menos de 155 caracteres | Código fuente: `Ctrl + U` |
| ✅ | Mínimo 4 etiquetas `og:` presentes en cada página | Código fuente: `Ctrl + U` |
| ✅ | `og:image` con URL absoluta que inicia con `https://` | Código fuente: `Ctrl + U` |
| ✅ | `robots.txt` accesible desde la URL del sitio | Visitar `/robots.txt` |
| ✅ | `sitemap.xml` accesible desde la URL del sitio | Visitar `/sitemap.xml` |
| ✅ | Sitio desplegado con HTTPS activo | Sin advertencias en el navegador |
| ✅ | Previsualización correcta en metatags.io | Captura de pantalla del resultado |

---

## Demostración del ciclo CI/CD

Una vez conectado el repositorio a Vercel, cualquier modificación al código se publica automáticamente sin pasos adicionales:

```bash
# 1. Realizar el cambio en el archivo correspondiente en VS Code
# 2. Guardar el archivo

# 3. Registrar el cambio en Git
git add nombre-archivo.html
git commit -m "update: descripción del cambio realizado"

# 4. Subir a GitHub
git push
```

Vercel detecta el `push` automáticamente y actualiza el sitio en producción en aproximadamente 20 segundos.
