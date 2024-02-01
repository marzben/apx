import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    console.log("data", data);
  }, []);

  const getData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  return (
    <div>
      {data?.products?.map((item) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.images[0]} />
            <Card.Body>
              <Card.Title>{item?.title} </Card.Title>
              <Card.Text>{item?.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Data;
