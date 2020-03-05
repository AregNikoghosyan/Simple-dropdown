import React        from 'react';
import ClickOutside from './ClickOutside';

class DropDown extends React.Component {

  state = {
    isOpen       : false,
    height       : 0,
    selectedItem : null
  }

  onSelect = item => {
    this.setState({ selectedItem : item });
    this.props.onSelect(item.value);
    this.closeDropDown();
  }

  toggleDropDown = () => {
    if (this.state.isOpen) this.closeDropDown();
    else this.openDropDown();
  }

  openDropDown = () => {
    this.setState({
      isOpen : true,
      height : (this.props.list.length * 35) + 10
    });
  }

  closeDropDown = () => {
    this.setState({
      isOpen : false,
      height : 0
    });
  }

  checkIsSelected = item => !!((this.state.selectedItem && this.state.selectedItem.value) === item.value);

  render() {
    const { list, placeholder } = this.props;
    const { selectedItem, isOpen } = this.state;
    return (
      <div className="S-drop-down">
        <ClickOutside onClickOutside={this.closeDropDown}>
          <div className="S-drop-down-component">
            <div className="S-drop-down-title" onClick={this.toggleDropDown}>
              <p className={!selectedItem ? '' : 'placeholder'}>{(selectedItem && selectedItem.name) || placeholder}</p>
              <span className={`icon-down ${isOpen ? 'icon-arrow_up_1' : 'icon-arrow_down_1'}`} />
            </div>
            <div className={`S-drop-down-options ${isOpen ? '' : 'S-dropdown-hide'}`} style={{ height: `${this.state.height}px` }}>
              {list.map((item) =>
                <div className={`S-drop-down-option ${this.checkIsSelected(item) ? 'selected' : ''}`} key={item.value} onClick={() => this.onSelect(item)}>{item.name}</div>
              )}
            </div>
          </div>
        </ClickOutside>
      </div>
    );
  }
}

export default DropDown;