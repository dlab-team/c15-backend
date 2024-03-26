const html_template = (text) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>NodeMailer Email Template</title>
            </head>
            <body>
                <p>${text}</p>
            </body>
        </html>
    `;
}

export default html_template;
