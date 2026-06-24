import TrustStrip from '../components/TrustStrip'

const founders = [
  {
    name: 'Priya Anand',
    role: 'Textile Curator',
    text: 'Priya leads PaaN’s fabric selection with a collector’s eye for zari, drape, and lasting occasion wear.',
  },
  {
    name: 'Anaya Nair',
    role: 'Craft Partnerships',
    text: 'Anaya works with weaving clusters and studio partners to keep every PaaN piece rooted in Banarasi craft.',
  },
]

function About() {
  return (
    <div className="about-page">
      <section className="about-intro">
        <p>About PaaN</p>
        <h1>A boutique home for Banarasi sarees with heritage at the center.</h1>
        <span>
          We curate sarees that feel ceremonial, personal, and quietly luxurious.
        </span>
      </section>

      <section className="heritage-section">
        <div>
          <p className="section-kicker">Heritage & Craftsmanship</p>
          <h2>Woven stories, selected with restraint.</h2>
          <p>
            PaaN celebrates Banarasi weaving through thoughtful curation:
            luminous zari, balanced motifs, elegant colours, and sarees that
            can move from family ceremonies to modern wardrobes with ease.
          </p>
          <p>
            Each piece is chosen for its drape, finish, and sense of occasion,
            keeping the focus on craft rather than clutter.
          </p>
        </div>
        <img src="/images/craftsmanship.svg" alt="Banarasi loom craftsmanship" />
      </section>

      <section className="founders-section">
        <div className="section-heading">
          <h2>Founders</h2>
          <span>Two perspectives, one careful edit.</span>
        </div>
        <div className="founder-grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <div aria-hidden="true">{founder.name.charAt(0)}</div>
              <h3>{founder.name}</h3>
              <strong>{founder.role}</strong>
              <p>{founder.text}</p>
            </article>
          ))}
        </div>
      </section>

      <TrustStrip />
    </div>
  )
}

export default About
