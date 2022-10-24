import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faUser, faClock, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import "../styles/navbar.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />
      <div>
        <div className={`lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}>
          <button
            className="btn-menu"
            onClick={() => setIsSidebarOpen(true) }
            type="button"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-zinc-800 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl text-white font-semibold">
            Zachy's Toolbox
          </span>
        </div>

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/home",
            },
            {
              title: "Discord Tools",
              itemId: "/discord/timestamp-generator",
              elemBefore: () => <FontAwesomeIcon icon={faDiscord} />,
              subNav: [
                {
                  title: "Timestamp Generator",
                  itemId: "/discord/timestamp-generator",
                  // Optional
                  elemBefore: () => <FontAwesomeIcon icon={faUser} />,
                },
                {
                  title: "Id to User",
                  itemId: "/discord/id-to-user",
                  elemBefore: () => <FontAwesomeIcon icon={faClock} />,
                },
              ],
            },
            {
              title: "Time Tools",
              itemId: "/time",
              elemBefore: () => <FontAwesomeIcon icon={faClock} />,
            },
          ]}
        />
        {/* 
        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <FontAwesomeIcon icon={faDiscord} />
              }
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div> */}
      </div>
    </React.Fragment>
  );
};
