'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('option', [
      //Tributario
      { id: 1, number: 1, answer: "Sí", score: 10, id_question: 1 },
      { id: 2, number: 2, answer: "¿Algunas?", score: 5, id_question: 1 },
      { id: 3, number: 3, answer: "No", score: 0, id_question: 1 },

      { id: 4, number: 1, answer: "Sí, siempre", score: 10, id_question: 2 },
      { id: 5, number: 2, answer: "En su mayoría", score: 7.5, id_question: 2 },
      { id: 6, number: 3, answer: "A veces", score: 5, id_question: 2 },
      { id: 7, number: 4, answer: "Raramente", score: 2.5, id_question: 2 },
      { id: 8, number: 5, answer: "No, nunca", score: 0, id_question: 2 },

      { id: 9, number: 1, answer: "Siempre estamos buscando oportunidades", score: 10, id_question: 3 },
      { id: 10, number: 2, answer: "Con regularidad", score: 7.5, id_question: 3 },
      { id: 11, number: 3, answer: "Ocasionalmente", score: 5, id_question: 3 },
      { id: 12, number: 4, answer: "Raramente", score: 2.5, id_question: 3 },
      { id: 13, number: 5, answer: "Nunca lo hacemos", score: 0, id_question: 3 },

      //Planificación estratégica
      { id: 14, number: 1, answer: "Totalmente clara", score: 10, id_question: 4 },
      { id: 15, number: 2, answer: "Bastante clara", score: 7.5, id_question: 4 },
      { id: 16, number: 3, answer: "Algo clara", score: 5, id_question: 4 },
      { id: 17, number: 4, answer: "Poco clara", score: 2.5, id_question: 4 },
      { id: 18, number: 5, answer: "No hay una visión clara", score: 0, id_question: 4 },

      { id: 19, number: 1, answer: "Sí, de manera exhaustiva", score: 10, id_question: 5 },
      { id: 20, number: 2, answer: "Sí, pero podría mejorar", score: 7.5, id_question: 5 },
      { id: 21, number: 3, answer: "A veces", score: 5, id_question: 5 },
      { id: 22, number: 4, answer: "Raramente", score: 2.5, id_question: 5 },
      { id: 23, number: 5, answer: "No realizamos planificación estratégica", score: 0, id_question: 5 },

      { id: 24, number: 1, answer: "Siempre se comunica claramente", score: 10, id_question: 6 },
      { id: 25, number: 2, answer: "En su mayoría se comunica", score: 7.5, id_question: 6 },
      { id: 26, number: 3, answer: "A veces se comunica", score: 5, id_question: 6 },
      { id: 27, number: 4, answer: "Raramente se comunica", score: 2.5, id_question: 6 },
      { id: 28, number: 5, answer: "No se comunica adecuadamente", score: 0, id_question: 6 },

      //KPI (Indicadores Clave de Rendimiento)
      { id: 29, number: 1, answer: "Sí, y están alineados con nuestros objetivos", score: 10, id_question: 7 },
      { id: 30, number: 2, answer: "En su mayoría, pero podrían ser más específicos", score: 7.5, id_question: 7 },
      { id: 31, number: 3, answer: "Algunos, pero no son consistentes", score: 5, id_question: 7 },
      { id: 32, number: 4, answer: "Raramente identificamos KPI", score: 2.5, id_question: 7 },
      { id: 33, number: 5, answer: "No tenemos KPI establecidos", score: 0, id_question: 7 },

      { id: 34, number: 1, answer: "Siempre se actualizan según sea necesario", score: 10, id_question: 8 },
      { id: 35, number: 2, answer: "Con regularidad, pero podríamos mejorar", score: 7.5, id_question: 8 },
      { id: 36, number: 3, answer: "A veces se actualizan", score: 5, id_question: 8 },
      { id: 37, number: 4, answer: "Raramente se actualizan", score: 2.5, id_question: 8 },
      { id: 38, number: 5, answer: "No se actualizan en absoluto", score: 0, id_question: 8 },

      { id: 39, number: 1, answer: "Sí, tenemos un sistema eficiente", score: 10, id_question: 9 },
      { id: 40, number: 2, answer: "En su mayoría, pero hay áreas de mejora", score: 7.5, id_question: 9 },
      { id: 41, number: 3, answer: "Existe, pero no es consistente", score: 5, id_question: 9 },
      { id: 42, number: 4, answer: "Raramente seguimos el cumplimiento de los KPI", score: 2.5, id_question: 9 },
      { id: 43, number: 5, answer: "No tenemos un sistema claro", score: 0, id_question: 9 },

      //Desarrollo de Equipos
      { id: 44, number: 1, answer: "Siempre promovemos la colaboración", score: 10, id_question: 10 },
      { id: 45, number: 2, answer: "En su mayoría, pero hay excepciones", score: 7.5, id_question: 10 },
      { id: 46, number: 3, answer: "A veces promovemos la colaboración", score: 5, id_question: 10 },
      { id: 47, number: 4, answer: "Raramente promovemos la colaboración", score: 2.5, id_question: 10 },
      { id: 48, number: 5, answer: "No fomentamos la colaboración", score: 0, id_question: 10 },

      { id: 49, number: 1, answer: "Sí, de manera regular y personalizada", score: 10, id_question: 11 },
      { id: 50, number: 2, answer: "En su mayoría, pero podría ser más frecuente", score: 7.5, id_question: 11 },
      { id: 51, number: 3, answer: "Ocasionalmente proporcionamos formación", score: 5, id_question: 11 },
      { id: 52, number: 4, answer: "Raramente proporcionamos formación", score: 2.5, id_question: 11 },
      { id: 53, number: 5, answer: "No ofrecemos formación continua", score: 0, id_question: 11 },

      { id: 54, number: 1, answer: "Sí, tenemos un sistema estructurado", score: 10, id_question: 12 },
      { id: 55, number: 2, answer: "En su mayoría, pero podría mejorarse", score: 7.5, id_question: 12 },
      { id: 56, number: 3, answer: "Existe, pero no es consistente", score: 5, id_question: 12 },
      { id: 57, number: 4, answer: "Raramente damos retroalimentación", score: 2.5, id_question: 12 },
      { id: 58, number: 5, answer: "No hay un sistema de retroalimentación", score: 0, id_question: 12 },

      //Ventas
      { id: 59, number: 1, answer: "Sí, con un proceso claro y efectivo", score: 10, id_question: 13 },
      { id: 60, number: 2, answer: "En su mayoría, aunque podría ser más estructurado", score: 7.5, id_question: 13 },
      { id: 61, number: 3, answer: "Existe, pero no se sigue consistentemente", score: 5, id_question: 13 },
      { id: 62, number: 4, answer: "No hay un proceso definido", score: 2.5, id_question: 13 },
      { id: 63, number: 5, answer: "No se sigue ningún proceso de ventas", score: 0, id_question: 13 },

      { id: 64, number: 1, answer: "Sí, regularmente y adaptada a las necesidades individuales", score: 10, id_question: 14 },
      { id: 65, number: 2, answer: "En su mayoría, pero podría ser más frecuente", score: 7.5, id_question: 14 },
      { id: 66, number: 3, answer: "Ocasionalmente proporcionamos formación", score: 5, id_question: 14 },
      { id: 67, number: 4, answer: "Raramente se brinda capacitación", score: 2.5, id_question: 14 },
      { id: 68, number: 5, answer: "No se ofrece capacitación al equipo de ventas", score: 0, id_question: 14 },

      { id: 69, number: 1, answer: "Sí, con indicadores específicos y actualizados", score: 10, id_question: 15 },
      { id: 70, number: 2, answer: "En su mayoría, pero podríamos mejorar el análisis", score: 7.5, id_question: 15 },
      { id: 71, number: 3, answer: "A veces se realizan seguimientos de métricas", score: 5, id_question: 15 },
      { id: 72, number: 4, answer: "Raramente se analizan métricas de ventas", score: 2.5, id_question: 15 },
      { id: 73, number: 5, answer: "No se hace ningún seguimiento de métricas de ventas", score: 0, id_question: 15 },

      //MKT
      { id: 74, number: 1, answer: "Si", score: 10, id_question: 16 },
      { id: 75, number: 2, answer: "No", score: 0, id_question: 16 },
      { id: 76, number: 1, answer: "Muy efectivas", score: 10, id_question: 17 },
      { id: 77, number: 2, answer: "Efectivas en su mayoría", score: 7.5, id_question: 17 },
      { id: 78, number: 3, answer: "Moderadamente efectivas", score: 5, id_question: 17 },
      { id: 79, number: 4, answer: "Poco efectivas", score: 2.5, id_question: 17 },
      { id: 80, number: 5, answer: "No realizo", score: 0, id_question: 17 },

      { id: 81, number: 1, answer: "Si", score: 10, id_question: 18 },
      { id: 82, number: 2, answer: "No", score: 0, id_question: 18 },
    ]);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('option', null, {});

  }
};
