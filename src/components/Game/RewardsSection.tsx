import React from 'react';

const RevardsSection = ({ rewards, currentReward }: any) => (
  <div className="rewardsContainer">
    {
    rewards.map((reward: number) => <div className={`reward ${currentReward === reward ? 'orangeBorder' : 'greyBorder'}`} key={reward}>{`$${reward}`}</div>)
    }
  </div>
);

export default RevardsSection;
