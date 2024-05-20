import Calendar from "./Calendar";
import { Form, redirect, useActionData } from "react-router-dom";

type ContactForm = {
  email: string;
  message: string;
  error: string;
};

const Contact = () => {
  const data = useActionData() as ContactForm;

  return (
    <div className="contact">
      <h2>Book an Appointment?</h2>

      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        dolor magnam neque atque nesciunt nisi molestias obcaecati praesentium,
        aperiam laborum! Molestias, rem pariatur eius officia voluptatum sequi
        blanditiis voluptas facere?
      </div>
      <div className="contactForm">
        <Form method="post" action="/help/contact">
          <label>
            <span>Your Email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" required></textarea>
          </label>
          <Calendar monthsToShow={12} />
          <button>Submit</button>
        </Form>

        {data && data.error && <p>{data.error}</p>}
      </div>
    </div>
  );
};

export const contactAction = async ({ request }: any) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  // send post request to API
  if (submission.message.length < 10) {
    return { error: "Message must be 10 chars longer" };
  }
  return redirect("/");
};

export default Contact;
