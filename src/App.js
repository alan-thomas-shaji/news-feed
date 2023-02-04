import React, {useState, useEffect} from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from "axios";

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3001/api/data")
      .then((response) => setNewsData(response.data))
      .catch((error) => console.error(error));
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <Navbar />
      {newsData?.nodes?.map((newsFeed) => (
        <Card
          key={newsFeed?.node.nid}
          title={newsFeed?.node.title}
          imageLink={newsFeed?.node.field_photo_image_section}
        />
      ))}
    </div>
  );
};

export default App;
