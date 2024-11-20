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
        const emailServiceId = 'service_vbx6c2f';
        const emailTemplateId = 'template_n1isqhr';
        const userId = 'J_xaKTY4MDTNgRPcy';
        const emailParams = {
            from_name: form.name,
            from_email: form.email,
            to_email: 'jenjingsu860630@gmail.com',
            message: form.message,
        };
    
        try {
            await emailjs.send(emailServiceId, emailTemplateId, emailParams, userId);
            setAlert({ show: true, type: 'success', text: 'Message successfully sent!' });
        } catch (error) {
            console.error('Failed to send message:', error);
            setAlert({ show: true, type: 'danger', text: 'Failed to send message, please try again later.' });
        } finally {
            setLoading(false);
        }
    };
    

    return (
    <section className="my-20 c-space" id="contact">
        {alert.show && <Alert type={alert.type} text={alert.text} />}

        <div className="relative flex min-h-screen items-center justify-center flex-col">
            <img 
                src="/assets/terminal.png" 
                alt="terminal-bg" 
                className="absolute inset-0 min-h-screen" 
            />
            <div className="contact-container mr-5 ml-3">
                <h3 className="head-text">Contact Me</h3>
                <p className="text-lg text-white-600 mt-3">I have a background in Information and Communication, with expertise in React.js, Three.js, and JavaScript, dedicated to creating intuitive and engaging web experiences.</p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-3 flex flex-col space-y-5">
                    <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="Eric Lin"
                        />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label text-white">Email</span>
                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="eric.lin@gmail.com"
                        />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label text-white">Your Comment</span>
                        <textarea 
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="share your thoughts or inquires..."
                        />
                    </label>

                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <div className="img-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img 
                                src="/assets/Arrow.png" 
                                alt="arrow-up" 
                                className="field-btn_arrow" 
                                style={{ width: '28px', height: '28px' }}
                            />
                        </div>
                    </button>
                </form>
            </div>
        </div>
    </section >
    )
}

export default Contact
