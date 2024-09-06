import { useState } from 'react';
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const onSubmit = async (data) => {
        setLoading(true);
        setMessage(''); // Reset any previous message
        try {
            const response = await fetch('https://getform.io/f/aejympmb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setMessage('Message sent successfully!');
                reset(); // Clear form fields
            } else {
                setMessage('Error sending message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error sending message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div name="Contact" className=' font-sans max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <h1 className=' font-sans text-center text-4xl font-bold mb-4'>Contact me</h1>
            <span className='text-center block mx-auto font-semibold font-sans'>Please fill out the form below to contact me</span>
            <div className='flex flex-col items-center justify-center mt-5'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='bg-blue-100 w-96 px-8 py-6 rounded-xl'
                    style={{boxShadow : '4px 4px 6px rgba(0, 0, 0, 0.4)'
                }}
                >
                    <h1 className='text-xl text-center font-semibold mb-4'>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Full Name</label>
                        <input
                            {...register("name", { required: true })}
                            className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='name'
                            type="text"
                            placeholder='Enter your fullname'
                        />
                        {errors.name && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Email Address</label>
                        <input
                            {...register("email", { required: true })}
                            className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            type="text"
                            placeholder='Enter your email address'
                        />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Message</label>
                        <textarea
                            {...register("message", { required: true })}
                            className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='message'
                            placeholder='Enter your Query'
                        />
                        {errors.message && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='flex justify-center items-center'>
                    <button
                        type='submit'
                        className='bg-black text-white rounded-xl px-6 py-3 shadow-lg hover:bg-slate-800 hover: Shadow-xl transition duration-300 ease-in-out transform hover:scale-105'
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                    </div>
                    {message && <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-700' : 'text-red-500'}`}>{message}</p>}
                </form>
            </div>
        </div>
    );
}

export default Contact;
