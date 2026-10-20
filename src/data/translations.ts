export type Language = 'en' | 'id';

export interface ExperienceItem {
  role?: string;
  company: string;
  period: string;
  roles?: { title: string; period: string }[];
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  link?: string;
  github?: string;
  image: string;
  description: string;
  tags: string[];
  gallery?: boolean;
  galleryImages?: string[];
  imagePosition?: string;
}

export interface HeroTitle {
  line1Text?: string;
  line1Highlight?: string;
  line2Text?: string;
  line2Highlight?: string;
}

export const translations = {
  en: {
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      hireMe: 'Hire Me',
    },
    hero: {
      status: 'Available for new opportunities',
      title: {
        line1Text: 'A',
        line1Highlight: 'Design-Minded',
        line2Text: 'Frontend Developer.',
      } as HeroTitle,
      description:
        'I specialize in crafting high-performance, scalable web architectures and intuitive user interfaces. Bridging the gap between design and engineering.',
      viewWork: 'View Work',
      viewCV: 'View CV',
      cvIndonesian: 'Bahasa Indonesia',
      cvEnglish: 'English',
    },
    experience: {
      titlePrefix: 'Professional',
      titleHighlight: 'Experience',
      subtitle:
        'My journey from crafting visual identities to engineering robust web applications.',
      experiences: [
        {
          company: 'PT Otten Coffee Indonesia',
          period: 'Apr 2021 - Present',
          roles: [
            {
              title: 'Frontend Web Developer (Full-time)',
              period: 'Jan 2024 – Present',
            },
            {
              title: 'Frontend Web Developer (Contract)',
              period: 'Jan 2022 – Jan 2024',
            },
            {
              title: 'Frontend Web Developer (Internship)',
              period: 'Apr 2021 – Jan 2022',
            },
          ],
          description:
            'Developed and maintained scalable front-end architecture using React. Improved web performance (Core Web Vitals) and implemented responsive UI. Collaborated with designers to ensure pixel-perfect implementation of complex UI features. Developed and validated frontend features using AI-assisted development workflows, including AI code generation, code review, debugging, functional testing, and regression validation.',
          skills: [
            'React',
            'JavaScript',
            'TypeScript',
            'CSS/SCSS',
            'Git',
            'Next.js',
            'Angular',
            'Performance Optimization',
            'AI-assisted development',
          ],
        },
        {
          role: 'Graphic Designer',
          company: 'PT. Sari Makmur Sejahtera',
          period: '2019 - 2020',
          description:
            'Designed marketing materials including logos, brochures, infographics, and social media content. Built and managed corporate websites using WordPress.',
          skills: [
            'Photoshop',
            'Illustrator',
            'After Effects',
            'WordPress',
            'Branding',
          ],
        },
        {
          role: 'Web Design & Digital Marketing Intern',
          company: 'Sociocaster - Bandung, Indonesia',
          period: 'Jul 2018 – Oct 2018',
          description:
            'Designed website layouts using Melissa and prepared production-ready pages. Created written content for digital marketing and promotional campaigns, while actively promoting the Sociocaster platform at ITB startup events.',
          skills: [
            'Web Design',
            'Digital Marketing',
            'Content Writing',
            'Melissa',
          ],
        },
        /*
        {
          role: 'Front-End Developer',
          company: '< das / >',
          period: '2020',
          description:
            'Responsible for creating a Content Management System (CMS) interface using ReactJS and Ant Design.',
          skills: ['React', 'Ant Design', 'CMS'],
        },
        */
      ] as ExperienceItem[],
    },
    projects: {
      titlePrefix: 'Selected',
      titleHighlight: 'Works',
      subtitle:
        'A showcase of my frontend engineering projects and visual design experiments.',
      categories: ['All', 'Web & Mobile', 'Graphic Design'],
      categoryLabels: {
        All: 'All',
        'Web & Mobile': 'Web & Mobile',
        'Graphic Design': 'Graphic Design',
      } as Record<string, string>,
      descriptions: {
        1: 'A comprehensive news portal application featuring real-time updates and an intuitive reading experience.',
        2: 'E-commerce platform showcasing products with a clean, responsive layout built on top of WordPress.',
        3: "An AI Chatbot application developed as part of the 'Maju Bareng AI' seminar by Hacktiv8.",
      } as Record<number, string>,
    },
    skills: {
      titlePrefix: 'Technical',
      titleHighlight: 'Arsenal',
      subtitle:
        'A comprehensive overview of the tools, frameworks, and technologies I use to bring ideas to life.',
      categories: [
        {
          title: 'Frontend Development',
          skills: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript (ES6+)',
            'Tailwind CSS',
            'Redux',
            'HTML5/CSS3',
            'Angular',
          ],
        },
        {
          title: 'Mobile App Development',
          skills: [
            'React Native',
            'Expo',
            'Mobile UI Patterns',
            'Cross-Platform Optimization',
          ],
        },
        {
          title: 'UI/UX & Graphic Design',
          skills: [
            'Figma',
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Wireframing',
            'Prototyping',
            'Design Systems',
          ],
        },
        {
          title: 'Tools & Ecosystem',
          skills: [
            'Git',
            'GitHub',
            'WordPress (CMS)',
            'RESTful APIs',
            'Vite',
            'NPM/Yarn',
            'Postman',
            'ngrok',
          ],
        },
      ],
    },
    about: {
      titlePrefix: 'About',
      titleHighlight: 'Me',
      p1: 'Hi, I am Bayu Rizky Nurseto. I blend the analytical thinking of a developer with the creative eye of a designer.',
      p2: 'Currently pursuing a degree in Information Systems at Universitas Terbuka, I hold a background in Multimedia which sparked my passion for both coding and design. With over a year of experience in graphic design and more than a year specializing as a Front-End Web Developer, I thrive at the intersection of aesthetics and functionality.',
      p3: 'I am deeply interested in building performant web applications using React and Next.js, and I am currently expanding my skill set into mobile development with React Native Expo. I believe that a great product is not just about clean code, but also about a seamless, intuitive user experience.',
    },
    contact: {
      title: "Let's connect",
      locationTitle: 'Location',
      location:
        'Jalan Setra Dago Utara VI Blok Kramat RT.008/012\nAntapani Wetan, Kota Bandung',
      emailTitle: 'Email',
      whatsappTitle: 'WhatsApp',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Designed and built with Next.js & Tailwind CSS.',
    },
  },
  id: {
    nav: {
      experience: 'Pengalaman',
      projects: 'Proyek',
      skills: 'Keahlian',
      about: 'Tentang',
      hireMe: 'Hubungi Saya',
    },
    hero: {
      status: 'Tersedia untuk peluang baru',
      title: {
        line1Text: 'Frontend Developer',
        line2Highlight: 'Berorientasi Desain.',
      } as HeroTitle,
      description:
        'Saya mengkhususkan diri dalam membangun arsitektur web berkinerja tinggi yang terukur dan antarmuka pengguna yang intuitif. Menjembatani keselarasan antara desain dan rekayasa perangkat lunak.',
      viewWork: 'Lihat Karya',
      viewCV: 'Lihat CV',
      cvIndonesian: 'Bahasa Indonesia',
      cvEnglish: 'English',
    },
    experience: {
      titlePrefix: 'Pengalaman',
      titleHighlight: 'Profesional',
      subtitle:
        'Perjalanan saya dari merancang identitas visual hingga merekayasa aplikasi web yang andal.',
      experiences: [
        {
          company: 'PT Otten Coffee Indonesia',
          period: 'Apr 2021 - Sekarang',
          roles: [
            {
              title: 'Frontend Web Developer (Purnawaktu)',
              period: 'Jan 2024 – Sekarang',
            },
            {
              title: 'Frontend Web Developer (Kontrak)',
              period: 'Jan 2022 – Jan 2024',
            },
            {
              title: 'Frontend Web Developer (Magang)',
              period: 'Apr 2021 – Jan 2022',
            },
          ],
          description:
            'Mengembangkan dan memelihara arsitektur front-end yang terukur menggunakan React. Meningkatkan performa web (Core Web Vitals) dan mengimplementasikan UI responsif. Berkolaborasi dengan desainer untuk memastikan implementasi fitur UI yang presisi (pixel-perfect). Mengembangkan dan memvalidasi fitur frontend menggunakan alur kerja pengembangan berbantuan AI, termasuk pembuatan kode AI, peninjauan kode, debugging, pengujian fungsional, dan validasi regresi.',
          skills: [
            'React',
            'JavaScript',
            'TypeScript',
            'CSS/SCSS',
            'Git',
            'Next.js',
            'Angular',
            'Performance Optimization',
            'AI-assisted development',
          ],
        },
        {
          role: 'Desainer Grafis',
          company: 'PT. Sari Makmur Sejahtera',
          period: '2019 - 2020',
          description:
            'Merancang materi pemasaran termasuk logo, brosur, infografis, dan konten media sosial. Membangun dan mengelola situs web perusahaan menggunakan WordPress.',
          skills: [
            'Photoshop',
            'Illustrator',
            'After Effects',
            'WordPress',
            'Branding',
          ],
        },
        {
          role: 'Intern Web Design & Digital Marketing',
          company: 'Sociocaster - Bandung, Indonesia',
          period: 'Jul 2018 – Okt 2018',
          description:
            'Mendesain layout website menggunakan Melissa dan menyiapkan halaman hingga siap tayang. Membuat konten tulisan untuk kebutuhan promosi dan kampanye digital marketing, serta aktif mempromosikan platform Sociocaster pada acara pameran startup ITB.',
          skills: [
            'Web Design',
            'Digital Marketing',
            'Content Writing',
            'Melissa',
          ],
        },
        /*
        {
          role: 'Front-End Developer',
          company: '< das / >',
          period: '2020',
          description:
            'Responsible for creating a Content Management System (CMS) interface using ReactJS and Ant Design.',
          skills: ['React', 'Ant Design', 'CMS'],
        },
        */
      ] as ExperienceItem[],
    },
    projects: {
      titlePrefix: 'Karya',
      titleHighlight: 'Terpilih',
      subtitle:
        'Koleksi proyek rekayasa antarmuka (frontend) dan eksplorasi desain visual saya.',
      categories: ['All', 'Web & Mobile', 'Graphic Design'],
      categoryLabels: {
        All: 'Semua',
        'Web & Mobile': 'Web & Mobile',
        'Graphic Design': 'Desain Grafis',
      } as Record<string, string>,
      descriptions: {
        1: 'Aplikasi portal berita komprehensif yang menampilkan pembaruan real-time dan pengalaman membaca yang intuitif.',
        2: 'Platform e-commerce yang menampilkan produk dengan tata letak bersih dan responsif, dibangun di atas WordPress.',
        3: "Aplikasi AI Chatbot yang dikembangkan sebagai bagian dari seminar 'Maju Bareng AI' oleh Hacktiv8.",
      } as Record<number, string>,
    },
    skills: {
      titlePrefix: 'Keahlian',
      titleHighlight: 'Teknis',
      subtitle:
        'Gambaran menyeluruh tentang berbagai tools, framework, dan teknologi yang saya gunakan untuk mewujudkan ide.',
      categories: [
        {
          title: 'Pengembangan Frontend',
          skills: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript (ES6+)',
            'Tailwind CSS',
            'Redux',
            'HTML5/CSS3',
            'Angular',
          ],
        },
        {
          title: 'Pengembangan Aplikasi Mobile',
          skills: [
            'React Native',
            'Expo',
            'Mobile UI Patterns',
            'Cross-Platform Optimization',
          ],
        },
        {
          title: 'UI/UX & Desain Grafis',
          skills: [
            'Figma',
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Wireframing',
            'Prototyping',
            'Design Systems',
          ],
        },
        {
          title: 'Tools & Ekosistem',
          skills: [
            'Git',
            'GitHub',
            'WordPress (CMS)',
            'RESTful APIs',
            'Vite',
            'NPM/Yarn',
            'Postman',
            'ngrok',
          ],
        },
      ],
    },
    about: {
      titlePrefix: 'Tentang',
      titleHighlight: 'Saya',
      p1: 'Halo, saya Bayu Rizky Nurseto. Saya memadukan pola pikir analitis seorang pengembang dengan kepekaan estetika seorang desainer.',
      p2: 'Saat ini sedang menempuh studi Sistem Informasi di Universitas Terbuka, saya berlatar belakang Multimedia yang menjadi awal mula ketertarikan saya pada dunia pemrograman dan desain. Dengan pengalaman lebih dari satu tahun di bidang desain grafis dan spesialisasi sebagai Front-End Web Developer, saya berkembang di titik temu antara estetika dan fungsionalitas.',
      p3: 'Saya memiliki antusiasme mendalam dalam membangun aplikasi web berkinerja tinggi menggunakan React dan Next.js, dan saat ini sedang memperluas keahlian ke pengembangan mobile dengan React Native Expo. Bagi saya, produk yang hebat bukan hanya tentang kode yang bersih, melainkan juga tentang pengalaman pengguna yang mulus dan intuitif.',
    },
    contact: {
      title: 'Mari terhubung',
      locationTitle: 'Lokasi',
      location:
        'Jalan Setra Dago Utara VI Blok Kramat RT.008/012\nAntapani Wetan, Kota Bandung',
      emailTitle: 'Email',
      whatsappTitle: 'WhatsApp',
    },
    footer: {
      rights: 'Hak cipta dilindungi undang-undang.',
      builtWith: 'Didesain dan dibangun dengan Next.js & Tailwind CSS.',
    },
  },
};
