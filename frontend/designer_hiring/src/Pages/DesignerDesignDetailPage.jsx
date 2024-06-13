import React from "react";
import "../Styles/designerdesdetail.css";
import { Button } from "react-bootstrap";

function DesignerDesignDetailPage() {
  return (
    <>
      <div className="ddpage">
        <h1 className="ddh1"> Design Detail</h1>
        <img
          src="https://i.pinimg.com/564x/31/f0/c7/31f0c7cf0e4984e6aa6484149b748840.jpg"
          alt=""
          width={"800px"}
          height={"500px"}
          className="ddimg"
        />
        <h1 className="ddh11"> Art Name</h1>
        <p className="ddp">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
        <Button className="ddbtn">Add TO Fav</Button>
      </div>
    </>
  );
}

export default DesignerDesignDetailPage;
