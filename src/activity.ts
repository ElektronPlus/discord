const LESSONS = [
  'Matematyka',
  'Biologia',
  'Programowanie',
  'polski',
  'angielski',
  'niemiecki',
  'Geografia',
  'Bazy Danych',
  'Religia',
  'Fizyka',
  'WF',
  'Historia',
  'Pojazdy samochodowe',
  'Diagnostyka',
  'Chemia',
  'Informatyka',
  'SEO'
]

export default function getRandomActivity() {
  const randomLesson = LESSONS[Math.floor(Math.random() * LESSONS.length)]
  return `Lekcji: ${randomLesson}`
}