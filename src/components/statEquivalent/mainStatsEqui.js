import { Tab, Tabs, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import SimpleInputField from "./simpleInputField";
import StatsDashboard from "./statsDashboard";
import UnionTable from "./unionTable";

const MainStatsEqui = () => {
  const [tabState, setTabState] = useState(0);

  const [stats, setStats] = useState([
    { id: "stats-range-min", name: "Range", value: 1234654 },
    { id: "stats-range-max", name: "Range", value: 2234654 },
    { id: "stats-damage", name: "Damage", value: "" },
    { id: "stats-boss-dmg", name: "Boss Damage", value: "" },
    { id: "stats-final-dmg", name: "Final Damage", value: "" },
    { id: "stats-buff-duration", name: "Buff Duration", value: "" },
    { id: "stats-ied", name: "Ignore Def", value: "" },
    { id: "stats-item-dr", name: "Item Drop Rate", value: "" },
    { id: "stats-crit-rate", name: "Crit Rate", value: "" },
    { id: "stats-meso-dr", name: "Meso Drop Rate", value: "" },
    { id: "stats-crit-dmg", name: "Crit Damage", value: "" },
    { id: "stats-att", name: "Att", value: "" },
    { id: "stats-matt", name: "Matt", value: "" },
    { id: "stats-hp", name: "Hp", value: "" },
    { id: "stats-mp", name: "Mp", value: "" },
    { id: "stats-str", name: "Str", value: "", type: "str" },
    { id: "stats-dex", name: "Dex", value: 1000, type: "dex" },
    { id: "stats-int", name: "Int", value: "", type: "int" },
    { id: "stats-luk", name: "Luk", value: 77, type: "luk" },
  ]);

  const tabData = [
    { label: "Main" },
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
    { id: "char-hyper-str", name: "Str", value: "", level: 0, type: "str" },
    { id: "char-hyper-dex", name: "Dex", value: "", level: 0, type: "dex" },
    { id: "char-hyper-int", name: "Int", value: "", level: 0, type: "int" },
    { id: "char-hyper-luk", name: "Luk", value: "", level: 0, type: "luk" },
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

  const [unionEffects, setUnionEffects] = useState([
    {
      id: "union-hero",
      jobType: "Warrior",
      fraction: "Explorer",
      job: "Hero",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final STR +10/20/40/80/100",
      type: "final-str",
    },
    {
      id: "union-paladin",
      jobType: "Warrior",
      fraction: "Explorer",
      job: "Paladin",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final STR +10/20/40/80/100",
      type: "final-str",
    },
    {
      id: "union-dark-knight",
      jobType: "Warrior",
      fraction: "Explorer",
      job: "Dark Knight",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Max HP +2%/3%/4%/5%/6%",
      type: "hp-percent",
    },
    {
      id: "union-fire-poison",
      jobType: "Magician",
      fraction: "Explorer",
      job: "Fire Poison",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Max MP +2%/3%/4%/5%/6%",
      type: "mp-percent",
    },
    {
      id: "union-ice-lightning",
      jobType: "Magician",
      fraction: "Explorer",
      job: "Ice Lightning",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final INT +10/20/40/80/100",
      type: "final-int",
    },
    {
      id: "union-bishop",
      jobType: "Magician",
      fraction: "Explorer",
      job: "Bishop",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final INT +10/20/40/80/100",
      type: "final-int",
    },
    {
      id: "union-bowmaster",
      jobType: "Bowman",
      fraction: "Explorer",
      job: "Bowmaster",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final DEX +10/20/40/80/100",
      type: "final-dex",
    },
    {
      id: "union-crossbow-master",
      jobType: "Bowman",
      fraction: "Explorer",
      job: "Crossbow Master",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Critical Rate +1%/2%/3%/4%/5%",
      type: "crit-rate",
    },
    {
      id: "union-pathfinder",
      jobType: "Bowman",
      fraction: "Explorer",
      job: "Pathfinder",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final DEX +10/20/40/80/100",
      type: "final-dex",
    },
    {
      id: "union-night-lord",
      jobType: "Thief",
      fraction: "Explorer",
      job: "Night Lord",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Critical Rate +1%/2%/3%/4%/5%",
      type: "crit-rate",
    },
    {
      id: "union-shadower",
      jobType: "Thief",
      fraction: "Explorer",
      job: "Shadower",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final LUK +10/20/40/80/100",
      type: "final-luk",
    },
    {
      id: "union-dual-blade",
      jobType: "Thief",
      fraction: "Explorer",
      job: "Dual Blade",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final LUK +10/20/40/80/100",
      type: "final-luk",
    },
    {
      id: "union-viper",
      jobType: "Pirate",
      fraction: "Explorer",
      job: "Viper",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final STR +10/20/40/80/100",
      type: "final-str",
    },
    {
      id: "union-captain",
      jobType: "Pirate",
      fraction: "Explorer",
      job: "Captain",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Summon Duration +4%/6%/8%/10%/12%",
      type: "summon-duration",
    },
    {
      id: "union-cannon-shooter",
      jobType: "Pirate",
      fraction: "Explorer",
      job: "Cannon Shooter",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final STR +10/20/40/80/100",
      type: "final-str",
    },
    {
      id: "union-mihile",
      jobType: "Warrior",
      fraction: "Cygnus Knights",
      job: "Mihile",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final HP +250/500/1,000/2,000/2,500",
      type: "final-hp",
    },
    {
      id: "union-soul-master",
      jobType: "Warrior",
      fraction: "Cygnus Knights",
      job: "Soul Master",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final HP +250/500/1,000/2,000/2,500",
      type: "final-hp",
    },
    {
      id: "union-flame-wizard",
      jobType: "Magician",
      fraction: "Cygnus Knights",
      job: "Flame Wizard",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final INT +10/20/40/80/100",
      type: "final-int",
    },
    {
      id: "union-wind-breaker",
      jobType: "Bowman",
      fraction: "Cygnus Knights",
      job: "Wind Breaker",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final DEX +10/20/40/80/100",
      type: "final-dex",
    },
    {
      id: "union-night-walker",
      jobType: "Thief",
      fraction: "Cygnus Knights",
      job: "Night Walker",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final LUK +10/20/40/80/100",
      type: "final-luk",
    },
    {
      id: "union-striker",
      jobType: "Pirate",
      fraction: "Cygnus Knights",
      job: "Striker",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final STR +10/20/40/80/100",
      type: "final-str",
    },
    {
      id: "union-aran",
      jobType: "Warrior",
      fraction: "Heroes",
      job: "Aran",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Heal 2%/4%/6%/8%/10% of Pure HP when attacking every 10 seconds",
      type: "heal-hp",
    },
    {
      id: "union-evan",
      jobType: "Magician",
      fraction: "Heroes",
      job: "Evan",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Heal 2%/4%/6%/8%/10% of Pure MP when attacking every 10 seconds",
      type: "heal-mp",
    },
    {
      id: "union-luminous",
      jobType: "Magician",
      fraction: "Heroes",
      job: "Luminous",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final INT +10/20/40/80/100",
      type: "final-int",
    },
    {
      id: "union-mercedes",
      jobType: "Bowman",
      fraction: "Heroes",
      job: "Mercedes",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect:
        "Skill Cooldown -2%/3%/4%/5%/6% (applied before Potential cooldown reductions, minimum cooldown 1 second, additive with Cooldown Cutter Hypers)",
      type: "cdr",
    },
    {
      id: "union-phantom",
      jobType: "Thief",
      fraction: "Heroes",
      job: "Phantom",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Monster mesos drop +1%/2%/3%/4%/5%",
      type: "mesos-drop",
    },
    {
      id: "union-eunwol",
      jobType: "Pirate",
      fraction: "Heroes",
      job: "Eunwol",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Critical Damage +1%/2%/3%/5%/6%",
      type: "crit-dmg",
    },
    {
      id: "union-demon-slayer",
      jobType: "Warrior",
      fraction: "Resistance",
      job: "Demon Slayer",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Abnormal Status Resistance +1/2/3/4/5",
      type: "status-resistance",
    },
    {
      id: "union-demon-avenger",
      jobType: "Warrior",
      fraction: "Resistance",
      job: "Demon Avenger",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Damage to Boss Monsters +1%/2%/3%/5%/6%",
      type: "boss",
    },
    {
      id: "union-blaster",
      jobType: "Warrior",
      fraction: "Resistance",
      job: "Blaster",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Ignore DEF +1%/2%/3%/5%/6%",
      type: "ied",
    },
    {
      id: "union-battle-mage",
      jobType: "Magician",
      fraction: "Resistance",
      job: "Battle Mage",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final INT +10/20/40/80/100",
      type: "final-int",
    },
    {
      id: "union-wild-hunter",
      jobType: "Bowman",
      fraction: "Resistance",
      job: "Wild Hunter",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "20% chance to increase Damage by 4%/8%/12%/16%/20%",
      type: "increase-dmg",
    },
    {
      id: "union-mechanic",
      jobType: "Pirate",
      fraction: "Resistance",
      job: "Mechanic",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Buff Duration +5%/10%/15%/20%/25%",
      type: "buff-duration",
    },
    {
      id: "union-xenon",
      jobType: "Thief/Pirate",
      fraction: "Resistance",
      job: "Xenon",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final STR, Final DEX and Final LUK +5/10/20/40/50",
      type: "final-str-dex-luk",
    },
    {
      id: "union-kaiser",
      jobType: "Warrior",
      fraction: "Nova",
      job: "Kaiser",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final STR +10/20/40/80/100",
      type: "final-str",
    },
    {
      id: "union-angelic-buster",
      jobType: "Pirate",
      fraction: "Nova",
      job: "Angelic Buster",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final DEX +10/20/40/80/100",
      type: "final-dex",
    },
    {
      id: "union-zero",
      jobType: "Warrior",
      fraction: "Child of God",
      job: "Zero",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Monster EXP +4%/6%/8%/10%/12%",
      type: "exp",
    },
    {
      id: "union-kinesis",
      jobType: "Magician",
      fraction: "Supernatural",
      job: "Kinesis",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final INT +10/20/40/80/100",
      type: "final-int",
    },
    {
      id: "union-hayato",
      jobType: "Warrior",
      fraction: "Sengoku",
      job: "Hayato",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Critical Damage +1%/2%/3%/5%/6%",
      type: "crit-dmg",
    },
    {
      id: "union-kanna",
      jobType: "Magician",
      fraction: "Sengoku",
      job: "Kanna",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Damage to Boss Monsters +1%/2%/3%/5%/6%",
      type: "boss",
    },
    {
      id: "union-cadena",
      jobType: "Thief",
      fraction: "Nova",
      job: "Cadena",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final LUK +10/20/40/80/100",
      type: "final-luk",
    },
    {
      id: "union-illium",
      jobType: "Magician",
      fraction: "Flora",
      job: "Illium",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final INT +10/20/40/80/100",
      type: "final-int",
    },
    {
      id: "union-ark",
      jobType: "Pirate",
      fraction: "Flora",
      job: "Ark",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final STR +10/20/40/80/100",
      type: "final-str",
    },
    {
      id: "union-ho-young",
      jobType: "Thief",
      fraction: "Anima",
      job: "Ho Young",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final LUK +10/20/40/80/100",
      type: "final-luk",
    },
    {
      id: "union-adele",
      jobType: "Warrior",
      fraction: "Flora",
      job: "Adele",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final STR +10/20/40/80/100",
      type: "final-str",
    },
    {
      id: "union-kaine",
      jobType: "Bowman",
      fraction: "Nova",
      job: "Kaine",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final DEX +10/20/40/80/100",
      type: "final-dex",
    },
    {
      id: "union-lara",
      jobType: "Magician",
      fraction: "Anima",
      job: "Lara",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final INT +10/20/40/80/100",
      type: "final-int",
    },
    {
      id: "union-khali",
      jobType: "Thief",
      fraction: "Flora",
      job: "Khali",
      selected: false,
      value: "B",
      list: "B, A, S, SS, SSS",
      effect: "Final LUK +10/20/40/80/100",
      type: "final-luk",
    },
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

  const updateRowSelection = (stateSetter, fieldId) => {
    stateSetter((prevState) =>
      prevState.map((field) =>
        field.id === fieldId ? { ...field, selected: !field.selected } : field
      )
    );
    console.log(fieldId);
  };

  // Function to calculate the total value for a specific stat type
  const calculateTotalStat = (statType) => {
    const statSources = [...charStats, ...guildSkillsStats];

    const totalStatValue = statSources
      .filter((stat) => stat.type === statType)
      .reduce((total, stat) => total + Number(stat.value), 0);

    return totalStatValue;
  };

  useEffect(() => {
    setStats((prevStats) => {
      const updatedStats = [...prevStats];

      // Loop through stat types: "str", "dex", "int", "luk"
      const statTypes = ["str", "dex", "int", "luk"];

      statTypes.forEach((statType) => {
        // Find the index of the stat you want to update
        const statIndex = updatedStats.findIndex(
          (stat) => stat.type === statType
        );

        if (statIndex !== -1) {
          // Update the value of the stat in the array
          updatedStats[statIndex].value = calculateTotalStat(statType);
        }
      });

      return updatedStats;
    });
  }, [charStats, guildSkillsStats]);

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
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "96%",
          maxWidth: "1100px",
          margin: "10px auto",
        }}
      >
        {tabState === 0 && (
          <div key={0} style={{ width: "95%" }}>
            <StatsDashboard stats={stats} />
          </div>
        )}
        {tabState === 1 && (
          <div key={1}>
            {renderInputFields(monsterLifeStats, (fieldId, value) =>
              updateField(setMonsterLifeStats, fieldId, value)
            )}
          </div>
        )}
        {tabState === 2 && (
          <div key={2}>
            {
              <UnionTable
                unionEffects={unionEffects}
                onFieldChange={(fieldId, value) =>
                  updateField(setUnionEffects, fieldId, value)
                }
                onRowSelect={(fieldId) =>
                  updateRowSelection(setUnionEffects, fieldId)
                }
              />
            }
          </div>
        )}
        {tabState === 3 && (
          <div key={3}>
            {renderInputFields(guildSkillsStats, (fieldId, value) =>
              updateField(setGuildSkillsStats, fieldId, value)
            )}
          </div>
        )}

        {tabState === 4 && (
          <div key={4}>
            {renderInputFields(charStats, (fieldId, value) =>
              updateField(setCharStats, fieldId, value)
            )}
          </div>
        )}
      </Paper>
    </>
  );
};

export default MainStatsEqui;
