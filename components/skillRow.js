import { useState } from 'react'
import {
  Container,
  GridItem,
  Text,
  Progress,
  Collapse,
  Box,
  useMediaQuery
} from '@chakra-ui/react'
import { BiChevronDown } from 'react-icons/bi'

const SkillRow = ({ icon, progressValue, progressColor, text, order = 1 }) => {
  const [rotated, setRotated] = useState(false)
  const isMobile = useMediaQuery('(min-width: 600px)')

  const handleSetRotated = () => {
    setRotated(!rotated)
  }
  return (
    <>
      <GridItem
        colSpan={1}
        onClick={handleSetRotated}
        sx={{
          cursor: 'pointer'
        }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: order * 0.2 }}
      >
        <Container
          height="100%"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          {icon}
        </Container>
      </GridItem>
      <GridItem
        colSpan={5}
        onClick={handleSetRotated}
        sx={{
          cursor: 'pointer'
        }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: order * 0.2 }}
      >
        <Container
          width="100%"
          height="100%"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: order * 0.2 }}
        >
          <Progress
            value={progressValue}
            size="sm"
            colorScheme={progressColor}
            borderRadius={4}
            transitionDuration={1}
          />
        </Container>
      </GridItem>
      <GridItem
        colSpan={1}
        onClick={handleSetRotated}
        sx={{
          cursor: 'pointer'
        }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: order * 0.2 }}
      >
        <BiChevronDown
          fontSize={40}
          style={{
            marginTop: '6px',
            transform: `rotate(${rotated ? '180deg' : '0deg'})`,
            transition: 'transform 200ms linear'
          }}
        />
      </GridItem>
      <GridItem colSpan={7}>
        <Collapse in={rotated} animateOpacity>
          <Box>
            <Text variant="skill-description" mb={3} pl={isMobile ? 6 : 10}>
              {text}
            </Text>
          </Box>
        </Collapse>
      </GridItem>
    </>
  )
}

export default SkillRow
