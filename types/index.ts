export interface Root {
  type: string
  name: string
  lat_lng: string
  distance_m: number
  distance_mi: number
  phone: string
  email: string
  foodbank: Foodbank
  needs: Needs
  address: string
  postcode: string
  politics: Politics
  urls: Urls3
}

export interface Foodbank {
  name: string
  slug: string
  network: string
  urls: Urls
}

export interface Urls {
  self: string
  html: string
}

export interface Needs {
  id: string
  needs: string
  excess: string
  number: number
  found: string
}

export interface Politics {
  parliamentary_constituency: string
  mp: string
  mp_party: string
  mp_parl_id: number
  ward: string
  district: string
  urls: Urls2
}

export interface Urls2 {
  self: string
  html: string
}

export interface Urls3 {
  html: string
}
