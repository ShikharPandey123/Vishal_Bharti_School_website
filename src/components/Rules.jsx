import React from "react";
import "./Rules.css";

const Rules = () => {
  const rulesData = [
    {
      title: "Rules & Regulations",
      content: [
        "Students need to attend school regularly and punctually.",
        "Every student must bring their school diary daily and without fail.",
        "Students who come to school in their own transport should not reach before 7:25 am.",
        "School gates will be open at 7:25 am and closed at 8:00 am.",
        "The bell signals all students to go to their respective classrooms.",
        "Students should enter classrooms silently, without jostling or pushing.",
        "The school uniform must be worn on all school days and at all school functions.",
        "Students should not be shabbily dressed.",
        "Care should be taken not to disfigure or damage school property.",
        "Any loss or damage to school property due to wanton destruction or carelessness will lead to the imposition of a fine and recovery of cost.",
        "No books (other than text or library books), magazines, or periodicals may be brought to the school without the Principal’s permission.",
        "Children are not allowed to bring valuables (gold, precious ornaments, electrical gadgets, cash, etc.) to the school.",
        "The school is not responsible for articles/personal belongings lost by students.",
        "Parents must fill up the record for non-attendance for each day the student is absent, stating the reason for the absence.",
        "Parents/Guardians are not allowed to meet their wards or teachers in classrooms during school hours.",
        "Prior permission is required from the Principal in case of emergencies.",
        "Parents must inform the school immediately if there is any change in their address and/or telephone number.",
        "No student is allowed to leave the class or school premises during school hours without the permission of the class teacher and the Principal.",
        "The school insists on maintaining strict discipline.",
        "Any child who violates the school's rules of discipline will not be allowed to attend the school.",
        "The Principal reserves the right to dismiss any student without assigning any reason.",
      ],
    },
    {
      title: "School Timing",
      content: [
        "Students who come to school in their own transport should not reach before 7:25 am.",
        "School gates will be open at 7:25 am and closed at 8:00 am.",
      ],
    },
    {
      title: "Uniform",
      content: [
        {
          sectionTitle: "Summer Uniform (Pre-Primary to XII)",
          items: [
            "Red/Beige checked half sleeves shirt.",
            "Beige Shorts for the boys of classes I - V.",
            "Beige Pants for the boys of classes VI - XII.",
            "Beige Divider Skirts for Girls (Beige cycle shorts compulsory).",
            "Red/Beige Fabric belt.",
            "Beige socks with red stripe.",
            "Black Gola Shoes.",
          ],
        },
        {
          sectionTitle: "Winter Uniform (Pre-Primary to XII)",
          items: [
            "Red/Beige checked full sleeves shirt.",
            "Beige Pants for classes I - XII (Boys).",
            "Beige Divider Skirts for classes I - XII (Girls).",
            "Red Sweater with Beige Stripes.",
            "School Blazer.",
            "Red/Beige Fabric belt.",
            "Beige socks with red stripe.",
            "Black Gola Shoes.",
          ],
        },
        {
          sectionTitle: "Winter House Uniform (To be worn on Wed and Sat)",
          items: [
            "T-Shirt of House Colour.",
            "White colour shorts for boys (I-V).",
            "White colour Pants for boys (VI-XII).",
            "White Colour Divider Skirts for Girls (I-XII).",
            "White socks with House colour stripes.",
            "White Tennis / Fleet Shoes.",
          ],
        },
      ],
    },
    {
      title: "Attendance",
      content: [
        {
          sectionTitle: "General Attendance Rules",
          items: [
            "The first bell rings at 7:50 A.M., and all students are required to be in school by/before the first bell.",
            "At 7:50, roll call is marked by the class teacher in the home room period.",
            "The school gate is closed at 8:00 A.M., and no latecomers are allowed in the school premises after this time.",
            "It is compulsory for all students to attend the morning assembly.",
            "Attendance is compulsory for every school program, activity, or function as applicable.",
          ],
        },
        {
          sectionTitle: "Attendance for Promotion",
          items: [
            "75% attendance is compulsory for promotion.",
            "There is a prize for full attendance awarded at the time of the annual function.",
          ],
        },
        {
          sectionTitle: "Leave Policy",
          items: [
            "Withdrawal of a child during school hours for attending religious/social functions is not allowed.",
            "In case of an emergency, the Principal may be contacted.",
            "No leave of absence is granted except for compelling/unavoidable reasons, subject to a written application submitted well in advance.",
            "Absence for more than five days after vacations renders the student liable to have their name struck off from the rolls.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="rules-page">
      <div className="rules-container page-transition">
        {rulesData.map((section, index) => (
          <div key={index} className="rule-section fade-in">
            <h2>{section.title}</h2>
            <ul className="rules-list">
              {section.content.map((rule, ruleIndex) => {
                if (typeof rule === "string") {
                  return <li key={ruleIndex}>{rule}</li>;
                } else if (typeof rule === "object") {
                  return (
                    <div key={ruleIndex}>
                      <h3>{rule.sectionTitle}</h3>
                      <ul>
                        {rule.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
