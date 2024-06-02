import React from "react"
import { IconExternalLink, IconHeart } from "@tabler/icons-react"

type Props = {
  className?: string
  size?: number
  stroke?: number
  color?: string
}

export const ExternalLinkIcon = (props: Props) => <IconExternalLink {...props} />
export const HeartIcon = (props: Props) => <IconHeart {...props} />
