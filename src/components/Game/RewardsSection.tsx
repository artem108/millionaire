import React from 'react';
import { RevardsSectionProps } from '../../interfaces';

const RevardsSection = ({ rewards, currentReward, showMobileMenu }: RevardsSectionProps) => (
  <div className={`rewardsContainer ${showMobileMenu ? 'showMobileRewards' : ''}`}>
    {
    rewards.map((reward: number) => <div className={`reward ${currentReward === reward ? 'orangeBorder' : 'greyBorder'}`} key={reward}>{`$${reward}`}</div>)
    }
  </div>
);

export default RevardsSection;
