import { useEffect, useState } from "react"

export const getAllShows = async () => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`)
    const data = await response.json()
    return data

}
