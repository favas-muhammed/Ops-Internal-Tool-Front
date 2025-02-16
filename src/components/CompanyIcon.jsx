import React, { useState } from "react";

const CompanyIcon = () => {
  const [showSubIcons, setShowSubIcons] = useState(false);

  const handleClick = () => {
    setShowSubIcons(!showSubIcons);
  };

  return (
    <div className="company-icon-container">
      <div className="company-icon" onClick={handleClick}>
        Company
      </div>
      {showSubIcons && (
        <div className="sub-icons-container">
          <div className="company-icon">B2B</div>
          <div className="company-icon">B2C</div>
        </div>
      )}
    </div>
  );
};

export default CompanyIcon;
