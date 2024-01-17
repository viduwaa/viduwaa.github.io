import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { SiteContext } from "../../helpers/SiteContext";

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

  const { fadeinAnimationstoUp } = useContext(SiteContext);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_ouogb6o" ,
          "template_wf7m15e",
          form.current,
          "loj99x5_tZsMa619c",
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
          },
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
    <motion.form
      ref={form}
      onSubmit={validateForm}
      className="m-2 flex flex-col rounded-md border p-2 md:p-4"
      noValidate
      variants={fadeinAnimationstoUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <label htmlFor="contact_name">
        Name{" "}
        {nameError ? (
          <span className="float-right text-red-600">
            Please Enter a Valid Name
          </span>
        ) : (
          <></>
        )}{" "}
      </label>
      <input
        className="font text-accent mb-3 w-full rounded-md border bg-transparent p-3 backdrop-blur-[1px] "
        type="text"
        name="from_name"
        id="contact_name"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="contact_email">
        Email{" "}
        {emailError ? (
          <span className="float-right text-red-600">
            Please Enter a Valid Email Address including @
          </span>
        ) : (
          <></>
        )}
      </label>
      <input
        className="font text-accent mb-3 w-full rounded-md border bg-transparent p-3 backdrop-blur-[1px]"
        type="email"
        name="from_email"
        id="contact_email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="contact_message">
        Message{" "}
        {messageError ? (
          <span className="float-right text-red-600">
            Please Enter a Valid Message{" "}
          </span>
        ) : (
          <></>
        )}
      </label>
      <textarea
        maxLength={50}
        name="message"
        className="font text-accent mb-3 w-full rounded-md border bg-transparent p-3 backdrop-blur-[1px] "
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
          <span className="float-right text-red-600">
            Please Check Recaptcha
          </span>
        ) : sent === "sent" ? (
          <span className="float-right text-green-600">
            Email sent successfully !
          </span>
        ) : (
          <></>
        )}
      </div>

      <input
        className="hover:bg-primary m-auto h-16 w-[50%] cursor-pointer rounded-md border hover:text-black transition-all ease-out "
        type="submit"
        value="Send"
      />
    </motion.form>
  );
};

export default EmailForm;
