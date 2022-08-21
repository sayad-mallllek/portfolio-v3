import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Heading } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, date, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/experience/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          width={100}
          height={100}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/experience/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Heading as="h4" fontSize="16" color="whiteAlpha.700" mt={1} mb={2}>
          {date}
        </Heading>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
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
