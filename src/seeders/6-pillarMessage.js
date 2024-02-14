'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('pillar_message', [
      //Tributario
      {
        id: 1, score_limit: 20.0, message: "El resultado indica que conocimiento tributario es bastante sólido. Estás al tanto de las complejidades" +
          " fiscales, por lo que has logrado optimizar la carga asociada para aprovechar al máximo las disposiciones" +
          " legales vigentes.", id_pillar: 1
      },
      {
        id: 2, score_limit: 13.2, message: "El área tributaria muestra un conocimiento moderado de las obligaciones fiscales. Sin " +
          "embargo, existen oportunidades para fortalecer la gestón tributaria y la planificación fiscal." +
          " Se recomienda una revisión exhaustiva de la estructura fiscal y la búsqueda de" +
          " oportunidades para optmizar la carga impositva. Implementar estrategias fiscales" +
          " eficientes podría reducir costos y mejorar la eficiencia en la gestión de impuestos.", id_pillar: 1
      },
      {
        id: 3, score_limit: 6.6, message: "Es posible que se deba revisar algunas deducciones fiscales básicas. El puntaje bajo " +
          "indica que no están aprovechando de manera efectiva las estrategias y tácticas disponibles" +
          " para reducir la carga fiscal. La planificación tributaria implica estructurar las finanzas y" +
          " las transacciones de manera estratégica para minimizar los impuestos legítimamente." +
          " Una baja planificación tributaria puede llevar a un mayor pago de impuestos de lo necesario.", id_pillar: 1
      },
      {
        id: 4, score_limit: 1.6, message: "Este resultado indica la ausencia o insuficiencia de estrategias deliberadas para gestionar" +
          " de manera eficiente las obligaciones fiscales. La planificación tributaria es crucial para" +
          " optimizar la carga impositiva y cumplir con las leyes fiscales de manera legal y ética, ya que" +
          " la falta de planificación tributaria tiene consecuencias tales como: mayor carga fiscal, sanciones " +
          "y multas, flujo de efectivo, reputación y riesgos legales y desaprovechamiento de incentivos fiscales.", id_pillar: 1
      },

      //Planificación estratégica
      {
        id: 5, score_limit: 15.0, message: "Este resultado indica se posee un enfoque bastante sólido en planificación estratégica, lo que permite" +
          " considerar cada uno de los elementos clave para garantizar que la organización esté bien posicionada para" +
          " alcanzar sus objetivos a largo plazo. No olivides monitorear y evaluar continuamente el progreso hacia los" +
          " objetivos..", id_pillar: 2
      },
      {
        id: 6, score_limit: 10.0, message: "La presencia de una visión clara a largo plazo es un punto positivo. No obstante, el puntaje " +
          "revela carencias en la ejecución de elementos clave. Mejorar " +
          "en estos aspectos podría alinear más efectivamente los objetivos con la visión, fortaleciendo " +
          "la dirección y el enfoque de la empresa.", id_pillar: 2
      },
      {
        id: 7, score_limit: 5.0, message: "Este resultado indica que es necesario analizar y corregir la planificación estratégica, " +
          "revisando y ajustando los elementos clave para involucrar a todas las partes interesadas," +
          " establecer objetivos claros, y desarrollar planes de ejecución efectivos y flexibles. Además," +
          "es esencial monitorear y evaluar continuamente el progreso para realizar ajustes según sea necesario.", id_pillar: 2
      },
      {
        id: 8, score_limit: 1.3, message: "El puntaje bajo en planificación estratégica refleja una falta de visión clara y definida a" +
          "largo plazo. La ausencia de una planificación estratégica efectiva puede limitar la capacidad" +
          "de la empresa para establecer objetivos claros y tomar decisiones informadas. Se" +
          "recomienda desarrollar una visión a largo plazo y establecer una planificación estratégica" +
          "sólida para alinear los objetivos y recursos de la empresa.", id_pillar: 2
      },
      //KPI 
      {
        id: 10, score_limit: 20.0, message: "Este resultado demuesta que tus Indicadores Clave de Rendimiento han sido claramente establecidos, definidos " +
          "y están alineados con los objetivos estratégicos de la organización.", id_pillar: 3
      },
      {
        id: 11, score_limit: 13.2, message: "Estás en el camino correcto con tus KPIs, pero es necesario revisar y ajustar los indicadores para asegurar" +
          "que estén alineados con los objetivos estratégicos de la organización y proporcionen información valiosa para" +
          " la toma de decisiones y de esta forma para obtener los resultados esperados. La mejora continua y la adaptabilidad " +
          "son clave en la gestión de KPIs.", id_pillar: 3
      },
      {
        id: 12, score_limit: 6.6, message: "Este resultado podría significar que el indicador no está generando resultados significativos o no" +
          " est á contribuyendo de manera efectiva a la evaluación del rendimiento. Es crucial revisar y ajustar" +
          " su definición, recolección de datos o incluso considerar la posibilidad de reemplazarlo con otro indicador" +
          " más relevante y útil para la toma de decisiones estratégicas.", id_pillar: 3
      },
      {
        id: 13, score_limit: 1.6, message: "Este resultado podría significar que el indicador no está generando resultados significativos o no " *
          "está contribuyendo de manera efectiva a la evaluación del rendimiento. Es crucial revisar y ajustar su" +
          " definición, recolección de datos o incluso considerar la posibilidad de reemplazarlo con otro indicador" +
          " más relevante y útil para la toma de decisiones estratégicas.", id_pillar: 3
      },
      //Desarrollo de equipos
      {
        id: 14, score_limit: 15.0, message: "La obtención de este puntaje demuestra que el Desarrollo de Equipos es de alto rendimiento en la" +
          " organización, se cultiva la colaboración efectiva, la comunicación abierta y la sinergia dentro de un" +
          " grupo. No olvides alimentar continuamente las estrategias y prácticas que pueden contribuir al desarrollo" +
          " del equipo. ", id_pillar: 4
      },
      {
        id: 15, score_limit: 10.0, message: "El resultado indica que el Desarrollo de Equipos es eficiente, sin embargo es posible mejorar su condición" +
          " actual. Se sugiere establecer estrategias claras y prácticas clave que pueden contribuir al desarrollo" +
          " eficiente de los equipos en términos de comunicación, metas y roles, con vista al éxito de la organización.", id_pillar: 3
      },
      {
        id: 16, score_limit: 5.0, message: "Este resultado puede indicar un impacto significativo en el rendimiento y la eficacia. La falta de comunicación," +
          " desarrollo de habilidades, claridad de roles/ responsabilidades y de orientación hacia los objetivos comunes" +
          " obstaculiza múltiples hámbitos en la organización, por lo que se hace necesario abordar estos problemas para" +
          " mejorar significativamente el Desarrollo del Equipos y contribuir a un ambiente de trabajo más positivo y " +
          "productivo.", id_pillar: 4
      },
      {
        id: 17, score_limit: 1.3, message: "La calificación muy baja en Desarrollo de Equipos sugiere una falta de fomento de un ambiente" +
          " de trabajo colaborativo y de apoyo entre los empleados. Mejorar la colaboración, la comunicación y" +
          " proporcionar formación continua para el desarrollo profesional de los equipos es esencial" +
          " para fortalecer la eficacia y el rendimiento del personal en la organización.", id_pillar: 4
      },
      //Ventas
      {
        id: 18, score_limit: 15.0, message: "Tus habilidades de ventas son excepcionales, lo cual conlleva a una productividad máxima. Continua" +
          " implementado estrategias efectivas para optimizar los procesos y fomentando un ambiente de trabajo" +
          " productivo. ", id_pillar: 5
      },
      {
        id: 19, score_limit: 10.0, message: "Estás en el camino correcto en ventas, pero hay aspectos que puedes optimizar. Es importante mejorar " +
          "estrategias y prácticas efectivas que permitan maximizar la productividad y generen resultados aún más " +
          "positivos. Recuerda que la eficiencia en las ventas es un proceso continuo que implica adaptarse a las " +
          "cambiantes condiciones del mercado y a las necesidades de los clientes.", id_pillar: 5
      },
      {
        id: 20, score_limit: 5.0, message: "Este puntaje en ventas señala la necesidad de establecer un proceso de ventas definido y" +
          " de realizar un seguimiento y análisis adecuados de métricas de desempeño. Establecer un" +
          " proceso claro y medir el rendimiento del equipo de ventas puede impulsar la eficacia y" +
          " generar oportunidades de negocio.", id_pillar: 5
      },
      {
        id: 21, score_limit: 1.3, message: "De acuerdo al resultado, se requiere de manera inmediata una mejora en las condiciones " +
          " en esta área, por lo que se sugiere aplicar múltiples estrategias para abordar esta situación a " +
          "fin de evalúar los procesos y realizar los ajustes que sean necesarios para mejorar cada uno de los" +
          " factores que se demuestran deficientes.", id_pillar: 5
      },
      //MKT
      {
        id: 22, score_limit: 15.0, message: "Este indicador demuestra que has logrado optimizar los recursos disponibles para obtener los mejores" +
          " resultados posibles. Recuerda mantener tu enfoque estratégico, la incorporación de tecnologías avanzadas" +
          " y la adaptación constante a las dinámicas del mercado y del consumidor en busca de mantener visible a tu " +
          " organización.", id_pillar: 6
      },
      {
        id: 23, score_limit: 10.0, message: "El área de marketing muestra cierta actividad, pero hay margen para mejorar. Se recomienda" +
          " desarrollar una estrategia de marketing más sólida que logre alinearse con los objetivos" +
          " comerciales y las necesidades del mercado, esto puede aumentar la visibilidad de la" +
          " organización y generar un mayor interés por parte de los clientes potenciales.", id_pillar: 6
      },
      {
        id: 24, score_limit: 5.0, message: "Es necesario implementar una mejora en el marketing lo cual implica gestionar estrategias efectivas " +
          "para aumentar la visibilidad de la organización, llegar a tu audiencia objetiva y generar un impacto " +
          "positivo. Se sugiere la adopción de nuevas tácticas, la mejora de la segmentación del mercado o la " +
          "implementación de estrategias más innovadoras.", id_pillar: 6
      },
      {
        id: 25, score_limit: 1.3, message: "Las actividades de marketing de la organización no son efectivas o no cumplen con sus objetivos. " +
          "Se requiere abordar esta situación con una evaluación exhaustiva de las estrategias, identificar " +
          "áreas de mejora y ajustar los enfoques.", id_pillar: 6
      },
    ]);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('pillar_message', null, {});

  }
};
