import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert';

const Contact = () => {
    const formRef = useRef();
    
    const [form, setForm] = useState( {
        name: '',
        email: '',
        message: '',
    })

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', text: '' });

    const handleChange = ({ target: {name, value }}) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_vbx6c2f',
                'template_n1isqhr',
                {
                    from_name: form.name,
                    from_email: form.email,
                    to_email: 'jenjingsu860630@gmail.com',
                    message: form.message,
                },
                'J_xaKTY4MDTNgRPcy'
            );
            setLoading(false);
            setAlert({ show: true, type: 'success', text: 'Message successfully sent!' });
        } catch (error) {
            setLoading(false);
            console.error('Failed to send message:', error);
            setAlert({ show: true, type: 'danger', text: 'Failed to send message, please try again later.' });
        }
    }

    return (
    <section className="my-20 px-4">
        <div className="relative flex items-center justify-center flex-col">
            <img 
                src="/assets/terminal.png" 
                alt="terminal background" 
                className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="contact-container relative z-10 p-8 bg-opacity-75 bg-black rounded-lg max-w-2xl w-full md:w-3/4 lg:w-1/2">
                <h3 className="head-text text-center text-white">Contact Me</h3>
                <p className="text-lg text-white-600 mt-3 text-center">I have a background in Information and Communication, with expertise in React.js, Three.js, and JavaScript, dedicated to creating intuitive and engaging web experiences.</p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-5">
                    <label className="space-y-2">
                        <span className="field-label text-white">Full Name</span>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input w-full"
                            placeholder="Eric Lin"
                        />
                    </label>
                    <label className="space-y-2">
                        <span className="field-label text-white">Email</span>
                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="field-input w-full"
                            placeholder="eric.lin@gmail.com"
                        />
                    </label>
                    <label className="space-y-2">
                        <span className="field-label text-white">Your Comment</span>
                        <textarea 
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input w-full"
                            placeholder="share your thoughts or inquires..."
                        />
                    </label>

                    <button className="field-btn w-full" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img 
                                src="/assets/Arrow.png" 
                                alt="arrow-up" 
                                className="field-btn_arrow" 
                                style={{ width: '24px', height: '24px' }}
                            />
                        </div>
                    </button>

                </form>
            </div>
        </div>
        {alert.show && <Alert type={alert.type} text={alert.text} />}
    </section >
    )
}

export default Contact
