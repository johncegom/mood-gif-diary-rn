import React from 'react';
import { Svg, Rect, Path, Circle, G } from 'react-native-svg';

const Logo = ({ size = 80 }) => (
  <Svg width={size} height={size} viewBox="0 0 80 80">
    {/* Diary book shape */}
    <Rect x="10" y="15" width="60" height="50" rx="10" fill="#6C63FF" />
    {/* Book spine */}
    <Rect x="10" y="15" width="8" height="50" rx="4" fill="#FF6584" />
    {/* Smile (mood) */}
    <Path
      d="M35 50 Q40 58 45 50"
      stroke="#FFFBEA"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    {/* Eyes */}
    <Circle cx="33" cy="40" r="2.2" fill="#FFFBEA" />
    <Circle cx="47" cy="40" r="2.2" fill="#FFFBEA" />
    {/* Sparkle (GIF effect) */}
    <G>
      <Path
        d="M65 25 L67 29 L71 29 L68 32 L70 36 L65 33 L60 36 L62 32 L59 29 L63 29 Z"
        fill="#FFD700"
        opacity="0.8"
      />
    </G>
  </Svg>
);

export default Logo;
