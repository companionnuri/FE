import SubsideMenu from "./SubsideMenu";
import Logo from "./Logo";
import styles from "./css/Top.module.css";
import CategoryFloating from "./CategoryFloating";
import Open from "./Open";
import Detail from "./Detail";

import React, { useState, useEffect } from "react";

const CategoryFloatingBox = {
  position: "fixed",
  top: "15px",
  left: "98px",
  zIndex: "9999",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 12%)",
  borderRadius: "4px",
  border: "1px solid rgba(0,0,0,.05)",
};
const searchFloatingBox = {
  position: "fixed",
  top: "20px",
  right: "15px",
  zIndex: "9999",
  width: "400px",
  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 12%)",
  borderRadius: "20px",
};

function Top(props) {
  const [open, setOpen] = useState(props.op);
  const [topinputValue, settopinputValue] = useState(props.regionValue);
  const [keyword, setkey] = useState(props.keyword);
  const [detailopen, setDetailopen] = useState(props.detailop);
  const [detailValue, setDetailValue] = useState(props.kakaoclickresult);

  // const detailValue = props.kakaoclickresult
  // console.log(detailValue);
  // console.log(detailopen);

  // console.log(detailopen);

  useEffect(() => {
    setDetailValue(props.kakaoclickresult);
    setDetailopen(props.detailop);
    setOpen(props.op);
  }, [props.kakaoclickresult, props.detailop, props.op]);

  return (
    <div>
      <div className={styles.hdWrap}>
        <div className="hd_wrap w-100">
          {/* <div>
            <Navbar />
          </div> */}
          <Logo />
          <SubsideMenu setOpen={setOpen} />
          {/* <Searchbar /> */}
        </div>
      </div>
      <div style={CategoryFloatingBox}>
        <CategoryFloating />
      </div>
      <div style={searchFloatingBox}>
        {/* <Topsearchbar settopinputValue={settopinputValue} setOpen={setOpen} /> */}
      </div>
      <div>
        {open ? <Open topValue={topinputValue} keyword={keyword} /> : null}
      </div>
      <div>
        {detailopen && detailValue > 0 ? (
          <Detail kakaoclick={detailValue} setDetailopen={setDetailopen} />
        ) : null}
      </div>
    </div>
  );
}

export default Top;
