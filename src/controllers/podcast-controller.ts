import { IncomingMessage, ServerResponse} from "node:http"
import { listEpisodes } from "../services/list-episodes-service"
import { filterEpisodes } from "../services/filter-episodes-service"
import { HttpStatusCode } from "../routes/utils/http-status-code"

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await listEpisodes()
  
  res.writeHead(HttpStatusCode.OK, { 'Content-type': 'application/json' })
    res.end(JSON.stringify({
      content
    }))
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await filterEpisodes(req.url)

  res.writeHead(HttpStatusCode.OK, { 'Content-type': 'application/json' })
  res.end(JSON.stringify({
    content
  }))
}