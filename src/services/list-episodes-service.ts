import { repositoryPodcast } from "../repositories/podcast-repository"

export const listEpisodes = async () => {
  const data = await repositoryPodcast()

  return data  
}