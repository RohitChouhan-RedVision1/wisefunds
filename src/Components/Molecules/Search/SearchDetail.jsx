import { useLocation } from "react-router-dom";
import Header from "../../Molecules/Header/Header"
import Footer from "../../Molecules/Footer/Footer"
import "./SearchBar.css"

const IframeComponent = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const id = params.get("id");
  const apiKey = "351b03c24a79d2f40796037e0d8c2c49";
  console.log(id);
  console.log("Test");

  const url = `https://redvisionassets.com/iframes/performance/single-fund/${slug}?pcode=${id}&apikey=${apiKey}`;
  console.log(url);

  return (
    <>
      <Header />
      <div className="search-detail-main">
        <iframe
          src={url}
          title="Embedded Page"
          style={{ width: "100%", height: "100vh" }}
        />
      </div>
      <Footer />
    </>
  );
};

export default IframeComponent;
