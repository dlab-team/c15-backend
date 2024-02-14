'use strict';
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('question', [
         { id: 1, question: "¿Conoce las obligaciones tributarias de su empresa?", id_pillar: 1 },
         { id: 2, question: "¿La empresa cumple con todas las obligaciones tributarias de manera oportuna?", id_pillar: 1 },
         { id: 3, question: "¿Se realiza una planificación Tributaria efectiva para optimizar la carga impositiva?", id_pillar: 1 },

         { id: 4, question: "¿La empresa tiene una visión clara y definida a largo plazo?", id_pillar: 2 },
         { id: 5, question: "¿Se lleva a cabo una planificación estratégica anual para alinear los objetivos con la visión?", id_pillar: 2 },
         { id: 6, question: "¿La planificación estratégica se comunica de manera efectiva a todos los niveles de la organización?", id_pillar: 2 },

         { id: 7, question: "¿Se han identificado y establecido KPI relevantes para medir el rendimiento empresarial?", id_pillar: 3 },
         { id: 8, question: "¿Los KPI se revisan y actualizan regularmente para adaptarse a cambios en el entorno empresarial?", id_pillar: 3 },
         { id: 9, question: "¿Existe un sistema de seguimiento claro para evaluar el cumplimiento de los KPI?", id_pillar: 3 },

         { id: 10, question: "¿La empresa fomenta un ambiente de trabajo colaborativo y de apoyo entre los empleados?", id_pillar: 4 },
         { id: 11, question: "¿Se proporciona formación continua para el desarrollo profesional de los equipos?", id_pillar: 4 },
         { id: 12, question: "¿Existe un sistema efectivo de retroalimentación para mejorar el rendimiento del equipo?", id_pillar: 4 },

         { id: 13, question: "¿Existe un proceso de ventas definido y seguido por el equipo de ventas?", id_pillar: 5 },
         { id: 14, question: "¿Se brinda capacitación y desarrollo continuo al equipo de ventas?", id_pillar: 5 },
         { id: 15, question: "¿Se hacen seguimientos regulares y análisis de métricas para evaluar el desempeño de ventas?", id_pillar: 5 },

         { id: 16, question: "¿Tienes canales de Marketing Web - Redes Sociales?", id_pillar: 6 },
         { id: 17, question: "¿Cómo calificarías la efectividad de las estrategias de marketing de tu empresa?", id_pillar: 6 },
         { id: 18, question: "Obtienes prospectos a través de las campañas de marketing", id_pillar: 6 },
      ]);

   },

   async down(queryInterface, Sequelize) {

      await queryInterface.bulkDelete('question', null, {});

   }
};
