import { Tab, Tabs, Paper } from "@material-ui/core";
import { useState } from "react";
import SimpleInputField from "./simpleInputField";

const MainStatsEqui = () => {
  const [tabState, setTabState] = useState(0);
  const tabData = [
    { label: "Monster Life" },
    { label: "Union" },
    { label: "Guild Skills" },
    { label: "Character stats" },
  ];
  const [monsterLifeStats, setMonsterLifeStats] = useState([
    { id: "mon-life-boss", name: "Boss Damage", value: "" },
    { id: "mon-life-damage", name: "Damage", value: "" },
    { id: "mon-life-ied", name: "IED", value: "" },
  ]);

  const [guildSkillsStats, setGuildSkillsStats] = useState([
    { id: "guild-skills-boss", name: "Boss Damage", value: "" },
    { id: "guild-skills-damage", name: "Damage", value: "" },
    { id: "guild-skills-ied", name: "IED", value: "" },
  ]);

  const [charStats, setCharStats] = useState([
    { id: "char-level", name: "Level", value: "" },
    { id: "char-hyper-str", name: "Str", value: "", level: 0 },
    { id: "char-hyper-dex", name: "Dex", value: "", level: 0 },
    { id: "char-hyper-int", name: "Int", value: "", level: 0 },
    { id: "char-hyper-luk", name: "Luk", value: "", level: 0 },
    { id: "char-hyper-hp", name: "Hp", value: "", level: 0 },
    { id: "char-hyper-mp", name: "Mp", value: "", level: 0 },
    { id: "char-hyper-force", name: "DF/TF/PP/SE", value: "", level: 0 },
    { id: "char-hyper-crit-rate", name: "Crit Rate", value: "", level: 0 },
    { id: "char-hyper-crit-dmg", name: "Crit Dmg", value: "", level: 0 },
    { id: "char-hyper-ied", name: "IED", value: "", level: 0 },
    { id: "char-hyper-dmg", name: "Damage", value: "", level: 0 },
    { id: "char-hyper-boss", name: "Boss Damage", value: "", level: 0 },
    { id: "char-hyper-normal-dmg", name: "Normal Damage", value: "", level: 0 },
    {
      id: "char-hyper-stats-resist",
      name: "Status Resistance",
      value: "",
      level: 0,
    },
    { id: "char-hyper-att/matt", name: "Att/Matt", value: "", level: 0 },
    { id: "char-hyper-exp", name: "Earned Exp", value: "", level: 0 },
    { id: "char-hyper-arcane", name: "Arcane Force", value: "", level: 0 },
  ]);

  const updateField = (stateSetter, fieldId, value) => {
    stateSetter((prevState) =>
      prevState.map((field) =>
        field.id === fieldId ? { ...field, value } : field
      )
    );
    console.log(fieldId);
  };

  const renderInputFields = (fields, onFieldChange) => {
    return fields.map((field) => (
      <SimpleInputField
        key={field.id}
        fieldData={field}
        onFieldChange={onFieldChange}
      />
    ));
  };

  // const handleMonsterLifeStats = (fieldId, value) => {
  //   setMonsterLifeStats((prevState) =>
  //     prevState.map((field) =>
  //       field.id === fieldId ? { ...field, value } : field
  //     )
  //   );
  //   console.log(monsterLifeStats);
  // };

  // const handleGuildSkillsStats = (fieldId, value) => {
  //   setGuildSkillsStats((prevState) =>
  //     prevState.map((field) =>
  //       field.id === fieldId ? { ...field, value } : field
  //     )
  //   );

  //   console.log(guildSkillsStats);
  // };

  // const handleCharStats = (fieldId, value) => {
  //   setCharStats((prevState) =>
  //     prevState.map((field) =>
  //       field.id === fieldId ? { ...field, value } : field
  //     )
  //   );

  //   console.log(charStats);
  // };

  return (
    <>
      <Paper>
        <Tabs
          value={tabState}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, newValue) => {
            setTabState(newValue);
          }}
          aria-label="tabs"
        >
          {tabData.map((tab) => (
            <Tab key={tab.label} label={tab.label} />
          ))}
        </Tabs>
      </Paper>
      {tabState === 0 && (
        <div key={0}>
          {renderInputFields(monsterLifeStats, (fieldId, value) =>
            updateField(setMonsterLifeStats, fieldId, value)
          )}
        </div>
      )}
      {tabState === 2 && (
        <div key={2}>
          {renderInputFields(guildSkillsStats, (fieldId, value) =>
            updateField(setGuildSkillsStats, fieldId, value)
          )}
        </div>
      )}

      {tabState === 3 && (
        <div key={3}>
          {renderInputFields(charStats, (fieldId, value) =>
            updateField(setCharStats, fieldId, value)
          )}
        </div>
      )}
      {/* {tabState === 0 && (
        <div key={0}>
          {monsterLifeStats.map((field) => (
            <SimpleInputField
              key={field.id}
              fieldData={field}
              onFieldChange={handleMonsterLifeStats}
            />
          ))}
        </div>
      )}

      {tabState === 2 && (
        <div key={2}>
          {guildSkillsStats.map((field) => (
            <SimpleInputField
              key={field.id}
              fieldData={field}
              onFieldChange={handleGuildSkillsStats}
            />
          ))}
        </div>
      )}

      {tabState === 3 && (
        <div key={3}>
          {charStats.map((field) => (
            <SimpleInputField
              key={field.id}
              fieldData={field}
              onFieldChange={handleCharStats}
            />
          ))}
        </div>
      )} */}
    </>
  );
};

export default MainStatsEqui;
