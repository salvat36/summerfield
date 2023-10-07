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
    const [formError, setFormError] = useState('');

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const nameRegex = /^[A-Za-z\s]+$/;

    const handleInputChange = (event, setState, setError) => {
        const value = event.target.value;
        setState(value);
        setError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name.match(nameRegex)) {
            setNameError('Name should only contain letters and spaces.');
        }

        if (!email.match(emailRegex)) {
            setEmailError('Invalid email format.');
        }

        if (subject === '') {
            setSubjectError('Subject is required.');
        }

        if (message === '') {
            setMessageError('Message is required.');
        }

        if (name.match(nameRegex) && email.match(emailRegex) && subject !== '' && message !== '') {
            // Form submission logic here
        } else {
            setFormError('Please fill out all fields.');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-start p-2">
            <div className="w-full max-w-lg mt-6">
                <h1 className="text-center text-4xl font-bold pb-6">Contact Us:</h1>
                {formError && (
                    <p className="text-lg font-bold text-red-500 underline text-center mb-4">
                        {formError}
                    </p>
                )}

                <div>
                    <form
                        method="POST"
                        action="https://getform.io/f/208a7ae3-7e33-4238-b1f8-176309674c3d"
                        onSubmit={handleSubmit}
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
                                onChange={(e) => handleInputChange(e, setName, setNameError)}
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
                                onChange={(e) => handleInputChange(e, setEmail, setEmailError)}
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
                                onChange={(e) => handleInputChange(e, setSubject, setSubjectError)}
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
                                onChange={(e) => handleInputChange(e, setMessage, setMessageError)}
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
