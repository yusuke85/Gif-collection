import React, { useEffect, useState } from "react";
import Gif from "./Gif"
import GetGif from "./GetGif";

export default function ListOfGif({
  params }) {
  const { keyword } = params
  const [loarding, setLoarding] = useState(false)

  const [gifs, setGifs] = useState([])

  useEffect(function () {
    setLoarding(true)
    GetGif({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoarding(false)
      })

  }, [keyword])
  if (loarding) return <i>Loardding.......🌪 </i>

  return <>
    {

      gifs.map(({ id, title, url }) =>

        < Gif
          key={id}
          id={id}
          title={title}
          url={url}
        />
      )

    }

  </>

}