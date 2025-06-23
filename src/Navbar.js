import React from "react";
import logo from "./categories/logo--quizzer.svg";
import { UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const pathName = location.pathname;
  const menu = [
    {
      name: "Home",
      icon: <i class="fa-solid fa-house "></i>,
      link: "/",
    },
    {
      name: "My Stats",
      icon: <i class="fa-solid fa-chart-simple"></i>,
      link: "/stats",
    },
  ];
  return (
    <nav
      class="navbar navbar-expand-lg  border-bottom "
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="/"
          style={{ color: "#60a8eb", textAlign: "center" }}
        >
          <img src={logo} alt="logo" style={{ width: "9%" }} /> <b>Kwizi</b>
        </a>
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style={{ marginLeft: "15%" }}
        >
          <div class="navbar-nav">
            <div
              style={
                pathName === "/"
                  ? {
                      border: "solid #60a8eb 2px",
                      borderRadius: "10%",
                      height: "6vh",
                    }
                  : {}
              }
            >
              <a
                class="nav-link active "
                aria-current="page"
                href="/"
                style={{ color: "#60a8eb", textAlign: "center" }}
              >
                <i class="fa-solid fa-house "></i> Home
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              style={
                pathName === "/stats"
                  ? {
                      color: "#60a8eb",
                      border: "solid #60a8eb 2px",
                      borderRadius: "10%",
                      height: "6vh",
                    }
                  : { color: "#60a8eb" }
              }
              class="nav-link ml-50"
              href="/stats"
            >
              <i class="fa-solid fa-chart-simple"></i> MY STATS
            </a>
          </div>
        </div>

        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <a class="nav-link" href="/sign-in" style={{ color: "#60a8eb" }}>
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#60a8eb",
                  border: "solid #60a8eb 1px",
                  borderRadius: "8px",
                  color: "white",
                }}
              >
                <i class="fa-solid fa-right-to-bracket"></i> Login{" "}
              </button>
            </a>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
