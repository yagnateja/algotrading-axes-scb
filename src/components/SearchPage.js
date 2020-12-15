import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import AutoComplete from "@material-ui/lab/Autocomplete";
import companySymbols from "../data/company_symbols.json";
import { useHistory } from "react-router-dom";

const SearchPage = () => {
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const history = useHistory();

  return (
    <Fragment>
      <div
        className="container col-12 d-flex justify-content-center align-items-center m-5"
        style={{ height: "100%" }}
      >
        <AutoComplete
          value={value}
          onChange={(event, newValue) => {
            history.push(`/${newValue.id}`);
          }}
          //   inputValue={inputValue}
          //   onInputChange={(event, newInputValue) => {
          //     setInputValue(newInputValue);
          //   }}
          id="company-search"
          options={companySymbols}
          style={{ width: 300 }}
          getOptionLabel={(option) => option.company}
          renderInput={(params) => (
            <TextField {...params} label="Company" variant="outlined" />
          )}
        />
      </div>
    </Fragment>
  );
};

export default SearchPage;
