'use client';

const FooterMenu = () => (
  <footer>
    <div className="container">
      <div className="row pt-3 pb-3">
        <div className="col">
          NAVIGATION
          <hr />
          About Us <br />
          Employment <br />
          Videos
        </div>
        <div className="col">
          MAIN MENU
          <hr />
          Men <br />
          Women <br />
          Kids <br />
        </div>
        <div className="col">
          CONNECT
          <hr />
          Sign up for the latest updates<br />
          <input className="bg-white text-dark" type="text" placeholder="Enter Email Address" />
          <div className="btn btn-dark">Join</div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterMenu;
