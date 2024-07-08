import { podcastModel } from "./podcast-model";

export interface ResponseFilterModel {
  statusCode: number,
  body: podcastModel[]

}