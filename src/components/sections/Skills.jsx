import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const Skill = styled.div`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 12px;
  padding: 24px;
`;

const SkillTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  padding-bottom: 8px;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  padding: 8px 12px;
  background: ${({ theme }) => theme.card_light};
  border-radius: 6px;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Here are my technical skills in data engineering, data science, and analytics.
        </Desc>

        <SkillsContainer>
          {skills.map((skillCategory, index) => (
            <Skill key={`skill-category-${index}`}>
              <SkillTitle>{skillCategory.category}</SkillTitle>
              <SkillList>
                {skillCategory.skills.map((skill, skillIndex) => (
                  <SkillItem key={`skill-${skillIndex}`}>
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
