const SessionExpiry = () => {
    const loginTimestamp = localStorage.getItem("loginTimestamp");
    const twelveHours = 12 * 60 * 60 * 1000;

    if (loginTimestamp && Date.now() - loginTimestamp > twelveHours) {
      localStorage.setItem("isAuthenticate", "false");
      localStorage.removeItem("loginTimestamp");
      return false;
    }
    return true;
  };

  export default SessionExpiry;