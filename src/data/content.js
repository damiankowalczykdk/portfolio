export const PORTFOLIO = {
  links: {
    github: "https://github.com/DamianKowalczykDK",
    linkedin: "https://www.linkedin.com/in/damian-kowalczyk-283a4232a",
    email: "damiankowalczyk3688@gmail.com",
    cv: {
      pl: "/cv/Damian_Kowalczyk_CV_PL.pdf",
      en: "/cv/Damian_Kowalczyk_CV_EN.pdf"
    }
  },

  ui: {
    pl: {
      nav_about: "O mnie",
      nav_skills: "Technologie",
      nav_projects: "Projekty",
      nav_experience: "Doświadczenie",
      nav_contact: "Kontakt",
      hero_kicker: "Otwarty na nowe wyzwania",
      hero_role: "Python Backend Developer",
      cta_projects: "Zobacz projekty",
      cta_contact: "Skontaktuj się",
      cta_cv: "Pobierz CV",
      cta_github: "GitHub",
      cta_linkedin: "LinkedIn",
      cta_code: "Kod źródłowy",
      cta_demo: "Live demo",
      label_about: "O mnie",
      label_skills: "Stack technologiczny",
      label_projects: "Wybrane projekty",
      label_experience: "Doświadczenie",
      label_contact: "Kontakt",
      about_heading: "Inżynierskie podejście do kodu, biznesowe rozumienie problemu",
      skills_heading: "Czym się posługuję na co dzień",
      projects_heading: "Od pierwszej linii kodu do produkcji",
      projects_sub: "Projekty własne — architektura, testy i wdrożenie w praktyce.",
      experience_heading: "Gdzie zdobywałem doświadczenie",
      contact_heading: "Porozmawiajmy o współpracy",
      contact_sub: "Szukam roli Python Backend Developera. Chętnie opowiem o swoich projektach i o tym, jak mogę wzmocnić Twój zespół.",
      contact_email_label: "Napisz wiadomość",
      contact_cv_label: "CV (PDF)",
      footer_built: "Zaprojektowane i zbudowane z dbałością o szczegóły.",
    },
    en: {
      nav_about: "About",
      nav_skills: "Tech",
      nav_projects: "Projects",
      nav_experience: "Experience",
      nav_contact: "Contact",
      hero_kicker: "Open to new challenges",
      hero_role: "Python Backend Developer",
      cta_projects: "View projects",
      cta_contact: "Get in touch",
      cta_cv: "Download CV",
      cta_github: "GitHub",
      cta_linkedin: "LinkedIn",
      cta_code: "Source code",
      cta_demo: "Live demo",
      label_about: "About me",
      label_skills: "Tech stack",
      label_projects: "Selected work",
      label_experience: "Experience",
      label_contact: "Contact",
      about_heading: "An engineering mindset for code, a business understanding of the problem",
      skills_heading: "What I work with day to day",
      projects_heading: "From the first line of code to production",
      projects_sub: "Personal projects — architecture, testing and deployment in practice.",
      experience_heading: "Where I gained my experience",
      contact_heading: "Let's talk about working together",
      contact_sub: "I'm looking for a Python Backend Developer role. I'd be glad to walk you through my projects and show how I can strengthen your team.",
      contact_email_label: "Send a message",
      contact_cv_label: "CV (PDF)",
      footer_built: "Designed and built with attention to detail.",
    }
  },

  hero: {
    name: "Damian Kowalczyk",
    tagline: {
      pl: "Buduję asynchroniczne API w FastAPI, procesy biznesowe jako trwałe workflowy Temporal i integracje płatności Stripe. Samodzielnie zaprojektowałem i wdrożyłem na Kubernetes system mikroserwisowy z publicznym demo. Wnoszę też 13 lat prowadzenia własnej firmy.",
      en: "I build asynchronous APIs in FastAPI, business processes as durable Temporal workflows and Stripe payment integrations. I designed and deployed a microservice system on Kubernetes with a public demo on my own. I also bring 13 years of running my own business."
    }
  },

  stats: [
    {
      value: "6",
      label: {
        pl: "aplikacji w klastrze Kubernetes — jeden Helm chart, automatyczny deploy",
        en: "apps in a Kubernetes cluster — one Helm chart, automated deploys"
      }
    },
    {
      value: "100%",
      label: {
        pl: "pokrycia testami w 5 serwisach — pytest, testcontainers, mypy",
        en: "test coverage across 5 services — pytest, testcontainers, mypy"
      }
    },
    {
      value: "Live",
      label: {
        pl: "demo produkcyjne z HTTPS i CI/CD w GitHub Actions",
        en: "production demo with HTTPS and CI/CD in GitHub Actions"
      }
    },
    {
      value: { pl: "13 lat", en: "13 yrs" },
      label: {
        pl: "prowadzenia własnej firmy — sprzedaż, klienci, procesy",
        en: "running my own business — sales, customers, processes"
      }
    }
  ],

  about: {
    pl: [
      "Jestem Python Backend Developerem. Samodzielnie zaprojektowałem, przetestowałem i wdrożyłem na produkcję system mikroserwisowy do rezerwacji biletów kinowych — od pierwszej linii kodu po publiczne demo na Kubernetes z HTTPS i automatycznym deployem.",
      "Buduję asynchroniczne API w FastAPI, procesy biznesowe jako trwałe workflowy Temporal, integracje płatności Stripe i asystentów AI z function calling. Stawiam na czystą architekturę (API / Service / Repository), ścisłe typowanie (mypy) i 100% pokrycia testami.",
      "Wcześniej przez 13 lat prowadziłem własną firmę. Dzięki temu rozumiem procesy biznesowe, klienta i odpowiedzialność za wynik — i przenoszę to do kodu."
    ],
    en: [
      "I am a Python Backend Developer. I independently designed, tested and deployed to production a microservice system for booking cinema tickets — from the first line of code to a public demo on Kubernetes with HTTPS and automated deployments.",
      "I build asynchronous APIs in FastAPI, business processes as durable Temporal workflows, Stripe payment integrations and AI assistants with function calling. I focus on clean architecture (API / Service / Repository), strict typing (mypy) and 100% test coverage.",
      "Before that, I ran my own business for 13 years. That is where I learned to understand business processes, customers and ownership of results — and I bring that into code."
    ],
    facts: [
      { k: { pl: "Lokalizacja", en: "Location" }, v: { pl: "Nowa Ruda · zdalnie / hybrydowo", en: "Nowa Ruda, Poland · remote / hybrid" } },
      { k: { pl: "Specjalizacja", en: "Focus" }, v: { pl: "Backend · API · Mikroserwisy", en: "Backend · APIs · Microservices" } },
      { k: { pl: "Obecnie", en: "Currently" }, v: { pl: "Staż · Devs-Mentoring", en: "Internship · Devs-Mentoring" } },
      { k: { pl: "Języki", en: "Languages" }, v: { pl: "Polski, Angielski B2", en: "Polish, English B2" } }
    ]
  },

  skills: [
    { category: { pl: "Backend", en: "Backend" }, items: ["Python 3.13", "FastAPI", "Flask", "Pydantic v2", "SQLAlchemy 2 (async)", "Alembic", "HTTPX", "REST API"] },
    { category: { pl: "Architektura", en: "Architecture" }, items: ["Microservices", "API Gateway", "Temporal", "Webhooks", "Idempotency", "Clean Architecture"] },
    { category: { pl: "Bazy danych", en: "Databases" }, items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Beanie ODM"] },
    { category: { pl: "DevOps i chmura", en: "DevOps & Cloud" }, items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "k3s", "Traefik", "Nginx", "cert-manager", "GitHub Actions", "GHCR", "Linux (VPS)"] },
    { category: { pl: "Jakość kodu i testy", en: "Code quality & Testing" }, items: ["pytest", "testcontainers", "respx", "pytest-cov", "mypy", "ruff", "pre-commit", "Conventional Commits"] },
    { category: { pl: "Integracje i bezpieczeństwo", en: "Integrations & Security" }, items: ["Stripe", "Auth0 (OIDC)", "JWT", "MFA (TOTP)", "RBAC", "Brevo SMTP", "TMDB API", "Fakturownia API"] },
    { category: { pl: "AI / LLM", en: "AI / LLM" }, items: ["OpenAI (function calling)", "Claude", "Ollama", "Prompt engineering", "BeautifulSoup"] },
    { category: { pl: "Frontend", en: "Frontend" }, items: ["React", "Vite"] }
  ],

  projects: [
    {
      id: "cinema",
      title: "Cinema Reservation System",
      repo: "https://github.com/DamianKowalczykDK/cinema-reservation-system",
      demo: "https://cinema.damian-kowalczyk.dev",
      role: { pl: "Python Backend Developer · projekt własny · 2026", en: "Python Backend Developer · personal project · 2026" },
      summary: {
        pl: "Platforma rezerwacji biletów kinowych: 5 serwisów FastAPI + frontend React, wdrożona na Kubernetes z publicznym demo.",
        en: "Cinema ticket booking platform: 5 FastAPI services + React frontend, deployed on Kubernetes with a public demo."
      },
      tags: ["FastAPI", "PostgreSQL", "Redis", "Temporal", "Stripe", "Auth0", "OpenAI", "Kubernetes", "Helm", "GitHub Actions"],
      highlights: {
        pl: [
          "Zaprojektowałem i zbudowałem od zera 5 serwisów FastAPI (gateway, cinema, payment, AI, worker) + frontend React, osobna baza PostgreSQL na serwis.",
          "Cykl życia rezerwacji jako trwały workflow Temporal — blokada miejsc z wygasaniem, sygnał płatności i wysyłka biletu z kodem QR podpisanym HMAC; odporny na restarty i redeploye.",
          "Płatności Stripe Checkout: weryfikacja podpisu webhooków, idempotentne sesje i automatyczny zwrot, gdy płatność dotrze po wygaśnięciu rezerwacji.",
          "Asystent AI (OpenAI function calling) wyszukuje seanse, pokazuje mapę sali i tworzy rezerwację z rozmowy; limity rund i tokenów, historia rozmów w Redis z TTL.",
          "Uwierzytelnianie Auth0 (OIDC/JWT) tylko w API Gateway, role admin/user, token w ciasteczku HttpOnly, rate limiting.",
          "Wdrożenie na k3s (VPS): jeden generyczny Helm chart dla 6 aplikacji, migracje w initContainer, HTTPS (cert-manager, Let's Encrypt), maile przez Brevo z DKIM/DMARC.",
          "CI/CD w GitHub Actions: lint i skan sekretów, testy w macierzy, obrazy w GHCR, automatyczny helm upgrade po każdym pushu; 100% pokrycia testami."
        ],
        en: [
          "Designed and built from scratch 5 FastAPI services (gateway, cinema, payment, AI, worker) + React frontend, a separate PostgreSQL database per service.",
          "Reservation lifecycle as a durable Temporal workflow — seat hold with expiry, payment signal and ticket delivery with an HMAC-signed QR code; resilient to restarts and redeploys.",
          "Stripe Checkout payments: webhook signature verification, idempotent sessions and an automatic refund when the payment arrives after the reservation has expired.",
          "AI assistant (OpenAI function calling) searches screenings, shows the seat map and creates a reservation from a conversation; round and token limits, chat history in Redis with TTL.",
          "Authentication with Auth0 (OIDC/JWT) in the API Gateway only, admin/user roles, token in an HttpOnly cookie, rate limiting.",
          "Deployment on k3s (VPS): one generic Helm chart for 6 apps, migrations in an initContainer, HTTPS (cert-manager, Let's Encrypt), e-mails via Brevo with DKIM/DMARC.",
          "CI/CD in GitHub Actions: lint and secret scanning, matrix tests, images in GHCR, automatic helm upgrade on every push; 100% test coverage."
        ]
      }
    },
    {
      id: "auth",
      title: "Auth Microservices System",
      repo: "https://github.com/DamianKowalczykDK/auth-microservices-system",
      role: { pl: "Python Backend Developer · projekt własny", en: "Python Backend Developer · personal project" },
      summary: {
        pl: "System uwierzytelniania oparty o architekturę mikroserwisową z centralnym API Gateway.",
        en: "Authentication system built on a microservice architecture with a central API Gateway."
      },
      tags: ["FastAPI", "MongoDB", "JWT", "MFA", "RBAC", "HTTPX", "Docker"],
      highlights: {
        pl: [
          "Backend w pełni asynchroniczny (FastAPI async) z izolowanym Users Service i API Gateway.",
          "Uwierzytelnianie JWT (access + refresh) w ciasteczkach HttpOnly; MFA (TOTP) i kontrola dostępu RBAC.",
          "Pełny przepływ: login → MFA → wydanie tokenów → odświeżanie. Komunikacja serwisów przez HTTPX.",
          "Clean Architecture (API / Services / Repositories / Domain), MongoDB (Beanie ODM), Docker Compose."
        ],
        en: [
          "Fully asynchronous backend (FastAPI async) with an isolated Users Service and API Gateway.",
          "JWT authentication (access + refresh) in HttpOnly cookies; MFA (TOTP) and RBAC access control.",
          "Full flow: login → MFA → token issuance → refresh. Inter-service communication over HTTPX.",
          "Clean Architecture (API / Services / Repositories / Domain), MongoDB (Beanie ODM), Docker Compose."
        ]
      }
    },
    {
      id: "course",
      title: "Course Platform Microservice",
      repo: "https://github.com/DamianKowalczykDK/course-platform-microservice",
      role: { pl: "Python Backend Developer · projekt własny", en: "Python Backend Developer · personal project" },
      summary: {
        pl: "Backend platformy e-learningowej we Flasku z hybrydowym modelem danych.",
        en: "Flask backend for an e-learning platform with a hybrid data model."
      },
      tags: ["Flask", "MySQL", "MongoDB", "SQLAlchemy", "APScheduler", "Nginx", "Docker"],
      highlights: {
        pl: [
          "Endpointy we Flasku z walidacją Pydantic i autoryzacją JWT + MFA.",
          "Hybrydowy model danych: MySQL (SQLAlchemy / Alembic) na transakcje, MongoDB na dane niestrukturalne i logi.",
          "Automatyczna aktualizacja statusów kursów w tle (APScheduler).",
          "Środowisko uruchomieniowe w kontenerach: Docker, Docker Compose, Nginx."
        ],
        en: [
          "Flask endpoints with Pydantic validation and JWT + MFA authorization.",
          "Hybrid data model: MySQL (SQLAlchemy / Alembic) for transactions, MongoDB for unstructured data and logs.",
          "Automatic background course-status updates (APScheduler).",
          "Containerized runtime environment: Docker, Docker Compose, Nginx."
        ]
      }
    },
    {
      id: "summarizer",
      title: "AI Web Summarizer",
      repo: "https://github.com/DamianKowalczykDK/ai-web-summarizer",
      role: { pl: "Python Developer · projekt własny", en: "Python Developer · personal project" },
      summary: {
        pl: "Narzędzie CLI do ekstrakcji tekstu ze stron i generowania podsumowań przez LLM.",
        en: "A CLI tool that extracts text from websites and generates summaries with LLMs."
      },
      tags: ["OpenAI", "Ollama", "BeautifulSoup", "CLI", "YAML", "pytest"],
      highlights: {
        pl: [
          "Pobieranie stron i czysta ekstrakcja tekstu — bez skryptów, stylów i nawigacji.",
          "Wielokrokowy pipeline AI (SummaryService) z konfiguracją liczby punktów i języka; prompty definiowane w YAML.",
          "Eksport w wielu formatach (TXT, JSON, CSV, YAML, HTML).",
          "Ścisłe typowanie (mypy) i testy (pytest)."
        ],
        en: [
          "Page fetching and clean text extraction — stripping scripts, styles and navigation.",
          "Multi-step AI pipeline (SummaryService) with configurable point count and language; YAML-defined prompts.",
          "Export to multiple formats (TXT, JSON, CSV, YAML, HTML).",
          "Strict typing (mypy) and tests (pytest)."
        ]
      }
    },
    {
      id: "insurance",
      title: "Insurance Client Manager",
      repo: "https://github.com/DamianKowalczykDK/insurance-client-manager",
      role: { pl: "Python Developer · projekt własny", en: "Python Developer · personal project" },
      summary: {
        pl: "Aplikacja do przetwarzania danych klientów ubezpieczeniowych, raportów i rozliczeń.",
        en: "An application for processing insurance client data, reports and settlements."
      },
      tags: ["pandas", "openpyxl", "mypy", "pytest", "REST API"],
      highlights: {
        pl: [
          "Agregacja i transformacja danych klientów w pandas.",
          "Generowanie raportów Excel (openpyxl) i powiadomienia mailowe.",
          "Integracja z systemem księgowym przez Fakturownia API.",
          "Ścisłe typowanie (mypy), linting (ruff) i testy jednostkowe (pytest)."
        ],
        en: [
          "Client data aggregation and transformation with pandas.",
          "Excel report generation (openpyxl) and e-mail notifications.",
          "Integration with an accounting system via the Fakturownia API.",
          "Strict typing (mypy), linting (ruff) and unit tests (pytest)."
        ]
      }
    }
  ],

  experience: [
    {
      id: "internship",
      title: { pl: "Python Backend Developer — staż", en: "Python Backend Developer — Internship" },
      meta: { pl: "Devs-Mentoring · zdalnie · 05.2026 – obecnie", en: "Devs-Mentoring · remote · 05.2026 – present" },
      highlights: {
        pl: [
          "Rozwijam system mikroserwisowy (FastAPI, PostgreSQL, Temporal) pod opieką Senior Developera — każda zmiana przechodzi przez Pull Request i code review.",
          "Wdrażam uwagi z review: poprawna kolejność transakcji i workflow, obsługa błędów, testy jednostkowe i integracyjne.",
          "Konteneryzacja i wdrożenie: Docker, Helm, Kubernetes (k3s), pipeline CI/CD w GitHub Actions.",
          "Praca zgodnie ze standardami projektu: Conventional Commits, pre-commit (ruff, mypy, gitleaks)."
        ],
        en: [
          "Developing a microservice system (FastAPI, PostgreSQL, Temporal) under the supervision of a Senior Developer — every change goes through a Pull Request and code review.",
          "Applying review feedback: correct ordering of transactions and workflows, error handling, unit and integration tests.",
          "Containerization and deployment: Docker, Helm, Kubernetes (k3s), CI/CD pipeline in GitHub Actions.",
          "Following project standards: Conventional Commits, pre-commit (ruff, mypy, gitleaks)."
        ]
      }
    },
    {
      id: "business",
      title: { pl: "Właściciel firmy — motoryzacja / e-commerce", en: "Business Owner — automotive / e-commerce" },
      meta: { pl: "Działalność gospodarcza · 05.2012 – 06.2025", en: "Sole proprietorship · 05.2012 – 06.2025" },
      highlights: {
        pl: [
          "Prowadzenie sprzedaży i operacji e-commerce dla setek klientów rocznie.",
          "Optymalizacja procesów biznesowych, które bezpośrednio wpływały na wynik firmy.",
          "Bezpośredni kontakt z klientem i przekładanie jego potrzeb na konkretne rozwiązania."
        ],
        en: [
          "Ran sales and e-commerce operations for hundreds of customers per year.",
          "Optimized business processes that directly affected the company's results.",
          "Direct customer contact and turning customer needs into concrete solutions."
        ]
      }
    }
  ]
};
