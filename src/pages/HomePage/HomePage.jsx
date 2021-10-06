import React from "react"
import { Box } from "@mui/system"
import { Title, StyledButton } from "./HomePageStyledComponents"

const HomePage = () => {
  return (
    <Box>
      <Title variant="h1">Hello! This is MdeMora Skeleton</Title>
      <StyledButton variant="outlined">I&apos;m a test button!</StyledButton>
    </Box>
  )
}

export default HomePage
