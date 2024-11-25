import { useRef, useState, useEffect } from 'react'
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

    useEffect(() => {
        const MIN_SPEED = 0.5;
        const MAX_SPEED = 2;

        function randomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }

        class Blob {
            constructor(el) {
                this.el = el;
                const boundingRect = this.el.getBoundingClientRect();
                this.size = boundingRect.width;
                this.initialX = randomNumber(0, window.innerWidth - this.size);
                this.initialY = randomNumber(0, window.innerHeight - this.size);
                this.el.style.top = `${this.initialY}px`;
                this.el.style.left = `${this.initialX}px`;
                this.vx = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
                this.vy = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
                this.x = this.initialX;
                this.y = this.initialY;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x >= window.innerWidth - this.size) {
                    this.x = window.innerWidth - this.size;
                    this.vx *= -1;
                }
                if (this.y >= window.innerHeight - this.size) {
                    this.y = window.innerHeight - this.size;
                    this.vy *= -1;
                }
                if (this.x <= 0) {
                    this.x = 0;
                    this.vx *= -1;
                }
                if (this.y <= 0) {
                    this.y = 0;
                    this.vy *= -1;
                }

                this.el.style.transform = `translate(${this.x - this.initialX}px, ${this.y - this.initialY}px)`;
            }
        }

        function initBlobs() {
            const blobEls = document.querySelectorAll(".blob");
            const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl));

            function update() {
                requestAnimationFrame(update);
                blobs.forEach((blob) => blob.update());
            }
            requestAnimationFrame(update);
        }

        initBlobs();
    }, []);

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

            setTimeout(() => {
                setAlert({ show: false, type: '', text: '' });
            }, 3000);

        } catch (error) {
            console.error('Failed to send message:', error);
            setAlert({ show: true, type: 'danger', text: 'Failed to send message, please try again later.' });

            setTimeout(() => {
                setAlert({ show: false, type: '', text: '' });
            }, 3000);
        } finally {
            setLoading(false);
        }
    };
    

    return (
    <section className="my-20 c-space" id="contact">
        {alert.show && <Alert type={alert.type} text={alert.text} />}

        <div className="relative flex min-h-screen items-center flex-col">
                <div className="bg-black-100 custom-border flex flex-col items-center justify-center p-8 sm: px-5 shadow-2xl shadow-black-200 ">
                
                <h3 className="head-text">Contact Me</h3>
                <div className="contact-container">
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
        <div className="blobs">
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
        </div>
        </div>
    </section >
    )
}

export default Contact
