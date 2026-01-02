# Leonix Academy - Landing Page

Landing page moderna y profesional para Leonix Academy, una plataforma educativa enfocada en ciencias y programación.

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI moderna
- **TypeScript** - Tipado estático para mayor seguridad
- **Vite** - Build tool rápido y eficiente
- **Tailwind CSS** - Framework de utilidades CSS
- **Lucide React** - Iconos modernos y ligeros

## 📁 Estructura del Proyecto

```
src/
├── features/          # Componentes organizados por funcionalidad
│   ├── audience/      # Sección de público objetivo
│   ├── benefits/      # Sección de beneficios
│   ├── contact/      # Sección de contacto
│   ├── courses/      # Sección de cursos
│   ├── footer/       # Footer de la página
│   ├── hero/         # Hero section principal
│   ├── methodology/  # Sección de metodología
│   ├── purpose/      # Sección sobre nosotros
│   └── testimonials/ # Sección de testimonios
├── shared/           # Componentes y utilidades compartidas
│   ├── components/   # Componentes reutilizables (Navbar, ErrorBoundary, etc.)
│   ├── constants/    # Constantes del proyecto
│   └── hooks/        # Hooks personalizados
├── assets/           # Recursos estáticos (imágenes, logos)
├── styles/           # Estilos globales
├── App.tsx           # Componente principal
└── main.tsx          # Punto de entrada
```

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd Landing-Page
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run type-check` - Verifica los tipos de TypeScript sin compilar

## 🏗️ Construcción para Producción

Para crear un build optimizado para producción:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `build/`.

## 🎨 Guía de Estilos

Consulta [STYLE_GUIDE.md](./STYLE_GUIDE.md) para conocer los estándares de diseño, colores, tipografía y patrones de componentes utilizados en el proyecto.

## 📝 Características Principales

- ✅ **Lazy Loading** - Carga diferida de componentes para optimizar el rendimiento
- ✅ **Error Boundaries** - Manejo robusto de errores
- ✅ **Responsive Design** - Diseño adaptable a todos los dispositivos
- ✅ **TypeScript** - Código type-safe
- ✅ **Componentes Modulares** - Arquitectura escalable y mantenible
- ✅ **Navegación Suave** - Scroll suave entre secciones
- ✅ **WhatsApp Integration** - Botón flotante para contacto directo

## 🔧 Configuración

### Variables de Entorno

El proyecto utiliza constantes centralizadas en `src/shared/constants/index.ts` para información de contacto y configuración.

### Path Aliases

El proyecto utiliza el alias `@/` para importaciones desde `src/`:

```typescript
import { Navbar } from '@/shared/components';
```

## 📱 Secciones de la Landing Page

1. **Hero** - Presentación principal con CTA
2. **Propósito** - Información sobre Leonix Academy
3. **Beneficios** - Ventajas de la plataforma
4. **Cursos** - Catálogo de cursos disponibles
5. **Audiencia** - Público objetivo
6. **Metodología** - Proceso de enseñanza
7. **Testimonios** - Experiencias de estudiantes
8. **Contacto** - Formulario de contacto
9. **Footer** - Información adicional y enlaces

## 🤝 Contribución

1. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
2. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
3. Push a la rama (`git push origin feature/AmazingFeature`)
4. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y propiedad de Leonix Academy.

## 📧 Contacto

- **Email**: leonix.academy@gmail.com
- **Teléfono**: +51 945 256 584
- **Ubicación**: Lima, Perú
