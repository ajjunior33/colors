import { useEffect, useState } from "react";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import "./App.css";
function App() {
  const [color, setColor] = useState("");
  const [style, setStyle] = useState({});
  const [styleColor, setStyleColor] = useState({});

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
    const conversaoHex = toHex(conversaoRgb[0], conversaoRgb[1], conversaoRgb[2]);
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
    lum = Math.sqrt((r * r * 0.299) + (g * g * 0.587) + (b * b * 0.114)); // Conversao w3c
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
        </div>
      </section>
    </div>
  );
}

export default App;
