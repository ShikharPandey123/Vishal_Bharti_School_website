import React from "react";
import "./Assessment.css"; // Updated styles similar to Rules.css

const Assessment = () => {
  const assessmentData = [
    {
      title: "Internal Evaluation System",
      content: [
        {
          sectionTitle: "L.K.G., U.K.G., and II",
          items: [
            "Students will be evaluated through their everyday work, class response, participation in various co-scholastic activities, and writing skills.",
            "Only worksheets will be given.",
            "Evaluation will be divided into both terms.",
          ],
        },
        {
          sectionTitle: "Classes III-V",
          items: [
            "Evaluation is divided into two terms.",
            "Periodic tests and internal assessments will be conducted.",
            "Internal assessment includes language skills (reading, speaking, listening, and writing), project work, notebooks, holiday homework, activities, quizzes, O.T.B.A., portfolios, and subject enrichment.",
          ],
        },
        {
          sectionTitle: "Classes VI-XII",
          items: [
            "The examination pattern for Class XI will include Unit Tests, Half-Yearly, and Annual examinations, each of 80 marks.",
            "Marks allocated for internal assessment (20 marks) will include Unit Tests, OTBA, projects, portfolios, notebooks, subject enrichment activities, quizzes, and Pre-Board examinations.",
            "75% attendance is mandatory for appearing in the Annual Examination.",
          ],
        },
      ],
    },
    {
      title: "Subject Options for Class XI",
      content: [
        {
          sectionTitle: "Science Stream",
          items: [
            "Medical: English, Physics, Chemistry, Biology, Maths, I.P., Physical Education.",
            "Engineering: English, Physics, Chemistry, Maths, CS, Physical Education.",
          ],
        },
        {
          sectionTitle: "Commerce Stream",
          items: [
            "With Maths: English, Maths, Accountancy, Business Studies, Economics, Physical Education.",
            "Without Maths: English, IT/Physical Education, Accountancy, Business Studies, Economics.",
          ],
        },
        {
          sectionTitle: "Arts/Humanities",
          items: [
            "English Core, Hindi Elective, Political Science, Economics, Sociology, Physical Education.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="assessment-page">
      <div className="assessment-container page-transition">
        {assessmentData.map((section, index) => (
          <div key={index} className="assessment-section fade-in">
            <h2>{section.title}</h2>
            <ul className="assessment-list">
              {section.content.map((contentItem, contentIndex) => (
                <div key={contentIndex}>
                  <h3>{contentItem.sectionTitle}</h3>
                  <ul>
                    {contentItem.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessment;
