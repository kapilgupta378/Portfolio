import "./social.scss";

const SocialBar = ({ menuOpen }) => {
  return (
    <div class={"socialwrapper " + (menuOpen && "active")}>
      <div class="button">
        <div class="icon">
          <i class="fab fa-linkedin-in"></i>
        </div>
        <span>Linkedin</span>
      </div>
      <div class="button">
        <div class="icon">
          <i class="fab fa-github"></i>
        </div>
        <span>Github</span>
      </div>
      <div class="button">
        <div class="icon">
          <i class="fab fa-instagram"></i>
        </div>
        <span>Instagram</span>
      </div>
      <div class="button">
        <div class="icon">
          <i class="fab fa-codepen"></i>
        </div>
        <span>Codepen</span>
      </div>
      <div class="button">
        <div class="icon">
          <i class="fab fa-youtube"></i>
        </div>
        <span>YouTube</span>
      </div>
    </div>
  );
};

export default SocialBar;
