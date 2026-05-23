import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

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
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 12px;
  padding: 24px 32px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 20px 24px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 16px 20px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillCategory = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
`;

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card_light};
  border-radius: 8px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
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
            <Tilt key={`skill-category-${index}`}>
              <Skill>
                <SkillTitle>{skillCategory.title}</SkillTitle>
                <SkillList>
                  {skillCategory.skills.map((item, index_x) => {
                    if (item.category) {
                      // Render skill categories
                      return (
                        <div key={`category-${index_x}`}>
                          <SkillCategory>{item.category}</SkillCategory>
                          <SkillList>
                            {item.skills.map((subItem, index_sub) => (
                              <SkillItem key={`subItem-${index_sub}`}>
                                {subItem}
                              </SkillItem>
                            ))}
                          </SkillList>
                        </div>
                      );
                    }
                    return (
                      <SkillItem key={`skill-x-${index_x}`}>
                        {item.image && <SkillImage src={item.image} />}
                        {item.name}
                      </SkillItem>
                    );
                  })}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
