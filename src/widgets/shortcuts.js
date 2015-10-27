import React, { PropTypes } from 'react';


export default function Shortcuts ({ shortcuts }, { theme }) {
  return (
    <text tags="true" bottom={0} style={theme.shortcuts.general}>
      { shortcuts.map(shortcut => ` {${theme.shortcuts.key}-fg}${shortcut.key}{/}-${shortcut.label}`).join('') }
    </text>
  );
}

Shortcuts.propTypes = {
  shortcuts: PropTypes.array.isRequired,
};

Shortcuts.contextTypes = {
  theme: PropTypes.object.isRequired,
};
