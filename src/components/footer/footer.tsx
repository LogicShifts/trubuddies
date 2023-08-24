export default function Footer() {
  return (
    <>
      <footer>
        <div className="foot">
          <div className="footbuttons">
            <button
              className="footbutton"
              style={{ backgroundColor: "white", color: "#1052ff" }}
            >
              Join as a TruBuddy
            </button>
            <button
              className="footbutton"
              style={{
                backgroundColor: "#1052ff",
                color: "white",
                border: "2px solid white",
              }}
            >
              Support TruBuddies
            </button>
          </div>
          <div id="dropdowns">
            <div className="drops">
              <div className="droptext">Company</div>
              <div className="dropicon">
                <span className="material-symbols-outlined"> ^ </span>
              </div>
            </div>
            <div className="drops">
              <div className="droptext">Services</div>
              <div className="dropicon">
                <span className="material-symbols-outlined"> ^ </span>
              </div>
            </div>
            <div className="drops">
              <div className="droptext">Legal</div>
              <div className="dropicon">
                <span className="material-symbols-outlined"> ^ </span>
              </div>
            </div>
          </div>
        </div>
        <div className="terms">
          <div>
            <a href="#" style={{ color: "inherit" }}>
              Terms and Conditions
            </a>
          </div>
          <div>
            <a href="#" style={{ color: "inherit" }}>
              Privace policy
            </a>
          </div>
          <div>© 2023 TruBuddies</div>
        </div>
      </footer>
    </>
  );
}
