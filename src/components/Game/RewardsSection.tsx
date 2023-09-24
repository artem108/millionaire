import React from 'react';

const RevardsSection = ({ rewards, currentReward, showMobileMenu }: any) => (
  <div className={`rewardsContainer ${showMobileMenu ? 'showMobileRewards' : ''}`}>
    {
    rewards.map((reward: number) => <div className={`reward ${currentReward === reward ? 'orangeBorder' : 'greyBorder'}`} key={reward}>{`$${reward}`}</div>)
    }
  </div>
);

export default RevardsSection;
