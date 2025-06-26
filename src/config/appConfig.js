// Configurações centralizadas do aplicativo
export const APP_CONFIG = {
  // Configurações do EmailJS
  emailjs: {
    serviceId: "service_4ae9q69",
    templateId: "template_w1lxwva",
    publicKey: "LkCaMFKB4umYbkrfZ"
  },

  // Links sociais
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/jeferson-junior-as/",
    github: "https://github.com/jeffjr007",
    resume: "https://drive.google.com/file/d/1YtgYl-4NLE9S5Y4DMbmnGdSMo5gmIL8b/view?usp=sharing"
  },

  // Configurações de animação
  animation: {
    scrollOffset: 450,
    stickyHeaderThreshold: 100
  },

  // Configurações de tema padrão
  defaultTheme: 5, // Índice do tema padrão no array de temas

  // Configurações de idioma
  defaultLanguage: 'pt',

  // Configurações de responsividade
  breakpoints: {
    desktop: 1330,
    tablet: 991,
    mobile: 768,
    mobileSmall: 520
  }
};

// Configurações de validação
export const VALIDATION_CONFIG = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  name: {
    required: true,
    minLength: 2
  },
  message: {
    required: true,
    minLength: 10
  }
};

// Mensagens de erro
export const ERROR_MESSAGES = {
  pt: {
    formIncomplete: 'Preencha todos os campos para enviar o email!',
    emailError: 'Ocorreu um erro ao enviar o email, tente novamente mais tarde!',
    emailSuccess: 'Email enviado com sucesso!'
  },
  en: {
    formIncomplete: 'Please fill in all fields to send the email!',
    emailError: 'An error occurred while sending the email, try again later!',
    emailSuccess: 'Email sent successfully!'
  },
  es: {
    formIncomplete: '¡Complete todos los campos para enviar el email!',
    emailError: '¡Ocurrió un error al enviar el email, inténtelo de nuevo más tarde!',
    emailSuccess: '¡Email enviado con éxito!'
  }
}; 