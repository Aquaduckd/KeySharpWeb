// Search box and filters UI

import type { SearchSettings } from '../types';
import { setupResponsive } from '../../../foundations/responsive';

/**
 * Create the search panel UI with search input and regex toggle.
 */
export function createSearchPanel(
  container: HTMLElement,
  currentSettings: SearchSettings,
  onSearchChange: (settings: SearchSettings) => void
): void {
  container.innerHTML = '';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '10px';

  // First line: Desktop = Limit + Search + Use Regex + Stats, Mobile = Search + Use Regex
  const searchLine = document.createElement('div');
  searchLine.id = 'search-line';
  searchLine.style.display = 'flex';
  searchLine.style.alignItems = 'center';
  searchLine.style.gap = '10px';
  searchLine.style.justifyContent = 'space-between';
  
  // Responsive: adjust layout for mobile vs desktop
  setupResponsive(
    searchLine,
    () => {
      // Mobile: just search and regex, no limit, no stats
      searchLine.style.gap = '8px';
      searchLine.style.flexWrap = 'nowrap';
      searchLine.style.justifyContent = 'flex-start';
      searchLine.style.width = '100%';
    },
    () => {
      // Desktop: limit, search, regex (left) + stats (right) - all inline
      searchLine.style.gap = '10px';
      searchLine.style.flexWrap = 'nowrap';
      searchLine.style.justifyContent = 'space-between';
      searchLine.style.width = '100%';
    }
  );
  
  // Left section: Limit, Search, Use Regex (desktop) or Search, Use Regex (mobile)
  const leftSection = document.createElement('div');
  leftSection.style.display = 'flex';
  leftSection.style.alignItems = 'center';
  leftSection.style.gap = '10px';
  
  // Responsive: adjust gap and justification for mobile
  setupResponsive(
    leftSection,
    () => {
      // Mobile: space-between to push regex to right, search stays left
      leftSection.style.gap = '8px';
      leftSection.style.flexWrap = 'nowrap';
      leftSection.style.justifyContent = 'space-between';
      leftSection.style.width = '100%';
    },
    () => {
      // Desktop: normal flow, no space-between
      leftSection.style.gap = '10px';
      leftSection.style.flexWrap = 'nowrap';
      leftSection.style.justifyContent = 'flex-start';
      leftSection.style.width = 'auto';
    }
  );

  // Limit input (desktop only - shown inline before search)
  const limitLabel = document.createElement('label');
  limitLabel.textContent = 'Limit:';
  limitLabel.style.fontWeight = 'bold';
  
  // Responsive: hide on mobile, show on desktop
  setupResponsive(
    limitLabel,
    () => {
      limitLabel.style.display = 'none';
    },
    () => {
      limitLabel.style.display = 'inline';
      limitLabel.style.fontSize = '16px';
    }
  );
  
  const limitInput = document.createElement('input');
  limitInput.type = 'number';
  limitInput.id = 'limit-input';
  limitInput.min = '0';
  limitInput.placeholder = 'all';
  limitInput.value = currentSettings.limit > 0 ? currentSettings.limit.toString() : '';
  limitInput.style.width = '80px';
  limitInput.style.padding = '6px 12px';
  limitInput.style.border = '1px solid #ccc';
  limitInput.style.borderRadius = '4px';
  
  // Responsive: hide on mobile, show on desktop
  setupResponsive(
    limitInput,
    () => {
      limitInput.style.display = 'none';
    },
    () => {
      limitInput.style.display = 'inline-block';
      limitInput.style.width = '80px';
      limitInput.style.fontSize = '16px';
      limitInput.style.padding = '6px 12px';
    }
  );
  
  // Add limit to left section (desktop only)
  leftSection.appendChild(limitLabel);
  leftSection.appendChild(limitInput);

  // Search group: label + input
  const searchGroup = document.createElement('div');
  searchGroup.style.display = 'flex';
  searchGroup.style.alignItems = 'center';
  searchGroup.style.gap = '8px';
  
  // Responsive: adjust gap for mobile
  setupResponsive(
    searchGroup,
    () => {
      searchGroup.style.gap = '6px';
    },
    () => {
      searchGroup.style.gap = '8px';
    }
  );

  // Search input
  const searchLabel = document.createElement('label');
  searchLabel.textContent = 'Search:';
  searchLabel.style.fontWeight = 'bold';
  
  // Responsive: smaller font on mobile
  setupResponsive(
    searchLabel,
    () => {
      searchLabel.style.fontSize = '14px';
    },
    () => {
      searchLabel.style.fontSize = '16px';
    }
  );
  
  searchGroup.appendChild(searchLabel);

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'search-input';
  searchInput.placeholder = 'Enter search query...';
  searchInput.value = currentSettings.query;
  searchInput.style.padding = '6px 12px';
  searchInput.style.border = '1px solid #ccc';
  searchInput.style.borderRadius = '4px';
  
  // Responsive: fixed width on both mobile and desktop
  setupResponsive(
    searchInput,
    () => {
      searchInput.style.width = '100px';
      searchInput.style.fontSize = '14px';
      searchInput.style.padding = '5px 8px';
      searchInput.style.flex = '0 0 auto';
    },
    () => {
      searchInput.style.width = '200px';
      searchInput.style.fontSize = '16px';
      searchInput.style.padding = '6px 12px';
      searchInput.style.flex = '0 0 auto';
    }
  );
  
  searchGroup.appendChild(searchInput);
  leftSection.appendChild(searchGroup);

  // Regex group: checkbox + label
  const regexGroup = document.createElement('div');
  regexGroup.style.display = 'flex';
  regexGroup.style.alignItems = 'center';
  regexGroup.style.gap = '6px';
  regexGroup.style.flexShrink = '0';

  // Regex checkbox
  const regexCheckbox = document.createElement('input');
  regexCheckbox.type = 'checkbox';
  regexCheckbox.id = 'regex-toggle';
  regexCheckbox.checked = currentSettings.useRegex;
  regexCheckbox.style.flexShrink = '0';
  regexGroup.appendChild(regexCheckbox);

  const regexLabel = document.createElement('label');
  regexLabel.htmlFor = 'regex-toggle';
  regexLabel.textContent = 'Use Regex';
  
  // Responsive: smaller font on mobile, prevent wrapping
  setupResponsive(
    regexLabel,
    () => {
      regexLabel.style.fontSize = '14px';
    },
    () => {
      regexLabel.style.fontSize = '16px';
    }
  );
  
  // Prevent regex from wrapping
  regexLabel.style.whiteSpace = 'nowrap';
  regexLabel.style.flexShrink = '0';
  
  regexGroup.appendChild(regexLabel);
  leftSection.appendChild(regexGroup);
  searchLine.appendChild(leftSection);
  container.appendChild(searchLine);

  // Second line: Mobile only - Limit input and stats
  const limitLine = document.createElement('div');
  limitLine.id = 'limit-line';
  limitLine.style.display = 'flex';
  limitLine.style.alignItems = 'center';
  limitLine.style.gap = '10px';
  limitLine.style.justifyContent = 'space-between';
  
  // Responsive: show on mobile, hide on desktop
  setupResponsive(
    limitLine,
    () => {
      limitLine.style.display = 'flex';
    },
    () => {
      limitLine.style.display = 'none';
    }
  );

  // Limit input (mobile only)
  const limitLabelMobile = document.createElement('label');
  limitLabelMobile.textContent = 'Limit:';
  limitLabelMobile.style.fontWeight = 'bold';
  limitLabelMobile.style.fontSize = '14px';
  
  limitLine.appendChild(limitLabelMobile);

  const limitInputMobile = document.createElement('input');
  limitInputMobile.type = 'number';
  limitInputMobile.id = 'limit-input-mobile';
  limitInputMobile.min = '0';
  limitInputMobile.placeholder = 'all';
  limitInputMobile.value = currentSettings.limit > 0 ? currentSettings.limit.toString() : '';
  limitInputMobile.style.width = '60px';
  limitInputMobile.style.fontSize = '14px';
  limitInputMobile.style.padding = '5px 8px';
  limitInputMobile.style.border = '1px solid #ccc';
  limitInputMobile.style.borderRadius = '4px';
  
  // Sync mobile limit input with desktop limit input
  limitInputMobile.addEventListener('input', () => {
    limitInput.value = limitInputMobile.value;
    notifyChange();
  });
  
  limitInput.addEventListener('input', () => {
    limitInputMobile.value = limitInput.value;
  });
  
  limitLine.appendChild(limitInputMobile);
  container.appendChild(limitLine);
  
  // Search input container (for stats to be appended to later)
  const searchInputContainer = document.createElement('div');
  searchInputContainer.id = 'search-input-container';
  searchInputContainer.style.display = 'flex';
  searchInputContainer.style.flexDirection = 'column';
  searchInputContainer.style.gap = '10px';
  container.appendChild(searchInputContainer);

  // Function to notify parent of search changes
  const notifyChange = () => {
    // Get limit value from whichever input is visible
    const activeLimitInput = window.innerWidth < 768 ? limitInputMobile : limitInput;
    const limitValue = parseInt(activeLimitInput.value, 10);
    const settings: SearchSettings = {
      query: searchInput.value,
      useRegex: regexCheckbox.checked,
      filters: currentSettings.filters, // Preserve existing filters
      limit: isNaN(limitValue) || limitValue <= 0 ? 0 : limitValue,
    };
    onSearchChange(settings);
  };

  // Add event listeners
  limitInput.addEventListener('input', () => {
    limitInputMobile.value = limitInput.value;
    notifyChange();
  });
  limitInputMobile.addEventListener('input', () => {
    limitInput.value = limitInputMobile.value;
    notifyChange();
  });
  searchInput.addEventListener('input', notifyChange);
  regexCheckbox.addEventListener('change', notifyChange);
}
