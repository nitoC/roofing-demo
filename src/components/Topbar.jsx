import { FiPhoneCall } from "react-icons/fi";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span>Delivering across Nigeria since 2009</span>
        <span className="topbar-phone"><FiPhoneCall /> 0800 ROOF NOW</span>
      </div>
    </div>
  );
}
