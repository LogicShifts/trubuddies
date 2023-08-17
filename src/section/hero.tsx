export default function Hero() { 
    return (   <> 
        <section>
        <img id="hero" src="/Assets/images/hero.png" />
        <div id="tagline">
          <h1>Tagline</h1>
          <h2>Tagline</h2>
          <h2>etc. etc</h2>
          <h2 id="yourbuddy">#Your_buddy</h2>
        </div>
      </section>
      <div id="family">
        <h2>We are family</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          dignissimos laudantium deleniti unde nemo aliquam iure possimus quis,
          quas, numquam neque ea aspernatur aut. Pariatur, aperiam molestias.
          Tempora, similique optio?
        </p>
        <div id="bluebox"></div>
      </div>
      <div id="blue-strip">
        <span className="grey-circle"></span>
        <span className="grey-circle"></span>
        <span className="grey-circle"></span>
        <span className="grey-circle"></span>
        <span className="grey-circle"></span>
      </div>
      <div className="articles">
        <div className="article">
          <div className="article-right"></div>
          <div className="article-left"></div>
        </div>
        <div className="article">
          <div className="article-right"></div>
          <div className="article-left"></div>
        </div>
        <div className="article">
          <div className="article-right"></div>
          <div className="article-left"></div>
        </div>
        <div className="article">
          <div className="article-right"></div>
          <div className="article-left"></div>
        </div>
        <h3>What's more?</h3>
        <h3>
          <span
            className="material-symbols-outlined"
            style={{ transform: "translateY(-20px)" }}
          >
            expand_more
          </span>
        </h3>
      </div>
      <div id="family">
        <h2>How It Works?</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          dignissimos laudantium deleniti unde nemo aliquam iure possimus quis,
          quas, numquam neque ea aspernatur aut. Pariatur, aperiam molestias.
          Tempora, similique optio?
        </p>
        <div className="blue-text">
          <div className="bluebox-text">Start a Chat</div>
          <div className="bluebox-small"></div>
        </div>
        <div className="blue-text">
          <div className="bluebox-text">Get matched with a TruBuddy</div>
          <div className="bluebox-small"></div>
        </div>
        <div className="blue-text">
          <div className="bluebox-text">Talk with your TruBuddy</div>
          <div className="bluebox-small"></div>
        </div>
      </div>
      <div className="blogs">
        <h1>Learn & Get Inspired</h1>
        <div className="blog">
          <div className="blog-left"></div>
        </div>
        <div className="blog">
          <div className="blog-left"></div>
        </div>
        <div className="blog">
          <div className="blog-left"></div>
        </div>
        <div className="blog">
          <div className="blog-left"></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button className="blogbutton">View more</button>
        </div>
      </div>
      <div id="faq">
        <h2>FAQs</h2>
        <div className="qs">
          <div className="qstext">What is TruBuddy?</div>
          <div className="qsdrop">
            <span className="material-symbols-outlined"> ^ </span>
          </div>
        </div>
        <div className="qs">
          <div className="qstext">Who is it for, is TruBuddy for me?</div>
          <div className="qsdrop">
            <span className="material-symbols-outlined"> ^ </span>
          </div>
        </div>
        <div className="qs">
          <div className="qstext">What TruBuddy is NOT:</div>
          <div className="qsdrop">
            <span className="material-symbols-outlined"> ^ </span>
          </div>
        </div>
        <div className="qs">
          <div className="qstext">When should I choose TruBuddy?</div>
          <div className="qsdrop">
            <span className="material-symbols-outlined"> ^ </span>
          </div>
        </div>
        <div className="qs">
          <div className="qstext">Do you also provide Therapy?</div>
          <div className="qsdrop">
            <span className="material-symbols-outlined"> ^ </span>
          </div>
        </div>
        <div className="qs">
          <div className="qstext">Who is a TruBuddy?</div>
          <div className="qsdrop">
            <span className="material-symbols-outlined"> ^ </span>
          </div>
        </div>

        <div className="qs">
          <div className="qstext">Can I become a TruBuddy?</div>
          <div className="qsdrop">
            <span className="material-symbols-outlined"> ^ </span>
          </div>
        </div>
        <div className="qs">
          <div className="qstext">Can I become a TruBuddy?</div>
          <div className="qsdrop">
            <span className="material-symbols-outlined"> ^ </span>
          </div>
        </div>
      </div>
      <div className="icons">
        <h2>Follow us</h2>
        <div className="icons-box">
          <div className="icon">
            <span className="facebook ">
            </span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined"> </span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined"> </span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined"> </span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined"> </span>
          </div>
          <div className="icon">
            <span className="material-symbols-outlined"> </span>
          </div>
        </div>
        <div id="contact-us">
          Contact us directly:
          <span className="bluecircle">
            <span className="material-symbols-outlined"> </span>
          </span>
          <span className="bluecircle">
            <span className="material-symbols-outlined"> </span>
          </span>
        </div>
      </div>
    </>
    );
}