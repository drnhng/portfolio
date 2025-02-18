#Project Overview
Project to display my portfolio of projects and skills.

#Feature Requirements
- feature with nextjs app router and shadcn/ui
- menubar at top, with links to portfolio, music, and contact. portfolio link is the default/home page
- portfolio page should have a header with my name (Darren Huang), full stack developer, and a button to download my resume. below this header should be vertical list of my projects with cards for each project. each card has the title, a screenshot, and a short description to view the project.

#current file structure
portfolio-app/
├── .next/
├── app/
│ ├── (routes)/
│ │ ├── portfolio/
│ │ │ └── page.tsx
│ │ ├── music/
│ │ │ └── page.tsx
│ │ └── contact/
│ │ └── page.tsx
│ ├── components/
│ │ ├── ui/
│ │ │ ├── button.tsx
│ │ │ ├── card.tsx
│ │ │ ├── menubar.tsx
│ │ │ └── header.tsx
│ │ ├── project-card.tsx
│ │ └── project-grid.tsx
│ ├── lib/
│ │ └── utils.ts
│ ├── types/
│ │ └── index.ts
│ ├── styles/
│ │ └── globals.css
│ ├── favicon.ico
│ ├── layout.tsx
│ └── page.tsx
├── public/
│ ├── images/
│ │ ├── projects/
│ │ └── resume.pdf
│ └── fonts/
├── requirements/
│ └── frontend_instructions.md
├── .gitignore
├── components.json
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md

#rules
- all new components should go in /components and be named like example-component.tsx unless otherwise specified
- all new pages go in /app