import { ResponseFilterModel } from "../models/response-filter-episode-model"
import { repositoryPodcast } from "../repositories/podcast-repository"
import { HttpStatusCode } from "../routes/utils/http-status-code"

export const filterEpisodes = async(podcastName: string | undefined): Promise<ResponseFilterModel> => {

  let responseFormat: ResponseFilterModel = {
    statusCode: 0,
    body: []
  }
  
  const query = podcastName?.split("?p=")[1] || ""
  const queryString = query.toLowerCase()

  const data = await repositoryPodcast(queryString)

  if(data.length !== 0) {
    responseFormat.statusCode = HttpStatusCode.OK
  } else {
    responseFormat.statusCode = HttpStatusCode.NoContent
  }

  responseFormat.body = data

  return responseFormat
}