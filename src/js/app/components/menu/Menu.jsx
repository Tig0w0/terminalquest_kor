import React from 'react';
import sharedListener from '../../common/listener';
import { context, setContext } from '../../common/context';
import Help from './Help';
import Inventory from './inventory/Inventory';
import Journal from './Journal';
import Settings from './settings/Settings';

export default class Menu extends React.Component {
  static contextType = context;

  componentDidMount() {
    // Set up hotkey (exit only)
    // Set up hotkeys after component mounts
    sharedListener.simple_combo('esc', () => this.navigate(null));
  }

  // Helper to trigger a menu nav event on the state manager
  navigate(name) {
    setContext({ currentMenu: name ? { name } : null});
  }

  // Determine if the specified tab is currently open
  isActive(name) {
    return this.context.currentMenu && this.context.currentMenu.name === name;
  }

  // Render a tab link for the menu
  renderMenuTab(name, displayName) {
    return (
      <button
        className={this.isActive(name) ? 'selected' : 'pointer'}
        onClick={() => this.navigate(name)}
      >
        {displayName}
      </button>
    );
  }

  render() {
    if (!this.context.currentMenu) return null;

    return (
      <div className="Menu">
        <div className="frosty" onClick={() => this.navigate(null)} />
        <div className="menu-inner pa3">
          {this.isActive('inventory') && <Inventory />}
          {this.isActive('settings') && (
            <Settings
              subnav={this.context.currentMenu.subnav}
              env={this.context.env}
              {...this.context.settings}
            />
          )}
          {this.isActive('journal') && <Journal />}
          {this.isActive('help') && <Help />}

          <div className="menu-tabs">
            {this.renderMenuTab('inventory', '인벤토리')}
            {this.renderMenuTab('journal', '퀘스트 일지')}
            {this.renderMenuTab('settings', '설정')}
            {this.renderMenuTab('help', '도움말')}
          </div>

          <div
            className="menu-close pointer"
            onClick={() => this.navigate(null)}
          >
            <img src="images/app/menu/close.png" alt="메뉴 닫기" />
          </div>
        </div>
      </div>
    );
  }
}
