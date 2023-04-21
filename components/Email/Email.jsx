import styles from "@/styles/Email.module.css"
import gsap from "gsap"
import { useLayoutEffect } from "react"

function Email(props) {
  useLayoutEffect(() => {
    const js = `
      function ml_webform_success_4406842() {
        // var $ = ml_jQuery || jQuery;
        document.querySelector('.ml-subscribe-form-4406842 .ml-block-success').style.display = 'block'
        document.querySelector('.ml-subscribe-form-4406842 .ml-block-form').style.display = 'none'

        // $('.ml-subscribe-form-4406842 .ml-block-success').show();
        // $('.ml-subscribe-form-4406842 .ml-block-form').hide();
      };
      
    `
    const script = document.createElement("script")
    const scriptText = document.createTextNode(js)
    script.appendChild(scriptText)
    document.body.appendChild(script)

    const script2 = document.createElement("script")
    script2.src = "https://static.mailerlite.com/js/w/webforms.min.js?4406842"
    document.body.appendChild(script2)

    if (window.innerWidth > 800) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".email",
          start: () => `top top`,
          end: "bottom bottom",
          toggleActions: "play none reverse none",
          refreshPriority: 91,
          defaults: {
            ease: "none",
          },
        },
      })

      tl.fromTo(
        ".email > *",
        {
          opacity: 0,
          scale: 0.95,
          y: 50,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
          duration: 0.15,
        }
      )
    }
  }, [])
  return (
    <div id="signup" className={`${styles.container} email`}>
      <div
        id="mlb2-4406842"
        className="ml-subscribe-form ml-subscribe-form-4406842"
      >
        <div
          className="subscribe-form ml-block-success"
          style={{ display: "none" }}
        >
          <div className="form-section">
            <p>You’re in! Congratulations on being early to the future.</p>
          </div>
        </div>

        <form
          action="https://assets.mailerlite.com/jsonp/372690/forms/84519844643341426/subscribe"
          data-id="4406842"
          data-code="4406842"
          method="POST"
          target="_blank"
          className="ml-block-form"
          autoComplete="off"
        >
          <h2>TAKE CONTROL TODAY</h2>
          <p>
            Join the waitlist to be first in line for the decentralised
            revolution.
          </p>
          <div className={styles.email}>
            <div className={styles.glow}>
              <img src="/blur.png" alt="" />
            </div>
            <div className={styles.inputWrapper}>
              <input
                name="fields[email]"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                type="text"
                autoComplete="off"
                placeholder="Your Email"
              />
              <div className={`${styles.line} line`}></div>
            </div>
            <button type="submit">subscribe</button>
          </div>
        </form>
      </div>
      <div className={styles.footer}>
        <p className={styles.contact}>
          If you have any questions,{" "}
          <a href={props.data.contact} target="_blank">
            get in touch with us
          </a>
        </p>
        <p className={styles.copyright}>All right reserved. CTRL. 2022-2023</p>
      </div>
    </div>
  )
}

export default Email
