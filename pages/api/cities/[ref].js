// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data as cities } from "../../../data/cities.json";

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    data: cities.find((city) => city["Ref"] === req.query.ref),
  });
};
