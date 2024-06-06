import { Container, Text, VStack, Box, Heading, Image, IconButton, HStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const newsArticles = [
  {
    title: "Breaking News: Market Hits All-Time High",
    content: "The stock market reached an all-time high today, with major indices showing significant gains...",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE3MTc2ODkwMTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Sports Update: Local Team Wins Championship",
    content: "In an exciting final match, the local team clinched the championship title...",
    image: "https://images.unsplash.com/photo-1525973132219-a04334a76080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjaGFtcGlvbnNoaXB8ZW58MHx8fHwxNzE3Njg5MDE5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Weather Alert: Heavy Rain Expected Tomorrow",
    content: "Meteorologists are predicting heavy rainfall in the region tomorrow, urging residents to take precautions...",
    image: "https://images.unsplash.com/photo-1513774775025-b2612b7ec096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHJhaW58ZW58MHx8fHwxNzE3Njg5MDIwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % newsArticles.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + newsArticles.length) % newsArticles.length);
  };

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          News Today
        </Heading>
        <Box w="100%" h="400px" position="relative">
          <Image src={newsArticles[currentImageIndex].image} alt="News Image" objectFit="cover" w="100%" h="100%" borderRadius="md" />
          <HStack position="absolute" top="50%" transform="translateY(-50%)" w="100%" justifyContent="space-between" px={4}>
            <IconButton aria-label="Previous Image" icon={<FaArrowLeft />} onClick={handlePrevImage} />
            <IconButton aria-label="Next Image" icon={<FaArrowRight />} onClick={handleNextImage} />
          </HStack>
        </Box>
        <VStack spacing={4} align="start" w="100%">
          {newsArticles.map((article, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
              <Heading as="h2" size="lg">
                {article.title}
              </Heading>
              <Text mt={2}>{article.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
