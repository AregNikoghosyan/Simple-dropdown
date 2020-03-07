import React from 'react';

export default class ClickOutside extends React.Component {

  // static propTypes = {
  //   onClickOutside: PropTypes.func.isRequired
  // };

  container;

  getContainer = (ref) => {
    this.container = ref;
  }

  handle = (e) => {
    const { onClickOutside } = this.props;
    const CONTAINER = this.container;
    if (!CONTAINER.contains(e.target)) { onClickOutside(e); }
  }

  render() {
    // eslint-disable-next-line
    const { children, onClickOutside, ...props } = this.props;
    return <div className="S-click-outside" {...props} ref={this.getContainer}>{children}</div>;
  }

  componentDidMount() {
    document.addEventListener('click', this.handle, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handle, true);
  }
}


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
      <div className="ABM-drop-down">
        <ClickOutside onClickOutside={this.closeDropDown}>
          <div className="ABM-drop-down-component">
            <div className="ABM-drop-down-title" onClick={this.toggleDropDown}>
              <p className={!selectedItem ? '' : 'placeholder'}>{(selectedItem && selectedItem.name) || placeholder}</p>
              <span className={`icon-down ${isOpen ? 'icon-arrow_up_1' : 'icon-arrow_down_1'}`} />
            </div>
            <div className={`ABM-drop-down-options ${isOpen ? '' : 'ABM-dropdown-hide'}`} style={{ height: `${this.state.height}px` }}>
              {list.map((item) =>
                <div className={`ABM-drop-down-option ${this.checkIsSelected(item) ? 'selected' : ''}`} key={item.value} onClick={() => this.onSelect(item)}>{item.name}</div>
              )}
            </div>
          </div>
        </ClickOutside>
      </div>
    );
  }
}

export default DropDown;