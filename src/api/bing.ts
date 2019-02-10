import * as request from 'request-promise-native'

import { IQueryResult } from '../interfaces/query-result'

async function getDefination(word: string, sample = false): Promise<IQueryResult> {
  const url = `https://xtk.azurewebsites.net/BingDictService.aspx?Word=${word}&Samples=${sample}`
  const res = JSON.parse(await request.get(url)) as IQueryResult
  return res
}

export default getDefination
