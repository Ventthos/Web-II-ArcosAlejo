import { useState } from "react";
import "../../styles/SortSelect.css";
import { IoIosArrowDown } from "react-icons/io";

export function SortSelect ({onChangeSelection}){
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Ascending");

  const handleSelect = (value) => {
    setSelected(`${value}`);
    setOpen(false);
    onChangeSelection(value.toLowerCase())
  };

  return (
    <div className="sort-select">
      <div
        className="sort-selected"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p>Sort by: <strong>{selected}</strong> </p><IoIosArrowDown/>
      </div>
      {open && (
        <div className="sort-options">
          <div onClick={() => handleSelect("Ascending")} className="sort-option">
            Ascending
          </div>
          <div onClick={() => handleSelect("Descending")} className="sort-option">
            Descending
          </div>
        </div>
      )}
    </div>
  );
};
