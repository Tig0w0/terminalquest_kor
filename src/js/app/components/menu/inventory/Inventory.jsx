import React from 'react';
import PropTypes from 'prop-types';
import ga from '../../../common/analytics';
import CharacterDiagram from './CharacterDiagram';
import ItemBrowser from './ItemBrowser';

export default class Inventory extends React.Component {
  componentDidMount() {
    ga.pageview('/menu/inventory', 'Inventory Screen');
  }

  render() {
    return (
      <div className="inventory-menu flex flex-column h-100">
        <div className="flex-auto flex">
          <CharacterDiagram />
          <ItemBrowser />
        </div>
        <div className="tc pt2">
          아이템을 장착하려면 <strong>드래그 앤 드롭</strong>하거나
          &nbsp;<strong>더블 클릭</strong>하세요.
        </div>
      </div>
    );
  }
}
