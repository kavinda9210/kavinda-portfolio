import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);
        setIsError(false);

        emailjs.sendForm(
            'service_qlyrkxa',
            'template_ug1p23s',
            form.current,
            'lo9-lBCFF9uvoBfCr'
        )
            .then((result) => {
                console.log(result.text);
                setIsSuccess(true);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setIsError(true);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get In <span className="text-blue-50">Touch</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        {/* Profile Photo Section */}
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-50/30 mb-4">
                                {/* Replace with your actual profile photo */}
                                <img
                                    src="/profile.PNG"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-medium">Kavinda Rupasingha</h3>
                            <p className="text-primary/80">Full Stack Development</p>
                        </div>

                        <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50/10 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <p>
                                        <a href="tel:0771519979">0771519979</a>
                                    </p>
                                    <p>
                                        <a href="https://wa.me/94750359262" target="_blank" rel="noopener noreferrer">
                                            0750359262 (WhatsApp)
                                        </a>
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50/10 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:kavindarupasingha9210@gmail.com">kavindarupasingha9210@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50/10 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p>Kandy</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">

                                <div>

                                    <div className="flex gap-4 mt-2">
                                        <a href="https://www.linkedin.com/in/kavindarupasingha" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>

                                        <a href="https://github.com/kavinda9210" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>

                                        <a href="https://www.youtube.com/@inspiring9320" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19.615 3.184A3.003 3.003 0 0 0 17.53 2.63C15.484 2.5 12 2.5 12 2.5s-3.484 0-5.53.13a3.003 3.003 0 0 0-2.085.554A3.004 3.004 0 0 0 3.87 5.27 31.72 31.72 0 0 0 3.5 12a31.72 31.72 0 0 0 .37 6.73 3.004 3.004 0 0 0 1.515 2.086 3.003 3.003 0 0 0 2.085.554c2.046.13 5.53.13 5.53.13s3.484 0 5.53-.13a3.003 3.003 0 0 0 2.085-.554 3.004 3.004 0 0 0 1.515-2.086A31.72 31.72 0 0 0 20.5 12a31.72 31.72 0 0 0-.37-6.73 3.004 3.004 0 0 0-1.515-2.086zM10 15.5v-7l6 3.5-6 3.5z" />
                                            </svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-medium mb-6">Send Me a Message</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-3 bg-blue-50 text-black-100 rounded-lg font-medium hover:bg-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {isSuccess && (
                                <div className="p-4 bg-green-500/10 text-green-500 rounded-lg">
                                    Message sent successfully!
                                </div>
                            )}

                            {isError && (
                                <div className="p-4 bg-red-500/10 text-red-500 rounded-lg">
                                    Failed to send message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;