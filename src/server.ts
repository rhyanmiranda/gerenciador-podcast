import 'dotenv/config';
import * as http from 'http';
import { app } from './app';

const server = http.createServer(app)
const port = process.env.PORT

server.listen(port, () => {
  console.log('server running on port ' + process.env.PORT)
})
  