// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data as warehouses } from "../../../data/warehouses.json";

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    data: warehouses.find((warehouse) => warehouse["Ref"] === req.query.ref),
  });
};
