const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xlp-4 m-4">Contact</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="Message"
          className="border border-black p-2 m-2"
        />
        <button
          className="border border-black p-2 m-2 bg-gray-100 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
