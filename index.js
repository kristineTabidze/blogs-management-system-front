const scrollToGeneralInfo = () => {
  const coordinates = document.getElementById("generalInfo");
  window.scroll(coordinates.top - 100, 0);
};

const scrollToStatistics = () => {
  const coordinates = document.getElementById("3");
  window.scroll(coordinates.top, 1100);
};

const scrollToQuestions = () => {
  const coordinates = document.getElementById("questions");
  window.scroll(coordinates.top, 10200);
};

const scrollToFooter = () => {
  const coordinates = document.getElementById("footer");
  window.scroll(coordinates.bottom, 15000);
};

const insert = (arr, index, newItem) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index),
];

const numberConvertor = (value) => {
  if (+value > 999999) {
    return (
      value.slice(0, value.length - 6) +
      " " +
      value.slice(value.length - 6, value.length - 3) +
      " " +
      value.slice(value.length - 3)
    );
  } else if (+value > 999)
    return (
      value.slice(0, value.length - 3) + " " + value.slice(value.length - 3)
    );
  else return value;
};

const questions = [
  {
    question: "What is coronavirus? ",
    id: "1",
    answer:
      'Coronaviruses are a large family of viruses that can cause disease in animals or humans. Respiratory infections such as Middle East Respiratory Syndrome (MERS) or Severe Acute Respiratory Syndrome (SARS) can develop in humans. "COVID-19. It was first recorded in December 2019 in Wuhan (China).',
  },
  {
    question: "What are the typical symptoms of coronavirus?",
    id: "2",
    answer:
      "The most common symptoms of COVID-19 are: fever, fatigue, dry cough, shortness of breath. Some patients may have a runny nose, sore throat or diarrhea. It is noteworthy that the symptoms develop gradually. Symptoms. ",
  },
  {
    question: "Who is at risk for COVID-19?",
    id: "3",
    answer:
      "People at risk of contracting the virus include the elderly and those with chronic diseases.",
  },
  {
    question: "How is the coronavirus spread?",
    id: "4",
    answer:
      "The disease is spread from person to person through small droplets coming from the nose, nose or mouth. Drops are spread on objects, clothes… We first touch this surface and then our mouth, eyes or nose, causing the virus to enter our body. No contact was made with the touch. ",
  },
  {
    question: "How to protect yourself from coronavirus?",
    id: "5",
    answer:
      'To protect against coronavirus, we need to follow the following recommendations: Regularly and thoroughly wash your hands with soap and water and / or alcohol-based disinfectants; keep a minimum distance of one meter between us and the speaker; "Let"s cover the bent elbow; try to stay at home as much as possible;',
  },
  {
    question: "What should we do in case of symptoms?",
    id: "6",
    answer:
      "If you have any symptoms, you should contact your doctor immediately. You can consult a doctor by phone, 24 hours a day. Call 112 to contact medical facilities.",
  },
  {
    question: "How is COVID19 diagnosed? ",
    id: "7",
    answer:
      "If the treating physician suspects that the patient may have coronavirus, he or she will undergo a diagnostic test.",
  },
  {
    question: "How much does a coronavirus diagnostic test cost?",
    id: "8",
    answer:
      "Coronavirus diagnostic studies, including specific ones, are fully funded by the state.",
  },
  {
    question: "Which are the high risk countries?",
    id: "9",
    answer:
      "Countries at high risk of spreading COVID-19 are: China, Italy, USA, Spain, Germany, Iran, France, Switzerland, UK, South Korea.",
  },
  {
    question: "How should a newly returned citizen behave in the country?",
    id: "10",
    answer:
      "Every new citizen returning to the country must go through a 14-day quarantine, which may be further extended by self-isolation.",
  },
  {
    question:
      "How should a Georgian citizen living in a foreign country who wants to return to his homeland behave?",
    id: "11",
    answer:
      "A Georgian citizen living in a foreign country who wants to return to his homeland has the opportunity to use Georgian Airlines.",
  },
  {
    question: "In what case does the citizen remain in self-isolation?",
    id: "12",
    answer:
      "If the citizen's living environment is in accordance with the rules of self-isolation according to the epidemiologist, he can spend 14 days in the appropriate environment, and if the environment is not favorable, the citizen will move / remain in the quarantine zone.",
  },
  {
    question:
      "What should a citizen do if he has had contact with a person infected with the virus?",
    id: "13",
    answer:
      "If a citizen had contact with a person infected with the virus, he must follow the rules of self-isolation and immediately call the hotline of the Ministry of Disease Control or Health. Disease Control Hotline: 116 001; Ministry of Health Hotline: 1505",
  },
  {
    question:
      "What are the requirements for coronavirus for people in self-isolation?",
    id: "14",
    answer:
      "You need to be completely isolated from other people; Wash your hands often with soap and water and / or an alcohol-based disinfectant; Use only household items allocated to you;",
  },
  {
    question: "Who issues a certificate to an employed, isolated person?",
    id: "15",
    answer:
      "An employed citizen in isolation has the right to request a certificate equivalent to a hospital certificate issued by the Ministry of Health of Georgia.",
  },
  {
    question:
      "What led to the reduction in the number of pies and the increase in price?",
    id: "16",
    answer:
      "As demand for pyrotechnics has grown colossally around the world, there has been a problem with their supply and price growth. It is noteworthy that work is underway to address the problem.",
  },
];
