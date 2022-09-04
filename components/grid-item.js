import Image from 'next/image'
import { Box, Text, LinkBox, Heading } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <Text mt={2}>{title}</Text>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, date, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox>
      <Image
        src={thumbnail}
        alt={title}
        width={100}
        height={100}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <Text mt={2} fontSize={20}>
        {title}
      </Text>
      <Heading as="h4" fontSize="16" color="whiteAlpha.700" mt={1} mb={2}>
        {date}
      </Heading>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
