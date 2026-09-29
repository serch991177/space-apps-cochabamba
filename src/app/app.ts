import { Component, OnDestroy, OnInit, signal } from '@angular/core';

type Challenge = {
  number: string;
  category: string;
  difficulty: string;
  title: string;
  description: string;
  url: string;
};

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit, OnDestroy {
  readonly menuOpen = signal(false);
  readonly countdown = signal({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  private timer?: ReturnType<typeof setInterval>;

  readonly participation = [
    { number: '01', phase: 'ANTES DEL EVENTO', title: 'Crea tu cuenta local', detail: 'Registra tus datos para recibir las indicaciones de la sede Cochabamba.' },
    { number: '02', phase: 'ANTES DEL EVENTO', title: 'Completa tu inscripción', detail: 'Comparte la información necesaria para preparar tu experiencia presencial.' },
    { number: '03', phase: 'ANTES DEL EVENTO', title: 'Prepárate para crear', detail: 'Conoce la agenda, los desafíos y todo lo que necesitas llevar.' },
    { number: '04', phase: 'DURANTE EL EVENTO', title: 'Llega a la sede', detail: 'Acredítate y conoce a las personas con quienes compartirás la misión.' },
    { number: '05', phase: 'DURANTE EL EVENTO', title: 'Regístrate en NASA', detail: 'El equipo local te orientará para elegir Cochabamba en la plataforma oficial.' },
    { number: '06', phase: 'DURANTE EL EVENTO', title: 'Forma equipo y construye', detail: 'Elige un desafío, combina talentos y presenta una solución.' },
  ];

  readonly profiles = [
    { icon: '⌘', title: 'Desarrollo', detail: 'Prototipos que funcionan' },
    { icon: '◇', title: 'Diseño', detail: 'Experiencias que conectan' },
    { icon: '✳', title: 'Ciencia', detail: 'Preguntas basadas en datos' },
    { icon: '△', title: 'Ingeniería', detail: 'Ideas que pueden construirse' },
    { icon: '✦', title: 'Comunicación', detail: 'Historias que inspiran' },
    { icon: '∞', title: 'Toda curiosidad', detail: 'Nuevas formas de mirar' },
  ];

  readonly challenges: Challenge[] = [
    {
      number: '01', category: 'CIENCIA DE LA TIERRA', difficulty: 'AVANZADO',
      title: 'Be An Earth System Trend Detective!',
      description: 'Explora datos de la Tierra y descubre cómo están cambiando sus sistemas a lo largo del tiempo.',
      url: 'https://www.spaceappschallenge.org/2026/challenges/be-an-earth-system-trend-detective/',
    },
    {
      number: '02', category: 'EDUCACIÓN Y EXPLORACIÓN', difficulty: 'FÁCIL · INTERMEDIO',
      title: 'Build a Junior Astronaut Mission Trainer',
      description: 'Imagina una experiencia interactiva para aprender a vivir y tomar decisiones en una misión espacial.',
      url: 'https://www.spaceappschallenge.org/2026/challenges/build-a-junior-astronaut-mission-trainer/',
    },
    {
      number: '03', category: 'AGRICULTURA Y CLIMA', difficulty: 'INTERMEDIO · AVANZADO',
      title: 'Field Shift: Adapting Farms with NASA Data',
      description: 'Combina observaciones de NASA y prioridades locales para pensar en cultivos más resilientes.',
      url: 'https://www.spaceappschallenge.org/2026/challenges/field-shift-adapting-farms-with-nasa-data/',
    },
    {
      number: '04', category: 'EXPLORACIÓN LUNAR', difficulty: 'INTERMEDIO · AVANZADO',
      title: 'CLPS Lunar Mission Browser',
      description: 'Diseña una herramienta para explorar lugares de alunizaje, energía solar y comunicaciones.',
      url: 'https://www.spaceappschallenge.org/2026/challenges/clps-lunar-mission-browser/',
    },
    {
      number: '05', category: 'INCENDIOS Y TIERRA', difficulty: 'INTERMEDIO · AVANZADO',
      title: 'Harmonization of MODIS and VIIRS Hot Spots',
      description: 'Conecta registros de focos de calor para entender patrones históricos de incendios.',
      url: 'https://www.spaceappschallenge.org/2026/challenges/harmonization-of-modis-and-viirs-hot-spots/',
    },
    {
      number: '06', category: 'DISEÑO DE MISIONES', difficulty: 'FÁCIL · INTERMEDIO',
      title: 'Space Mission Design Game',
      description: 'Convierte las decisiones de una misión espacial en un juego de estrategia y aprendizaje.',
      url: 'https://www.spaceappschallenge.org/2026/challenges/space-mission-design-game/',
    },
  ];

  readonly agenda = [
    {
      date: 'SÁBADO 14', subtitle: 'Explorar y comenzar',
      events: [
        { time: '07:00', title: 'Acreditación y bienvenida', place: 'Ingreso a la sede' },
        { time: '10:00', title: 'Apertura de desafíos y equipos', place: 'Auditorio' },
        { time: '11:00', title: 'Comienza el hackathon', place: 'Espacios de trabajo' },
      ],
    },
    {
      date: 'DOMINGO 15', subtitle: 'Crear y compartir',
      events: [
        { time: '09:00', title: 'Mentorías y avance', place: 'Salas de trabajo' },
        { time: '15:00', title: 'Presentaciones y cierre', place: 'Auditorio' },
      ],
    },
  ];

  readonly packages = [
    { name: 'Bronce', icon: '01', label: 'Lo esencial', features: ['Credencial y lanyard', 'Polera oficial', 'Pin, lapicero y stickers'] },
    { name: 'Plata', icon: '02', label: 'Un poco más de la misión', features: ['Todo lo del paquete Bronce', 'Taza conmemorativa'] },
    { name: 'Oro', icon: '03', label: 'La experiencia completa', features: ['Todo lo del paquete Plata', 'Tomatodo conmemorativo'] },
  ];

  readonly faqs = [
    { question: '¿La participación tiene costo?', answer: 'No. La inscripción y participación en el hackathon son gratuitas. Los paquetes de recuerdos son completamente opcionales.' },
    { question: '¿Necesito experiencia técnica?', answer: 'No. Personas de todas las disciplinas pueden aportar ideas, aprender y construir en equipo.' },
    { question: '¿Puedo participar sin equipo?', answer: 'Sí. Durante el evento podrás conocer a otras personas y formar un equipo con habilidades diferentes.' },
    { question: '¿Debo registrarme también en la plataforma de NASA?', answer: 'Sí. El registro local y el registro oficial de NASA son pasos diferentes. La organización local te orientará para seleccionar la sede Cochabamba y registrar a tu equipo.' },
    { question: '¿Habrá desafíos municipales?', answer: 'Sí. En 2026 el GAMC coorganiza el evento en Cochabamba y también impulsa desafíos municipales. Consulta con la organización local los enunciados y detalles de participación.' },
    { question: '¿Cuándo y dónde será el evento?', answer: 'El 14 y 15 de noviembre de 2026, de forma presencial en FEXCO, Pabellón Kanata, Cochabamba.' },
  ];

  ngOnInit(): void {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  private updateCountdown(): void {
    const target = new Date('2026-11-14T00:00:00-04:00').getTime();
    const distance = Math.max(0, target - Date.now());
    const seconds = Math.floor(distance / 1000);
    const pad = (value: number) => String(value).padStart(2, '0');
    this.countdown.set({
      days: pad(Math.floor(seconds / 86400)),
      hours: pad(Math.floor((seconds % 86400) / 3600)),
      minutes: pad(Math.floor((seconds % 3600) / 60)),
      seconds: pad(seconds % 60),
    });
  }
}
