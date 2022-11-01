import {Square } from '@chakra-ui/react'

type Props = {
  size?: string | undefined
  fontSize?: string | undefined
  padding?: string | undefined
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string | undefined }
  >
  fill?: string | undefined
}

export default function SvgIcon({
  size,
  Icon,
  fontSize,
  padding,
  fill,
}: Props) {
  return (
    <Square size={size} fontSize={fontSize} padding={padding}>
      <Icon fill={fill} />
    </Square>
  )
}
