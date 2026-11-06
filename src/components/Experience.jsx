import { PORTFOLIO } from '../data/content';

export default function Experience({ lang }) {
  const t = (key) => PORTFOLIO.ui[lang][key] || key;

  return (
    <section className="projects" id="experience">
      <div className="wrap">
        <div className="projects-head">
          <span className="section-label">{t('label_experience')}</span>
          <h2 className="section-heading reveal">{t('experience_heading')}</h2>
        </div>
        <div className="project-list">
          {PORTFOLIO.experience.map((job) => (
            <article key={job.id} className="project reveal">
              <div className="project-main">
                <div className="project-role">{job.meta[lang]}</div>
                <h3>{job.title[lang]}</h3>
                <ul className="project-highlights">
                  {job.highlights[lang].map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
