export const userItems = [
    {
      key: "1",
      label: "Change Password",
      path: "/change-password",
    },
    {
      key: "2",
      label: "Change Language",
      path: "/change-language",
    },
    {
      key: "3",
      label: "Cutomization",
      path: "/customization",
    },
    {
      key: "4",
      label: "Set Subuser",
      path: "/set-subuser",
    },
    {
      key: "5",
      label: "Application",
      path: "/application",
      children: [
        { key: "5-1", label: "Trip Tracking", path: "/application/trip-tracking" },
        { key: "5-2", label: "VTS", path: "/application/vts" },
      ],
    },
    { key: "6", label: "Version History", path: "/version-history" },
    {
      key: "7",
      label: "Logout",
      path: "logout",
    },
  ];