const Contact = () => {
  return (
    <div className="contact">

      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        dolor magnam neque atque nesciunt nisi molestias obcaecati praesentium,
        aperiam laborum! Molestias, rem pariatur eius officia voluptatum sequi
        blanditiis voluptas facere?
      </div>

      <form>
        <label>
          <span>Your Email</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Message</span>
          <input type="message" name="message" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
