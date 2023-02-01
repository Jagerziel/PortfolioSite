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
                <div className="SEli">
                    <div><img id="img1" className="SES-img" src="images/HTMLIcon.png" alt="Img" /></div>
                    <div className="whiteText">HTML</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img2" className="SES-img" src="images/CSSIcon.png" alt="Img" /></div>
                    <div className="whiteText">CSS</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img3" className="SES-img" src="images/JSIcon.png" alt="Img" /></div>
                    <div className="whiteText">JavaScript</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img4" className="SES-img" src="images/PythonIcon.png" alt="Img" /></div>
                    <div className="whiteText">Python3</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img5" className="SES-img" src="images/NodeJSIcon.png" alt="Img" /></div>
                    <div className="whiteText">Node.js</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img6" className="SES-img" src="images/ExpressIcon.png" alt="Img" /></div>
                    <div className="whiteText">Express</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img7" className="SES-img" src="images/ReactIcon.png" alt="Img" /></div>
                    <div className="whiteText">React</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img8" className="SES-img" src="images/MongooseIcon.png" alt="Img" /></div>
                    <div className="whiteText">Mongoose</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img9" className="SES-img" src="images/DBIcon.png" alt="Img" /></div>
                    <div className="whiteText">MongoDB</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img10" className="SES-img" src="images/SQLIcon.png" alt="Img" /></div>
                    <div className="whiteText">MySQL</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img11" className="SES-img" src="images/CIcon.png" alt="Img" /></div>
                    <div className="whiteText">C</div>
                </div>
            </div>
            <div className="IconBox">
                <div className="SEli">
                    <div><img id="img12" className="SES-img" src="images/RoutingIcon.png" alt="Img" /></div>
                    <div className="whiteText">RESTful Routing</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}