const Contact = () => (
  <div>
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <form className="flex flex-col gap-4 max-w-md">
      <input type="text" placeholder="Your Name" className="input input-bordered" />
      <input type="email" placeholder="Your Email" className="input input-bordered" />
      <textarea placeholder="Your Message" className="textarea textarea-bordered"></textarea>
      <button className="btn btn-primary" type="button">Send</button>
    </form>
  </div>
);
export default Contact;