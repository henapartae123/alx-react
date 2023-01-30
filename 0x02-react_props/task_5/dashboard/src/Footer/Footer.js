import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <div className="Footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
}

export default Footer;
