import emailjs from 'emailjs-com';

const serviceId = 'service_uld5q1f';
const templateId = 'YOUR_TEMPLATE_ID';
const userId = 'YOUR_USER_ID';

export default {
    sendEmail(data) {
        emailjs.send(serviceId, templateId, data, userId)
            .then(response => {
                console.log('Correo electrónico enviado', response);
            })
            .catch(error => {
                console.log('Error al enviar el correo electrónico', error);
            });
    },
};