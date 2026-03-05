import React from 'react';
import './CVResume.css';

const CVResume = () => {
  return (
    <div className="cv-resume">
      {/* Banner oben */}
      <div className="top-banner">
        <h2>Lebenslauf Project React</h2>
      </div>
      <div className="container">
        <header className="header-section">
          <div className="profile-image">
            <img
              src={process.env.PUBLIC_URL + '/images/bild.jpg'}
              alt="Doga Ceren Bozkurt — Profil"
              className="profile-img"/>
          </div>
          <div className="contact-info">
            <h1>CV — Doga Ceren Bozkurt</h1>
            <address className="contact-section">
              <h2>Kontakt</h2>
              <ul>
                <li><strong>Doga Ceren Bozkurt</strong></li>
                <li><a href="mailto:dcerenbozkurt@gmail.com">dcerenbozkurt@gmail.com</a></li>
                <li><a href="tel:+4915788721875">+49 1578 8721875</a></li>
                <li>
                  Pestalozzistraße 19<br/>
                  Villingen‑Schwenningen, Deutschland
                </li>
              </ul>
            </address>
          </div>
        </header>

        <section className="education-section">
          <h2>Ausbildung</h2>
          <ul>
            <li>
              <article className="education-item">
                <h3>Bachelor</h3>
                <p className="date">10/2022 – heute</p>
                <p className="institution">Hochschule Furtwangen</p>
                <p className="degree">Bachelor: Molekulare und Technische Medizin</p>
                <p className="location">Deutschland</p>
              </article>
            </li>
            <li>
              <article className="education-item">
                <h3>Doga Koleji High School</h3>
                <p className="date">09/2016 – 06/2020</p>
                <p className="location">Ankara, Türkei</p>
                <p className="achievement">Abitur (98/100) — in Deutschland anerkanntes Zeugnis</p>
                <p className="note">Hochschulzugangsberechtigung — Durchschnitt deutsche Umrechnung: 1,7</p>
              </article>
            </li>
            <li>
              <article className="education-item">
                <h3>Doga Koleji Middle School</h3>
                <p className="date">09/2015 – 06/2016</p>
                <p className="location">Ankara, Türkei</p>
              </article>
            </li>
            <li>
              <article className="education-item">
                <h3>Sinav Koleji Middle School</h3>
                <p className="date">09/2013 – 06/2015</p>
                <p className="location">Ankara, Türkei</p>
              </article>
            </li>
          </ul>
        </section>

        <section className="languages-section">
          <h2>Sprachen</h2>
          <ul>
            <li>
              <article className="skill-item">
                <ul>
                  <li><strong>Englisch</strong> <em>(Fließend)</em></li>
                  <li><strong>Deutsch</strong> <em>(Fließend)</em> — telc C1 Hochschule Zertifikat</li>
                  <li><strong>Türkisch</strong> <em>(Muttersprache)</em></li>
                  <li><strong>Spanisch</strong> <em>(Grundkenntnisse)</em></li>
                </ul>
              </article>
            </li>
          </ul>
        </section>

        <section className="technical-section">
          <h2>Technische Fähigkeiten</h2>
          <ul>
            <li>
              <article className="skill-item">
                <h3>Microsoft Office</h3>
                <ul>
                  <li>Excel</li>
                  <li>Word</li>
                  <li>PowerPoint</li>
                </ul>
              </article>
            </li>
            <li>
              <article className="skill-item">
                <h3>Programming</h3>
                <ul>
                  <li>R Studio</li>
                  <li>HTML</li>
                  <li>React</li>
                  <li>Cursor</li>
                </ul>
              </article>
            </li>
          </ul>
        </section>

        <section className="soft-skills-section">
          <h2>Soziale Kompetenzen</h2>
          <ul>
            <li>
              <article className="skill-item">
                <h3>Kommunikation</h3>
                <ul>
                  <li>Präsentation / Öffentliches Sprechen</li>
                  <li>Teamarbeit</li>
                  <li>Problemlösung</li>
                </ul>
              </article>
            </li>
          </ul>
        </section>

        <section className="research-section">
          <h2>Forschungsinteressen</h2>
          <ul className="research-list">
            <li>Künstliche Intelligenz und Machine Learning</li>
            <li>Bioinformatik</li>
            <li>Molekularbiologie und Genetik</li>
            <li>Mikrobiologie und Infektionsdiagnostik</li>
          </ul>
        </section>

        <section className="projects-section">
          <h2>Projekte</h2>
          <ul>
            <li>
              <article className="project-item">
                <h3>Persönliche Webseite / Portfolio</h3>
                <p>React, Microsoft Azure; GitHub. Web-Erfahrung.</p>
              </article>
            </li>
            <li>
              <article className="project-item">
                <h3>discount26.com</h3>
                <p>E-Commerce-Webapp <em>(in Entwicklung)</em>. Frontend und etwas Backend, Web-Erfahrung.</p>
              </article>
            </li>
            <li>
              <article className="project-item">
                <h3>Lebenslauf Project React</h3>
                <p>Interaktiver Lebenslauf als React-App. React, strukturierte Darstellung, Web-Erfahrung.</p>
              </article>
            </li>
            <li>
              <article className="project-item">
                <h3>Model United Nations (MUN)</h3>
                <p>Teilnahme an mehreren Konferenzen auf Englisch; <em>Outstanding Delegate Award</em>.</p>
              </article>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CVResume;
