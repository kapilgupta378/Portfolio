import "./social.scss";

const SocialBar = ({ menuOpen }) => {
  return (
    <div class={"socialwrapper " + (menuOpen && "active")}>
      <a
        href="https://www.linkedin.com/in/kapil-gupta-5527aa174/"
        target="_blank"
        class="button"
      >
        <div class="icon">
          <i class="fab fa-linkedin-in"></i>
        </div>
        <span>Linkedin</span>
      </a>
      <a href="https://github.com/kapilgupta378" target="_blank" class="button">
        <div class="icon">
          <i class="fab fa-github"></i>
        </div>
        <span>Github</span>
      </a>
      <a href="https://www.w3docs.com/" target="_blank" class="button">
        <div class="icon">
          <i class="fab fa-instagram"></i>
        </div>
        <span>Instagram</span>
      </a>
      <a href="https://codepen.io/kapilgupta378" target="_blank" class="button">
        <div class="icon">
          <i class="fab fa-codepen"></i>
        </div>
        <span>Codepen</span>
      </a>
      <a
        href="https://mail.google.com/mail/u/0/"
        target="_blank"
        class="button"
      >
        <div class="icon">
          <i class="fab fa-google"></i>
        </div>
        <span>Gmail</span>
      </a>
    </div>
  );
};

export default SocialBar;
