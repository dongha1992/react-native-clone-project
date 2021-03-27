import PersonWhiteBadge from '../../assets/images/svg/icon_person_white.svg';
import officialChallengeMark from '../../assets/images/svg/official_challenge_mark.svg';
import React from 'react';

const icons = {
  icon_person_white: PersonWhiteBadge,
  official_challenge_mark: officialChallengeMark,
};

const SVGIcon = ({icon, size, width, height, style, stroke}) => {
  const Icon = icons[icon];

  if (Icon) {
    return (
      <Icon
        width={width || size}
        height={height || size}
        style={style}
        stroke={stroke}
      />
    );
  }
  return null;
};

export default SVGIcon;
