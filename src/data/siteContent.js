import imgOutdoorPortrait from '../../content/WhatsApp Image 2026-03-19 at 13.21.48.jpeg'
import imgHero from '../../content/WhatsApp Image 2026-03-20 at 08.28.26 (2).jpeg'
import imgIndoorPortrait from '../../content/WhatsApp Image 2026-03-20 at 08.28.53.jpeg'
import imgTrainingAction from '../../content/WhatsApp Image 2026-03-20 at 08.32.31.jpeg'
import imgThassiloHaun from '../../content/Thassilo_Haun - Co Trainer.jpg'
import imgAnnegretGrimm from '../../content/Annegret Grimm - Übungsleiterin.jfif'
import pdfHaunDtbATrainer from '../../content/Haun_DTB_A_Trainer_Logo.pdf'
import pdfKligmanDtbATrainer from '../../content/Kligman_DTB_A_Trainer_Schild.pdf'
import pdfSommertraining2026 from '../../content/ts_sommertraining_2026.pdf'
import pdfSommercamp2026 from '../../content/Sommercamp 2026 Anmeldung.pdf'
import logo from '../../content/logo.jpeg'

/** Quelle: gescannte Dokumente und Fotos im Ordner `content` */
export const site = {
  siteName: 'Tennisschule Joseph Kligman',
  trainer: {
    name: 'Joseph Kligman',
    role: 'Cheftrainer',
    club: 'TSV Schäftlarn e.V. 1921',
  },
  contact: {
    street: 'Lyonel-Feininger-Str. 25',
    zipCity: '80807 München',
    /** Festnetz */
    phoneDisplay: '089-30 76 06 30',
    phoneTel: '+498930760630',
    mobileDisplay: '0176 56 690440',
    mobileTel: '+4917656690440',
    /** Zentrale Adresse für Anfragen über Website-Formular und E-Mail-Links */
    email: 'jkligman@web.de',
  },
  images: {
    logo,
    outdoorPortrait: imgOutdoorPortrait,
    hero: imgHero,
    indoorPortrait: imgIndoorPortrait,
    trainingAction: imgTrainingAction,
    thassiloHaun: imgThassiloHaun,
    annegretGrimm: imgAnnegretGrimm,
  },
  hero: {
    title: 'Professionelles Tennistraining in Schäftlarn',
    subtitle:
      'Erfahrung aus Spitzensport und jahrzehntelanger Vereinsarbeit – für Kinder, Jugendliche und Erwachsene.',
  },
  tennisSchool: {
    title: 'Tennisschule',
    intro:
      'Die Tennisarbeit ist fest im TSV Schäftlarn verwurzelt: Hier betreut Joseph Kligman als Cheftrainer seit 1996 Spielerinnen und Spieler aller Leistungsstufen – vom Einstieg bis zum Mannschaftsspiel.',
    aboutKligman:
      'Seine Laufbahn begann 1978 in der Ukraine. Als Jugendlicher gewann er die Ukrainische Meisterschaft, gehörte zur Nationalauswahl und erreichte die Top 10 im Land. Nach dem Studium an der staatlichen Sporthochschule Kiew (Diplom als Tennis- und Sportlehrer) arbeitete er als Trainer an einer Tennisschule in Kiew. Seit 1992 lebt er in Deutschland und bringt seitdem sowohl Breiten- als auch Leistungssportler weiter.',
    inGermany:
      'Nach Stationen beim TC Großhesselohe und TC Kaufering leitet er am TSV Schäftlarn den Trainingsbetrieb: Aufbau von Jugendmannschaften, deutlich mehr Teilnehmende im Gruppentraining und Erfolge bis in die Bezirksliga – begleitet von Turnieren wie den Prince Tour Masters in den späten 1990er-Jahren.',
    qualifications:
      'Qualifikationen: Diplom Tennis- und Sportlehrer, C-, B- und A-Trainerlizenz des Bayerischen Tennisverbands bzw. Deutschen Tennis Bundes.',
    teamNote:
      'Zum Team von Joseph Kligman gehören außerdem Thassilo Haun als Co-Trainer und Annegret Grimm als Übungsleiterin.',
    servicesTitle: 'Unsere Services',
    servicesBody:
      'Zum Angebot gehören Einzeltraining und Gruppenstunden für Kinder, Jugendliche und Erwachsene sowie ein Besaitungsservice – schnell, professionell und zuverlässig, damit Sie sich ganz auf Ihr Spiel konzentrieren können.',
    team: [
      {
        name: 'Joseph Kligman',
        role: 'Cheftrainer',
        image: 'indoorPortrait',
        alt: 'Joseph Kligman in der Tennishalle',
        licenseLabel: 'DTB A-Trainerlizenz',
        licenseUrl: pdfKligmanDtbATrainer,
      },
      {
        name: 'Thassilo Haun',
        role: 'Co-Trainer',
        image: 'thassiloHaun',
        alt: 'Thassilo Haun beim Tennistraining',
        licenseLabel: 'DTB A-Trainerlizenz',
        licenseUrl: pdfHaunDtbATrainer,
      },
      {
        name: 'Annegret Grimm',
        role: 'Übungsleiterin',
        image: 'annegretGrimm',
        alt: 'Annegret Grimm in der Tennishalle',
      },
    ],
  },
  training: {
    title: 'Trainingsangebot',
    intro:
      'Einzeltraining und Gruppenstunden – die Gruppen stellen wir nach Spielstärke zusammen. Alle Angaben pro Trainerstunde.',
    unitNote: '(1 Trainerstunde = 60 min.):',
    prices: [
      { label: 'Einzelstunde', amount: 'EUR 64,-' },
      { label: '2-er-Gruppe', amount: 'EUR 34,- pro Person' },
      { label: '3-er-Gruppe', amount: 'EUR 24,- pro Person' },
      { label: 'Gruppenstunde *: 4-er-Gruppe', amount: 'EUR 19,- pro Person' },
      { label: '3-er-Gruppe (Übungsleiter)', amount: 'EUR 15,- pro Person' },
      { label: '4-er-Gruppe (Übungsleiter)', amount: 'EUR 12,- pro Person' },
    ],
    priceFootnote: '*) Die Gruppen werden von uns nach Spielstärke zusammengestellt.',
    seasonsKids:
      'Für Kinder und Jugendliche gibt es jährlich sowohl das Sommertraining (Anfang Mai bis Ende September) als auch das Wintertraining (Anfang Oktober bis Ende April).',
    camps:
      'Am Anfang der großen Schulferien führen wir seit Jahren gemeinsam mit unseren Co-Trainern zwei einwöchige Kinder-Tennis-Camps durch. Die Camps haben ein so gutes Echo, dass wir oft die gesamte TSV-Tennisanlage mit ihren 6 Plätzen benötigen.',
  },
  summer2026: {
    title: 'Sommer 2026',
    intro:
      'Meine Tennisschule startet mit einem abwechslungsreichen Programm für alle Alters- und Leistungsklassen in die Sommersaison 2026. Neben einem regelmäßigen Sommertraining erwarten Sie Club-Turniere, Specials und Camps – ganz sicher ist für jeden etwas dabei! (Stand 06.05.2026)',
    sections: [
      {
        title: '🌱 Reguläres Sommer-Gruppen-Training',
        items: [
          {
            date: 'Mai bis September 2026',
            title: 'Reguläres Sommer-Gruppen-Training der Tennisschule Kligman',
            bullets: [
              'Wöchentliches Sommer-Gruppentraining für Kinder & Jugendliche bei Joseph und Anne (Mai 2026 – September 2026) sowie Zusatztraining für Erwachsene und Senioren bei Thassilo (Mai, Juni und Juli 2026) sowie Trainingstage von Thassilo bei den Sommercamps (August 2026).',
            ],
          },
        ],
      },
      {
        title: '☀ Specials & Zusatzangebote',
        items: [
          {
            date: '14. Mai 2026 · Christi Himmelfahrt · 09:00 bis 13:00 Uhr',
            title: 'Vatertags-Special',
            bullets: [
              'AUSGEBUCHT, KEINE SLOTS MEHR FREI!',
              'Nächste Chance in 2027.',
            ],
          },
          {
            date: '25. Mai 2026 · Pfingstmontag · Vormittag 09:00 bis 13:00 Uhr',
            title: 'Doppel-Special',
            bullets: [
              'Qualifiziertes Doppeltraining unter fachkundiger Anleitung des dreifachen Weltmeisters Thassilo Haun in zwei kleinen Gruppen (3–4 TN).',
              'Gruppe A: 09:00 bis 11:00 Uhr, Gruppe B: 11:00 bis 13:00 Uhr.',
              'Preis pro TN (bei 3 TN): 50,00 EUR, Preis pro TN (bei 4 TN): 38,00 EUR.',
              '„First come, first serve“ – Anmeldungen bitte direkt an den für dieses Format zuständigen Trainer der Tennisschule Kligman, Thassilo Haun unter 0170 44 973 99.',
            ],
          },
          {
            date: '4. Juni 2026 · Fronleichnam · Vormittag 09:00 bis 13:00 Uhr',
            title: 'Volley-Special',
            bullets: [
              'Qualifiziertes Doppeltraining unter fachkundiger Anleitung des dreifachen Weltmeisters Thassilo Haun in zwei kleinen Gruppen (mind. 3, max. 4 TN).',
              'Gruppe A: 09:00 bis 11:00 Uhr, Gruppe B: 11:00 bis 13:00 Uhr.',
              'Preis pro TN (bei 3 TN): 50,00 EUR, Preis pro TN (bei 4 TN): 38,00 EUR.',
              '„First come, first serve“ – Anmeldungen bitte direkt an den für dieses Format zuständigen Trainer der Tennisschule Kligman, Thassilo Haun unter 0170 44 973 99.',
            ],
          },
          {
            date:
              '11. bis 12. Juli 2026 · Vormittag 09:00 bis 12:00 Uhr und Nachmittag 13:00 bis 16:00 Uhr',
            title: 'Aufschlag-Special (2-Tages-Special mit Thassilo)',
            bullets: [
              'Maximal 4 Trainingsgruppen pro Tag à 90 Minuten.',
              'Gruppe A: 09:00 bis 10:30 Uhr, Gruppe B: 10:30 bis 12:00 Uhr, Gruppe C: 13:00 bis 14:30 Uhr, Gruppe D: 14:30 bis 16:00 Uhr.',
              'Preis pro TN (bei 3 TN): 35,00 EUR, Preis pro TN (bei 4 TN): 25,00 EUR.',
              '„First come, first serve“ – Anmeldungen direkt an Thassilo Haun unter 0170 44 973 99.',
            ],
          },
        ],
      },
      {
        title: '🔥 Highlight-Event: Sommerfest Tennisabteilung plus Show-Event',
        items: [
          {
            date: '18. Juli 2026 · Nachmittags ab 15:00 Uhr',
            title: 'Schlag die Trainer',
            bullets: [
              'Show-Event mit unserem Trainerteam Joseph und Thassilo: Spielen Sie an der Seite der Trainer in entspannter Atmosphäre (Doppel und Mixed, wir wechseln durch).',
              'Wer mitspielen möchte, meldet sich bitte bis spätestens 13.07.2026 beim Leiter der Tennisschule Kligman, Joseph Kligman, unter 0176 56 690440.',
            ],
          },
          {
            date: '18. Juli 2026 · Abends ab 18:00 Uhr',
            title: 'Sommerfest der Tennisabteilung',
            bullets: [
              'Sommerfest & Club-Abend im TSV bei gutem Essen, Getränken und Musik.',
            ],
          },
        ],
      },
      {
        title: '🌞 Sommerferiencamps für Kinder & Jugendliche',
        items: [
          {
            date: 'August 2026 · 10:00 bis 12:00 Uhr und 13:00 bis 15:00 Uhr',
            title: 'Sommer-Kindercamps',
            bullets: [
              '3. bis 7. August 2026: Sommer-Kindercamp I (1. Sommerferienwoche).',
              '10. bis 14. August 2026: Sommer-Kindercamp II (2. Sommerferienwoche).',
              'Spiel, Training und Spaß für Kinder und Jugendliche stehen hier im Mittelpunkt.',
              'Preis pro Mitglied inklusive Essen, Getränk und Trainingsgebühren: 270,00 EUR.',
              'Gäste sind herzlich willkommen und zahlen 60,00 EUR Gastgebühr zusätzlich für die komplette Trainingswoche auf der Anlage des TSV Schäftlarn.',
              'Anmeldungen direkt an den Leiter der Tennisschule Kligman, Joseph Kligman.',
            ],
          },
        ],
      },
      {
        title: '🕐 Zusatzangebot: spontane Trainerstunden mit Joseph Kligman',
        items: [
          {
            title: 'Flexibel buchbare Zusatztermine jeweils um 13:00 Uhr',
            bullets: [
              '12.05.2026',
              '21.05.2026',
              '09.06.2026',
              '16.06.2026',
              '25.06.2026',
              '03.07.2026',
              '07.07.2026',
              '15.07.2026',
              '23.07.2026',
              '28.07.2026',
            ],
          },
        ],
      },
      {
        title: '🕐 Zusatzangebot: Trainerstunden mit Thassilo Haun',
        items: [
          {
            title: 'Für sich selbst oder zum Verschenken – egal wie, immer eine gute Idee',
            bullets: [
              'Termin-Anfragen gerne direkt an Thassilo Haun unter 0170 44 973 99.',
            ],
          },
        ],
      },
      {
        title: '🍂 Herbst – Saisonabschluss Sommersaison 2026',
        items: [
          {
            date: '19. September 2026 ab 10:00 Uhr',
            title: 'Jugend-Clubmeisterschaften der Tennisabteilung',
            bullets: [
              'Bei schlechtem Wetter ist der Ausweichtermin der 26. September 2026.',
            ],
          },
        ],
      },
      {
        title: '🔁 Ganzjährige Trainingsangebote der Tennisschule Kligman',
        items: [
          {
            bullets: [
              'Gruppentraining für Kinder, Jugendliche, Erwachsene und Senioren.',
              'Einzeltraining, Zweiertraining, Dreiertraining und Vierertraining.',
              'Mannschaftstraining, Saisonvorbereitungskurse und Intensivtrainingstage.',
              'Early Bird Training für Berufstätige und Frühaufsteher.',
              'After Work Training für Berufstätige und Nachtschwärmer.',
              'Qualifiziertes und engagiertes Trainerteam mit Herz und Fachkompetenz.',
            ],
            note: 'Tennisschule Kligman – seit 1995 stolzer Partner des TSV Schäftlarn.',
          },
        ],
      },
    ],
  },
  registration: {
    title: 'Anmeldung',
    body:
      'Zur Anmeldung zum Sommertraining 2026 und zum Sommercamp 2026 finden Sie alle Informationen in den PDF-Dokumenten (Termine, Ablauf, Hinweise). Bitte öffnen Sie die jeweilige Datei und folgen Sie den Angaben dort.',
    pdfs: [
      { url: pdfSommertraining2026, label: 'Sommertraining 2026' },
      { url: pdfSommercamp2026, label: 'Sommercamp 2026' },
    ],
    note:
      'Für Rückfragen zur Anmeldung oder zu anderen Angeboten (z. B. Wintertraining, Camps, Einzelstunden) erreichen Sie mich telefonisch oder über das Kontaktformular.',
  },
  anfahrt: {
    title: 'Anfahrt',
    intro: 'Das Training findet am Sportgelände des TSV Schäftlarn statt.',
    club: {
      name: 'TSV Schäftlarn 1921 e.V.',
      street: 'Wangener Weg 17',
      zipCity: '82069 Hohenschäftlarn',
      phone: '08178 – 4914',
      phoneTel: '+4981784914',
      fax: '08178 – 955983',
      email: 'info@tsv-schaeftlarn.de',
    },
    routes: [
      {
        heading: 'Aus Richtung B11 / Isartal',
        text: 'Von der B 11 kommend ab Ortsmitte Hohenschäftlarn der Ausschilderung zur Autobahn A 95 Richtung Starnberg folgen. Biegen Sie nach ca. 1 km im Kreisverkehr am Ortsausgang rechts von der Starnberger Straße ab und folgen Sie der Vorfahrtsstraße ca. 300 m bis zum Vereinsgelände. Ein großer Parkplatz befindet sich hinter der Tennishalle.',
      },
      {
        heading: 'Von der A 95 München – Garmisch',
        text: 'Verlassen Sie die A95 an der Ausfahrt Schäftlarn Richtung Hohenschäftlarn. Biegen Sie am Ortseingang im Kreisverkehr links ab und folgen Sie der Vorfahrtsstraße ca. 300 m bis zum Vereinsgelände.',
      },
      {
        heading: 'Zu Fuß von der S-Bahn Hohenschäftlarn',
        text: 'Der Kirchturm von St. Georg weist Ihnen die Richtung! Vom S-Bahnhof (Linie S7, München – Wolfratshausen) gehen Sie die Starnberger Straße gen Westen bergauf und erreichen die Abzweigung Wangener Weg nach etwa 10 Minuten auf der rechten Seite. Folgen Sie dem Wangener Weg bis zum Sportgelände.',
      },
    ],
  },
  contactSection: {
    title: 'Kontakt',
    intro: 'Fragen zum Training? Schreiben Sie uns oder rufen Sie an.',
  },
  legal: {
    impressumNote:
      'Angaben nach § 5 TMG. Bitte bei Änderungen von Anschrift oder Erreichbarkeit aktualisieren.',
    datenschutzNote:
      'Es liegt kein vollständiger, rechtlich geprüfter Datenschutztext vor. Diese Seite enthält eine sachliche Grundstruktur; bitte durch eine Rechtsberatung oder Vorlage des Vereins/DTB ergänzen.',
    agbNote:
      'Es liegt kein vollständiger AGB-Text vor. Der folgende Abschnitt ist ein Platzhalter bis zur Ergänzung durch den Verein.',
  },
}
