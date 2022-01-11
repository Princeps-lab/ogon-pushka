// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data as cities } from "../../../data/cities.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default  (req, res) => {
  res.statusCode = 200;
  res.json({ data: cities });
};
