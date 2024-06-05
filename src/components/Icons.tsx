import React from "react"
import { IconExternalLink, IconHeart, IconFileCv, IconBrandX, IconArrowRight, IconArrowBigRight, IconBrandLinkedin, IconBrandGithub, IconMail, IconCode } from "@tabler/icons-react"

type Props = {
  className?: string
  size?: number
  stroke?: number
  color?: string
}

export const ExternalLinkIcon = (props: Props) => <IconExternalLink {...props} />
export const HeartIcon = (props: Props) => <IconHeart {...props} />
export const FileCvIcon = (props: Props) => <IconFileCv {...props} />
export const BrandXIcon = (props: Props) => <IconBrandX {...props} />
export const BrandLinkedinIcon = (props: Props) => <IconBrandLinkedin {...props} />
export const BrandGithubIcon = (props: Props) => <IconBrandGithub {...props} />
export const ArrowBigRightIcon = (props: Props) => <IconArrowBigRight {...props} />
export const ArrowRightIcon = (props: Props) => <IconArrowRight {...props} />
export const MailIcon = (props: Props) => <IconMail {...props} />
export const CodeIcon = (props: Props) => <IconCode {...props} />
