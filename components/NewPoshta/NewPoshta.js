import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";

const getCities = async () => {
  const response = await fetch("/api/cities");
  return await response.json();
};

const getWarehouses = async (city) => {
  if (!city)
    throw "Нужно передать название города (на русском или украинском) или Ref";

  const response = await fetch(
    `/api/warehouses?city=${city}`
  );
  return await response.json();
};

const CustomAutosuggest = ({
  placeholder = "",
  initialSuggestions = [],
  ...props
}) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(initialSuggestions);

  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const getSuggestions = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("^" + escapedValue, "i");

    return suggestions?.filter(
      (suggestion) =>
        regex.test(suggestion["Description"]) ||
        regex.test(suggestion["DescriptionRu"])
    );
  };

  const getSuggestionValue = (suggestion) => {
    return suggestion["DescriptionRu"];
  };

  const renderSuggestion = (suggestion) => {
    return <span>{suggestion["DescriptionRu"]}</span>;
  };

  const onChange = (_, { newValue }) => setValue(newValue);

  const onSuggestionsFetchRequested = ({ value }) =>
    setSuggestions(getSuggestions(value));

  const onSuggestionsClearRequested = () => {
    setSuggestions(initialSuggestions);
    props?.onSuggestionsClearRequested?.();
  };

  const inputProps = {
    placeholder,
    value,
    onChange,
  };

  useEffect(() => {
    setSuggestions(initialSuggestions);
  }, [initialSuggestions]);

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      {...props}
    />
  );
};

export default function NewPoshta() {
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [warehouse, setWarehouse] = useState(null);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getCities().then(({ data }) => {
      setCities(data);
    });
  }, []);

  useEffect(() => {
    if (city) {
      getWarehouses(city["Description"]).then(({ data }) => {
        setWarehouses(data);
      });
    } else {
      setWarehouses([]);
    }
  }, [city]);

  return (
    <div>
      <CustomAutosuggest
        placeholder="Введите город"
        initialSuggestions={cities}
        onSuggestionSelected={(_, { suggestion }) => setCity(suggestion)}
      />

      <br />
      <br />

      {warehouses.length > 0 && (
        <CustomAutosuggest
          alwaysRenderSuggestions={true}
          placeholder="Введите отделение"
          initialSuggestions={warehouses}
          onSuggestionSelected={(_, { suggestion }) =>
            setWarehouse(suggestion)
          }
        />
      )}
    </div>
  );
}
