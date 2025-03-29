
import ShowTestQuestion from '../../ShowTestQuestion'
// Define test data
const tests = [
  {
    title: 'PHQ-9 Depression Test',
    link: '/assesment-page/phq9',
    id: 'phq9',
    condition: "Depression",
    paragraph: `The PHQ-9 consists of 9 questions that ask about feelings of sadness, hopelessness, and loss of interest in activities, among other symptoms.

By answering these questions, you can gain insights into your depressive symptoms and determine if you might benefit from further support or professional help.`
  },
  {
    title: 'PSS-10 Stress Assessment',
    link: '/assesment-page/pss10',
    id: 'pss10',
    condition: "Stress",
    paragraph: `This test measures your perception of stress and how you handle life's challenges.

The PSS-10 consists of 10 questions that ask about your feelings and thoughts during the last month, including how often you felt nervous, stressed, or unable to control important things in your life.`
  },
  {
    title: 'GAD-7 Anxiety Test',
    link: '/assesment-page/gad7',
    id: 'gad7',
    condition: "Anxiety",
    paragraph: `This questionnaire helps you evaluate the severity of your anxiety symptoms over the past two weeks.

The GAD-7 consists of 7 questions that ask about feelings of nervousness, worry, and restlessness, among other symptoms. By answering these questions honestly, you can get a clearer picture of your anxiety levels and determine if you might benefit from further support or professional help.`
  },
  {
    title: 'K10 (Kessler Psychological Distress Scale)',
    link: '/assesment-page/k10',
    id: 'k10',
    paragraph: `The K10 is a simple and effective tool designed to measure your level of psychological distress over the past month. This test can help you gain insights into your mental health, especially if you're feeling anxious, depressed, or generally overwhelmed.

The K10 consists of 10 questions that ask about feelings of nervousness, hopelessness, restlessness, and fatigue, among other symptoms. By answering these questions, you can get a better understanding of your current emotional state and whether you might benefit from further support or professional help.`
  }
];

export const generateMetadata = () => {
  return {
    robots: "noindex, nofollow",
  };
};


const Test = () => {
 
  return (
   <ShowTestQuestion/>
  );
};

export default Test;
