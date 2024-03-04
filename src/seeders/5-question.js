'use strict';
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('questions', [
         { question: "¿Conoce las obligaciones tributarias de su empresa?", pillar_id: 1 },
         { question: "¿La empresa cumple con todas las obligaciones tributarias de manera oportuna?", pillar_id: 1 },
         { question: "¿Se realiza una planificación Tributaria efectiva para optimizar la carga impositiva?", pillar_id: 1 },
         { question: "¿La empresa tiene una visión clara y definida a largo plazo?", pillar_id: 2 },
         { question: "¿Se lleva a cabo una planificación estratégica anual para alinear los objetivos con la visión?", pillar_id: 2 },
         { question: "¿La planificación estratégica se comunica de manera efectiva a todos los niveles de la organización?", pillar_id: 2 },
         { question: "¿Se han identificado y establecido KPI relevantes para medir el rendimiento empresarial?", pillar_id: 3 },
         { question: "¿Los KPI se revisan y actualizan regularmente para adaptarse a cambios en el entorno empresarial?", pillar_id: 3 },
         { question: "¿Existe un sistema de seguimiento claro para evaluar el cumplimiento de los KPI?", pillar_id: 3 },
         { question: "¿La empresa fomenta un ambiente de trabajo colaborativo y de apoyo entre los empleados?", pillar_id: 4 },
         { question: "¿Se proporciona formación continua para el desarrollo profesional de los equipos?", pillar_id: 4 },
         { question: "¿Existe un sistema efectivo de retroalimentación para mejorar el rendimiento del equipo?", pillar_id: 4 },
         { question: "¿Existe un proceso de ventas definido y seguido por el equipo de ventas?", pillar_id: 5 },
         { question: "¿Se brinda capacitación y desarrollo continuo al equipo de ventas?", pillar_id: 5 },
         { question: "¿Se hacen seguimientos regulares y análisis de métricas para evaluar el desempeño de ventas?", pillar_id: 5 },
         { question: "¿Tienes canales de Marketing Web - Redes Sociales?", pillar_id: 6 },
         { question: "¿Cómo calificarías la efectividad de las estrategias de marketing de tu empresa?", pillar_id: 6 },
         { question: "Obtienes prospectos a través de las campañas de marketing", pillar_id: 6 },
      ]);
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('questions', null, { truncate: true, cascade: true, restartIdentity: true });
   }
};
