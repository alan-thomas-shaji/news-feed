import React, { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import axios from "axios";

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    if(page === 1){
        axios
          .get("http://localhost:3001/api/data")
          .then((response) => setNewsData(response.data))
          .catch((error) => console.error(error));
    }
    else{
        axios
          .get(`http://localhost:3001/api/data/${page}`)
          .then((response) =>
            setNewsData((prevNewsData) => {
                return {
                ...prevNewsData,
                nodes: prevNewsData.nodes.concat(response.data.nodes)
                };
            }))
          .catch((error) => console.error(error));
    }
    setLoading(false);
  }, [page]);

  const fetchMoreData = () => {
    if (loading) return;
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        console.log("fetching more data");
        fetchMoreData();
      }
    };
  }, [newsData]);

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
