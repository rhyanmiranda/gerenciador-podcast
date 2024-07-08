import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcast-controller';
import { HttpMethods } from './routes/utils/http-methods';
import { Routes } from './routes/routes';


export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  // query string
    const [baseUrl] = req.url?.split("?") ?? ["",""]
  
  // listar episódio
    if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
      await  getListEpisodes(req, res)
    }
  // filtrar episódios pelo nome do podcast
    if (req.method === HttpMethods.GET && baseUrl === Routes.EPISODES) {
      await getFilterEpisodes(req, res)
    }
}