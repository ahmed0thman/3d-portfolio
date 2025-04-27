import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "./useAlert";
import Alert from "./Alert";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useWindowSize } from "../../contexts/WindowSizeProvider";

const Contact = () => {
  const formRef = useRef();
  const isPc = useWindowSize();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ahmed Othman",
          from_email: form.email,
          to_email: "ahmedothman.code@gmail.com",
          message: form.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  useGSAP(function () {
    gsap.fromTo(
      "#contact",
      { opacity: 0, zoom: 0 },
      {
        opacity: 1,
        zoom: 0,
        duration: 1.3,
        ease: "sine.in",
        scrollTrigger: {
          trigger: "#contact",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div
        className="w-full work-canvas sm:!rounded-3xl p-4 sm:p-10 relative overflow-hidden"
        style={{
          boxShadow:
            "-4px -2px 6px rgba(255,255,255,0.2),3px 4px 6px rgba(255,255,255,0.12)",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-6 md:h-12"
          style={{
            background:
              "linear-gradient(to left, #282828, #333, #868686, #333, #282828)",
          }}
        >
          <span
            className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-500 absolute top-2 md:top-4 start-6 z-10"
            style={{ boxShadow: "0 0 8px 2px rgba(255,0,0,.85)" }}
          ></span>
          <span
            className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-[#fff700] absolute top-2 md:top-4 start-12 z-10"
            style={{ boxShadow: "0 0 8px 1px #fff700d8" }}
          ></span>
          <span
            className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-[#00b120] absolute top-2 md:top-4 start-[4.5rem] z-10"
            style={{ boxShadow: "0 0 8px 2px rgb(0, 177, 32, .85)" }}
          ></span>
        </div>
        <div className="mt-16 sm:mt-24 ">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-12 flex flex-col space-y-4 sm:space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button
              className="field-btn sm:self-end"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
