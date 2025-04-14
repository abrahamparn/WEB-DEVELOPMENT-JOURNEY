import React from "react";
export default function Main() {
  return (
    <main className="main">
      <div>
        <h1 className="main-title text-format text-align-center">Abraham Naiborhu</h1>
        <h2 className="main-subtitle text-format text-align-center">Frontend Developer</h2>
        <p className="text-format main-p text-align-center">Abraham.Website</p>

        <div className="margin-top flex justify-content-space-around ">
          <button className="text-format">
            <a href="mailto:abrahamnaiborhu@gmail.com">
              <i className="fa fa-envelope"></i> Email
            </a>
          </button>
          <button className="text-format colorwhite-bgblue">
            <a href="https://www.linkedin.com/in/abrahamnaiborhu">
              <i className="fa fa-linkedin" /> LinedIn
            </a>
          </button>
        </div>
        <div className="container-small">
          <h2 className="text-format">About</h2>
          <p className="text-format">
            I am a frontend developer with a particular interest in making things simple and
            automating daily tasks. I try to keep up with security and best practices, and am always
            looking for new things to learn.
          </p>
          <h2 className="text-format">Interests</h2>
          <p className="text-format">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel
            geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </main>
  );
}
