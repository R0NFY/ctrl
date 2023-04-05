import styles from "@/styles/Email.module.css"
import gsap from "gsap"
import { useLayoutEffect } from "react"

function Email() {
  useLayoutEffect(() => {
    const js = `
      function ml_webform_success_4406842() {
        // var $ = ml_jQuery || jQuery;
        console.log(document.querySelector('.ml-subscribe-form-4406842 .ml-block-success'))
        console.log(document.querySelector('.ml-subscribe-form-4406842 .ml-block-form'))
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
    // <div className={`${styles.container} email`}>
    //   <div className="ml-embedded" data-form="WpswuA"></div>
    //   <div className={styles.wrapper}>
    //     <h2>Join the waitlist</h2>
    //     <p>get updates on launch and more...</p>
    //     <div className={styles.email}>
    //       <div className={styles.glow}></div>
    //       <div className={styles.inputWrapper}>
    //         <input type="email" placeholder="Your Email" />
    //         <div className={`${styles.line} line`}></div>
    //       </div>
    //       <button type="submit">subscribe</button>
    //     </div>
    //     <div className={`${styles.glow} emailGlow`}></div>
    //   </div>
    // </div>
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
            <p>
              Thank you, you have successfully subscribed to our announcement
              list!
            </p>
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
          <h2>Join the waitlist</h2>
          <p>get updates on launch and more...</p>
          <div className={styles.email}>
            <div className={styles.glow}></div>
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
          {/* <div className="subscribe-form">
            <div className="form-section">
              <div className="form-group ml-field-email ml-validate-required ml-validate-email">
                <input
                  type="email"
                  name="fields[email]"
                  className="form-control signup-text"
                  placeholder="Email address"
                  autoComplete="email"
                  spellCheck="false"
                  autoCapitalize="off"
                  autoCorrect="off"
                />
                <input type="hidden" name="ml-submit" value="1" />
                <button type="submit">subscribe</button>
                <button
                  disabled
                  style={{ display: "none" }}
                  type="button"
                  className="loading"
                >
                  Submitting...
                </button>
              </div>
            </div>
          </div> */}
        </form>
      </div>
    </div>
    // <div>
    //   <EmailStyling />
    //   <div
    //     id="mlb2-4406842"
    //     className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-4406842"
    //   >
    //     <div className="ml-form-align-center ">
    //       <div className="ml-form-embedWrapper embedForm">
    //         <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
    //           <div className="ml-form-embedContent">
    //             <h4>Join the waitlist</h4>
    //             <p>get updates on our launch and more...</p>
    //           </div>
    //           <iframe
    //             name="dummyframe"
    //             id="dummyframe"
    //             style={{ display: "none" }}
    //           ></iframe>
    //           <form
    //             className="ml-block-form"
    //             action="https://landing.mailerlite.com/webforms/submit/4406842"
    //             data-id=""
    //             method="POST"
    //             target="dummyframe"
    //           >
    //             <div className="ml-form-formContent">
    //               <div className="ml-form-fieldRow ml-last-item">
    //                 <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
    //                   <input
    //                     aria-label="email"
    //                     aria-required="true"
    //                     type="email"
    //                     className="form-control"
    //                     name="fields[email]"
    //                     placeholder="Your Email"
    //                     autoComplete=""
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //             <input type="hidden" name="ml-submit" value="1" />
    //             <div className="ml-form-embedSubmit">
    //               <button type="submit" className="primary">
    //                 Subscribe
    //               </button>
    //               <button
    //                 disabled="disabled"
    //                 style={{ display: "none" }}
    //                 type="button"
    //                 className="loading"
    //               >
    //                 <div className="ml-form-embedSubmitLoad"></div>
    //                 <span className="sr-only">Loading...</span>
    //               </button>
    //             </div>
    //             <input type="hidden" name="anticsrf" value="true" />
    //           </form>
    //         </div>

    //         <div
    //           className="ml-form-successBody row-success"
    //           style={{ display: "none" }}
    //         >
    //           <div className="ml-form-successContent">
    //             <h4>Thank you!</h4>

    //             <p>You have successfully joined our subscriber list.</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Email
