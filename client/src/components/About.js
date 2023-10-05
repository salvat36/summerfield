import React from 'react'
import './About.css';

function About() {
  return (
    <>
      <blockquote>
        <p><em>&#8220;We are not just a theater; we are a gathering place for all who seek connection, inspiration, and the shared joy of live performance.&#8221;</em></p>
      </blockquote>

      <div className="col-container">
        <div className="col-1">
          <img src={process.env.PUBLIC_URL + "/media/Murder_Mystery.jpg"} alt="the Murder Mystery cast" />

          <div className="col-1--content">
            <h2>Bringing the Community Together</h2>

            <p>At SummerField, our mission is to be a vibrant hub for the arts, where the magic of storytelling and the power of live theater inspire, challenge, and unite our diverse community. We believe in the transformative potential of the stage to foster empathy, provoke thought, and ignite conversations that transcend boundaries.</p>
          </div>
        </div>

        <div className="col-2">

          <div className="col-2--content">

            <h2>Our Mission</h2>

            <p>Through our commitment to deep learning, effective communication, and unwavering ethics in the arts, we aim to break down barriers and bridge gaps, making the arts accessible to all. We actively engage with our community, collaborating with local artists, schools, and organizations to nurture creativity and celebrate our shared humanity. We are not just a theater; we are a gathering place for all who seek connection, inspiration, and the shared joy of live performance.</p>

          </div>

          <img src={process.env.PUBLIC_URL + "/media/St-Patricks-Cabaret.jpg"} alt="the St.Patrick's Cabaret cast" />

        </div>


        <div className="col-3">
          <h2>Founders</h2>

          <div className="col-3--content">
            <div className="alvino-container">

              <img src={process.env.PUBLIC_URL + "/media/alvino-headshot.jpg"} alt="headshot of Amy Avlino" />

              <h3>Amy Alvino</h3>

              <p>Amy Alvino is one of the proud founders of Summerfield Stage Company. Having performed on stages all over the country, she is thrilled to be back on her home turf and making theatre magic in Summerfield. Local credits include Sound of Music (Elsa Shraeder, Creative Greensboro), Elvis: The Musical (Dixie, Winston Salem Theatre Alliance). NYC & Regional credits include: Dream Street (Original Cast Off-Broadway Cast, Laura/Cassie), Urinetown (Hope Cladwell, SBP). Titanic (Signature Theatre: Ensemble/Female Swing), South Pacific (Nellie,Chalice Theatre), The Addams Family (Morticia, Temple Theatre), Titanic: In Concert (Caroline, 42nd Street Moon), Jesus Christ Superstar (ensemble, ROLT), Passion (Ensemble, Custom Made Theatre), Fiorello (Ensemble, 42nd Street Moon), All Shook Up (Matilda Hyde, Yorktown Stage), A Christmas Carol (Sally/Charwoman, Yorktown Stage). Amy studied at Elon University and T. Schreiber Studio Acting Conservatory. She was also a board member for Ray of Light Theatre in San Francisco and an active member of St. Bart's Players in NYC.</p>
            </div>

            <div className="rodriguez-container">

              <img src={process.env.PUBLIC_URL + "/media/rodriguez-headshot.jpg"} alt="headshot of Elyse Rodriguez" />

              <h3>Elyse Rodriguez</h3>

              <p>Elyse Rodriguez is the co-founder of Summerfield Stage Company. Elyse wears many hats - she's a Speech-Language Pathologist at Pearce Elementary and Guilford Elementary and privately with Pediatric Speech & Language Services, a drama teacher through Drama Kids of the Triad, a film actor represented by Talent One, and a theatre actor involved with various companies in the Triad. Recent favorite roles include Blanche DuBois in A Streetcar Named Desire and Tom Wingfield in The Glass Menagerie (Camel City Playhouse), Helena in A Midsummer Night's Dream (Spirit Gum Theatre Company), and Ouiser in Steel Magnolias and Scuttle in The Little Mermaid (Kernersville Little Theatre). Elyse holds an MA in Speech-Language Pathology from UNCG, a BFA in Acting from Elon University, and has a graduate certificate in Early Childhood Mental Health from UNCC. In her spare time, you can find her taking and posting endless pictures of her Akita, Sybbie.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
