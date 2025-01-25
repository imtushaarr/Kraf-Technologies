import React from "react";
import classNames from "classnames";
import "../src/index.css"; // Adjust the path to your global CSS file
import "@fontsource/jost"; // Import Jost font

const Layout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={classNames("min-h-screen bg-black antialiased", "font-jost")}>
        {children}
      </body>
    </html>
  );
};

export default Layout;