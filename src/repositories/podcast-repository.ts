import fs from 'fs'
import path from 'path'
import { podcastModel } from '../models/podcast-model'

export const repositoryPodcast = (podcastName?: string): Promise<podcastModel[]> => {
  
  const way = path.join(__dirname, "../repositories/podcasts.json")
  const data = fs.readFileSync(way, 'utf8')
  let dataJson = JSON.parse(data)
  
  if(podcastName) {
    dataJson = dataJson.filter(
      (episode: podcastModel) => episode.podcastName === podcastName
    )
  }

  return dataJson
}

