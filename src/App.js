import { useEffect, useState } from "react";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import { DiGithubBadge } from 'react-icons/di'
import "./App.css";
function App() {
  const [color, setColor] = useState("");
  const [style, setStyle] = useState({});
  const [styleColor, setStyleColor] = useState({ color: "#222" });

  const [problem, setProblem] = useState("protanopia");

  function handleProblem(problem) {
    setProblem(problem);
  }

  function loadToggle(problema) {
    if (problem === problema) {
      return <BiToggleRight size={28} color="#27ae60" />;
    } else {
      return <BiToggleLeft size={28} color="#c0392b" />;
    }
  }

  function handleColor(event) {
    event.preventDefault();
    saveColor();

    if (problem === "nenhum") {
      loadNoProblem();
    } else {
      loadProblem();
    }
  }

  function loadProblem() {
    const conversaoRgb = toRgb(color);
    if (problem === "protanopia") {
      conversaoRgb[1] = conversaoRgb[0];
      conversaoRgb[0] = 0;
    }
    calcLuminosidade(conversaoRgb[0], conversaoRgb[1], conversaoRgb[2]);
    const conversaoHex = toHex(
      conversaoRgb[0],
      conversaoRgb[1],
      conversaoRgb[2]
    );
    saveColor(conversaoHex);
    console.log(conversaoRgb);
  }

  function loadNoProblem() {
    const conversaoRgb = toRgb(color);
    calcLuminosidade(conversaoRgb[0], conversaoRgb[1], conversaoRgb[2]);
  }
  function toRgb(hex) {
    var r, g, b;
    hex = hex.split("");
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);

    return [r, g, b];
  }

  function calcLuminosidade(r, g, b) {
    var lum;
    lum = Math.sqrt(r * r * 0.299 + g * g * 0.587 + b * b * 0.114); // Conversao w3c
    console.log(lum);
    if (lum < 155) {
      setStyleColor({ color: "#f1f1f1" });
    } else {
      setStyleColor({ color: "#222" });
    }
  }

  function toHex(r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    const result = `#${red}${green}${blue}`;
    return result;
  }

  var rgbToHex = function (rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  function saveColor(cor = null) {
    console.log(cor);
    if (!cor) {
      setColor(color);
      setStyle({
        backgroundColor: color,
      });
    } else {
      setColor(cor);
      setStyle({
        backgroundColor: cor,
      });
    }
  }

  return (
    <div className="App" style={style}>
      <header>
        <h1>Defina uma Cor</h1>
        <form onSubmit={handleColor}>
          <input
            type="color"
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <button className="buttonSuccess" type="submit">
            Salvar
          </button>
        </form>

        <div className="problems">
          <a onClick={() => handleProblem("nenhum")}>
            {loadToggle("nenhum")} Nenhum
          </a>
          <a onClick={() => handleProblem("protanopia")}>
            {loadToggle("protanopia")}
            Protanopia
          </a>
          <a onClick={() => handleProblem("deuteranopia")}>
            {loadToggle("deuteranopia")} Deuteranopia
          </a>
          <a onClick={() => handleProblem("tritanopia")}>
            {loadToggle("tritanopia")} Tritanopia
          </a>
        </div>
      </header>

      <section style={styleColor}>
        <main>
          <h1>Lorem Ipsum</h1>
          <span>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </span>
          <small>
            "There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain..."
          </small>
        </main>

        <div className="content">
          <article>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              <strong>Lorem Ipsum</strong> is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </article>

          <article>
            <h1> Why do we use it?</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </article>
          <article>
            <h1>Where does it come from?</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </article>
          <article>
            <h1>Where can I get some?</h1>

            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </article>
        </div>

        <footer>
          <span>Todos os direitos reservados - 2021</span>
          <span>André Junior</span>
          <a href="https://github.com/ajjunior33">
            <DiGithubBadge size={32} style={styleColor}/>
          </a>
        </footer>
      </section>
    </div>
  );
}

export default App;
