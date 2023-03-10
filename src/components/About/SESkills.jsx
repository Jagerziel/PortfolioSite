// Import Components

// Import CSS
import "./SESkills.css";
// Import Icons

// Export About Function
export default function SESkills() {

  // Return Div for About Container
  return (
    <div className="SESkills-container">
      <div className="SESkills-Header-container">
        <div className="SESkills-Header">
            Software Engineering Skills
        </div>
        <div className="SESkills-ContentHolder">
            <div className="IconBox">
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className="SEli">
                    <div><img id="img1" className="SES-img" src="images/HTMLIcon.png" alt="Img" /></div>
                    <div className="whiteText">HTML</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="SEli">
                    <div><img id="img2" className="SES-img" src="images/CSSIcon.png" alt="Img" /></div>
                    <div className="whiteText">CSS</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="SEli">
                    <div><img id="img3" className="SES-img" src="images/JSIcon.png" alt="Img" /></div>
                    <div className="whiteText">JavaScript</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://docs.python.org/3/tutorial/" target="_blank" className="SEli">
                    <div><img id="img4" className="SES-img" src="images/PythonIcon.png" alt="Img" /></div>
                    <div className="whiteText">Python</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/Node.js" target="_blank" className="SEli">
                    <div><img id="img5" className="SES-img" src="images/NodeJSIcon.png" alt="Img" /></div>
                    <div className="whiteText">Node.js</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" target="_blank" className="SEli">
                    <div><img id="img6" className="SES-img" src="images/ExpressIcon.png" alt="Img" /></div>
                    <div className="whiteText">Express</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://reactjs.org/" target="_blank" className="SEli">
                    <div><img id="img7" className="SES-img" src="images/ReactIcon.png" alt="Img" /></div>
                    <div className="whiteText">React</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://mongoosejs.com/" target="_blank" className="SEli">
                    <div><img id="img8" className="SES-img" src="images/MongooseIcon.png" alt="Img" /></div>
                    <div className="whiteText">Mongoose</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://www.mongodb.com/docs/" target="_blank" className="SEli">
                    <div><img id="img9" className="SES-img" src="images/DBIcon.png" alt="Img" /></div>
                    <div className="whiteText">MongoDB</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://www.postgresql.org/docs/current/index.html" target="_blank" className="SEli">
                    <div><img id="img10" className="SES-img" src="images/SQLIcon.png" alt="Img" /></div>
                    <div className="whiteText">PostgresSQL</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django" target="_blank" className="SEli">
                    <div><img id="img11" className="SES-img" src="images/CIcon.png" alt="Img" /></div>
                    <div className="whiteText">Django</div>
                </a>
            </div>
            <div className="IconBox">
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/REST" target="_blank" className="SEli">
                    <div><img id="img12" className="SES-img" src="images/RoutingIcon.png" alt="Img" /></div>
                    <div className="whiteText">RESTful Routing</div>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}