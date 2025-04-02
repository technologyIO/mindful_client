import SelfAssessment from "../../SelfAssessment"


const metaContent = {
    "depression":{
        "title":"Free Depression Test Questionnaire | Mindful TMS",
        "desc":"Feeling low? Take a free self-assessment to check your depression levels. Understand where you stand and explore your next steps—at your own pace.",
    }, 
    "stress":{
        "title":"Free Mental Stress Test | Mindful TMS",
        "desc":"Take a free stress test at Mindful TMS. Get an indication of your current stress levels based on widely used tools—quick, and easy to use.",
    }, 
    "anxiety":{
        "title":"Free Anxiety Test Questionnaire | Mindful TMS",
        "desc":"Take a free anxiety test at Mindful TMS—based on clinically used tools. Get insights into your anxiety level and learn more.",
    }, 
    "phq9":{
        "title":"Free Depression Test Questionnaire | Mindful TMS",
        "desc":"Feeling low? Take a free self-assessment to check your depression levels. Understand where you stand and explore your next steps—at your own pace.",
    }, 
    "pss10":{
        "title":"Free Mental Stress Test | Mindful TMS",
        "desc":"Take a free stress test at Mindful TMS. Get an indication of your current stress levels based on widely used tools—quick, and easy to use.",
    }, 
    "gad7":{
        "title":"Free Anxiety Test Questionnaire | Mindful TMS",
        "desc":"Take a free anxiety test at Mindful TMS—based on clinically used tools. Get insights into your anxiety level and learn more.",
    }, 
}

export const generateMetadata = ({params})=>{
    
    return {
        title: metaContent[params.slugs].title,
     description:`${metaContent[params.slugs].desc}`,
    }
}

const SelfAssesment = ({params}) => {
    console.log("prams", params)
    return (
       <SelfAssessment/>
    );
};

export default SelfAssesment;
