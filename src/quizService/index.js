const qBank = [
  {
    question: "The earliest signs of autism can appear at 6 months",
    answers: ["True", "False"],
    correct: "True",
    questionId: "1"
  },
  {
    question:
      "The American Academy of Pediatrics recommends autism screening at all 18- and 24-month well-child visits and anytime a parent or doctor has concerns.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "2"
  },
  {
    question: "IEP stands for Individualized Education Program",
    answers: ["True", "False"],
    correct: "True",
    questionId: "3"
  },
  {
    question: "Girls are diagnosed with autism more than boys.",
    answers: ["True", "False"],
    correct: "False",
    questionId: "4"
  },
  {
    question: "1 in 68 American children are on the autism spectrum.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "5"
  },
  {
    question:
      "An estimated 1 out of 42 boys are diagnosed with autism in the United States.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "6"
  },
  {
    question:
      "An estimated 1 out of 189 girls are diagnosed with autism in the United States.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "7"
  },
  {
    question:
      "Autism Spectrum Disorder affects over 3.5 million individuals in the U.S.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "8"
  },
  {
    question: "Autism is caused by bad parenting.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "9"
  },
  {
    question:
      "Autism was included in the Developmental Disabilities Act of 1976.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "10"
  }
];

export default (n = 10) =>
  Promise.resolve(qBank.sort(() => 0.2 - Math.random()).slice(0, n));
