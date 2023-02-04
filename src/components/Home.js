import React, { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import axios from "axios";

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/api/data")
      .then((response) => setNewsData(response.data))
      .catch((error) => console.error(error));
    setLoading(false);
  }, []);

  return (
    <div className="Home">
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

export default Home;
