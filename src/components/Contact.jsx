import React, { useState } from "react";
import { getLanguage } from '../util/language';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { APP_CONFIG, ERROR_MESSAGES } from '../config/appConfig';

const language = getLanguage();

export const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });

    const validateForm = () => {
        const { name, email, title, message } = contactInfo;
        return name && email && title && message;
    };

    const handleEmail = () => {
        if (!validateForm()) {
            Swal.fire({
                title: 'Ops!',
                text: ERROR_MESSAGES[language.title?.toLowerCase() || 'pt'].formIncomplete,
                icon: 'error',
            });
            return;
        }

        const templateParams = {
            from_name: contactInfo.name,
            email: contactInfo.email,
            title: contactInfo.title,
            message: contactInfo.message,
        };

        emailjs.send(
            APP_CONFIG.emailjs.serviceId, 
            APP_CONFIG.emailjs.templateId, 
            templateParams, 
            APP_CONFIG.emailjs.publicKey
        )
            .then(() => {
                Swal.fire({
                    title: 'Sucesso!',
                    text: ERROR_MESSAGES[language.title?.toLowerCase() || 'pt'].emailSuccess,
                    icon: 'success',
                });
                setContactInfo({
                    name: "",
                    email: "",
                    title: "",
                    message: "",
                });
            })
            .catch(() => {
                Swal.fire({
                    title: 'Ops!',
                    text: ERROR_MESSAGES[language.title?.toLowerCase() || 'pt'].emailError,
                    icon: 'error',
                });
            });
    };

    const handleInputChange = (field, value) => {
        setContactInfo(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">
                {language.Contact.sectionTitle} <span>{language.Contact.sectionTitle2}</span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </h2>
            
            <form>
                <div className="input-box">
                    <div className="input-field">
                        <input
                           type="text"
                           placeholder={language.Contact.placHolders.name}
                           value={contactInfo.name}
                           onChange={(e) => handleInputChange('name', e.target.value)}
                           required 
                        />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input 
                            type="email" 
                            placeholder={language.Contact.placHolders.email}
                            value={contactInfo.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                        />
                        <span className="focus"></span>
                    </div>
                    <span className="animate scroll" style={{ "--i": 3 }}></span>
                </div>

                <div className="input-box">
                    <div className="input-field">
                        <input 
                            type="text"
                            placeholder={language.Contact.placHolders.title}
                            value={contactInfo.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            required
                        />
                        <span className="focus"></span>
                    </div>
                    <span className="animate scroll" style={{ "--i": 5 }}></span>
                </div>

                <div className="textarea-field">
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        value={contactInfo.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder={language.Contact.placHolders.message}
                        required
                    ></textarea>
                    <span className="focus"></span>
                    <span className="animate scroll" style={{ "--i": 7 }}></span>
                </div>

                <div className="btn-box btns">
                    <button 
                     type="button"
                     className="btn"
                     onClick={handleEmail}
                     >
                        {language.Contact.buttonSend}
                    </button>
                    <span className="animate scroll" style={{ "--i": 9 }}></span>
                </div>
            </form>
        </section>
    );
};