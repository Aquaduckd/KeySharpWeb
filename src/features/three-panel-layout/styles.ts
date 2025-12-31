// Internal styling logic for the three-panel layout

import { setupResponsive } from '../../foundations/responsive';

export function applyLayoutStyles(container: HTMLElement): void {
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.height = '100vh';
  container.style.width = '100vw';
  container.style.margin = '0';
  container.style.padding = '0';
  container.style.overflow = 'hidden';
}

export function applyHeaderStyles(header: HTMLElement): void {
  header.style.flexShrink = '0';
  header.style.height = '60px';
  header.style.backgroundColor = '#f0f0f0';
  header.style.borderBottom = '1px solid #ccc';
  header.style.padding = '0 20px';
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  
  // Responsive: reduce padding on mobile
  setupResponsive(
    header,
    () => {
      header.style.padding = '0 10px';
    },
    () => {
      header.style.padding = '0 20px';
    }
  );
}

export function applyBottomAreaStyles(bottomArea: HTMLElement): void {
  bottomArea.style.display = 'flex';
  bottomArea.style.flexDirection = 'row';
  bottomArea.style.flex = '1';
  bottomArea.style.overflow = 'hidden';
  
  // Responsive: stack vertically on mobile
  setupResponsive(
    bottomArea,
    () => {
      bottomArea.style.flexDirection = 'column';
    },
    () => {
      bottomArea.style.flexDirection = 'row';
    }
  );
}

export function applyRightAreaStyles(rightArea: HTMLElement): void {
  rightArea.style.display = 'flex';
  rightArea.style.flexDirection = 'column';
  rightArea.style.flex = '1';
  rightArea.style.overflow = 'hidden';
}

export function applyLeftPanelStyles(leftPanel: HTMLElement): void {
  leftPanel.style.width = '250px';
  leftPanel.style.flexShrink = '0';
  leftPanel.style.backgroundColor = '#f5f5f5';
  leftPanel.style.borderRight = '1px solid #ccc';
  leftPanel.style.overflowY = 'auto';
  leftPanel.style.padding = '20px';
  
  // Responsive: hide on mobile, show on desktop
  setupResponsive(
    leftPanel,
    () => {
      leftPanel.style.display = 'none';
      leftPanel.style.width = '0';
      leftPanel.style.padding = '0';
    },
    () => {
      leftPanel.style.display = 'block';
      leftPanel.style.width = '250px';
      leftPanel.style.padding = '20px';
    }
  );
}

export function applyMainPanelStyles(mainPanel: HTMLElement): void {
  mainPanel.style.flex = '1';
  mainPanel.style.overflow = 'auto';
  mainPanel.style.padding = '0';
  mainPanel.style.backgroundColor = '#ffffff';
}

export function applyBottomPanelStyles(bottomPanel: HTMLElement): void {
  bottomPanel.style.flexShrink = '0';
  bottomPanel.style.height = '150px';
  bottomPanel.style.backgroundColor = '#f0f0f0';
  bottomPanel.style.borderTop = '1px solid #ccc';
  bottomPanel.style.padding = '20px';
  bottomPanel.style.overflowY = 'auto';
  
  // Responsive: hide on mobile, show on desktop
  setupResponsive(
    bottomPanel,
    () => {
      bottomPanel.style.display = 'none';
      bottomPanel.style.height = '0';
      bottomPanel.style.padding = '0';
    },
    () => {
      bottomPanel.style.display = 'block';
      bottomPanel.style.height = '150px';
      bottomPanel.style.padding = '20px';
    }
  );
}

