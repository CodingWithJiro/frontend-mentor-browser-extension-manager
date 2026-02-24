# Browser Extension Manager

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3e54a3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![PerfectPixel](https://img.shields.io/badge/PerfectPixel-F56C94?style=for-the-badge)](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonecod/dkaagdgjmgdmbnecmcefdhjekcoceebi)
![Image → Code](https://img.shields.io/badge/Image%20→%20Code-6a1b9a?style=for-the-badge&labelColor=2e003e&logoColor=white)
![Semantic HTML](https://img.shields.io/badge/Semantic%20HTML-ff9800?style=for-the-badge)
![Accessible](https://img.shields.io/badge/Accessible-0052cc?style=for-the-badge)
![Responsive Design](https://img.shields.io/badge/Responsive%20Design-2196F3?style=for-the-badge&logo=responsive&logoColor=white)
![Mobile First](https://img.shields.io/badge/Mobile%20First-14532D?style=for-the-badge&logo=responsive&logoColor=white)
![Theme Toggle](https://img.shields.io/badge/Theme%20Toggle-121212?style=for-the-badge&logo=adjust&logoColor=white)
![Dynamic Content](https://img.shields.io/badge/Dynamic%20Content-673ab7?style=for-the-badge)
[![Google Lighthouse](https://img.shields.io/badge/Lighthouse-00B0FF?style=for-the-badge&logo=lighthouse&logoColor=white)](/docs/downloads/lighthouse-performance-report.pdf)

[![Netlify Status](https://api.netlify.com/api/v1/badges/7167ad04-3b56-4baa-aeea-4ca8008f17a6/deploy-status)](https://browser-extension-fm-jiro.netlify.app/)
![Status](https://img.shields.io/badge/status-complete-brightgreen)
![Learning Path](https://img.shields.io/badge/learning%20path-month%2010-blue)
![Views](https://visitor-badge.laobi.icu/badge?page_id=CodingWithJiro.frontend-mentor-browser-extension-manager&left_text=repo%20views)

## An Interactive Browser Extension Manager UI

A fully responsive browser extension manager interface featuring dynamic data rendering, state toggling, filtering, and theme selection.

| _Mobile Preview (375x812)_                                  | _Desktop Preview (1440x960)_                                   |
| ----------------------------------------------------------- | -------------------------------------------------------------- |
| ![Mobile](/public/img/site-preview-mobile_375x812.png)      | ![Desktop](/public/img/site-preview-desktop_1440x960.png)      |
| ![Mobile](/public/img/site-preview-mobile-dark_375x812.png) | ![Desktop](/public/img/site-preview-desktop-dark_1440x960.png) |

---

## Overview

Browser Extension Manager is a fully responsive, state-driven interface that allows users to manage installed browser extensions through filtering, activation toggling, removal, undo actions, and restoration workflows.

Built with React and custom hooks, the application models soft-deletion, persistent storage, deterministic ordering, and accessible modal interactions. The project emphasizes predictable state management, separation of concerns, and behavior-driven testing.

Created as part of the building challenges from **[Frontend Mentor](https://www.frontendmentor.io/)**.

---

## Live Demo

You can check out the live website **[here](https://browser-extension-fm-jiro.netlify.app/)**

---

## Features

- State-driven filtering (All / Active / Inactive) with ARIA-compliant toggle controls
- Soft-delete pattern with confirmation modal
- Undo and restore flows (individual and bulk restore)
- Persistent state using `localStorage` (extensions + removed items)
- Deterministic reordering based on original data source
- System-aware theme switching with `prefers-color-scheme` support
- Dynamic asset loading using Vite’s `import.meta.glob`
- Comprehensive testing (hook unit tests + UI integration tests)
- Accessible dialogs and keyboard-friendly interactions

---

## Tech Stack

**Libraries & Frameworks:** [<img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" />](https://react.dev/)
[<img alt="Tailwind CSS" src="https://img.shields.io/badge/-Tailwind%20CSS-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8" />](https://tailwindcss.com/)

**Core Technologies:** [<img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />](https://developer.mozilla.org/en-US/docs/Web/HTML)
[<img alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />](https://developer.mozilla.org/en-US/docs/Web/CSS)
[<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[<img alt="Markdown" src="https://img.shields.io/badge/-Markdown-000000?style=flat-square&logo=markdown&logoColor=white" />](https://www.markdownguide.org/)

**Tooling & Testing:** [<img alt="Vite" src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=FFD62E" />](https://vitejs.dev/)
[<img alt="Vitest" src="https://img.shields.io/badge/-Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white" />](https://vitest.dev/)
[<img alt="React Testing Library" src="https://img.shields.io/badge/-React%20Testing%20Library-E33332?style=flat-square&logo=testing-library&logoColor=white" />](https://testing-library.com/docs/react-testing-library/intro/)

**Platforms & Deployment:** [<img alt="Git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />](https://git-scm.com/)
[<img alt="GitHub" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" />](https://github.com/)
[<img alt="Netlify" src="https://img.shields.io/badge/-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white" />](https://www.netlify.com/)
[<img alt="VS Code" src="https://img.shields.io/badge/-VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white" />](https://code.visualstudio.com/)
[<img alt="Figma" src="https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />](https://www.figma.com/)

---

## Development Workflow

This project uses a **[feature-based branching workflow](https://github.com/CodingWithJiro/frontend-mentor-browser-extension-manager/network)** with descriptive commits and **[structured pull requests](https://github.com/CodingWithJiro/frontend-mentor-browser-extension-manager/pulls?q=is%3Apr+is%3Aclosed)**, mirroring professional team collaboration practices:

[![Network Graph](/public/img/network-graph.png)](https://github.com/CodingWithJiro/frontend-mentor-browser-extension-manager/network)

---

## Performance Report

[![Lighthouse Report Preview](public/img/lighthouse-report.png)](docs/downloads/lighthouse-performance-report.pdf)

A **Google Lighthouse** audit was conducted on the final version of this project. You can view the **[full report here](docs/downloads/lighthouse-performance-report.pdf)**.

---

## How to Run

Open a terminal and type:

```bash
git clone https://github.com/CodingWithJiro/frontend-mentor-browser-extension-manager.git
cd frontend-mentor-browser-extension-manager
npm install
npm run dev
```

---

## Testing

Open a terminal and type:

```bash
npm test
```

---

## What I Learned

- Thinking beyond simple CRUD interactions and modeling UI state as a system (removal → confirmation → toast → undo → restore)
- Designing state in a way that supports future flexibility, not just immediate UI changes
- Separating business logic from presentation using custom hooks to improve clarity, reusability, and testability
- Handling real-world persistence using `localStorage` and managing side effects safely with `useEffect`
- Working with native browser APIs like `<dialog>` and understanding their behavior in both the browser and test environments
- Writing integration tests that simulate real user behavior instead of testing implementation details
- Managing deterministic data ordering to avoid unpredictable UI results
- Using build tool features like `import.meta.glob` to automate asset handling and reduce manual code repetition
- Recognizing how accessibility decisions (ARIA, semantic elements) influence both UI design and testing strategy

---

## Author

Created by **Elmar Chavez**

Month/Year: **January - February 2026**

Journey: **10<sup>th</sup> - 11<sup>th</sup>** month of being a _frontend developer_.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elmar-chavez/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:chavezelmar03@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CodingWithJiro)
[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/profile/CodingWithJiro)
[![daily.dev](https://img.shields.io/badge/daily.dev-171717?style=for-the-badge&logo=daily.dev&logoColor=38BDF8)](https://app.daily.dev/elmarchavez)
