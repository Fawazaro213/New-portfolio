import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {};

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(
        window.location.href = `mailto:arofawaz123@gmail.com?subject=${formData.subject}&
        body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    );

  return (
    <div className='h-screen relative flex overflow-hidden  md:text-left
    text-left md:flex-row max-w-3xl justify-evenly mx-auto items-center z-0'>
        <h4 className='absolute top-24
        uppercase tracking-[20px]
        text-gray-500 text-2xl'>Contact</h4>

        <div className='flex flex-col space-y-5'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got what you need.{' '}
                <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
            </h4>

            <div className='space-y-5'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className="text-2xl">+2347082692458</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className="text-2xl">arofawaz123@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className="text-2xl">Lawanson, Surulere, Lagos</p>
            </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe