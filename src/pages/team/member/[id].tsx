import { BlitzPage, useParam } from "@blitzjs/next"
import React from "react"
import { useStringParam } from "src/utils/utils"

const Team: BlitzPage = () => {
  const id = useStringParam("id")
  return (
    <div>
      <h1>team</h1>
    </div>
  )
}

export default Team
