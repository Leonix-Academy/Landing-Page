# Guía de Estilos - Leonix Academy

Esta guía documenta los estándares de diseño, patrones de código y convenciones utilizadas en el proyecto Leonix Academy Landing Page.

## 📋 Tabla de Contenidos

1. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
2. [Paleta de Colores](#paleta-de-colores)
3. [Tipografía](#tipografía)
4. [Espaciado y Layout](#espaciado-y-layout)
5. [Componentes](#componentes)
6. [Patrones de Código](#patrones-de-código)
7. [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)
8. [Animaciones y Transiciones](#animaciones-y-transiciones)

---

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

El proyecto sigue una arquitectura basada en **features** y **shared**:

```
src/
├── features/          # Componentes organizados por funcionalidad
│   └── [feature]/
│       ├── [Feature]Section.tsx
│       └── index.ts
├── shared/            # Código compartido
│   ├── components/   # Componentes reutilizables
│   ├── constants/    # Constantes globales
│   └── hooks/        # Hooks personalizados
└── assets/           # Recursos estáticos
```

### Principios de Organización

- **Features**: Cada sección de la landing page es un feature independiente
- **Shared**: Componentes, hooks y constantes que se reutilizan en múltiples features
- **Barrel Exports**: Cada carpeta tiene un `index.ts` para exportaciones limpias

---

## 🎨 Paleta de Colores

### Colores Principales

El proyecto utiliza una paleta basada en **Slate** y **Blue**:

#### Slate (Grises)
- `slate-50` - Fondos claros, secciones alternas
- `slate-100` - Fondos de tarjetas, hover states
- `slate-200` - Bordes sutiles
- `slate-300` - Bordes más visibles
- `slate-400` - Iconos secundarios
- `slate-500` - Texto secundario
- `slate-600` - Texto principal en fondos claros
- `slate-700` - Texto más oscuro
- `slate-800` - Texto en fondos oscuros
- `slate-900` - Texto principal, botones primarios
- `slate-950` - Fondos oscuros (footer)

#### Blue (Acentos)
- `blue-50` - Fondos de hover sutiles
- `blue-200` - Bordes de hover
- `blue-500` - Elementos decorativos (con opacidad)
- `blue-600` - Color de acento principal, botones hover
- `blue-700` - Gradientes

#### Colores Funcionales
- `white` - Fondo principal
- `black` - Texto en fondos claros
- `gray-100` - Fondos alternativos
- `gray-200` - Bordes

### Uso de Colores

```tsx
// Fondo principal
className="bg-white"

// Fondo alterno (secciones)
className="bg-slate-50"

// Texto principal
className="text-slate-900"

// Texto secundario
className="text-slate-600"

// Botón primario
className="bg-slate-900 hover:bg-blue-600"

// Acentos y hover
className="text-blue-600"
className="border-blue-600"
```

---

## 📝 Tipografía

### Escalas de Tamaño

El proyecto utiliza una escala tipográfica consistente:

- `text-xs` (0.75rem) - Texto muy pequeño, badges
- `text-sm` (0.875rem) - Texto secundario, descripciones
- `text-base` (1rem) - Texto de cuerpo
- `text-lg` (1.125rem) - Texto destacado, descripciones largas
- `text-xl` (1.25rem) - Subtítulos
- `text-2xl` (1.5rem) - Títulos de sección
- `text-3xl` (1.875rem) - Títulos grandes
- `text-4xl` (2.25rem) - Títulos principales de sección
- `text-5xl` (3rem) - Hero titles
- `text-6xl` (3.75rem) - Hero titles grandes

### Pesos de Fuente

- `font-normal` (400) - Texto de cuerpo
- `font-medium` (500) - Títulos, botones, labels

### Line Height

- `leading-tight` (1.25) - Títulos
- `leading-relaxed` (1.625) - Texto de cuerpo largo

### Letter Spacing

- `tracking-tight` (-0.025em) - Títulos grandes
- `tracking-wide` (0.025em) - Labels, badges

### Ejemplo de Uso

```tsx
// Título principal de sección
<h2 className="text-4xl text-slate-900 tracking-tight">
  Título de Sección
</h2>

// Descripción
<p className="text-lg text-slate-600 leading-relaxed">
  Descripción del contenido
</p>

// Texto secundario
<span className="text-sm text-slate-500">
  Información adicional
</span>
```

---

## 📐 Espaciado y Layout

### Sistema de Espaciado

El proyecto utiliza el sistema de espaciado de Tailwind (múltiplos de 0.25rem):

- `gap-2` (0.5rem) - Espaciado mínimo entre elementos
- `gap-4` (1rem) - Espaciado estándar
- `gap-6` (1.5rem) - Espaciado medio
- `gap-8` (2rem) - Espaciado grande
- `gap-12` (3rem) - Espaciado muy grande
- `gap-16` (4rem) - Espaciado entre secciones

### Padding de Secciones

- `py-24` (6rem) - Padding vertical estándar de secciones
- `py-16` (4rem) - Padding vertical reducido
- `py-20` (5rem) - Padding vertical medio

### Contenedores

- `max-w-7xl` - Contenedor principal (80rem)
- `max-w-5xl` - Contenedor medio (64rem)
- `max-w-3xl` - Contenedor pequeño (48rem)
- `max-w-2xl` - Contenedor muy pequeño (42rem)
- `max-w-lg` - Contenedor mínimo (32rem)

### Padding Horizontal

- `px-4` - Mobile
- `sm:px-6` - Tablet
- `lg:px-8` - Desktop

### Ejemplo de Layout

```tsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Contenido */}
  </div>
</section>
```

---

## 🧩 Componentes

### Estructura de Componentes

Todos los componentes siguen esta estructura:

```tsx
import { Icon } from 'lucide-react';
import { useScrollTo } from '../../shared/hooks/useScrollTo';

export function FeatureSection() {
  // 1. Hooks
  const { scrollToSection } = useScrollTo();
  
  // 2. Datos locales
  const items = [...];
  
  // 3. Render
  return (
    <section id="seccion" className="py-24 bg-white">
      {/* Contenido */}
    </section>
  );
}
```

### Patrones de Secciones

#### Sección con Título Centrado

```tsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-4xl text-slate-900 tracking-tight">
        Título de Sección
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Descripción de la sección
      </p>
    </div>
    {/* Contenido */}
  </div>
</section>
```

#### Sección con Badge Superior

```tsx
<div className="inline-block">
  <div className="flex items-center gap-2 mb-4">
    <div className="w-8 h-0.5 bg-slate-300" />
    <span className="text-sm text-slate-500 tracking-wide uppercase">
      Badge
    </span>
    <div className="w-8 h-0.5 bg-slate-300" />
  </div>
</div>
```

#### Tarjeta con Hover

```tsx
<div className="group p-6 rounded-xl bg-white border border-slate-200 
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  {/* Contenido */}
</div>
```

### Botones

#### Botón Primario

```tsx
<button 
  onClick={() => scrollToSection('contacto')}
  className="px-8 py-3.5 bg-slate-900 text-white rounded-md 
             hover:bg-blue-600 transition-all flex items-center 
             justify-center gap-2 text-sm shadow-lg 
             hover:shadow-xl hover:shadow-blue-600/20"
>
  Texto del Botón
  <ArrowRight className="w-4 h-4" />
</button>
```

#### Botón Secundario

```tsx
<button 
  className="px-8 py-3.5 bg-white text-slate-900 border border-slate-300 
             rounded-md hover:bg-slate-50 transition-all text-sm"
>
  Texto del Botón
</button>
```

### Iconos

- Tamaño estándar: `w-6 h-6`
- Tamaño pequeño: `w-5 h-5`
- Tamaño grande: `w-8 h-8`
- Color: `text-slate-700` o `text-slate-400`

```tsx
<Icon className="w-6 h-6 text-slate-700" />
```

---

## 💻 Patrones de Código

### Imports

Orden de imports:

1. Librerías externas (React, Lucide)
2. Imports relativos de shared
3. Imports relativos del mismo feature
4. Assets

```tsx
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { useScrollTo } from '../../shared/hooks/useScrollTo';
import { CONTACT_INFO } from '../../shared/constants';
import logo from '../../assets/leonix-logo.png';
```

### Componentes Funcionales

Siempre usar funciones nombradas:

```tsx
// ✅ Correcto
export function FeatureSection() {
  return <div>...</div>;
}

// ❌ Incorrecto
export const FeatureSection = () => {
  return <div>...</div>;
};
```

### Props y Tipos

```tsx
interface FeatureSectionProps {
  title: string;
  description?: string;
}

export function FeatureSection({ title, description }: FeatureSectionProps) {
  // ...
}
```

### Hooks Personalizados

Los hooks deben seguir el patrón `use*`:

```tsx
export function useScrollTo() {
  const scrollToSection = useCallback((id: string) => {
    // ...
  }, []);
  
  return { scrollToSection, scrollToTop };
}
```

### Constantes

Usar `as const` para inmutabilidad:

```tsx
export const CONTACT_INFO = {
  email: 'leonix.academy@gmail.com',
  phone: '+51 945 256 584',
} as const;
```

---

## 🏷️ Convenciones de Nomenclatura

### Archivos y Carpetas

- **Componentes**: PascalCase - `ProfessionalHeroSection.tsx`
- **Hooks**: camelCase con prefijo `use` - `useScrollTo.ts`
- **Constantes**: UPPER_SNAKE_CASE - `CONTACT_INFO`
- **Carpetas**: kebab-case o camelCase - `features/`, `shared/`

### Variables y Funciones

- **Variables**: camelCase - `mobileMenuOpen`
- **Funciones**: camelCase - `handleScrollToSection`
- **Constantes locales**: camelCase - `whatsappUrl`
- **Tipos/Interfaces**: PascalCase - `FormStatus`

### Clases CSS

Seguir el sistema de utilidades de Tailwind:

```tsx
// ✅ Correcto - Clases de Tailwind
className="flex items-center gap-4 p-6 bg-white rounded-xl"

// ❌ Evitar - Clases personalizadas innecesarias
className="custom-card"
```

---

## ✨ Animaciones y Transiciones

### Transiciones Estándar

- `transition-all duration-300` - Transición completa
- `transition-colors` - Solo colores
- `transition-transform` - Solo transformaciones
- `transition-shadow` - Solo sombras

### Efectos de Hover

```tsx
// Elevación en hover
className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300"

// Cambio de color
className="hover:bg-blue-600 transition-colors"

// Escala
className="group-hover:scale-110 transition-transform duration-300"
```

### Animaciones Personalizadas

```tsx
// Pulse animation (ya definida en globals.css)
<div className="animate-ping opacity-20" />

// Float animation
<div className="animate-float" />
```

### Estados de Grupo

Usar `group` para efectos en hover:

```tsx
<div className="group">
  <Icon className="text-slate-700 group-hover:text-blue-600" />
  <span className="group-hover:text-blue-600">Texto</span>
</div>
```

---

## 🎯 Elementos Decorativos

### Círculos de Fondo

```tsx
<div className="absolute top-20 right-20 w-96 h-96 
                bg-blue-500/5 rounded-full blur-3xl" />
```

### Líneas Decorativas

```tsx
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 
                bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
```

### Badges

```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 
                rounded-full bg-gray-100 text-gray-800 text-sm 
                border border-gray-200">
  <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
  Texto del Badge
</div>
```

---

## 📱 Responsive Design

### Breakpoints

- `sm:` - 640px (tablets)
- `md:` - 768px (tablets grandes)
- `lg:` - 1024px (desktop)
- `xl:` - 1280px (desktop grande)

### Grid Responsive

```tsx
// Mobile: 1 columna, Tablet: 2 columnas, Desktop: 4 columnas
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
```

### Flex Responsive

```tsx
// Mobile: columna, Tablet+: fila
<div className="flex flex-col sm:flex-row gap-4">
```

---

## ✅ Checklist de Componentes

Al crear un nuevo componente, asegúrate de:

- [ ] Usar TypeScript con tipos apropiados
- [ ] Seguir la estructura de carpetas (features/shared)
- [ ] Exportar desde `index.ts`
- [ ] Usar lazy loading si es una sección grande
- [ ] Incluir `id` para navegación
- [ ] Implementar responsive design
- [ ] Agregar transiciones apropiadas
- [ ] Usar colores de la paleta definida
- [ ] Seguir convenciones de nomenclatura
- [ ] Comentar código complejo

---

## 📚 Recursos Adicionales

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Última actualización**: Enero 2025

