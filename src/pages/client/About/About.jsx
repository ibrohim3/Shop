import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h1>Biz haqimizda</h1>
          <div className="underline"></div>
          <p>
            <strong>Turon Metall</strong> — metall mahsulotlari va xizmatlari
            sohasida ilg‘or texnologiyalar, sifat va ishonchlilikni o‘zida
            mujassam etgan kompaniya. Bizning jamoamiz sanoat va qurilish
            sohalariga eng yuqori darajadagi yechimlarni taqdim etadi.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h2>10+</h2>
            <span>Yillik tajriba</span>
          </div>
          <div className="stat-card">
            <h2>500+</h2>
            <span>Mamnun mijozlar</span>
          </div>
          <div className="stat-card">
            <h2>1000+</h2>
            <span>Mahsulot turlari</span>
          </div>
          <div className="stat-card">
            <h2>24/7</h2>
            <span>Xizmat ko‘rsatish</span>
          </div>
        </div>

        <div className="about-mission">
          <h3>Bizning maqsadimiz</h3>
          <p>
            Turon Metall sifat, barqarorlik va mijoz ishonchini birlashtirgan
            holda metall sohasida ilg‘or natijalarga erishish uchun harakat
            qiladi. Biz har bir hamkorlikda samarali yechim taklif etishga
            intilamiz.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
