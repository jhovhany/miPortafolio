# miPortafolio

## Vue 3

Versión recomendada de Node.js: `22` o superior.

Si usas `nvm`:

```bash
nvm install
nvm use
```

Instalar dependencias:

```bash
npm install
```

Levantar entorno de desarrollo:

```bash
npm run dev
```

Generar build de producción:

```bash
npm run build
```

## Docker

Levantar el sitio en `http://localhost:8080`:

```bash
docker compose up --build
```

Construir y ejecutar sin Compose:

```bash
docker build -t miportafolio .
docker run --rm -p 8080:80 miportafolio
```
