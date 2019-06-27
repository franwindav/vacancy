import React from "react";

export default props => {
  const { salary, price } = props;
  if (salary == undefined) {
    return "";
  }
  if (salary.from != undefined && salary.to != undefined) {
    return (
      <div className={price}>
        {salary.from == salary.to
          ? `${salary.from} руб`
          : `${salary.from}-${salary.to} руб.`}
      </div>
    );
  } else if (salary.from != undefined) {
    return <div className={price}>от {salary.from} руб.</div>;
  } else {
    return <div className={price}>до {salary.to} руб.</div>;
  }
};
