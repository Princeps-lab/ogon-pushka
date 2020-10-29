// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data as warehouses } from "../../../data/warehouses.json";

const compareByCity = (warehouse, city) => {
  return (
    warehouse["CityDescription"].toLowerCase() === city.toLowerCase() ||
    warehouse["CityDescriptionRu"].toLowerCase() === city.toLowerCase() ||
    warehouse["CityRef"].toLowerCase() === city.toLowerCase()
  );
};

export default (req, res) => {
  res.statusCode = 200;

  if (req.query.city) {
    res.json({
      data: warehouses.filter((warehouse) =>
        compareByCity(warehouse, req.query.city)
      ),
    });
  } else {
    res.json({ data: warehouses.slice(0, 200) });
  }
};
