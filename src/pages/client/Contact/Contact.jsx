import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Biz bilan bog‘laning</h1>
        <div className="underline"></div>
        <p className="contact-sub">
          Sizning fikringiz biz uchun muhim! Quyidagi forma orqali murojaat
          yuboring yoki to‘g‘ridan-to‘g‘ri bog‘laning.
        </p>

        <div className="contact-grid">
          <form className="contact-form">
            <input type="text" placeholder="Ismingiz" required />
            <input type="email" placeholder="Email manzilingiz" required />
            <textarea rows="5" placeholder="Xabaringiz" required></textarea>
            <button type="submit">Yuborish</button>
          </form>

          <div className="contact-info">
            <h3>Aloqa ma’lumotlari</h3>
            <p>📍 Namangan, O‘zbekiston</p>
            <p>📞 +998 97 123 45 67</p>
            <p>✉️ info@turonmetall.uz</p>

            <div className="map">
              <iframe
                title="Turon Metall Location"
                src="https://www.google.com/maps?q=Namangan,+Uzbekistan&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
