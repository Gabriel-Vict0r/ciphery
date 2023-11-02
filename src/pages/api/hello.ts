// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'


// export default async function (req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const response = await axios.get(
//       "api.hashify.net/hash/md5/hex?value=helloWorld"
//     );
//     console.log(response.data);
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: `ocorreu um erro: ${error}` })
//   }
// }
