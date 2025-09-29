import Contenido from "../components/Contenido";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <div className="container_home">
        <img
          className="video-background"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1759161439/Group_14_oksrpw.svg"
        />

        {/* Video principal normal */}
        <img
          className="video-main"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1759161439/Group_14_oksrpw.svg"
        />
        <div className="img_contenido">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1759161883/Group_13_zctswq.svg"
            alt=""
          />
        </div>
          <div className="contenido_text">
            <Contenido />
          </div>
      </div>
    </>
  );
}
