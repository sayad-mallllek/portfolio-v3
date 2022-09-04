import Link from 'next/link'
import { GiPillow } from 'react-icons/gi'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover svg {
    animation: shake 500ms infinite linear;
  }

  .sleeping {
    width: 40px;
    height: 40px;
    position: absolute;

    span {
      position: absolute;
      left: 10px;
      opacity: 0;
      font-size: 20px;
      animation: sleep 9s infinite linear;
    }

    span:nth-child(2) {
      animation-delay: 3s;
    }

    span:nth-child(3) {
      animation-delay: 6s;
    }
  }

  .sleeping:hover span {
    animation: paused !important;
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-20deg);
    }

    50% {
      transform: rotate(0deg);
    }

    75% {
      transform: rotate(20deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes sleep {
    0% {
      transform: scale(0.3) translate(0, 0);
      opacity: 0;
      color: #c62a88;
    }
    1% {
      opacity: 0;
    }
    3% {
      opacity: 1;
    }
    50% {
      transform: scale(0.65) translate(30%, -100%);
      color: #b794f4;
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: scale(1) translate(60%, -150%);
      opacity: 0;
    }
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox className="name-container">
          <GiPillow className="head-icon" />
          <div class="sleeping">
            <span>z</span>
            <span>z</span>
            <span>z</span>
          </div>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Ibrahim ElZein
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
