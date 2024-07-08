import { IncomingMessage, ServerResponse} from "node:http"
import { listEpisodes } from "../services/list-episodes-service"
import { filterEpisodes } from "../services/filter-episodes-service"
import { HttpStatusCode } from "../routes/utils/http-status-code"
import { ResponseFilterModel } from "../models/response-filter-episode-model"

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await listEpisodes()
  
  res.writeHead(HttpStatusCode.OK, { 'Content-type': 'application/json' })
  res.write(JSON.stringify({
    content
  }))

  res.end()
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: ResponseFilterModel = await filterEpisodes(req.url)

  res.writeHead(content.statusCode, { 'Content-type': 'application/json' })
  res.write(JSON.stringify( content.body ))
  
  res.end()
}