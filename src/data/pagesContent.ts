export type PageSection = {
  heading?: string;
  paragraph?: string;
  listItems?: string[];
  orderedItems?: string[];
};

export type InfoPageContent = {
  title: string;
  intro?: string;
  sections: PageSection[];
  links?: Array<{ label: string; path: string }>;
};

export const pageContent: Record<string, InfoPageContent> = {
  '/jinc-jodhpur-institute': {
    title: 'JINC Jodhpur Institute Details',
    sections: [
      {
        heading: 'About JINC Jodhpur',
        paragraph:
          'JINC Jodhpur is a coaching institute focused on preparing students for government nursing exams.'
      },
      {
        heading: 'Courses Available',
        paragraph:
          'Courses are available for AIIMS NORCET, RRB Nursing and other nursing officer exams.'
      },
      {
        heading: 'Facilities',
        listItems: ['Classroom learning', 'Experienced faculty', 'Exam-oriented preparation']
      }
    ],
    links: [
      { label: 'NORCET Coaching', path: '/norcet-coaching-jodhpur' },
      { label: 'RRB Coaching', path: '/rrb-nursing-coaching-jodhpur' },
      { label: 'Admission', path: '/jinc-jodhpur-admission-process' },
      { label: 'Fees', path: '/jinc-jodhpur-fees' }
    ]
  },
  '/jinc-jodhpur-courses': {
    title: 'JINC Jodhpur Courses',
    intro: 'Courses are offered for major nursing recruitment pathways through classroom-focused coaching programs.',
    sections: [
      { listItems: ['NORCET Coaching', 'RRB Nursing Coaching', 'Nursing Officer Exam Preparation'] }
    ],
    links: [
      { label: 'NORCET Coaching', path: '/norcet-coaching-jodhpur' },
      { label: 'RRB Coaching', path: '/rrb-nursing-coaching-jodhpur' },
      { label: 'Admission', path: '/jinc-jodhpur-admission-process' },
      { label: 'Fees', path: '/jinc-jodhpur-fees' }
    ]
  },
  '/jinc-jodhpur-admission': {
    title: 'JINC Jodhpur Admission',
    sections: [
      {
        paragraph:
          'Students can visit the institute, select the preferred course, and complete registration for classroom batches.'
      }
    ],
    links: [
      { label: 'Admission Process', path: '/jinc-jodhpur-admission-process' },
      { label: 'Fees', path: '/jinc-jodhpur-fees' }
    ]
  },
  '/jinc-jodhpur-fees': {
    title: 'JINC Jodhpur Fees',
    sections: [
      { paragraph: 'Fee details vary by course and batch category. Students can confirm fee information during institute counseling.' }
    ],
    links: [
      { label: 'Admission', path: '/jinc-jodhpur-admission-process' },
      { label: 'Courses', path: '/jinc-jodhpur-courses' }
    ]
  },
  '/jinc-jodhpur-faculty': {
    title: 'JINC Jodhpur Faculty',
    sections: [
      { paragraph: 'Experienced faculty members conduct classroom sessions and provide exam-oriented teaching support for nursing aspirants.' }
    ],
    links: [
      { label: 'NORCET Coaching', path: '/norcet-coaching-jodhpur' },
      { label: 'RRB Coaching', path: '/rrb-nursing-coaching-jodhpur' }
    ]
  },
  '/norcet-coaching-jodhpur': {
    title: 'NORCET Coaching in Jodhpur',
    intro:
      'Coaching institutes in Jodhpur provide preparation for AIIMS NORCET through classroom programs.',
    sections: [
      {
        heading: 'Course Features',
        listItems: ['Structured syllabus coverage', 'Regular classes', 'Exam-oriented preparation']
      }
    ],
    links: [
      { label: 'Admission', path: '/jinc-jodhpur-admission-process' },
      { label: 'Fees', path: '/jinc-jodhpur-fees' }
    ]
  },
  '/rrb-nursing-coaching-jodhpur': {
    title: 'RRB Nursing Coaching in Jodhpur',
    sections: [
      {
        paragraph:
          'Railway nursing exam coaching is available in Jodhpur through various classroom programs.'
      }
    ],
    links: [
      { label: 'Admission', path: '/jinc-jodhpur-admission-process' },
      { label: 'Fees', path: '/jinc-jodhpur-fees' }
    ]
  },
  '/nursing-officer-coaching-jodhpur': {
    title: 'Nursing Officer Coaching in Jodhpur',
    sections: [
      {
        paragraph:
          'Institutes in Jodhpur provide classroom coaching support for nursing officer recruitment exams.'
      }
    ],
    links: [
      { label: 'NORCET Coaching', path: '/norcet-coaching-jodhpur' },
      { label: 'RRB Coaching', path: '/rrb-nursing-coaching-jodhpur' }
    ]
  },
  '/aiims-norcet-exam-overview': {
    title: 'AIIMS NORCET Exam Overview',
    sections: [
      {
        paragraph:
          'AIIMS conducts NORCET to recruit nursing officers in AIIMS hospitals across India.'
      }
    ],
    links: [
      { label: 'NORCET Coaching', path: '/norcet-coaching-jodhpur' },
      { label: 'Admission', path: '/jinc-jodhpur-admission-process' }
    ]
  },
  '/rrb-nursing-exam-overview': {
    title: 'RRB Nursing Exam Overview',
    sections: [
      {
        paragraph:
          'Railway Recruitment Board conducts exams for nursing staff recruitment in railway hospitals.'
      }
    ],
    links: [
      { label: 'RRB Coaching', path: '/rrb-nursing-coaching-jodhpur' },
      { label: 'Admission', path: '/jinc-jodhpur-admission-process' }
    ]
  },
  '/nursing-officer-exam-overview': {
    title: 'Nursing Officer Exam Overview',
    sections: [
      {
        paragraph:
          'Nursing officer recruitment exams are conducted by multiple institutions to fill nursing posts in hospitals.'
      }
    ],
    links: [
      { label: 'Admission', path: '/jinc-jodhpur-admission-process' },
      { label: 'Fees', path: '/jinc-jodhpur-fees' }
    ]
  },
  '/nursing-coaching-jodhpur': {
    title: 'Nursing Coaching in Jodhpur',
    sections: [
      {
        paragraph:
          'Jodhpur has multiple coaching institutes that provide training for government nursing exams.'
      },
      {
        heading: 'Popular Exams',
        listItems: ['AIIMS NORCET', 'RRB Nursing Superintendent', 'ESIC Nursing Officer']
      }
    ],
    links: [
      { label: 'NORCET Coaching', path: '/norcet-coaching-jodhpur' },
      { label: 'RRB Coaching', path: '/rrb-nursing-coaching-jodhpur' }
    ]
  },
  '/jinc-jodhpur-admission-process': {
    title: 'JINC Jodhpur Admission Process',
    sections: [
      {
        orderedItems: [
          'Visit the institute',
          'Select course',
          'Complete registration',
          'Pay fees',
          'Start classes'
        ]
      }
    ],
    links: [
      { label: 'NORCET Coaching', path: '/norcet-coaching-jodhpur' },
      { label: 'RRB Coaching', path: '/rrb-nursing-coaching-jodhpur' },
      { label: 'Fees', path: '/jinc-jodhpur-fees' }
    ]
  },
  '/student-experience': {
    title: 'Student Experience at JINC Jodhpur',
    sections: [
      {
        paragraph:
          'Students attend classroom coaching for structured guidance and exam preparation.'
      },
      {
        paragraph:
          'Many students prefer classroom learning for direct interaction with faculty.'
      }
    ],
    links: [
      { label: 'Admission', path: '/jinc-jodhpur-admission-process' },
      { label: 'Fees', path: '/jinc-jodhpur-fees' }
    ]
  }
};
