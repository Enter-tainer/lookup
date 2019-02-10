interface IDefination {
  def: string,
  pos: string
}

interface ISamples {
  eng: string,
  chn: string,
  mp3Url: string,
  mp4Url?: string
}

interface IPronunciation {
  AmE: string,
  AmEmp3: string,
  BrE: string,
  BrEmp3: string
}

interface IQueryResult {
  word: string,
  pronunciation: IPronunciation
  defs: IDefination[]
  sams: ISamples[]
}

export { IQueryResult, IDefination, IPronunciation, ISamples }
