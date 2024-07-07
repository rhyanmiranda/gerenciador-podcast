import { IncomingMessage } from "http"
import { repositoryPodcast } from "../repositories/podcast-repository"

export const filterEpisodes = async(podcastName: string | undefined) => {
  
  const query = podcastName?.split("?p=")[1] || ""
  const queryString = query.toLowerCase()

  const data = await repositoryPodcast(queryString)

  return data
}