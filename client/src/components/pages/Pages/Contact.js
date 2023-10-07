import React, { useState } from "react";
import 'tailwindcss/tailwind.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const nameRegex = /^[A-Za-z\s]+$/;

    const handleInputChange = (event, setState, setError, validationFunc) => {
        const value = event.target.value;
        setState(value);
        
        if (!validationFunc(value) && value !== '') {
            setError('Invalid input.');
        } else {
            setError('');
        }
    };

    const validateName = (value) => {
        return nameRegex.test(value);
    };

    const validateEmail = (value) => {
        return emailRegex.test(value);
    };

    return (
        <div className="min-h-screen flex justify-center items-start p-2">
            <div className="w-full max-w-lg mt-6">
                <h1 className="text-center text-4xl font-bold pb-6">Contact Us:</h1>

                <div>
                    <form
                        method="POST"
                        action="https://getform.io/f/208a7ae3-7e33-4238-b1f8-176309674c3d"
                    >
                        <div className="mb-8">
                            <label className="block text-lg text-center font-bold mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                autoComplete="off"
                                required
                                className="block w-full px-4 py-2 rounded-xl bg-gray-200 text-black font-bold focus:ring focus:ring-sky-500"
                                value={name}
                                onChange={(e) => handleInputChange(e, setName, setNameError, validateName)}
                            />
                            {nameError && (
                                <p className="text-lg font-bold text-red-500 underline text-center mt-2">
                                    {nameError}
                                </p>
                            )}
                        </div>

                        <div className="mb-8">
                            <label className="block text-lg text-center font-bold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                autoComplete="on"
                                required
                                className="block w-full px-4 py-2 rounded-xl bg-gray-200 text-black font-bold focus:ring focus:ring-sky-500"
                                value={email}
                                onChange={(e) => handleInputChange(e, setEmail, setEmailError, validateEmail)}
                            />
                            {emailError && (
                                <p className="text-lg font-bold text-red-500 underline text-center mt-2">
                                    {emailError}
                                </p>
                            )}
                        </div>

                        <div className="mb-8">
                            <label className="block text-lg text-center font-bold mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                autoComplete="off"
                                required
                                className="block w-full px-4 py-2 rounded-xl bg-gray-200 text-black font-bold focus:ring focus:ring-sky-500"
                                value={subject}
                                onChange={(e) => handleInputChange(e, setSubject, setSubjectError, (value) => value.length > 0)}
                            />
                            {subjectError && (
                                <p className="text-lg font-bold text-red-500 underline text-center mt-2">
                                    {subjectError}
                                </p>
                            )}
                        </div>

                        <div className="mb-8">
                            <label className="block text-lg text-center font-bold mb-2">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                autoComplete="off"
                                required
                                className="block w-full px-4 py-2 rounded-xl bg-gray-200 text-black font-bold focus:ring focus:ring-sky-500"
                                value={message}
                                onChange={(e) => handleInputChange(e, setMessage, setMessageError, (value) => value.length > 0)}
                            ></textarea>
                            {messageError && (
                                <p className="text-lg font-bold text-red-500 underline text-center mt-2">
                                    {messageError}
                                </p>
                            )}
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-teal-400 hover:bg-teal-700 text-white text-lg font-semibold py-2 px-4 rounded-xl w-1/3"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
