"use client";
import React from "react";
import GitHubButton from "react-github-btn";
import { FaArrowUp } from "react-icons/fa";
import GitHubStarCount from "./GitubStarCount";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t py-2 text-center text-sm text-muted-foreground bg-card">
      <div className="flex flex-col  justify-center items-center gap-2 max-w-7xl mx-auto">
        {/* GitHub Star Button */}
        <GitHubStarCount
          username="LugawPlain"
          repo="TroySarinas_Personal_Portfolio"
        />
        <GitHubButton
          href="https://github.com/LugawPlain/TroySarinas_Personal_Portfolio"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star LugawPlain/TroySarinas_Personal_Portfolio on GitHub"
        >
          Stars on Github
        </GitHubButton>
        <p>&copy; 2024 Troy Sarinas. All Rights Reserved.</p>
        <Button
          onClick={scrollToTop}
          className="flex flex-row items-center py-2 gap-2 w-full justify-center bg-transparent hover:bg-transparent"
          aria-label="Scroll back to top"
        >
          <span className="bg-accent text-secondary-foreground p-1 rounded-full shadow-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-opacity duration-300 ease-in-out ">
            <FaArrowUp className="h-3 w-3" />
          </span>
          <p className="text-foreground">Scroll to top</p>
        </Button>
      </div>

      {/* Back to Top Button  */}
    </footer>
  );
};

export default Footer;
