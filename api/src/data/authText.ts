const styleLinks = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fascinate&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins&family=Ubuntu:ital,wght@0,300;0,500;1,300&display=swap" rel="stylesheet">
`;

export const registerText = {
  subject: (code: string) => {
    return `Split verification code: ${code}`;
  },
  body: "Thank you for signing up!",
  htmlBody: (code: string) => {
    return `
  ${styleLinks}
  <body style="font-family: 'Josefin Sans', sans-serif; color: black">
    <h2>Thank you for signing up!</h2>
    <p>Your verification code is</p>
    <h1>${code}</h1>
    <p>The verification code is valid for 30 minutes. Please complete the verification as soon as possible.</p>
    <p>Kind regards,</p>
    <p>Split Team</p>
  </body>`;
  },
};