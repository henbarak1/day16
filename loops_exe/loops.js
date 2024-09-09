// 1. Calculate Total Player Experience
const experiencePoints1 = [100, 150, 75];
let sum = 0;
for(let i = 0; i<experiencePoints1.length;i++)
{
    sum+=experiencePoints1[i];
}
console.log(sum)

// 2. Locate Quest by Title

const questTitles2 = [
  'Quest 1',
  'Quest 2',
  'Quest 3',
];

for(let i = 0; i<questTitles2.length;i++)
    {
        if(questTitles2[i] == 'Quest 2')
        {
            console.log(i);
        }
    }

// 3. List Enemies Above Health Threshold
let index3 = 0;
const enemyHealths3 = [80, 120, 65];
for(let i = 0; i<enemyHealths3.length;i++)
    {
        if(enemyHealths3[i] >100 )
        {
            console.log(i);
        }
    }
// 4. Enhance All Quest Rewards
const questRewards4 = [50, 100, 75];
for(let i = 0; i<questRewards4.length;i++)
    {
        questRewards4[i] += 20;
    }
    for(let i = 0; i<questRewards4.length;i++)
        {
            console.log(questRewards4[i]);
        }   
// 5. Count Occurrences of a Specific Reward
const questRewards5 = [50, 100, 75, 100];
const specificReward5 = 100;
let count = 0;
for(let i = 0; i<questRewards5.length;i++)
    {
        if(questRewards5[i] == specificReward5)
            count++; 
    }
    console.log(count)

// 6. Verify All Quests Offer Sufficient Challenge
const questChallenges6 = [120, 150, 75];
const treshold = 100;
let check = true;
for(let i = 0; i<questRewards6.length;i++)
    {
        if(questRewards6[i] <= treshold)
            check = false ;
    }
    console.log(check);
// 7. Discover the Quest with the Maximum Reward
const questRewards7 = [50, 100, 75, 150];
let max = questRewards7[0];
let maxI =1;
for(let i = 1; i<questRewards7.length;i++)
    {
        if(questRewards7[i] >max )
            max = questRewards7[i] ;
        maxI = i;
    }
    console.log(max+" "+maxI)
// 8. Combine Enemy Powers for a Total Assault Value
const enemyPowers8 = [50, 80, 65, 90];
const enemyHealths8 = [80, 120, 60, 100];
let TotalDamage = 0;
for(let i = 1; i<enemyPowers8.length;i++)
    {
        TotalDamage += enemyHealths8[i]-enemyPowers8[i];
    }
    console.log(TotalDamage);
// 9. Calculate Total Experience from Quest Matrix
const questExperienceMatrix9 = [
  [100, 200],
  [150, 175],
  [120, 250],
];

// 10. Find the Quest with Highest Experience in Each Category
const questExperienceMatrix10 = [
  [100, 200],
  [150, 175],
  [120, 250],
];

// 11. Count High-Difficulty Quests in Each Category
const questDifficultyMatrix11 = [
  [5, 7],
  [8, 6],
  [9, 7],
];

// 12. Sum of Rewards for High-Reward Quests by Category
const questRewardsMatrix12 = [
  [50, 200],
  [300, 175],
  [120, 500],
];

// 13. Average Health of Enemies by Type
const enemyHealthMatrix13 = [
  [80, 120],
  [60, 90],
  [200, 150],
];
