const WEB_URL = process.env.WEB_URL;
const html_template = (text) => {
  return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>NodeMailer Email Template</title>
            </head>
            <body>
                <p>Bienvenido:</p>
                <p>Puedes acceder al siguiente link para activar tu cuenta:</p><div><div>
                <a href='${WEB_URL}ActivarCuenta?token=${text}'>Activa tu cuenta</a>
            </body>
        </html>
    `;
};

export default html_template;
