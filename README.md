# Art Gallery

Art Landing Page — A clean, responsive landing page featuring famous masterpieces. Built to practice SCSS techniques and BEM methodology.
I was inspired by the design created by Juli ( https://www.figma.com/community/file/1095377079540950532/responsive-design-art-news-landing-page )

## 🔗[Live Demo Link](https://mamartam.github.io/art/)

## 📦 Technologies

This project was built with a focus on modern web development standards, maintainable CSS architecture, and smooth user interactions.

- HTML5 – Semantic markup for better SEO and accessibility.
- SCSS (Sass) – Utilizing advanced features for a scalable codebase:
  - 7-1 Architecture Pattern – Organized folder structure for better maintainability.
  - BEM Methodology – Block Element Modifier naming convention for clean and predictable styling.
  - Advanced Logic – Implementation of Sass Maps, @each loops for utility classes, and custom @mixin / @function logic for responsive design.
- JavaScript (ES6+) – Logic for interactive elements, including:
  - Intersection Observer API – For high-performance scroll animations.
  - Custom Mobile Navigation – A fully functional, animated burger menu with state management.
- Responsive Web Design – A "Mobile First" approach ensuring a seamless experience across mobile, tablet, and desktop viewports.

## 📚 What I Learned

Building this Art Gallery landing page was a significant step in my journey as a developer. I focused on writing clean, modular code and implementing modern performance-oriented features. Here are the key takeaways:

- 🛠 SCSS Architecture & Automation
I moved beyond basic styling by implementing the `7-1 Pattern`. One of the biggest challenges and successes was creating a system for utility classes using Sass `maps` and `loops`:

  - Dry Code: Instead of writing repetitive margins and paddings, I used `@each loops` to generate utility classes (mb-32, pl-48) dynamically.
  - Custom Functions: I created `@function getColor()` and `getTextSize()` to maintain a single source of truth for the project's design tokens.

- 🚀 High-Performance Animations

Instead of relying on heavy libraries or scroll event listeners (which can cause lag), I implemented the Intersection Observer API. This allowed me to trigger "fade-in" animations for art pieces only when they enter the viewport, significantly improving browser performance.

- 📱 Advanced Responsive Logic
  
I practiced a `Mobile First` strategy, but also added complex logic for the navigation system:

  - Implemented a burger menu that uses CSS Keyframe animations for the spans to create a smooth "X" transformation.
  - Added a JavaScript resize listener to ensure the body's overflow and menu states are automatically reset when switching between mobile and desktop views.

- 🎨 Semantic HTML & Accessibility (a11y)
  
I paid close attention to using semantic tags like `<header>`, `<main>`, and `<section>` to ensure the gallery is structured correctly for screen readers and SEO.

## 🚀 How It Can Be Improved?

While this project successfully achieved its goal of implementing a complex SCSS architecture, there are several areas for future optimization and feature expansion:

- JavaScript Refactoring & Scalability – Currently, the JS logic handles basic UI interactions (`burger menu`, `scroll animations`). A more robust approach would be to refactor the code into ES6 modules to better organize logic as the project grows.
- Accessibility (a11y) Enhancements – Improving keyboard navigation by managing `focus` when the mobile menu is open (focus trapping) and adding more descriptive `aria-label` attributes for interactive elements.
- Image Optimization – Implementing `Lazy Loading` for gallery images and using modern formats like `.webp` with `<picture>` tags to improve loading speeds and performance scores.
- Dynamic Content – Transitioning from hard-coded HTML to fetching art pieces from a JSON file or an external API to make the gallery dynamic and easily updatable.
- Performance Tuning – Adding a build tool like Vite or Webpack to minify CSS/JS files and optimize assets for production.

## 🍿 Video
https://github.com/user-attachments/assets/379be17a-9c63-4df7-857b-d73e6bf6a298

## Lighthouse

