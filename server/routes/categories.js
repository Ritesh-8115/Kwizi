const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const categories = [
    {
      name: "Science",
      description:
        "Explores the wonders of science.",
    },
    {
      name: "Technology",
      description: "Dive into the latest technological advancements.",
    },
    {
      name: "Programming",
      description: "Learn about coding and software development.",
    },
    {
      name: "Computer Science",
      description: "Understand the fundamentals of computers and algorithms.",
    },
    {
      name: "Mathematics",
      description: "Master the language of numbers and patterns.",
    },
    {
      name: "History",
      description: "Discover the events that shaped our world.",
    },
    {
      name: "Art",
      description: "Appreciate creativity through various forms of art.",
    },
    {
      name: "Geography",
      description: "Explore the physical features of our planet.",
    },
    {
      name: "Physics",
      description: "Unravel the laws governing the universe.",
    },
    { name: "Biology", description: "Study the science of living organisms." },
  ];
  res.json(categories);
});

module.exports = router;
