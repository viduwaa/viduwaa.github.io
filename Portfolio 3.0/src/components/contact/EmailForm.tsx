import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const EmailForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState<boolean>();
    const [emailError, setEmailError] = useState<boolean>();
    const [messageError, setMessageError] = useState<boolean>();
    const [sent, setSent] = useState("");

    const form = useRef<HTMLFormElement | null>(null);
    const onChange = () => {};

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    /* "YOUR_SERVICE_ID" */ "service_ouogb6o",
                    /* "YOUR_TEMPLATE_ID" */ "template_wf7m15e",
                    form.current,
                    /* "YOUR_PUBLIC_KEY" */ "loj99x5_tZsMa619c"
                )
                .then(
                    (result) => {
                        if (result.status === 200) {
                            setSent("sent");
                        }
                    },
                    (error) => {
                        if (error.status === 400) {
                            setSent("failed");
                        }
                    }
                );
        }
    };

    function validateForm(e: React.FormEvent) {
        e.preventDefault();
        if (name.length == 0 || name.length < 3) {
            setNameError(true);
            return;
        }
        setNameError(false);

        if (email.length == 0 || !email.includes("@" && ".")) {
            setEmailError(true);
            return;
        }
        setEmailError(false);

        if (message.length == 0 || message.length > 50) {
            setMessageError(true);
            return;
        }

        setMessageError(false);

        sendEmail(e);
    }

    return (
        <form
            ref={form}
            onSubmit={validateForm}
            className="flex flex-col m-2 p-2 md:p-4 border rounded-md"
            noValidate
        >
            <label htmlFor="contact_name">
                Name{" "}
                {nameError ? (
                    <span className="text-red-600 float-right">
                        Please Enter a Valid Name
                    </span>
                ) : (
                    <></>
                )}{" "}
            </label>
            <input
                className="border w-full p-3 font mb-3 rounded-md"
                type="text"
                name="from_name"
                id="contact_name"
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="contact_email">
                Email{" "}
                {emailError ? (
                    <span className="text-red-600 float-right">
                        Please Enter a Valid Email Address including @
                    </span>
                ) : (
                    <></>
                )}
            </label>
            <input
                className="border w-full p-3 font mb-3 rounded-md"
                type="email"
                name="from_email"
                id="contact_email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="contact_message">
                Message{" "}
                {messageError ? (
                    <span className="text-red-600 float-right">
                        Please Enter a Valid Message{" "}
                    </span>
                ) : (
                    <></>
                )}
            </label>
            <textarea
                maxLength={50}
                name="message"
                className="border w-full p-3 font mb-3 rounded-md"
                id="contact_message"
                onChange={(e) => setMessage(e.target.value)}
            />

            <div>
                <ReCAPTCHA
                    sitekey="6LdPvkcpAAAAABbXFraWdYWDVJKrnjqlJO-ud_ki"
                    onChange={onChange}
                    className="mb-3 object-cover"
                />
                {sent === "failed" ? (
                    <span className="text-red-600 float-right">
                        Please Check Recaptcha
                    </span>
                ) : sent === "sent" ? (
                    <span className="text-green-600 float-right">
                        Email sent successfully !
                    </span>
                ) : (
                    <></>
                )}
            </div>

            <input
                className="border w-[50%] m-auto h-16 cursor-pointer rounded-md hover:bg-slate-500"
                type="submit"
                value="Send"
            />
        </form>
    );
};

export default EmailForm;
