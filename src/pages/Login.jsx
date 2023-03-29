import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context";
import LOGO from "./../assets/logo.png";
import SANOFILOGO from "./../assets/sanofi_logo.svg";
import { toast } from "react-toastify";

import userData from "./../lib/emp.json";
import TermsModal from "../components/TermsModal";

const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { user, setUser } = useContext(AppContext);

  const [info, setInfo] = useState({
    employeeId: "",
    password: "",
    checked: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cansave) {
      let checkEmpId = userData.filter(
        (item) => item.emp_id === info.employeeId.toString()
      );
      if (!checkEmpId.length) {
        toast.error("Please enter correct employee id");
        return false;
      }
      if (info?.password !== "toujeo") {
        toast.error("Please enter correct password");
        return false;
      }
      setUser(checkEmpId[0]);
    }
  };
  const cansave = [
    info?.employeeId.trim(),
    info?.password.trim(),
    info?.checked,
  ].every(Boolean);
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  return (
    <>
      <div className="grow flex flex-col items-center justify-around gap-4">
        <div className="flex items-center justify-center bg-white py-6 shadow-lg shadow-[#a2db74] w-full">
          <img src={LOGO} width={280} height={103} alt="logo" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-xs space-y-4 px-4"
        >
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Employee ID
            </label>
            <input
              type="number"
              id="employeeId"
              className="form-control"
              value={info.employeeId}
              onChange={(e) => setInfo({ ...info, employeeId: e.target.value })}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={info.password}
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
              autoComplete="new-password"
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              onChange={(e) => setInfo({ ...info, checked: e.target.checked })}
            />{" "}
            I have read and agree to the{" "}
            <span className="underline" onClick={() => setOpenModal(true)}>
              terms and conditions.
            </span>
          </div>
          <button type="submit" className="btn w-full" disabled={!cansave}>
            Login
          </button>
        </form>
        <img src={SANOFILOGO} width={120} height={31} />
      </div>
      {openModal && <TermsModal setOpenModal={setOpenModal} />}
    </>
  );
};
export default Login;
