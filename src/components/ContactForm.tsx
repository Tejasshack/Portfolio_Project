'use client'
import React, { useState } from 'react'
import { send } from '@emailjs/browser'
import { useTranslations } from 'next-intl'

const ContactForm: React.FC = () => {
  const t = useTranslations('Contact.contactForm')
  //  form data which handleChange sets on change (change event) for all form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false) // State to track sumitting to avoid double sumbissions
  const [successMessage, setSuccessMessage] = useState('') //
  const [emailError, setEmailError] = useState('') // State to track email validation error
  const [messageError, setMessageError] = useState('') // State to track message validation error

  // Email validation function with regex
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Message validation function
  const isValidMessage = (message: string): boolean => {
    return message.trim().length >= 20 // Minimum 20 characters
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

    if (e.target.name === 'email') {
      // Validate email as user types
      if (!isValidEmail(e.target.value)) {
        setEmailError('Please enter a valid email address.')
      } else {
        setEmailError('')
      }
    }

    if (e.target.name === 'message') {
      // Validate message as user types
      if (!isValidMessage(e.target.value)) {
        setMessageError('Message must be at least 14 characters long.')
      } else {
        setMessageError('')
      }
    }
  }

  // final form data api request to emailjs (template params: support both name/email and from_name/from_email)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage('')
    setEmailError('')
    setMessageError('')

    if (!isValidEmail(formData.email)) {
      setEmailError('Please enter a valid email address.')
      return
    }

    if (!isValidMessage(formData.message)) {
      setMessageError('Message must be at least 14 characters long.')
      return
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSuccessMessage('Form is not configured. Please email me directly at tejaswi.dev.666@gmail.com')
      return
    }

    setIsSubmitting(true)

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        name: formData.name,
        email: formData.email,
      }
      await send(serviceId, templateId, templateParams, publicKey)
      setSuccessMessage('Your message has been sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send email:', error)
      setSuccessMessage('Failed to send. Please email me directly: tejaswi.dev.666@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  // form takes input with onChange={handleChange} and setState value={formData.input}
  return (
    <form onSubmit={handleSubmit} className="mx-6">
      <div className="container py-10 md:flex md:flex-col md:items-center md:justify-center ">
        <h2 className="text-2xl font-serif mb-4 dark:text-white/90 text-black/90 text-center">
          {t('header')}
        </h2>
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="name"
            className="block text-base font-semibold dark:text-white/60 text-black/60"
          >
            {t('name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full md:w-[420px] lg:w-[550px] px-3 py-2 border rounded-md shadow-sm text-gray-950 dark:text-white focus:outline-none focus ring-2 dark:ring-violet-400 ring-yellow-400 dark:focus:ring-violet-300 focus:ring-yellow-500 focus:ring-4 dark:hover:ring-violet-400 hover:ring-yellow-400 hover:ring-4 dark:focus-within:hover:ring-violet-300 focus-within:hover:ring-yellow-500 focus-within:hover:ring-4 bg-brown0 dark:bg-gray8 "
          />
        </div>
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="email"
            className="block text-base font-semibold dark:text-white/60 text-black/60"
          >
            {t('email')}
          </label>
          {/* adds a couple of classes and a paragraph if emailError state isnt empty */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-1 block w-full md:w-[420px] lg:w-[550px] px-3 py-2 border rounded-md shadow-sm text-gray-950 dark:text-white focus:outline-none focus ring-2 dark:ring-violet-400 ring-yellow-400 dark:focus:ring-violet-300 focus:ring-yellow-500 focus:ring-4 dark:hover:ring-violet-400 hover:ring-yellow-400 hover:ring-4 dark:focus-within:hover:ring-violet-300 focus-within:hover:ring-yellow-500 focus-within:hover:ring-4 bg-brown0 dark:bg-gray8 ${
              emailError
                ? 'border-red-500 focus:ring-red-500/70 focus:ring-2'
                : ''
            }`}
          />
          {emailError && (
            <p className="mt-2 text-sm text-red-600">{emailError}</p>
          )}
        </div>
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="message"
            className="block text-base font-semibold dark:text-white/60 text-black/60"
          >
            {t('message')}
          </label>
          {/* adds a couple of classes and a paragraph if messageError state isnt empty */}

          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className={`mt-1 block w-full md:w-[420px] lg:w-[550px] px-3 py-2 border rounded-md shadow-sm text-gray-950 dark:text-white focus:outline-none focus ring-2 dark:ring-violet-400 ring-yellow-400 dark:focus:ring-violet-300 focus:ring-yellow-500 focus:ring-4 dark:hover:ring-violet-400 hover:ring-yellow-400 hover:ring-4 dark:focus-within:hover:ring-violet-300 focus-within:hover:ring-yellow-500 focus-within:hover:ring-4 bg-brown0 dark:bg-gray8  ${
              messageError
                ? 'border-red-500 focus:ring-red-500/70 focus:ring-2'
                : ''
            }`}
          />
          {messageError && (
            <p className="mt-2 text-sm text-red-600">{messageError}</p>
          )}
        </div>
        {/* submit button & disabled button when state is true (while it's submitting), also show a message while sending and if success*/}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-[420px] lg:w-[550px] py-3 px-3 bg-gradient-to-r mt-4 from-yellow-300 to-yellow-500 dark:from-violet-300 dark:to-purple-400 text-gray-950 font-semibold
          button-animation focus:ring-1 dark:focus-visible:ring-white focus-visible:ring-black hover:ring-2 dark:hover:ring-violet-200 hover:ring-yellow-400 hover:text-black "
          aria-label="Submit and Send message"
        >
          {isSubmitting ? t('sending') : t('send')}
        </button>
        {successMessage && (
          <p className="mt-4 text-center text-sm dark:text-violet-300 text-yellow-600">{successMessage}</p>
        )}
        <p className="mt-4 text-center text-sm dark:text-white/50 text-black/50">
          Or email directly:{' '}
          <a href="mailto:tejaswi.dev.666@gmail.com" className="underline dark:text-violet-400 text-yellow-600 hover:opacity-80">
            tejaswi.dev.666@gmail.com
          </a>
        </p>
      </div>
    </form>
  )
}

export default ContactForm
