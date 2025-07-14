// SessionTimeoutHandler.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SessionTimeoutHandler = () => {
  const [showInactivityDialog, setShowInactivityDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleForceLogout = () => {
      setShowInactivityDialog(true);
    };

    window.addEventListener("forceLogoutDueToInactivity", handleForceLogout);

    return () => {
      window.removeEventListener(
        "forceLogoutDueToInactivity",
        handleForceLogout
      );
    };
  }, []);

  const handleOkayClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setShowInactivityDialog(false);
    navigate("/login");
  };

  if (!showInactivityDialog) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-2xl">
        <div className="justify-center flex ">
          <img src="/session.jpg" alt="asd" className="size-56" />
        </div>

        <h2 className="text-xl font-bold mb-2">Session Expired</h2>
        <p className="text-gray-600 mb-4">
          You've been inactive for a while. For your account’s security, we’ve
          logged you out. Please log in again.
        </p>
        <div className="flex justify-end">
          <button
            onClick={handleOkayClick}
            className="mt-2 px-4 py-2 text-black rounded  transition"
          >
            I got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionTimeoutHandler;
