import { HOME_INTRO } from "./intro.js";

export const SITE_CONTENT = {
  en: {
    nav: {
      home: "Home",
      education: "Education",
      publications: "Publications",
      researchExperience: "Research Experience",
      talksLectures: "Talks & Lectures",
      conferences: "Attended Conferences",
      concertsFestivals: "Concerts & Festivals",
      miscellaneous: "Miscellaneous"
    },
    home: {
      eyebrow: "CV + Artistic Portfolio",
      title: "María's Website",
      intro: HOME_INTRO.en,
      social: {
        github: "GitHub",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        email: "Email"
      }
    },
    sections: {
      education: "Education",
      educationSubtitle: "Add your degrees, conservatory training, workshops, and key mentors.",
      educationWebsite: "Link",
      publications: "Publications",
      publicationsSubtitle: "Add academic papers, essays, catalog texts, and creative writing.",
      researchExperience: "Research Experience",
      researchExperienceSubtitle: "Talks, conferences, and concerts/festivals.",
      workExperience: "Work Experience",
      workExperienceSubtitle: "Professional roles and responsibilities.",
      reviewerExperience: "Reviewer Experience",
      reviewerExperienceSubtitle: "Peer review and assessment activities.",
      coursesSchools: "Courses & Schools",
      coursesSchoolsSubtitle: "Summer schools, intensive courses, and specialized training.",
      otherProjects: "Other Projects",
      otherProjectsSubtitle: "Collaborative and independent projects.",
      talksLectures: "Talks & Lectures",
      talksLecturesSubtitle: "Add invited talks, teaching sessions, classes, and public lectures.",
      conferences: "Attended Conferences",
      conferencesSubtitle: "Add conferences, symposiums, residencies, and research events.",
      concertsFestivals: "Concerts & Festivals",
      concertsFestivalsSubtitle: "Add performances, premieres, collaborations, and festival appearances.",
      miscellaneous: "Miscellaneous",
      miscellaneousSubtitle: "These are some of my favourite films, books and videogames:",
      visitedCountries: "Visited Countries",
      visitedCountriesSubtitle: "Countries I have visited around the world:"
    },
    misc: {
      videogames: "Videogames",
      literature: "Literature",
      movies: "Cinema"
    },
    visited: {
      europe: "Europe",
      europeTotal: "Total in Europe: 15",
      southAmerica: "South America",
      southAmericaTotal: "Total in South America: 1",
      asia: "Asia",
      asiaTotal: "Total in Asia: 1",
      europeCountries: [
        "Austria",
        "Cyprus",
        "Czech Republic",
        "France",
        "Germany",
        "Hungary",
        "Ireland",
        "Italy",
        "Monaco",
        "Portugal",
        "Spain",
        "Switzerland",
        "Sweden",
        "United Kingdom",
        "Vatican City"
      ],
      southAmericaCountries: ["Colombia"],
      asiaCountries: ["India"]
    },
    footer: {
      text: "Built as a customizable skeleton for maria-aguado.github.io"
    },
    lists: {
      education: [
        {
          title: "PhD - Quantum Computing & Audio Signal Processing",
          institution: "Interdisciplinary Centre for Computer Music Research, University of Plymouth, United Kingdom",
          startDate: "Oct 2024",
          endDate: "Oct 2028",
          logo: "assets/plymouth-logo.png",
          website: "https://www.plymouth.ac.uk/courses/postgraduate/phd-quantum-computing-in-the-arts-music-and-humanities"
        },
        {
          title: "MSc - Sound & Music Computing",
          institution: "Music Technology Group, Universitat Pompeu Fabra, Barcelona",
          startDate: "Sep 2022",
          endDate: "Jun 2024",
          logo: "assets/upf-logo.png",
          website: "https://www.upf.edu/web/smc"
        },
        {
          title: "BSc - Physics",
          institution: "Universidad Complutense de Madrid",
          startDate: "Sep 2017",
          endDate: "Jun 2022",
          logo: "assets/ucm-logo.jpg",
          website: "https://www.ucm.es/"
        },
        {
          title: "International Baccalaureate - Science",
          institution: "IES Lancia, León",
          startDate: "Sep 2015",
          endDate: "Jun 2017",
          logo: "assets/ib-logo.png",
          website: "https://www.ibo.org/programmes/diploma-programme/"
        },
        {
          title: "Choir Singing",
          institution: "",
          startDate: "2014",
          endDate: "2023",
          hideLogo: true,
          website: "",
          subdivisions: [
            {
              institution: "Coro Juvenil Ángel Barja, Universidad de León",
              startDate: "Sep 2014",
              endDate: "Jun 2017",
              website: ""
            },
            {
              institution: "Cor de la Universitat Pompeu Fabra, Barcelona",
              startDate: "Sep 2022",
              endDate: "Jun 2023",
              website: ""
            }
          ]
        }
      ],
      publications: [
        {
          title: "Quantum Delay Effect: Optimization & Next Steps",
          publicationType: "Conference paper",
          wherePublished: "Proceedings from the 3rd International Symposium on Quantum Computing and Musical Creativity",
          date: "Jan 2026",
          doi: "10.5281/zenodo.18203773",
          link: "https://doi.org/10.5281/zenodo.18203773"
        },
        {
          title: "From Qubits to Rhythm: Exploring Quantum Random Walks in Rhythmspaces",
          publicationType: "Preprint",
          wherePublished: "arXiv",
          date: "Oct 2025",
          doi: "arXiv:2510.03836",
          link: "https://arxiv.org/abs/2510.03836"
        },
        {
          title: "Developing a Framework for Sonifying Variational Quantum Algorithms",
          publicationType: "Book chapter",
          wherePublished: "Advances in Quantum Computer Music, World Scientific",
          date: "Jan 2025",
          doi: "arXiv:2409.07104",
          link: "https://arxiv.org/abs/2409.07104"
        },
        {
          title: "Exploring Quantum Random Walks in Rhythmspaces",
          publicationType: "Master thesis",
          wherePublished: "Universitat Pompeu Fabra Repository",
          date: "Sep 2024",
          doi: "10.5281/zenodo.13862360",
          link: "https://doi.org/10.5281/zenodo.13862360"
        },
        {
          title: "Low-frequency sound insulation on window façades",
          publicationType: "Journal article",
          wherePublished: "Buildings Journal",
          date: "Oct 2023",
          doi: "10.3390/buildings13102561",
          link: "https://doi.org/10.3390/buildings13102561"
        },
        {
          title: "Developing a Quantum Step-sequencer",
          publicationType: "Conference paper",
          wherePublished: "Proceedings from the 2nd International Symposium on Quantum Computing and Musical Creativity",
          date: "Oct 2023",
          doi: "10.5281/zenodo.10206500",
          link: "https://doi.org/10.5281/zenodo.10206500"
        },
        {
          title: "Variational Quantum Harmonizer: Generating Chord Progressions and Other Sonification Methods with the VQE Algorithm",
          publicationType: "Conference paper",
          wherePublished: "Proceedings from the 2nd International Symposium on Quantum Computing and Musical Creativity",
          date: "Oct 2023",
          doi: "10.5281/zenodo.10206731",
          link: "https://doi.org/10.5281/zenodo.10206731"
        },
        {
          title: "Tuning systems as algebraic structures",
          publicationType: "Journal article",
          wherePublished: "Revista de la Sociedad Española de Acústica",
          date: "Sep 2023",
          doi: "",
          link: "https://documentacion.sea-acustica.es/storage/publicaciones/tecniacustica-54-1-2.pdf"
        },
        {
          title: "Tuning systems as algebraic group structures",
          publicationType: "Conference paper",
          wherePublished: "Proceedings from Tecniacústica 2022 Conference by Sociedad Española de Acústica",
          date: "Nov 2022",
          doi: "",
          link: "https://documentacion.sea-acustica.es/publicaciones/Elche22/ID-14.pdf"
        }
      ],
      talks: [
        {
          title: "Quantum Delay Effect: Optimization & Next Steps",
          meta: "Talk at the 2nd International Symposium on Quantum Computing and Musical Creativity, Università degli Studi di Palermo, Palermo - Italy, 29 Oct 2025"
        },
        {
          title: "Unconventional Approaches to Arts Research",
          meta: "Talk at the 5th Conference on Arts Research, Faculty of Arts, Universidad Complutense de Madrid, Madrid - Spain, 21 May 2025"
        },
        {
          title: "Quantum Audio: Applications & Tools",
          meta: "Guest remote lecture for Merritt Moore’s course on Creative Robotics & Tech, NYU Abu Dhabi, 14 Jan 2025"
        },
        {
          title: "Quantum Itineraries",
          meta: "Talk at The Cyprus Institute on Quantum Computing & Audio Tools, Nicosia - Cyprus, Nov 2024"
        },
        {
          title: "Professional Career Talk for Teenagers - Merging Arts & Science",
          meta: "Talk at my former high school, IES Lancia, León - Spain, Sep 2024"
        },
        {
          title: "Quantum Computing Applications in the Arts & Music",
          meta: "Lecture at The Cyprus Institute, Nicosia - Cyprus, Mar 2024"
        },
        {
          title: "Developing a Quantum Step-sequencer",
          meta: "Talk at the 2nd International Symposium on Quantum Computing and Musical Creativity, Berlin - Germany, Oct 2023"
        },
        {
          title: "Tuning Systems as Algebraic Group Structures",
          meta: "Talk at Tecniacústica Conference, Elche - Spain, Nov 2022"
        }
      ],
      
      concerts: [
        {
          title: "Sónar+D - Quantum Computing Audio & Music Showcase",
          meta: "Booth Stand Presenter - Moth, Sónar Festival, Barcelona - Spain,  13th Jun - 15th Jun 2024"
        },
        {
          title: "CTM Festival - Wave Dysfunction",
          meta: "Software Technician - QuTune Collective, Berlin - Germany, 2nd Feb 2024"
        },
        {
          title: "Institute of Photonic Sciences (ICFO) - Quantum Sounds Symposium",
          meta: "Attendee & Performer, Barcelona - Spain,  6th Jun - 8th Jun 2023"
        }
      ],
      workExperience: [
        {
          title: "Predoctoral Researcher - Moth",
          meta: "Moth, London Area, United Kingdom (Remote), Oct 2024 – Present",
          website: "https://mothquantum.com/"
        },
        {
          title: "Research Collaborator & Performer - Female Laptop Orchestra",
          meta: "FLO Member, distributed collective (Remote), Jun 2025 – Present",
          website: "https://femalelaptoporchestra.org/"
        },
        {
          title: "Research Collaborator – Center for Quantum Technologies and Applications",
          meta: "DESY, Zeuthen–Berlin, Germany (Hybrid), Jul 2023 – Sep 2024",
          website: "https://quantum-zeuthen.desy.de/"
        },
        {
          title: "Research Internship – Acoustics Research Group ArquiLAV",
          meta: "Universidad Politécnica de Madrid, Madrid, Spain (On-site), Feb 2022 – Sep 2022",
          website: "http://www.arquilav.aq.upm.es/"
        }
      ],
      reviewerExperience: [
        {
          title: "European Physics Journal - Special Topics Issue on Quantum Computing and Musical Creativity",
          meta: "Revised 2 papers, spring 2026"
        },
        {
          title: "International Symposium on Quantum Computing and Musical Creativity",
          meta: "Revised 1 paper, spring 2025"
        },
        {
          title: "Sound and Music Computing Conference",
          meta: "Revised 3 papers, fall 2025"
        },
      ],
      coursesSchools: [
        {
          title: "CERN-MPQ-UIBK School on Quantum Simulation of Fundamental Physics",
          meta: "CERN, Geneva - Switzerland, 17th Aug 2026 - 4th Sep 2026"
        },
        {
          title: "NCCR SPIN Winter School ",
          meta: "University of Basel, Basel - Switzerland, 19th Jan 2026 - 21st Jan 2026"
        },
        {
          title: "Applied Machine Learning in Python ",
          meta: "Coursera (Remote), University of Michigan, Jun 2022"
        },
        {
          title: "The Art of Music Production",
          meta: "Coursera (Remote), Berklee College of Music, Ago 2021"
        }
      ],
      otherProjects: [
        {
          title: "Project to Promote STEM Vocations in Underrepresented Social Groups",
          meta: "Universidad Complutense de Madrid, Sep 2022"
        },
        {
          title: "Teaching Innovation Project: Physics, Mathematics & Music",
          meta: "Universidad Complutense de Madrid, Sep 2020 – Jun 2021"
        }
      ]
    }
  },

  es: {
    nav: {
      home: "Inicio",
      education: "Formación",
      publications: "Publicaciones",
      researchExperience: "Experiencia en Investigación",
      talksLectures: "Charlas y Conferencias",
      conferences: "Congresos Asistidos",
      concertsFestivals: "Conciertos y Festivales",
      miscellaneous: "Extras"
    },
    home: {
      eyebrow: "CV + Portafolio Artístico",
      title: "La página web de María",
      intro: HOME_INTRO.es,
      social: {
        github: "GitHub",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        email: "Email"
      }
    },
    sections: {
      education: "Formación",
      educationSubtitle: "Añade tus títulos, estudios de conservatorio, talleres y mentores clave.",
      educationWebsite: "Enlace",
      publications: "Publicaciones",
      publicationsSubtitle: "Añade artículos académicos, ensayos, textos de catálogo y escritura creativa.",
      researchExperience: "Experiencia en Investigación",
      researchExperienceSubtitle: "Charlas, congresos y conciertos/festivales.",
      workExperience: "Experiencia Laboral",
      workExperienceSubtitle: "Roles y responsabilidades profesionales.",
      reviewerExperience: "Experiencia como Revisora",
      reviewerExperienceSubtitle: "Actividades de revisión y evaluación.",
      coursesSchools: "Cursos y Escuelas",
      coursesSchoolsSubtitle: "Escuelas de verano, cursos intensivos y formación especializada.",
      otherProjects: "Otros Proyectos",
      otherProjectsSubtitle: "Proyectos colaborativos e independientes.",
      talksLectures: "Charlas y Conferencias",
      talksLecturesSubtitle: "Añade charlas invitadas, docencia, clases y conferencias públicas.",
      conferences: "Congresos Asistidos",
      conferencesSubtitle: "Añade congresos, simposios, residencias y encuentros de investigación.",
      concertsFestivals: "Conciertos y Festivales",
      concertsFestivalsSubtitle: "Añade actuaciones, estrenos, colaboraciones y apariciones en festivales.",
      miscellaneous: "Extras",
      miscellaneousSubtitle: "Algunas de mis películas, libros y videojuegos favoritos:",
      visitedCountries: "Países Visitados",
      visitedCountriesSubtitle: "Países que he visitado alrededor del mundo:"
    },
    misc: {
      videogames: "Videojuegos",
      literature: "Literatura",
      movies: "Cine"
    },
    visited: {
      europe: "Europa",
      europeTotal: "Total en Europa: 15",
      southAmerica: "América del Sur",
      southAmericaTotal: "Total en América del Sur: 1",
      asia: "Asia",
      asiaTotal: "Total en Asia: 1",
      europeCountries: [
        "Austria",
        "Chipre",
        "República Checa",
        "Francia",
        "Alemania",
        "Hungría",
        "Irlanda",
        "Italia",
        "Mónaco",
        "Portugal",
        "España",
        "Suiza",
        "Suecia",
        "Reino Unido",
        "Ciudad del Vaticano"
      ],
      southAmericaCountries: ["Colombia"],
      asiaCountries: ["India"]
    },
    footer: {
      text: "Creado como esqueleto personalizable para maria-aguado.github.io"
    },
    lists: {
      education: [
        {
          title: "Doctorado - Computación Cuántica & Procesado de Audio",
          institution: "Interdisciplinary Centre for Computer Music Research, University of Plymouth, Reino Unido",
          startDate: "Oct 2024",
          endDate: "Oct 2028",
          logo: "assets/plymouth-logo.png",
          website: "https://www.plymouth.ac.uk/courses/postgraduate/phd-quantum-computing-in-the-arts-music-and-humanities"
        },
        {
          title: "Máster - Computación de Sonido y Música",
          institution: "Music Technology Group, Universitat Pompeu Fabra, Barcelona",
          startDate: "Sept 2022",
          endDate: "Jun 2024",
          logo: "assets/upf-logo.png",
          website: "https://www.upf.edu/web/smc"
        },
        {
          title: "Grado - Física",
          institution: "Universidad Complutense de Madrid",
          startDate: "Sept 2017",
          endDate: "Jun 2022",
          logo: "assets/ucm-logo.jpg",
          website: "https://www.ucm.es/"
        },
        {
          title: "Bachillerato Internacional - Ciencias",
          institution: "IES Lancia, León",
          startDate: "Sept 2015",
          endDate: "Jun 2017",
          logo: "assets/ib-logo.png",
          website: "https://www.ibo.org/programmes/diploma-programme/"
        },
        {
          title: "Canto Coral",
          institution: "",
          startDate: "2014",
          endDate: "2023",
          hideLogo: true,
          website: "",
          subdivisions: [
            {
              institution: "Coro Juvenil Ángel Barja, Universidad de León",
              startDate: "Sept 2014",
              endDate: "Jun 2017",
              website: ""
            },
            {
              institution: "Cor de la Universitat Pompeu Fabra, Barcelona",
              startDate: "Sept 2022",
              endDate: "Jun 2023",
              website: ""
            }
          ]
        }
      ],
      publications: [
        {
          title: "Quantum Delay Effect: Optimization & Next Steps",
          publicationType: "Artículo de congreso",
          wherePublished: "Proceedings from the 3rd International Symposium on Quantum Computing and Musical Creativity",
          date: "Ene 2026",
          doi: "10.5281/zenodo.18203773",
          link: "https://doi.org/10.5281/zenodo.18203773"
        },
        {
          title: "From Qubits to Rhythm: Exploring Quantum Random Walks in Rhythmspaces",
          publicationType: "Preprint",
          wherePublished: "arXiv",
          date: "Oct 2025",
          doi: "arXiv:2510.03836",
          link: "https://arxiv.org/abs/2510.03836"
        },
        {
          title: "Developing a Framework for Sonifying Variational Quantum Algorithms",
          publicationType: "Capítulo de libro",
          wherePublished: "Advances in Quantum Computer Music, World Scientific",
          date: "Ene 2025",
          doi: "arXiv:2409.07104",
          link: "https://arxiv.org/abs/2409.07104"
        },
        {
          title: " Exploring Quantum Paths in Rhythmspaces",
          publicationType: "Trabajo de fin de máster",
          wherePublished: "Universitat Pompeu Fabra",
          date: "Sept 2024",
          doi: "10.5281/zenodo.13862360",
          link: "https://doi.org/10.5281/zenodo.13862360"
        },
        {
          title: "Low-frequency sound insulation on window façades",
          publicationType: "Artículo de revista",
          wherePublished: "Revista Buildings",
          date: "Oct 2023",
          doi: "10.3390/buildings13102561",
          link: "https://doi.org/10.3390/buildings13102561"
        },
        {
          title: "Developing a Quantum Step-sequencer",
          publicationType: "Artículo de congreso",
          wherePublished: "Proceedings from the 2nd International Symposium on Quantum Computing and Musical Creativity",
          date: "Oct 2023",
          doi: "10.5281/zenodo.10206500",
          link: "https://doi.org/10.5281/zenodo.10206500"
        },
        {
          title: "Variational Quantum Harmonizer: Generating Chord Progressions and Other Sonification Methods with the VQE Algorithm",
          publicationType: "Artículo de congreso",
          wherePublished: "Proceedings from the 2nd International Symposium on Quantum Computing and Musical Creativity",
          date: "Oct 2023",
          doi: "10.5281/zenodo.10206731",
          link: "https://doi.org/10.5281/zenodo.10206731"
        },
        {
          title: "Tuning systems as algebraic structures",
          publicationType: "Artículo de revista",
          wherePublished: "Revista de la Sociedad Española de Acústica",
          date: "Sept 2023",
          doi: "",
          link: "https://documentacion.sea-acustica.es/storage/publicaciones/tecniacustica-54-1-2.pdf"
        },
        {
          title: "Tuning systems as algebraic group structures",
          publicationType: "Artículo de congreso",
          wherePublished: "Congreso Tecniacústica 2022 de la Sociedad Española de Acústica",
          date: "Nov 2022",
          doi: "",
          link: "https://documentacion.sea-acustica.es/publicaciones/Elche22/ID-14.pdf"
        }
      ],
      talks: [
        {
          title: "Tuning Systems as Algebraic Group Structures",
          meta: "Charla en la conferencia Tecniacústica, Elche - España, nov 2022"
        },
        {
          title: "Developing a Quantum Step-sequencer",
          meta: "Charla en ISQCMC, Berlín - Alemania, oct 2023"
        },
        {
          title: "Quantum Computing Applications in the Arts & Music",
          meta: "Lecture en The Cyprus Institute, Nicosia - Chipre, mar 2024"
        },
        {
          title: "Quantum Itineraries",
          meta: "Charla en The Cyprus Institute sobre Computación Cuántica y herramientas de audio, Nicosia - Chipre, nov 2024"
        },
        {
          title: "Charla sobre mi trayectoria profesional -  Combinando Artes y Ciencias",
          meta: "Charla en el instituto donde completé la ESO y el bachillerato, IES Lancia, León - España, sept 2024"
        },
        {
          title: "Quantum Audio: Applications & Tools",
          meta: "Lecturer invitada en remoto para el curso Creative Robotics & Tech de Merritt Moore, NYU Abu Dhabi, 14 ene 2025"
        },
        {
          title: "Unconventional Approaches to Arts Research",
          meta: "Charla en la 5th Conference on Arts Research, Facultad de Bellas Artes, Universidad Complutense de Madrid, Madrid - España, 21 may 2025"
        },
        {
          title: "Quantum Delay Effect: Optimization & Next Steps",
          meta: "Charla en el 2nd International Symposium on Quantum Computing and Musical Creativity, Università degli Studi di Palermo, Palermo - Italia, 29 oct 2025"
        }
      ],
      concerts: [
        {
          title: "Sónar+D - Quantum Computing Audio & Music Showcase",
          meta: "Booth Stand Presenter - Moth, Sónar Festival, Barcelona - España, 13 Jun - 15 Jun 2024"
        },
        {
          title: "CTM Festival - Wave Dysfunction",
          meta: "Técnica de Software - QuTune Collective, Berlín - Alemania, 2 Feb 2024"
        },
        {
          title: "Institute of Photonic Sciences (ICFO) - Quantum Sounds Symposium",
          meta: "Intérprete, Barcelona - España, 6 Jun - 8 Jun 2023"
        }
      ],
      workExperience: [
        {
          title: "Investigadora Predoctoral",
          meta: "Moth, Área de Londres, Reino Unido (Remoto), Oct 2024 – Actualidad",
          website: "https://mothquantum.com/"
        },
        {
          title: "Colaboradora de Investigación e Intérprete – Female Laptop Orchestra",
          meta: "Miembro de FLO, colectivo distribuido (Remoto), Jun 2025 – Actualidad",
          website: "https://femalelaptoporchestra.org/"
        },
        {
          title: "Colaboradora de Investigación – Center for Quantum Technologies and Applications",
          meta: "DESY, Zeuthen–Berlín, Alemania (Híbrido), Jul 2023 – Sept 2024",
          website: "https://quantum-zeuthen.desy.de/"
        },
        {
          title: "Prácticas – Grupo de Investigación en Acústica ArquiLAV",
          meta: "Universidad Politécnica de Madrid, Madrid, España (Presencial), Feb 2022 – Sept 2022",
          website: "http://www.arquilav.aq.upm.es/"
        }
      ],
      reviewerExperience: [
        {
          title: "European Physics Journal - Special Topics Issue on Quantum Computing and Musical Creativity",
          meta: "Revisé 2 artículos, primavera de 2026"
        },
        {
          title: "International Symposium on Quantum Computing and Musical Creativity",
          meta: "Revisé 1 artículo, primavera de 2025"
        },
        {
          title: "Sound and Music Computing Conference",
          meta: "Revisé 3 artículos, otoño de 2025"
        }
      ],
      coursesSchools: [
        {
          title: "CERN-MPQ-UIBK School on Quantum Simulation of Fundamental Physics",
          meta: "CERN, Ginebra - Suiza, 17 ago 2026 - 4 sep 2026"
        },
        {
          title: "NCCR SPIN Winter School ",
          meta: "University of Basel, Basilea - Suiza, 19 ene 2026 - 21 ene 2026"
        },
        {
          title: "Applied Machine Learning in Python ",
          meta: "Coursera (Remoto), University of Michigan, jun 2022"
        },
        {
          title: "The Art of Music Production",
          meta: "Coursera (Remoto), Berklee College of Music, ago 2021"
        }
      ],
      otherProjects: [
        {
          title: "Proyecto para promover vocaciones STEM en colectivos sociales infrarrepresentados",
          meta: "Asociada con la Universidad Complutense de Madrid, sept 2022"
        },
        {
          title: "Proyecto de Innovación Docente: Física, Matemáticas y Música",
          meta: "Asociada con la Universidad Complutense de Madrid, sept 2020 – jun 2021"
        }
      ]
    }
  }
};
